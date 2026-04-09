import { useMemo } from 'react'
import type { GridModel, ReplicaSelectionModel } from '../DataGridTypes'
import type { GridReplicaInfo } from '@sage-bionetworks/synapse-client'
import {
  replicaSelectionToGridSelection,
  type GridSelectionRange,
} from '../utils/replicaSelectionToGridSelection'

export interface RemoteSelection {
  replicaId: number
  range: GridSelectionRange
  /** 0-7 color index, derived from replicaId for a stable per-session color. */
  colorIndex: number
}

/**
 * Derives remote replica selection ranges from the CRDT model's selection map.
 * The server mirrors each replica's selection into the model under
 * `snapshot.selection[replicaId]`, so no extra API calls are needed.
 */
export function useRemoteSelections(
  modelSnapshot: ReturnType<GridModel['api']['getSnapshot']> | null | undefined,
  model: GridModel | null | undefined,
  replicas: GridReplicaInfo[],
  localReplicaId: number | null,
): RemoteSelection[] {
  return useMemo(() => {
    if (!modelSnapshot || !model) return []

    const selectionMap = modelSnapshot.selection as Record<
      string,
      ReplicaSelectionModel
    >
    if (!selectionMap) return []

    const results: RemoteSelection[] = []

    for (const replica of replicas) {
      const rid = replica.replicaId
      if (rid == null || rid === localReplicaId) continue
      if (!replica.isConnected) continue
      if (replica.replicaType === 'SERVICE') continue

      const selectionModel = selectionMap[String(rid)]
      if (!selectionModel) continue

      try {
        const range = replicaSelectionToGridSelection(selectionModel, model)
        if (range) {
          results.push({
            replicaId: rid,
            range,
            colorIndex: rid % 8,
          })
        }
      } catch {
        // Ignore stale/malformed selection data for a replica
      }
    }

    return results
  }, [modelSnapshot, model, replicas, localReplicaId])
}
