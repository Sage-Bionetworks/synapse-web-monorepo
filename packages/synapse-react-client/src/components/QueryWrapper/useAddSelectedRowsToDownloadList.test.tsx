import { QueryContextType, useQueryContext } from '@/components/index'
import { getTableQueryUseQueryOptions } from '@/components/QueryWrapper/TableQueryUseQueryOptions'
import { useSelectedRowsAtomValue } from '@/components/QueryWrapper/TableRowSelectionState'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { MAX_DOWNLOAD_LIST_BATCH_SIZE } from '@/synapse-queries/download/useDownloadList'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import {
  AddBatchOfFilesToDownloadListRequest,
  ColumnModel,
  ColumnTypeEnum,
  Entity,
  Query,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import { act, renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import {
  NO_FILES_IN_SELECTED_ROWS_MESSAGE,
  NO_NEW_FILES_ADDED_MESSAGE,
  TOO_MANY_SELECTED_ROWS_MESSAGE,
  useAddSelectedRowsToDownloadList,
} from './useAddSelectedRowsToDownloadList'

vi.mock('@/components/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))
vi.mock('@/components/QueryWrapper/TableRowSelectionState', () => ({
  useSelectedRowsAtomValue: vi.fn(),
}))
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseSelectedRowsAtomValue = vi.mocked(useSelectedRowsAtomValue)
const mockDisplayToast = vi.mocked(displayToast)

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const TABLE_ID = 'syn123'
const query: Query = { sql: `SELECT * FROM ${TABLE_ID}` }
const queryBundleRequest: QueryBundleRequest = {
  query,
  partMask: BUNDLE_MASK_QUERY_COLUMN_MODELS | BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  entityId: TABLE_ID,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
}
const nameColumn: ColumnModel = {
  id: '1',
  name: 'name',
  columnType: ColumnTypeEnum.STRING,
}
const idColumn: ColumnModel = {
  id: '2',
  name: 'id',
  columnType: ColumnTypeEnum.ENTITYID,
}

type AddResponse =
  | { numberOfFilesAdded: number }
  | { status: number; reason: string }

let batches: AddBatchOfFilesToDownloadListRequest[]

/**
 * Renders the hook for a table, without waiting for the table or its query metadata to load, and chooses Add.
 * Resolves once the add has settled.
 */
async function addSelectedRows(options: {
  concreteType: Entity['concreteType']
  selectedRows: Row[]
  response?: (body: AddBatchOfFilesToDownloadListRequest) => AddResponse
}) {
  const {
    concreteType,
    selectedRows,
    response = body => ({ numberOfFilesAdded: body.batchToAdd.length }),
  } = options
  const entity: Entity = { id: TABLE_ID, name: 'table', concreteType }
  server.use(
    http.get(`${REPO_ENDPOINT}${ENTITY_ID(TABLE_ID)}`, () =>
      HttpResponse.json(entity),
    ),
    http.post(`${REPO_ENDPOINT}/repo/v1/download/list/add`, async request => {
      const body =
        (await request.request.json()) as AddBatchOfFilesToDownloadListRequest
      batches.push(body)
      const result = response(body)
      return 'status' in result
        ? HttpResponse.json(
            { reason: result.reason },
            { status: result.status },
          )
        : HttpResponse.json(result)
    }),
  )
  registerTableQueryResult(query, {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    columnModels: [nameColumn, idColumn],
    selectColumns: [nameColumn, idColumn],
  })
  const { queryMetadataQueryOptions } = getTableQueryUseQueryOptions(
    queryBundleRequest,
    undefined,
    MOCK_CONTEXT_VALUE.keyFactory,
    MOCK_CONTEXT_VALUE.accessToken,
  )
  mockUseQueryContext.mockReturnValue({
    entityId: TABLE_ID,
    versionNumber: undefined,
    fileIdColumnName: undefined,
    fileVersionColumnName: undefined,
    queryMetadataQueryOptions,
    getCurrentQueryRequest: () => queryBundleRequest,
  } as QueryContextType)
  mockUseSelectedRowsAtomValue.mockReturnValue(selectedRows)

  const { result } = renderHook(() => useAddSelectedRowsToDownloadList(), {
    wrapper: createWrapper(),
  })
  await act(() => result.current.addSelectedRowsToDownloadList())
  await waitFor(() => expect(result.current.isPending).toBe(false))
}

describe('useAddSelectedRowsToDownloadList', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    batches = []
  })

  it("loads the table and its columns when they aren't cached, so file view rows keep their row versions", async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
      selectedRows: [
        { rowId: 1, versionNumber: 4, values: ['a.txt', 'syn1'] },
        { rowId: 2, versionNumber: 7, values: ['b.txt', 'syn2'] },
      ],
    })

    expect(batches).toEqual([
      {
        batchToAdd: [
          { fileEntityId: 'syn1', versionNumber: 4 },
          { fileEntityId: 'syn2', versionNumber: 7 },
        ],
      },
    ])
    expect(mockDisplayToast).toHaveBeenCalledWith(
      '2 files were added to your Download List.',
      'success',
      expect.anything(),
    )
  })

  it("reports the server's count, and warns when it added nothing", async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      selectedRows: [{ values: ['dataset', 'syn5'] }],
      response: () => ({ numberOfFilesAdded: 0 }),
    })

    expect(batches).toHaveLength(1)
    expect(mockDisplayToast).toHaveBeenCalledWith(
      NO_NEW_FILES_ADDED_MESSAGE,
      'warning',
    )
  })

  it('sends nothing and says so when the selected rows have no files', async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      selectedRows: [{ values: ['a.txt', null] }],
    })

    expect(batches).toEqual([])
    expect(mockDisplayToast).toHaveBeenCalledWith(
      NO_FILES_IN_SELECTED_ROWS_MESSAGE,
      'warning',
    )
  })

  it('sends nothing and says so when more items are selected than one request can add', async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      selectedRows: Array.from(
        { length: MAX_DOWNLOAD_LIST_BATCH_SIZE + 1 },
        (_, index) => ({ values: [`file ${index}`, `syn${index + 1}`] }),
      ),
    })

    expect(batches).toEqual([])
    expect(mockDisplayToast).toHaveBeenCalledWith(
      TOO_MANY_SELECTED_ROWS_MESSAGE,
      'warning',
    )
  })

  it('adds the most items one request carries in a single request', async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      selectedRows: Array.from(
        { length: MAX_DOWNLOAD_LIST_BATCH_SIZE },
        (_, index) => ({ values: [`file ${index}`, `syn${index + 1}`] }),
      ),
    })

    expect(batches.map(batch => batch.batchToAdd.length)).toEqual([
      MAX_DOWNLOAD_LIST_BATCH_SIZE,
    ])
  })

  it("shows the server's reason when the add fails", async () => {
    await addSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      selectedRows: [{ values: ['a.txt', 'syn1'] }],
      response: () => ({ status: 400, reason: 'Download list is full' }),
    })

    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Download list is full',
      'danger',
    )
  })
})
