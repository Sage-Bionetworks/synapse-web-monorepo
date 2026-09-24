import { act, renderHook, waitFor } from '@testing-library/react'
import {
  createWrapper,
  createWrapperAndQueryClient,
} from '@/testutils/TestingLibraryUtils'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import {
  EntityType,
  GridSession,
  SynapseClientError,
  SynchronizeGridRequest,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import useMergeGridWithSource, {
  buildMergeGridVariables,
} from './useMergeGridWithSource'
import useMergeGridWithTable from './useMergeGridWithTable'

vi.mock('@/synapse-queries/grid/useGridSession', () => ({
  useSynchronizeGridSession: vi.fn(),
}))
vi.mock('./useMergeGridWithTable', () => ({ default: vi.fn() }))

const mockUseSynchronizeGridSession = vi.mocked(useSynchronizeGridSession)
const mockUseMergeGridWithTable = vi.mocked(useMergeGridWithTable)

const mockSynchronizeGridResponse: SynchronizeGridResponse = {
  concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
  errorMessages: [],
}

const mockTableUpdateTransactionResponse: TableUpdateTransactionResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
}

describe('useMergeGridWithSource', () => {
  let syncGridWithSource: ReturnType<
    typeof getUseMutationMock<
      SynchronizeGridResponse,
      SynapseClientError,
      Omit<SynchronizeGridRequest, 'concreteType'>
    >
  >
  let mergeGridWithTable: ReturnType<
    typeof getUseMutationMock<
      TableUpdateTransactionResponse,
      SynapseClientError,
      { gridSessionId: string; sourceEntityId: string }
    >
  >

  beforeEach(() => {
    vi.clearAllMocks()

    syncGridWithSource = getUseMutationMock()
    mergeGridWithTable = getUseMutationMock()

    mockUseSynchronizeGridSession.mockImplementation(syncGridWithSource.mock)
    mockUseMergeGridWithTable.mockImplementation(mergeGridWithTable.mock)

    syncGridWithSource.mockMutateAsync.mockResolvedValue(
      mockSynchronizeGridResponse,
    )
    mergeGridWithTable.mockMutateAsync.mockResolvedValue(
      mockTableUpdateTransactionResponse,
    )
  })

  it('synchronizes an EntityView-sourced grid via the Synchronize service', async () => {
    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityType: EntityType.entityview,
        syncType: 'PULL_PUSH',
      })
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(syncGridWithSource.mockMutateAsync).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      syncType: 'PULL_PUSH',
    })
    expect(result.current.data).toEqual({
      type: 'synchronize',
      data: mockSynchronizeGridResponse,
    })
  })

  it('synchronizes a RecordSet-sourced grid via the Synchronize service', async () => {
    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityType: EntityType.recordset,
        syncType: 'PULL',
      })
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(syncGridWithSource.mockMutateAsync).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      syncType: 'PULL',
    })
    expect(result.current.data).toEqual({
      type: 'synchronize',
      data: mockSynchronizeGridResponse,
    })
  })

  it('merges a TableEntity-sourced grid via the table merge path', async () => {
    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityId: 'syn123',
        sourceEntityType: EntityType.table,
      })
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mergeGridWithTable.mockMutateAsync).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn123',
    })
    expect(result.current.data).toEqual({
      type: 'tableUpdateTransaction',
      data: mockTableUpdateTransactionResponse,
    })
  })

  // The grid session's references to the source entity version and JSON Schema are what the
  // sync affordances compare against the source entity, so they must not be left stale.
  it('invalidates the grid session and the source entity after a successful merge', async () => {
    const { wrapperFn, queryClient } = createWrapperAndQueryClient()
    const invalidateQueries = vi.spyOn(queryClient, 'invalidateQueries')

    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: wrapperFn,
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityId: 'syn123',
        sourceEntityType: EntityType.recordset,
        syncType: 'PULL',
      })
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    const { keyFactory } = MOCK_CONTEXT_VALUE
    expect(invalidateQueries).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: keyFactory.getGridSessionKey('session-1'),
      }),
    )
    expect(invalidateQueries).toHaveBeenCalledWith(
      expect.objectContaining({
        queryKey: keyFactory.getEntityQueryKey('syn123'),
      }),
    )
  })

  it('runs the caller-provided onSuccess handler', async () => {
    const onSuccess = vi.fn()
    const { result } = renderHook(() => useMergeGridWithSource({ onSuccess }), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityType: EntityType.recordset,
        syncType: 'PULL',
      })
    })

    await waitFor(() => expect(onSuccess).toHaveBeenCalled())
  })
})

describe('buildMergeGridVariables', () => {
  const gridSession: GridSession = {
    sessionId: 'session-1',
    sourceEntityId: 'syn222',
  }

  it('requests a PULL when shouldPull is true', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.recordset, true),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL',
    })
  })

  it('requests a PULL_PUSH when shouldPull is false', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.table, false),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.table,
      syncType: 'PULL_PUSH',
    })
  })
})
