import type { GridModel, ReplicaSelectionModel, CrdtId } from '../DataGridTypes'

export interface GridSelectionRange {
  minRow: number
  maxRow: number
  /** undefined means all columns are selected */
  columnNames: Set<string> | undefined
}

/**
 * Convert a flat array of CrdtIds to a Set of array indices by walking the
 * arr node's chunks.
 */
function crdtIdsToIndices(
  arrApi: ReturnType<GridModel['api']['arr']>,
  ids: CrdtId[],
): Set<number> {
  const result = new Set<number>()
  if (ids.length === 0) return result

  // Build a lookup set for O(1) membership test
  const lookup = new Set(ids.map(id => `${id.rep}:${id.seq}`))

  let idx = 0
  for (const chunk of arrApi.node.chunks()) {
    if (chunk.del) continue
    for (let offset = 0; offset < chunk.span; offset++) {
      const key = `${chunk.id.sid}:${chunk.id.time + offset}`
      if (lookup.has(key)) result.add(idx + offset)
    }
    idx += chunk.span
  }
  return result
}

/**
 * Converts a stored ReplicaSelectionModel (CRDT-stable IDs) back into a
 * plain grid selection range that can be used for cell class computation.
 *
 * This is the inverse of getCrdtIdsForArrayRange in computeReplicaSelectionModel.
 */
export function replicaSelectionToGridSelection(
  selection: ReplicaSelectionModel,
  model: GridModel,
): GridSelectionRange | null {
  if (!selection) return null

  const snapshot = model.api.getSnapshot()
  const numRows = snapshot.rows.length
  const numCols = snapshot.columnNames.length

  if (numRows < 1 || numCols < 1) return null

  // ── Row range ────────────────────────────────────────────────────────────
  let minRow = 0
  let maxRow = numRows - 1

  if (!selection.rowSelectAll) {
    const rowIds = selection.rowSelection
    if (!rowIds || rowIds.length === 0) return null

    const rowIndexSet = crdtIdsToIndices(model.api.arr(['rows']), rowIds)
    if (rowIndexSet.size === 0) return null
    minRow = [...rowIndexSet].reduce((a, b) => Math.min(a, b))
    maxRow = [...rowIndexSet].reduce((a, b) => Math.max(a, b))
  }

  // ── Column range ─────────────────────────────────────────────────────────
  let columnNames: Set<string> | undefined = undefined // undefined = all columns

  if (!selection.columnSelectAll) {
    const colIds = selection.columnSelection
    if (!colIds || colIds.length === 0) return null

    const colIndexSet = crdtIdsToIndices(model.api.arr(['columnOrder']), colIds)
    if (colIndexSet.size === 0) return null
    columnNames = new Set(
      [...colIndexSet]
        .map(colIdx => snapshot.columnNames[snapshot.columnOrder[colIdx]])
        .filter((name): name is string => name !== undefined),
    )
  }

  return { minRow, maxRow, columnNames }
}
