import type {
  CellChangeInfo,
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '../DataGridTypes'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import { getCellAuthorSid } from './getCellAuthorSid'
import { getChangeTooltipText } from './getChangeTooltipText'

/**
 * Enriches each row in `rows` with a `__cellChangeInfo` map that records the
 * change category and tooltip text for every cell whose last author is present
 * in `replicaUserMap`.
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

  const { columnNames, columnOrder } = modelSnapshot

  return rows.map((row, rowIndex) => {
    const cellChangeInfo: Record<string, CellChangeInfo> = {}

    columnOrder.forEach((colArrayIndex: number) => {
      const columnName = columnNames[colArrayIndex]
      if (!columnName) return

      const sid = getCellAuthorSid(model, rowIndex, colArrayIndex)
      if (sid === null) return

      const info = replicaUserMap.get(sid)
      if (!info) return

      cellChangeInfo[columnName] = {
        category: info.category,
        tooltipText: getChangeTooltipText(info),
      }
    })

    return Object.keys(cellChangeInfo).length > 0
      ? { ...row, __cellChangeInfo: cellChangeInfo }
      : row
  })
}
