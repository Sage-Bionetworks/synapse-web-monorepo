import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import type { ITimestampStruct } from 'json-joy'
import type { JsonNode, VecNode } from 'json-joy/lib/json-crdt'
import {
  GRID_ROW_REACT_KEY_PROPERTY,
  reuseIfSameElements,
} from './DataGridUtils'
import logicalTimestampToString from '@/components/DataGrid/utils/logicalTimestampToString'
import { extractColumnValidationMessages } from './extractColumnValidationMessages'
import {
  getRowDataNode,
  getRowNodes,
  getRowValidationNode,
} from './gridRowNodes'

type SnapshotRow = GridModelSnapshot['rows'][number]

type CachedGridRow = {
  snapshotRow: SnapshotRow
  columnNames: GridModelSnapshot['columnNames']
  columnOrder: GridModelSnapshot['columnOrder']
  validationId: ITimestampStruct | undefined
  cellIds: (ITimestampStruct | undefined)[]
  gridRow: DataGridRow
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
 * Pass the same `cache` on every call for a grid. A row whose values, validation, and cell CRDT ids are unchanged since
 * the previous call is returned as the same object, and the returned array is the previous one if every row is reused.
 * Writing a cell gives its row a new object even when the value written equals the old one, because the write changes
 * the cell's author and makes the row's validation pending.
 * @param model
 * @param modelSnapshot
 * @param cache
 */
export default function modelRowsToGrid(
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot,
  cache: GridRowCache = createGridRowCache(),
): DataGridRow[] {
  if (!model || !modelSnapshot) return []
  const { columnNames, columnOrder, rows } = modelSnapshot
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
      return cached.gridRow
    }

    const gridRow = buildGridRow(snapshotRow, rowNode, columnNames, columnOrder)
    cache.byRowNode.set(rowNode, {
      snapshotRow,
      columnNames,
      columnOrder,
      validationId,
      cellIds: readCellIds(dataNode),
      gridRow,
    })
    return gridRow
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
