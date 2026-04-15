import { useSynapseContext } from '@/utils/context/SynapseContext'
import { useQueries } from '@tanstack/react-query'
import {
  getReplicaCategory,
  type ReplicaCategory,
} from '@/components/DataGrid/utils/getReplicaCategory'
import type { GridReplicaInfo } from '@sage-bionetworks/synapse-client'
import type { UserProfile } from '@sage-bionetworks/synapse-types'
import { getUserProfileQuery } from '@/synapse-queries/user/useUserBundle'
import { useMemo } from 'react'

export interface ReplicaUserInfo {
  replicaInfo: GridReplicaInfo
  category: ReplicaCategory
  profile: UserProfile | undefined
}

/**
 * Given the list of replicas in the current session and the local replica ID,
 * fetches user profiles for each non-SERVICE replica and returns a map from
 * replicaId → ReplicaUserInfo for use in attribution and coloring.
 */
export function useGridReplicaUsers(
  replicas: GridReplicaInfo[],
  localReplicaId: number | null,
  currentUserId: string | undefined,
): Map<number, ReplicaUserInfo> {
  const { accessToken, keyFactory } = useSynapseContext()

  // Only query non-SERVICE replicas (SERVICE replicas are ignored for attribution)
  const attributableReplicas = useMemo(
    () => replicas.filter(r => r.replicaType !== 'SERVICE'),
    [replicas],
  )

  // Deduplicate user IDs so we only fetch each profile once
  const uniqueUserIds = useMemo(
    () => [
      ...new Set(
        attributableReplicas.map(r => r.createdBy).filter(Boolean) as string[],
      ),
    ],
    [attributableReplicas],
  )

  const profileQueries = useQueries({
    queries: uniqueUserIds.map(userId => ({
      ...getUserProfileQuery(userId, { accessToken, keyFactory }),
      staleTime: 5 * 60 * 1000, // profiles are stable within a session
    })),
  })

  // Stable cache key: only changes when a query's data actually updates
  const profileDataKey = profileQueries.map(q => `${q.dataUpdatedAt}`).join(',')

  return useMemo(() => {
    // Build userId → profile map from query results
    const profileByUserId = new Map<string, UserProfile>()
    uniqueUserIds.forEach((userId, i) => {
      const data = profileQueries[i]?.data
      if (data) profileByUserId.set(userId, data)
    })

    const result = new Map<number, ReplicaUserInfo>()
    for (const replica of attributableReplicas) {
      if (replica.replicaId == null) continue
      const category =
        localReplicaId != null && currentUserId != null
          ? getReplicaCategory(replica, currentUserId, localReplicaId)
          : null
      if (category === null) continue
      result.set(replica.replicaId, {
        replicaInfo: replica,
        category,
        profile: replica.createdBy
          ? profileByUserId.get(replica.createdBy)
          : undefined,
      })
    }
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    attributableReplicas,
    uniqueUserIds,
    profileDataKey,
    localReplicaId,
    currentUserId,
  ])
}
