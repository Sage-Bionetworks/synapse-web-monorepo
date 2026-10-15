import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  EntityType,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import useMergeGridWithSource from './useMergeGridWithSource'

const mockSynchronizeGridResponse: SynchronizeGridResponse = {
  concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
  errorMessages: [],
}

const mockTableUpdateTransactionResponse: TableUpdateTransactionResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
}

const onSynchronizeRequest = vi.fn()
const onTableUpdateRequest = vi.fn()
const onGridExportRequest = vi.fn()

describe('useMergeGridWithSource', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
          request => {
            onSynchronizeRequest(request)
            return mockSynchronizeGridResponse
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath: '/repo/v1/grid/synchronize/async/start',
            responsePath: token =>
              `/repo/v1/grid/synchronize/async/get/${token}`,
          },
        },
      ),
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
          request => {
            onGridExportRequest(request)
            return {
              concreteType:
                'org.sagebionetworks.repo.model.grid.DownloadFromGridResult',
              resultsFileHandleId: '123456',
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
            return mockTableUpdateTransactionResponse
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath: '/repo/v1/entity/:id/table/transaction/async/start',
            responsePath: token =>
              `/repo/v1/entity/syn123/table/transaction/async/get/${token}`,
          },
        },
      ),
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/entity/syn123`,
        () =>
          HttpResponse.json({
            id: 'syn123',
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          }),
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

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

    expect(onSynchronizeRequest).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
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

    expect(onSynchronizeRequest).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
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

    expect(onSynchronizeRequest).not.toHaveBeenCalled()
    expect(onGridExportRequest).toHaveBeenCalledWith(
      expect.objectContaining({ sessionId: 'session-1' }),
    )
    expect(onTableUpdateRequest).toHaveBeenCalledWith(
      expect.objectContaining({ entityId: 'syn123' }),
    )
    expect(result.current.data).toEqual({
      type: 'tableUpdateTransaction',
      data: mockTableUpdateTransactionResponse,
    })
  })
})
