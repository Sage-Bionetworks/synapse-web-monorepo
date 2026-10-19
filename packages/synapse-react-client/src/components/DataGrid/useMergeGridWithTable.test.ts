import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FileEntity } from '@sage-bionetworks/synapse-client'
import { TableEntity } from '@sage-bionetworks/synapse-types'
import { renderHook } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import useMergeGridWithTable, {
  getDownloadFromGridRequestParamsForEntity,
} from './useMergeGridWithTable'

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

describe('useMergeGridWithTable', () => {
  const gridSessionId = 'session1'
  const tableEntityId = 'syn890'
  const fileHandleId = '123456'
  const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

  const onGridExportRequest = vi.fn()
  const onTableUpdateRequest = vi.fn()

  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('calls all steps and returns updateTable result', async () => {
    const entity = {
      id: tableEntityId,
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    } as TableEntity
    server.use(
      http.get(`${repoEndpoint}/repo/v1/entity/${tableEntityId}`, () =>
        HttpResponse.json(entity),
      ),
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
          request => {
            onGridExportRequest(request)
            return {
              resultsFileHandleId: fileHandleId,
              concreteType:
                'org.sagebionetworks.repo.model.grid.DownloadFromGridResult',
            }
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath: '/repo/v1/grid/download/csv/async/start',
            responsePath: token =>
              `/repo/v1/grid/download/csv/async/get/${token}`,
          },
        },
      ),
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
          request => {
            onTableUpdateRequest(request)
            return { success: true }
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath: '/repo/v1/entity/:id/table/transaction/async/start',
            responsePath: token =>
              `/repo/v1/entity/${tableEntityId}/table/transaction/async/get/${token}`,
          },
        },
      ),
    )

    const { result } = renderHook(() => useMergeGridWithTable(), {
      wrapper: createWrapper(),
    })
    const response = await result.current.mutateAsync({
      gridSessionId: gridSessionId,
      sourceEntityId: tableEntityId,
    })

    expect(onGridExportRequest).toHaveBeenCalledWith({
      includeRowIdAndRowVersion: true,
      includeEtag: false,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
      sessionId: gridSessionId,
    })
    expect(onTableUpdateRequest).toHaveBeenCalledWith({
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

  it('handles a thrown error', async () => {
    server.use(
      http.get(`${repoEndpoint}/repo/v1/entity/${tableEntityId}`, () =>
        HttpResponse.json({ reason: 'error' }, { status: 400 }),
      ),
    )
    const { result } = renderHook(() => useMergeGridWithTable(), {
      wrapper: createWrapper(),
    })
    await expect(
      result.current.mutateAsync({
        gridSessionId: gridSessionId,
        sourceEntityId: tableEntityId,
      }),
    ).rejects.toThrow('error')
    expect(onGridExportRequest).not.toHaveBeenCalled()
    expect(onTableUpdateRequest).not.toHaveBeenCalled()
  })
})
