import { describe, it, expect } from 'vitest'
import type { GridReplicaInfo } from '@sage-bionetworks/synapse-client'
import { getReplicaCategory } from './getReplicaCategory'

describe('getReplicaCategory', () => {
  const currentUserId = 'user-123'
  const localReplicaId = 100

  it('returns null for a SERVICE replica', () => {
    const replica: GridReplicaInfo = {
      replicaId: 999,
      replicaType: 'SERVICE',
      createdBy: 'service-user',
    }
    expect(
      getReplicaCategory(replica, currentUserId, localReplicaId),
    ).toBeNull()
  })

  it("returns 'self' when the replicaId matches localReplicaId", () => {
    const replica: GridReplicaInfo = {
      replicaId: localReplicaId,
      replicaType: 'USER',
      createdBy: currentUserId,
    }
    expect(getReplicaCategory(replica, currentUserId, localReplicaId)).toBe(
      'self',
    )
  })

  it("returns 'self' for a USER replica owned by currentUserId but with a different replicaId (e.g. another browser tab)", () => {
    const replica: GridReplicaInfo = {
      replicaId: 200,
      replicaType: 'USER',
      createdBy: currentUserId,
    }
    expect(getReplicaCategory(replica, currentUserId, localReplicaId)).toBe(
      'self',
    )
  })

  it("returns 'other-user' for a USER replica created by a different user", () => {
    const replica: GridReplicaInfo = {
      replicaId: 300,
      replicaType: 'USER',
      createdBy: 'other-user-456',
    }
    expect(getReplicaCategory(replica, currentUserId, localReplicaId)).toBe(
      'other-user',
    )
  })

  it("returns 'own-agent' for an AGENT replica created by the current user", () => {
    const replica: GridReplicaInfo = {
      replicaId: 400,
      replicaType: 'AGENT',
      createdBy: currentUserId,
    }
    expect(getReplicaCategory(replica, currentUserId, localReplicaId)).toBe(
      'own-agent',
    )
  })

  it("returns 'other-agent' for an AGENT replica created by a different user", () => {
    const replica: GridReplicaInfo = {
      replicaId: 500,
      replicaType: 'AGENT',
      createdBy: 'other-user-456',
    }
    expect(getReplicaCategory(replica, currentUserId, localReplicaId)).toBe(
      'other-agent',
    )
  })
})
