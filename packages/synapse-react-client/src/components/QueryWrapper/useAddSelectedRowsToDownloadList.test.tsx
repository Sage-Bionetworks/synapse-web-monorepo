import { QueryContextType, useQueryContext } from '@/components/index'
import { getTableQueryUseQueryOptions } from '@/components/QueryWrapper/TableQueryUseQueryOptions'
import { useSelectedRowsAtomValue } from '@/components/QueryWrapper/TableRowSelectionState'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { useGetEntity } from '@/synapse-queries'
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
import { ReactNode, Suspense } from 'react'
import { useAddSelectedRowsToDownloadList } from './useAddSelectedRowsToDownloadList'
import { useGetQueryMetadata } from './useGetQueryMetadata'

vi.mock('@/components/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))
vi.mock('@/components/QueryWrapper/TableRowSelectionState', () => ({
  useSelectedRowsAtomValue: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseSelectedRowsAtomValue = vi.mocked(useSelectedRowsAtomValue)

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
const versionColumn: ColumnModel = {
  id: '3',
  name: 'fileVersion',
  columnType: ColumnTypeEnum.INTEGER,
}

let batches: AddBatchOfFilesToDownloadListRequest[]

async function renderAddSelectedRows(options: {
  concreteType: Entity['concreteType']
  columnModels: ColumnModel[]
  selectedRows: Row[]
  queryContext?: Partial<QueryContextType>
}) {
  const { concreteType, columnModels, selectedRows, queryContext } = options
  const entity: Entity = { id: TABLE_ID, name: 'table', concreteType }
  server.use(
    http.get(`${REPO_ENDPOINT}${ENTITY_ID(TABLE_ID)}`, () =>
      HttpResponse.json(entity),
    ),
    http.post(`${REPO_ENDPOINT}/repo/v1/download/list/add`, async request => {
      const body =
        (await request.request.json()) as AddBatchOfFilesToDownloadListRequest
      batches.push(body)
      return HttpResponse.json({ numberOfFilesAdded: body.batchToAdd.length })
    }),
  )
  registerTableQueryResult(query, {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    columnModels,
    selectColumns: columnModels,
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
    ...queryContext,
  } as QueryContextType)
  mockUseSelectedRowsAtomValue.mockReturnValue(selectedRows)

  const SynapseWrapper = createWrapper()
  const wrapper = ({ children }: { children?: ReactNode }) => (
    <SynapseWrapper>
      <Suspense fallback={null}>{children}</Suspense>
    </SynapseWrapper>
  )
  const { result } = renderHook(
    () => ({
      ...useAddSelectedRowsToDownloadList(),
      entity: useGetEntity(TABLE_ID).data,
      queryMetadata: useGetQueryMetadata().data,
    }),
    { wrapper },
  )
  // Items depend on the table's entity type and column models, so add only once both have loaded.
  await waitFor(() => {
    expect(result.current.entity).toBeDefined()
    expect(result.current.queryMetadata).toBeDefined()
  })
  act(() => result.current.addSelectedRowsToDownloadList())
  await waitFor(() => expect(result.current.isPending).toBe(false))
  return batches
}

describe('useAddSelectedRowsToDownloadList', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    batches = []
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('adds file view rows at their row versions', async () => {
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
      columnModels: [nameColumn, idColumn],
      selectedRows: [
        { rowId: 1, versionNumber: 4, values: ['a.txt', 'syn1'] },
        { rowId: 2, versionNumber: 7, values: ['b.txt', 'syn2'] },
      ],
    })
    expect(sent).toEqual([
      {
        batchToAdd: [
          { fileEntityId: 'syn1', versionNumber: 4 },
          { fileEntityId: 'syn2', versionNumber: 7 },
        ],
      },
    ])
  })

  it('uses the row ID when a view query selects no file column', async () => {
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
      columnModels: [nameColumn],
      selectedRows: [{ rowId: 9, versionNumber: 2, values: ['c.txt'] }],
    })
    expect(sent).toEqual([
      { batchToAdd: [{ fileEntityId: 'syn9', versionNumber: 2 }] },
    ])
  })

  it('adds the current version of rows of a table without a version column', async () => {
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      columnModels: [nameColumn, idColumn],
      selectedRows: [
        { values: ['a.txt', 'syn1'] },
        { values: ['dataset', 'syn5'] },
      ],
    })
    expect(sent).toEqual([
      { batchToAdd: [{ fileEntityId: 'syn1' }, { fileEntityId: 'syn5' }] },
    ])
  })

  it('reads the named file and version columns', async () => {
    const fileColumn: ColumnModel = {
      id: '4',
      name: 'fileId',
      columnType: ColumnTypeEnum.ENTITYID,
    }
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.MaterializedView',
      columnModels: [idColumn, fileColumn, versionColumn],
      selectedRows: [
        { values: ['syn100', 'syn1', '3'] },
        // No file in this row.
        { values: ['syn101', null, null] },
      ],
      queryContext: {
        fileIdColumnName: 'fileId',
        fileVersionColumnName: 'fileVersion',
      },
    })
    expect(sent).toEqual([
      { batchToAdd: [{ fileEntityId: 'syn1', versionNumber: 3 }] },
    ])
  })

  it('adds a file selected in several rows once', async () => {
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      columnModels: [nameColumn, idColumn],
      selectedRows: [{ values: ['a', 'syn1'] }, { values: ['b', 'syn1'] }],
    })
    expect(sent).toEqual([{ batchToAdd: [{ fileEntityId: 'syn1' }] }])
  })

  it('splits a large selection into batches the server accepts', async () => {
    const selectedRows: Row[] = Array.from(
      { length: MAX_DOWNLOAD_LIST_BATCH_SIZE + 1 },
      (_, index) => ({ values: [`file ${index}`, `syn${index + 1}`] }),
    )
    const sent = await renderAddSelectedRows({
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      columnModels: [nameColumn, idColumn],
      selectedRows,
    })
    expect(sent.map(batch => batch.batchToAdd.length)).toEqual([
      MAX_DOWNLOAD_LIST_BATCH_SIZE,
      1,
    ])
  })
})
