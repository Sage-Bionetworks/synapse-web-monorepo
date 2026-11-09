import type {
  CellChangeInfo,
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '../DataGridTypes'
import type { VecNode } from 'json-joy/lib/json-crdt'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import { reuseIfSameElements } from './DataGridUtils'
import { getChangeTooltipText } from './getChangeTooltipText'
import { getRowDataNode, getRowNodes } from './gridRowNodes'

type NamedColumn = { colArrayIndex: number; columnName: string }

type CachedEnrichedRow = {
  replicaUserMap: ReadonlyMap<number, ReplicaUserInfo>
  enrichedRow: DataGridRow
}

/** The rows enriched by earlier calls to {@link enrichRowsWithChangeInfo}, kept so they can be reused. */
export type ChangeInfoCache = {
  byRow: WeakMap<DataGridRow, CachedEnrichedRow>
  enrichedRows?: DataGridRow[]
}

export function createChangeInfoCache(): ChangeInfoCache {
  return { byRow: new WeakMap() }
}

/**
 * Enriches each row in `rows` with a `__cellChangeInfo` map that records the
 * change category and tooltip text for every cell whose last author is present
 * in `replicaUserMap`. Cells last written by the same replica share one
 * `CellChangeInfo` object.
 *
 * Short-circuits (returning the original array reference) when the model or
 * snapshot is absent, or when no replica attribution data is available yet.
 * Rows with no attributed cells are returned by reference to preserve React
 * referential equality.
 *
 * Pass the same `cache` on every call for a grid. A row object enriched by an
 * earlier call with the same `replicaUserMap` is returned as it was enriched
 * then, and the returned array is the previous one if every row is reused.
 * This relies on `rows` coming from `modelRowsToGrid` called with its own
 * cache, which gives a row a new object whenever one of its cells is written.
 */
export function enrichRowsWithChangeInfo(
  rows: DataGridRow[],
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot | null,
  replicaUserMap: ReadonlyMap<number, ReplicaUserInfo>,
  cache: ChangeInfoCache = createChangeInfoCache(),
): DataGridRow[] {
  if (!model || !modelSnapshot || replicaUserMap.size === 0) return rows

  const changeInfoBySid = new Map<number, CellChangeInfo>()
  replicaUserMap.forEach((info, sid) => {
    changeInfoBySid.set(sid, {
      category: info.category,
      tooltipText: getChangeTooltipText(info),
    })
  })

  const { columnNames, columnOrder } = modelSnapshot
  const namedColumns = columnOrder.flatMap(
    (colArrayIndex: number): NamedColumn[] => {
      const columnName = columnNames[colArrayIndex]
      return columnName ? [{ colArrayIndex, columnName }] : []
    },
  )

  const rowNodes = getRowNodes(model)
  const enrichedRows = rows.map((row, rowIndex) => {
    const cached = cache.byRow.get(row)
    if (cached?.replicaUserMap === replicaUserMap) return cached.enrichedRow

    // A row that is not in the model (e.g. out of bounds) has no authors
    const rowData = getRowDataNode(rowNodes[rowIndex])
    const enrichedRow = rowData
      ? enrichRow(row, rowData, namedColumns, changeInfoBySid)
      : row
    cache.byRow.set(row, { replicaUserMap, enrichedRow })
    return enrichedRow
  })
  cache.enrichedRows = reuseIfSameElements(cache.enrichedRows, enrichedRows)
  return cache.enrichedRows
}

function enrichRow(
  row: DataGridRow,
  rowData: VecNode,
  namedColumns: NamedColumn[],
  changeInfoBySid: ReadonlyMap<number, CellChangeInfo>,
): DataGridRow {
  let cellChangeInfo: Record<string, CellChangeInfo> | undefined
  for (const { colArrayIndex, columnName } of namedColumns) {
    // A vector slot's element id is the id of the node last written there,
    // so its sid is the replica that last changed the cell.
    const authorSid = rowData.val(colArrayIndex)?.sid
    if (authorSid === undefined) continue

    const info = changeInfoBySid.get(authorSid)
    if (!info) continue

    cellChangeInfo ??= {}
    cellChangeInfo[columnName] = info
  }

  return cellChangeInfo ? { ...row, __cellChangeInfo: cellChangeInfo } : row
}
