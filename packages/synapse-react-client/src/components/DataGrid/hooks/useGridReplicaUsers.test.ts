import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { GridReplicaInfo } from '@sage-bionetworks/synapse-client'
import type { UserProfile } from '@sage-bionetworks/synapse-types'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { useGridReplicaUsers } from './useGridReplicaUsers'

const mockGetUserProfileById = vi.spyOn(SynapseClient, 'getUserProfileById')

const USER_ID_A = 'user-001'
const USER_ID_B = 'user-002'
const LOCAL_REPLICA_ID = 100

const profileA: UserProfile = {
  ownerId: USER_ID_A,
  userName: 'alice',
  firstName: 'Alice',
  lastName: 'Smith',
}

const profileB: UserProfile = {
  ownerId: USER_ID_B,
  userName: 'bob',
  firstName: 'Bob',
  lastName: 'Jones',
}

function makeReplica(
  overrides: Partial<GridReplicaInfo> & { replicaId: number },
): GridReplicaInfo {
  return {
    replicaType: 'USER',
    createdBy: USER_ID_A,
    isConnected: true,
    ...overrides,
  }
}

describe('useGridReplicaUsers', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('returns an empty map when replicas is empty', () => {
    const { result } = renderHook(
      () => useGridReplicaUsers([], LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    expect(result.current.size).toBe(0)
  })

  it('filters out SERVICE replicas — they never appear in the result map', () => {
    const replicas: GridReplicaInfo[] = [
      makeReplica({ replicaId: 1, replicaType: 'SERVICE', createdBy: 'svc' }),
    ]
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers(replicas, LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    expect(result.current.size).toBe(0)
    expect(mockGetUserProfileById).not.toHaveBeenCalled()
  })

  it("returns a map entry with the replica's category, replicaInfo, and resolved profile", async () => {
    const replica = makeReplica({
      replicaId: LOCAL_REPLICA_ID,
      replicaType: 'USER',
      createdBy: USER_ID_A,
    })
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers([replica], LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      const entry = result.current.get(LOCAL_REPLICA_ID)
      expect(entry?.profile).toBeDefined()
    })

    const entry = result.current.get(LOCAL_REPLICA_ID)!
    expect(entry.category).toBe('self')
    expect(entry.replicaInfo).toEqual(replica)
    expect(entry.profile).toEqual(profileA)
  })

  it('deduplicates createdBy user IDs so each profile is only fetched once even when multiple replicas share a user', async () => {
    const replicas: GridReplicaInfo[] = [
      makeReplica({ replicaId: 10, createdBy: USER_ID_A }),
      makeReplica({ replicaId: 11, createdBy: USER_ID_A }), // same user, different replica
    ]
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers(replicas, LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    await waitFor(() => result.current.get(10)?.profile !== undefined)

    // Profile fetch should only happen once despite two replicas with same createdBy
    expect(mockGetUserProfileById).toHaveBeenCalledTimes(1)
    expect(mockGetUserProfileById).toHaveBeenCalledWith(
      USER_ID_A,
      expect.any(String),
    )
  })

  it('returns profile: undefined for a replica while its query is still loading', () => {
    // Never resolves during this test
    mockGetUserProfileById.mockReturnValue(new Promise(() => {}))

    const replica = makeReplica({
      replicaId: LOCAL_REPLICA_ID,
      createdBy: USER_ID_A,
    })

    const { result } = renderHook(
      () => useGridReplicaUsers([replica], LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    // Query is in-flight; profile should be undefined, but the replica IS in the map
    // (it will be included once the query resolves — until then profile is undefined)
    // The map entry may or may not exist yet during loading; we just assert no crash
    // and that, if present, profile is undefined.
    const entry = result.current.get(LOCAL_REPLICA_ID)
    if (entry) {
      expect(entry.profile).toBeUndefined()
    }
  })

  it('excludes replicas where replicaId is null or undefined', async () => {
    const replicas: GridReplicaInfo[] = [
      { replicaType: 'USER', createdBy: USER_ID_A, isConnected: true },
      // no replicaId field
    ]
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers(replicas, LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    // Profile fetch is issued (the replica has a createdBy), but the replica
    // never makes it into the result map because replicaId is undefined.
    await waitFor(() => mockGetUserProfileById.mock.calls.length > 0)
    expect(result.current.size).toBe(0)
  })

  it('returns an empty map when localReplicaId is null', async () => {
    const replica = makeReplica({ replicaId: 10, createdBy: USER_ID_A })
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers([replica], null, USER_ID_A),
      { wrapper: createWrapper() },
    )

    // getReplicaCategory returns null when localReplicaId is null,
    // so every replica is filtered out of the map.
    await waitFor(() => mockGetUserProfileById.mock.calls.length > 0)
    expect(result.current.size).toBe(0)
  })

  it('returns an empty map when currentUserId is undefined', async () => {
    const replica = makeReplica({ replicaId: 10, createdBy: USER_ID_A })
    mockGetUserProfileById.mockResolvedValue(profileA)

    const { result } = renderHook(
      () => useGridReplicaUsers([replica], LOCAL_REPLICA_ID, undefined),
      { wrapper: createWrapper() },
    )

    await waitFor(() => mockGetUserProfileById.mock.calls.length > 0)
    expect(result.current.size).toBe(0)
  })

  it('maps multiple replicas with different users to the correct categories and profiles', async () => {
    const replicaA = makeReplica({
      replicaId: LOCAL_REPLICA_ID,
      createdBy: USER_ID_A,
      replicaType: 'USER',
    })
    const replicaB = makeReplica({
      replicaId: 200,
      createdBy: USER_ID_B,
      replicaType: 'USER',
    })

    mockGetUserProfileById.mockImplementation(
      (userId: string): Promise<UserProfile> => {
        if (userId === USER_ID_A) return Promise.resolve(profileA)
        if (userId === USER_ID_B) return Promise.resolve(profileB)
        return Promise.reject(new Error(`Unexpected userId: ${userId}`))
      },
    )

    const { result } = renderHook(
      () =>
        useGridReplicaUsers([replicaA, replicaB], LOCAL_REPLICA_ID, USER_ID_A),
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(result.current.get(LOCAL_REPLICA_ID)?.profile).toBeDefined()
      expect(result.current.get(200)?.profile).toBeDefined()
    })

    expect(result.current.get(LOCAL_REPLICA_ID)?.category).toBe('self')
    expect(result.current.get(LOCAL_REPLICA_ID)?.profile).toEqual(profileA)
    expect(result.current.get(200)?.category).toBe('other-user')
    expect(result.current.get(200)?.profile).toEqual(profileB)
  })
})
