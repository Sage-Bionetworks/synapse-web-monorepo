import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  CsvTableDescriptor,
  TableUpdateTransactionRequest,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import useUploadCsvToExistingTable from './useUploadCsvToExistingTable'

describe('useUploadCsvToExistingTable', () => {
  const csvTableDescriptor: CsvTableDescriptor = {
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  }
  const fileHandleId = 'someFileHandleId'

  const mockTableUpdateTransaction =
    vi.fn<(request: TableUpdateTransactionRequest) => void>()

  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
          request => {
            mockTableUpdateTransaction(request)
            return {
              concreteType:
                'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
              results: [],
            }
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath:
              '/repo/v1/entity/:entityId/table/transaction/async/start',
            responsePath: tokenParam =>
              `/repo/v1/entity/:entityId/table/transaction/async/get/${tokenParam}`,
          },
          backendOrigin: getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('calls tableTransaction with the provided tableId', async () => {
    const tableId = 'syn123'

    const { result } = renderHook(() => useUploadCsvToExistingTable(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await result.current.mutateAsync({
        tableId,
        csvTableDescriptor,
        fileHandleId,
      })
    })

    expect(mockTableUpdateTransaction).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
      entityId: tableId,
      changes: [
        {
          tableId,
          uploadFileHandleId: fileHandleId,
          csvTableDescriptor,
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        },
      ],
    })
  })
})
