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
import {
  Entity,
  ColumnModel as SynapseTypesColumnModel,
} from '@sage-bionetworks/synapse-types'
import { act, renderHook } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { SetOptional } from 'type-fest'
import useCreateTableFromCsv from './useCreateTableFromCsv'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useCreateTableFromCsv', () => {
  const csvTableDescriptor: CsvTableDescriptor = {
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  }
  const fileHandleId = 'someFileHandleId'

  const mockCreateColumnModels =
    vi.fn<
      (body: { list: SetOptional<SynapseTypesColumnModel, 'id'>[] }) => void
    >()
  const mockCreateEntity = vi.fn<(body: Entity) => void>()
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
          backendOrigin: REPO_ENDPOINT,
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('creates column models, entity, then runs the table transaction', async () => {
    const parentId = 'syn456'
    const tableName = 'My Table'
    const columnModels = [{ name: 'colA' }] as SetOptional<
      SynapseTypesColumnModel,
      'id'
    >[]
    const createdColumns = [
      { id: 'col-1', name: 'colA' },
    ] as SynapseTypesColumnModel[]
    const newEntityId = 'syn789'

    server.use(
      http.post<never, { list: SetOptional<SynapseTypesColumnModel, 'id'>[] }>(
        `${REPO_ENDPOINT}/repo/v1/column/batch`,
        async ({ request }) => {
          mockCreateColumnModels(await request.json())
          return HttpResponse.json(
            {
              concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
              list: createdColumns,
            },
            { status: 201 },
          )
        },
      ),
      http.post<never, Entity>(
        `${REPO_ENDPOINT}/repo/v1/entity`,
        async ({ request }) => {
          mockCreateEntity(await request.json())
          return HttpResponse.json({ id: newEntityId }, { status: 201 })
        },
      ),
    )

    const { result } = renderHook(() => useCreateTableFromCsv(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await result.current.mutateAsync({
        parentId,
        tableName,
        columnModels,
        csvTableDescriptor,
        fileHandleId,
      })
    })

    expect(mockCreateColumnModels).toHaveBeenCalledWith(
      expect.objectContaining({
        list: [
          {
            ...columnModels[0],
            concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
          },
        ],
      }),
    )
    expect(mockCreateEntity).toHaveBeenCalledWith({
      name: tableName,
      parentId,
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
      columnIds: ['col-1'],
    })
    expect(mockTableUpdateTransaction).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
      entityId: newEntityId,
      changes: [
        {
          tableId: newEntityId,
          uploadFileHandleId: fileHandleId,
          csvTableDescriptor,
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        },
      ],
    })
  })

  it('propagates errors from inner mutations', async () => {
    server.use(
      http.post(`${REPO_ENDPOINT}/repo/v1/column/batch`, () =>
        HttpResponse.json({ reason: 'boom' }, { status: 400 }),
      ),
      http.post<never, Entity>(
        `${REPO_ENDPOINT}/repo/v1/entity`,
        async ({ request }) => {
          mockCreateEntity(await request.json())
          return HttpResponse.json({ id: 'syn789' }, { status: 201 })
        },
      ),
    )

    const { result } = renderHook(() => useCreateTableFromCsv(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await expect(
        result.current.mutateAsync({
          parentId: 'syn456',
          tableName: 'My Table',
          columnModels: [],
          csvTableDescriptor,
          fileHandleId,
        }),
      ).rejects.toThrow('boom')
    })

    expect(mockCreateEntity).not.toHaveBeenCalled()
    expect(mockTableUpdateTransaction).not.toHaveBeenCalled()
  })
})
