import { act, renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import {
  EntityType,
  SynapseClientError,
  SynchronizeGridRequest,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import useMergeGridWithSource from './useMergeGridWithSource'
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
})
