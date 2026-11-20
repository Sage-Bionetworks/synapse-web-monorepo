import {
  CellChangeInfo,
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import type { ReplicaUserInfo } from '@/components/DataGrid/hooks/useGridReplicaUsers'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import type { ITimestampStruct } from 'json-joy'
import type { JsonNode, VecNode } from 'json-joy/lib/json-crdt'
import {
  GRID_ROW_REACT_KEY_PROPERTY,
  reuseIfSameElements,
} from './DataGridUtils'
import logicalTimestampToString from '@/components/DataGrid/utils/logicalTimestampToString'
import { extractColumnValidationMessages } from './extractColumnValidationMessages'
import { getChangeTooltipText } from './getChangeTooltipText'
import {
  getRowDataNode,
  getRowNodes,
  getRowValidationNode,
} from './gridRowNodes'

type SnapshotRow = GridModelSnapshot['rows'][number]

type ReplicaUserMap = ReadonlyMap<number, ReplicaUserInfo>

type NamedColumn = { colArrayIndex: number; columnName: string }

type AddCellChangeInfo = (
  gridRow: DataGridRow,
  dataNode: VecNode | undefined,
) => DataGridRow

type CachedGridRow = {
  snapshotRow: SnapshotRow
  columnNames: GridModelSnapshot['columnNames']
  columnOrder: GridModelSnapshot['columnOrder']
  validationId: ITimestampStruct | undefined
  cellIds: (ITimestampStruct | undefined)[]
  /** The row without change info, kept so a change of replicas adds change info to it again instead of rebuilding it */
  gridRow: DataGridRow
  replicaUserMap: ReplicaUserMap
  rowWithChangeInfo: DataGridRow
}

/** The rows built by earlier calls to {@link modelRowsToGrid}, kept so they can be reused. */
export type GridRowCache = {
  byRowNode: WeakMap<JsonNode, CachedGridRow>
  gridRows?: DataGridRow[]
}

export function createGridRowCache(): GridRowCache {
  return { byRowNode: new WeakMap() }
}

/**
 * Convert model rows to a format suitable for DataSheetGrid
 *
 * A row gets a `__cellChangeInfo` map with the change category and tooltip text of every cell whose last author is in
 * `replicaUserMap`. Cells last written by the same replica share one `CellChangeInfo` object. A row with no such cell
 * has no `__cellChangeInfo`.
 *
 * Pass the same `cache` on every call for a grid. A row whose values, validation, and cell CRDT ids are unchanged since
 * the previous call, with the same `replicaUserMap`, is returned as the same object, and the returned array is the
 * previous one if every row is reused. Writing a cell gives its row a new object even when the value written equals the
 * old one, because the write changes the cell's author and makes the row's validation pending.
 * @param model
 * @param modelSnapshot
 * @param replicaUserMap the known replicas, by replica id
 * @param cache
 */
export default function modelRowsToGrid(
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot,
  replicaUserMap: ReplicaUserMap,
  cache: GridRowCache = createGridRowCache(),
): DataGridRow[] {
  if (!model || !modelSnapshot) return []
  const { columnNames, columnOrder, rows } = modelSnapshot
  const addCellChangeInfo = createAddCellChangeInfo(
    replicaUserMap,
    columnNames,
    columnOrder,
  )
  const rowNodes = getRowNodes(model)
  const gridRows = rows.map((snapshotRow, rowIndex): DataGridRow => {
    const rowNode = rowNodes[rowIndex]
    const dataNode = getRowDataNode(rowNode)
    const validationId = getRowValidationNode(rowNode)?.id
    const cached = cache.byRowNode.get(rowNode)
    if (
      cached?.snapshotRow === snapshotRow &&
      cached.columnNames === columnNames &&
      cached.columnOrder === columnOrder &&
      cached.validationId === validationId &&
      cellIdsMatch(cached.cellIds, dataNode)
    ) {
      if (cached.replicaUserMap !== replicaUserMap) {
        cached.replicaUserMap = replicaUserMap
        cached.rowWithChangeInfo = addCellChangeInfo(cached.gridRow, dataNode)
      }
      return cached.rowWithChangeInfo
    }

    const gridRow = buildGridRow(snapshotRow, rowNode, columnNames, columnOrder)
    const rowWithChangeInfo = addCellChangeInfo(gridRow, dataNode)
    cache.byRowNode.set(rowNode, {
      snapshotRow,
      columnNames,
      columnOrder,
      validationId,
      cellIds: readCellIds(dataNode),
      gridRow,
      replicaUserMap,
      rowWithChangeInfo,
    })
    return rowWithChangeInfo
  })
  cache.gridRows = reuseIfSameElements(cache.gridRows, gridRows)
  return cache.gridRows
}

function buildGridRow(
  row: SnapshotRow,
  rowNode: JsonNode,
  columnNames: GridModelSnapshot['columnNames'],
  columnOrder: GridModelSnapshot['columnOrder'],
): DataGridRow {
  const rowObj: DataGridRow = {}
  columnOrder.forEach((index: number) => {
    const columnName = columnNames[index]
    if (columnName) {
      rowObj[columnName] = row.data[index]
    }
  })

  // Embed the logical timestamp as a string for use as the React key (a stable value unique to each row)
  rowObj[GRID_ROW_REACT_KEY_PROPERTY] = logicalTimestampToString(rowNode.id)

  rowObj.__validationResults = row.metadata?.rowValidation
  if (rowObj.__validationResults) {
    rowObj.__validationStatus = rowObj.__validationResults?.isValid
      ? 'valid'
      : 'invalid'
  }

  if (!isValidationUpToDateForRow(rowNode)) {
    rowObj.__validationStatus = 'pending'
  }

  // Parse the validation messages into a Map of column name to messages
  if (rowObj.__validationResults?.allValidationMessages) {
    rowObj.__cellValidationResults = extractColumnValidationMessages(
      rowObj.__validationResults.allValidationMessages,
    )
  }

  return rowObj
}

/**
 * Returns a function that adds `__cellChangeInfo` to a row for the cells of `dataNode` whose last author is in
 * `replicaUserMap`. A row with no such cell is returned by reference.
 */
function createAddCellChangeInfo(
  replicaUserMap: ReplicaUserMap,
  columnNames: GridModelSnapshot['columnNames'],
  columnOrder: GridModelSnapshot['columnOrder'],
): AddCellChangeInfo {
  if (replicaUserMap.size === 0) return gridRow => gridRow

  const changeInfoBySid = new Map<number, CellChangeInfo>()
  replicaUserMap.forEach((info, sid) => {
    changeInfoBySid.set(sid, {
      category: info.category,
      tooltipText: getChangeTooltipText(info),
    })
  })

  const namedColumns = columnOrder.flatMap(
    (colArrayIndex: number): NamedColumn[] => {
      const columnName = columnNames[colArrayIndex]
      return columnName ? [{ colArrayIndex, columnName }] : []
    },
  )

  return (gridRow, dataNode) => {
    if (!dataNode) return gridRow

    let cellChangeInfo: Record<string, CellChangeInfo> | undefined
    for (const { colArrayIndex, columnName } of namedColumns) {
      // A vector slot's element id is the id of the node last written there,
      // so its sid is the replica that last changed the cell.
      const authorSid = dataNode.val(colArrayIndex)?.sid
      if (authorSid === undefined) continue

      const info = changeInfoBySid.get(authorSid)
      if (!info) continue

      cellChangeInfo ??= {}
      cellChangeInfo[columnName] = info
    }

    return cellChangeInfo
      ? { ...gridRow, __cellChangeInfo: cellChangeInfo }
      : gridRow
  }
}

function readCellIds(
  dataNode: VecNode | undefined,
): (ITimestampStruct | undefined)[] {
  const length = dataNode?.length() ?? 0
  const cellIds = new Array<ITimestampStruct | undefined>(length)
  for (let i = 0; i < length; i++) {
    cellIds[i] = dataNode?.val(i)
  }
  return cellIds
}

function cellIdsMatch(
  cellIds: (ITimestampStruct | undefined)[],
  dataNode: VecNode | undefined,
): boolean {
  if (cellIds.length !== (dataNode?.length() ?? 0)) return false
  // A write replaces the id in its slot, so comparing ids by reference detects every write, including one that leaves the
  // value unchanged.
  for (let i = 0; i < cellIds.length; i++) {
    if (dataNode?.val(i) !== cellIds[i]) return false
  }
  return true
}
