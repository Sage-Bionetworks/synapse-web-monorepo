import type { GridReplicaInfo } from '@sage-bionetworks/synapse-client'

/**
 * Categories used for attributing cell changes and coloring indicators.
 * SERVICE replica changes are excluded entirely.
 */
export type ReplicaCategory =
  | 'self' // this client's own replica
  | 'own-agent' // an AGENT replica created by this user
  | 'other-user' // a USER replica created by another user
  | 'other-agent' // an AGENT replica created by another user

/**
 * Classify a replica relative to the current user.
 * Returns null for SERVICE replicas, which should be ignored for attribution.
 */
export function getReplicaCategory(
  replica: GridReplicaInfo,
  currentUserId: string,
  localReplicaId: number,
): ReplicaCategory | null {
  const { replicaType, createdBy, replicaId } = replica

  if (replicaType === 'SERVICE') {
    return null
  }

  if (replicaId === localReplicaId) {
    return 'self'
  }

  const isOwnUser = createdBy === currentUserId

  if (replicaType === 'AGENT') {
    return isOwnUser ? 'own-agent' : 'other-agent'
  }

  // USER
  return isOwnUser ? 'self' : 'other-user'
}
