import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { renderHook, act } from '@testing-library/react'
import useMergeGridWithSource, {
  getDownloadFromGridRequestParamsForEntity,
} from './useMergeGridWithSource'
import { SynapseClientError } from '@/utils/index'
import * as SynapseContext from '@/utils/index'
import * as ExportGrid from '@/synapse-queries/grid/useExportGrid'
import * as TableUpdate from '@/synapse-queries/table/useTableUpdateTransaction'

describe('getDownloadFromGridRequestParamsForEntity', () => {
  it('returns correct request params for TableEntity', () => {
    const entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    }
    const result = getDownloadFromGridRequestParamsForEntity(entity as any)
    expect(result).toEqual({
      includeRowIdAndRowVersion: true,
      includeEtag: false,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  })

  it('returns correct request params for non-TableEntity', () => {
    const entity = { concreteType: 'org.sagebionetworks.repo.model.FileEntity' }
    const result = getDownloadFromGridRequestParamsForEntity(entity as any)
    expect(result).toEqual({
      includeRowIdAndRowVersion: true,
      includeEtag: true,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  })
})

describe('useMergeGridWithSource', () => {
  const mockGetRepoV1EntityId = vi.fn()
  const mockExportGridToCsv = vi.fn()
  const mockUpdateTable = vi.fn()

  beforeEach(() => {
    vi.spyOn(SynapseContext, 'useSynapseContext').mockReturnValue({
      synapseClient: {
        entityServicesClient: {
          getRepoV1EntityId: mockGetRepoV1EntityId,
        },
      },
    } as any)
    vi.spyOn(ExportGrid, 'useExportGridAsCsv').mockReturnValue({
      mutateAsync: mockExportGridToCsv,
    } as any)
    vi.spyOn(TableUpdate, 'useTableUpdateTransaction').mockReturnValue({
      mutateAsync: mockUpdateTable,
    } as any)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('calls all steps and returns updateTable result', async () => {
    const entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    }
    mockGetRepoV1EntityId.mockResolvedValue(entity)
    mockExportGridToCsv.mockResolvedValue({ resultsFileHandleId: 'file123' })
    mockUpdateTable.mockResolvedValue({ success: true })

    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })
    await act(async () => {
      const response = await result.current.mutateAsync({
        gridSessionId: 'session1',
        sourceEntityId: 'syn123',
      })
      expect(mockGetRepoV1EntityId).toHaveBeenCalledWith({ id: 'syn123' })
      expect(mockExportGridToCsv).toHaveBeenCalledWith({
        includeRowIdAndRowVersion: true,
        includeEtag: false,
        concreteType:
          'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
        sessionId: 'session1',
      })
      expect(mockUpdateTable).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: 'syn123',
        changes: [
          {
            uploadFileHandleId: 'file123',
            tableId: 'syn123',
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          },
        ],
      })
      expect(response).toEqual({ success: true })
    })
  })

  it('handles errors from synapseClient', async () => {
    mockGetRepoV1EntityId.mockRejectedValue(
      new SynapseClientError(400, 'error', expect.getState().currentTestName!),
    )
    const { result } = renderHook(() => useMergeGridWithSource(), {
      wrapper: createWrapper(),
    })
    await expect(
      result.current.mutateAsync({
        gridSessionId: 'session1',
        sourceEntityId: 'syn123',
      }),
    ).rejects.toThrow('error')
  })
})
