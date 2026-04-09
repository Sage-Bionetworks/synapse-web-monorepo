import { useCallback, useRef, useState } from 'react'
import type { CellChangeInfo } from '@/components/DataGrid/DataGridWebSocket'

/** Map key encoding a specific cell position. */
export function cellChangeKey(rowIndex: number, colName: string): string {
  return `${rowIndex}:${colName}`
}

/**
 * Tracks which cells have been changed since joining the session and by which
 * replica (identified by sid / replicaId).
 *
 * - Last-writer-wins per cell: if a cell is changed by multiple replicas, the
 *   most recent change is tracked.
 * - If the author sid belongs to a SERVICE replica, pass `isService: true` and
 *   the existing indicator for each affected cell will be cleared rather than set.
 * - The map is keyed by `"rowIndex:colName"` and holds the authorSid (replicaId).
 */
export function useCellChangeTracker() {
  // Use a ref for the mutable map and useState to expose a new Map reference
  // on each update. Returning a new reference is necessary so that useCallback
  // dependency checks in consumers (e.g. DataGrid) detect the change and
  // recreate the cell-class callback, triggering a re-render of the grid.
  const cellChangesRef = useRef<Map<string, number>>(new Map())
  const [cellChanges, setCellChanges] = useState<ReadonlyMap<string, number>>(
    cellChangesRef.current,
  )

  const recordChanges = useCallback(
    (authorSid: number, changes: CellChangeInfo[], isService: boolean) => {
      if (changes.length === 0) return
      const map = cellChangesRef.current
      for (const { rowIndex, colName } of changes) {
        const key = cellChangeKey(rowIndex, colName)
        if (isService) {
          // SERVICE changes clear any existing indicator for the cell
          map.delete(key)
        } else {
          map.set(key, authorSid)
        }
      }
      // Shallow-copy to produce a new Map reference so dependents re-render
      setCellChanges(new Map(map))
    },
    [],
  )

  const clearChanges = useCallback(() => {
    cellChangesRef.current.clear()
    setCellChanges(new Map())
  }, [])

  return {
    cellChanges,
    recordChanges,
    clearChanges,
  }
}
