import type {
  CellChangeInfo,
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '../DataGridTypes'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import { getChangeTooltipText } from './getChangeTooltipText'

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
 */
export function enrichRowsWithChangeInfo(
  rows: DataGridRow[],
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot | null,
  replicaUserMap: ReadonlyMap<number, ReplicaUserInfo>,
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
  const namedColumns = columnOrder.flatMap((colArrayIndex: number) => {
    const columnName = columnNames[colArrayIndex]
    return columnName ? [{ colArrayIndex, columnName }] : []
  })

  return rows.map((row, rowIndex) => {
    const rowData = getRowDataNode(model, rowIndex)
    if (!rowData) return row

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
  })
}

function getRowDataNode(model: GridModel, rowIndex: number) {
  try {
    return model.api.vec(['rows', String(rowIndex), 'data']).node
  } catch {
    // The row is not in the model (e.g. out of bounds), so it has no authors
    return null
  }
}
