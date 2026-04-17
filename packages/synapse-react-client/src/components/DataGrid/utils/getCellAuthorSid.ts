import type { GridModel } from '@/components/DataGrid/DataGridTypes'

/**
 * Returns the sid (replica ID) of the last writer for a given cell in the CRDT
 * model, or null if the cell is unreachable (e.g. out-of-bounds row/column).
 */
export function getCellAuthorSid(
  model: GridModel,
  rowIndex: number,
  colIndex: number,
): number | null {
  try {
    return model.api.vec(['rows', String(rowIndex), 'data']).get(colIndex).node
      .id.sid
  } catch {
    return null
  }
}
