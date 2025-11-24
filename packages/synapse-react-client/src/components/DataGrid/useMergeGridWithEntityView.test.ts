import SynapseClient from '@/synapse-client/index'
import { useExportGridAsCsv } from '@/synapse-queries/grid/useExportGrid'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@/utils/index'
import {
  DownloadFromGridRequest,
  DownloadFromGridResult,
  FileEntity,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { TableEntity } from '@sage-bionetworks/synapse-types'
import { act, renderHook } from '@testing-library/react'
import useMergeGridWithEntityView, {
  getDownloadFromGridRequestParamsForEntity,
} from './useMergeGridWithEntityView'

vi.mock('@/synapse-queries/grid/useExportGrid', () => ({
  useExportGridAsCsv: vi.fn(),
}))
vi.mock('@/synapse-queries/table/useTableUpdateTransaction', () => ({
  useTableUpdateTransaction: vi.fn(),
}))

describe('getDownloadFromGridRequestParamsForEntity', () => {
  it('returns correct request params for TableEntity', () => {
    const entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    } as TableEntity
    const result = getDownloadFromGridRequestParamsForEntity(entity)
    expect(result).toEqual({
      includeRowIdAndRowVersion: true,
      includeEtag: false,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  })

  it('returns correct request params for non-TableEntity', () => {
    const entity = {
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    } as FileEntity
    const result = getDownloadFromGridRequestParamsForEntity(entity)
    expect(result).toEqual({
      includeRowIdAndRowVersion: true,
      includeEtag: true,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  })
})

describe('useMergeGridWithEntityView', () => {
  const gridSessionId = 'session1'
  const tableEntityId = 'syn890'
  const fileHandleId = '123456'
  const mockGetEntity = vi.spyOn(SynapseClient, 'getEntity')

  const { mock: mockUseExportGridAsCsv, mockMutateAsync: mockExportGridToCsv } =
    getUseMutationMock<
      DownloadFromGridResult,
      SynapseClientError,
      DownloadFromGridRequest
    >()
  const {
    mock: mockUseTableUpdateTransaction,
    mockMutateAsync: mockUpdateTable,
  } = getUseMutationMock<
    TableUpdateTransactionResponse,
    SynapseClientError,
    TableUpdateTransactionRequest
  >()

  beforeEach(() => {
    vi.mocked(useExportGridAsCsv).mockImplementation(mockUseExportGridAsCsv)
    vi.mocked(useTableUpdateTransaction).mockImplementation(
      mockUseTableUpdateTransaction,
    )
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('calls all steps and returns updateTable result', async () => {
    const entity = {
      id: tableEntityId,
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    } as TableEntity
    mockGetEntity.mockResolvedValue(entity)
    mockExportGridToCsv.mockResolvedValue({ resultsFileHandleId: fileHandleId })
    mockUpdateTable.mockResolvedValue({ success: true })

    const { result } = renderHook(() => useMergeGridWithEntityView(), {
      wrapper: createWrapper(),
    })
    await act(async () => {
      const response = await result.current.mutateAsync({
        gridSessionId: gridSessionId,
        sourceEntityId: tableEntityId,
      })
      expect(mockGetEntity).toHaveBeenCalledWith(
        expect.any(String),
        tableEntityId,
        undefined,
      )
      expect(mockExportGridToCsv).toHaveBeenCalledWith({
        includeRowIdAndRowVersion: true,
        includeEtag: false,
        concreteType:
          'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
        sessionId: gridSessionId,
      })
      expect(mockUpdateTable).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: tableEntityId,
        changes: [
          {
            uploadFileHandleId: fileHandleId,
            tableId: tableEntityId,
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          },
        ],
      })
      expect(response).toEqual({ success: true })
    })
  })

  it('handles a thrown error', async () => {
    mockGetEntity.mockRejectedValue(
      new SynapseClientError(400, 'error', expect.getState().currentTestName!),
    )
    const { result } = renderHook(() => useMergeGridWithEntityView(), {
      wrapper: createWrapper(),
    })
    await expect(
      result.current.mutateAsync({
        gridSessionId: gridSessionId,
        sourceEntityId: tableEntityId,
      }),
    ).rejects.toThrow('error')
  })
})
