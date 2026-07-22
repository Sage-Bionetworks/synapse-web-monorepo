import { act, renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags'
import {
  EntityType,
  GridRecordSetExportResponse,
  SynapseClientError,
  SynchronizeGridRequest,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import useMergeGridWithSource from './useMergeGridWithSource'
import useMergeGridWithTable from './useMergeGridWithTable'
import useMergeGridWithRecordSet, {
  MergeGridWithRecordSetInput,
} from './useMergeGridWithRecordSet'

vi.mock('@/synapse-queries/grid/useGridSession', () => ({
  useSynchronizeGridSession: vi.fn(),
}))
vi.mock('./useMergeGridWithTable', () => ({ default: vi.fn() }))
vi.mock('./useMergeGridWithRecordSet', () => ({ default: vi.fn() }))
vi.mock('@/synapse-queries/featureflags', () => ({
  useGetFeatureFlag: vi.fn(),
}))

const mockUseSynchronizeGridSession = vi.mocked(useSynchronizeGridSession)
const mockUseMergeGridWithTable = vi.mocked(useMergeGridWithTable)
const mockUseMergeGridWithRecordSet = vi.mocked(useMergeGridWithRecordSet)
const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)

const mockSynchronizeGridResponse: SynchronizeGridResponse = {
  concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
  errorMessages: [],
}

const mockTableUpdateTransactionResponse: TableUpdateTransactionResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
}

const mockGridRecordSetExportResponse: GridRecordSetExportResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.grid.GridRecordSetExportResponse',
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
  let mergeGridWithRecordSet: ReturnType<
    typeof getUseMutationMock<
      GridRecordSetExportResponse,
      SynapseClientError,
      MergeGridWithRecordSetInput
    >
  >

  beforeEach(() => {
    vi.clearAllMocks()

    syncGridWithSource = getUseMutationMock()
    mergeGridWithTable = getUseMutationMock()
    mergeGridWithRecordSet = getUseMutationMock()

    mockUseSynchronizeGridSession.mockImplementation(syncGridWithSource.mock)
    mockUseMergeGridWithTable.mockImplementation(mergeGridWithTable.mock)
    mockUseMergeGridWithRecordSet.mockImplementation(
      mergeGridWithRecordSet.mock,
    )
    mockUseGetFeatureFlag.mockReturnValue(false)

    syncGridWithSource.mockMutateAsync.mockResolvedValue(
      mockSynchronizeGridResponse,
    )
    mergeGridWithTable.mockMutateAsync.mockResolvedValue(
      mockTableUpdateTransactionResponse,
    )
    mergeGridWithRecordSet.mockMutateAsync.mockResolvedValue(
      mockGridRecordSetExportResponse,
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

  it('synchronizes a RecordSet-sourced grid via the Synchronize service when RecordSet sync is enabled', async () => {
    mockUseGetFeatureFlag.mockReturnValue(true)

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
    expect(mergeGridWithRecordSet.mockMutateAsync).not.toHaveBeenCalled()
    expect(result.current.data).toEqual({
      type: 'synchronize',
      data: mockSynchronizeGridResponse,
    })
  })

  it('overwrites a RecordSet using the legacy export path when RecordSet sync is disabled', async () => {
    mockUseGetFeatureFlag.mockReturnValue(false)

    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.mutate({
        gridSessionId: 'session-1',
        sourceEntityType: EntityType.recordset,
      })
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mergeGridWithRecordSet.mockMutateAsync).toHaveBeenCalledWith({
      gridSessionId: 'session-1',
    })
    expect(syncGridWithSource.mockMutateAsync).not.toHaveBeenCalled()
    expect(result.current.data).toEqual({
      type: 'recordset_overwrite',
      data: mockGridRecordSetExportResponse,
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
