import { server } from '@/mocks/msw/server'
import { QueryContextType, useQueryContext } from '@/components/index'
import { getTableQueryUseQueryOptions } from '@/components/QueryWrapper/TableQueryUseQueryOptions'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { ColumnType } from '@sage-bionetworks/synapse-client'
import { ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  ColumnModel,
  Entity,
  Query,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { cloneDeep } from 'lodash-es'
import { ReactNode, Suspense } from 'react'
import { useGetEntity } from '@/synapse-queries'
import { vi } from 'vitest'
import { useGetAddToDownloadListRequestForCurrentQuery } from './useGetAddToDownloadListRequestForCurrentQuery'

vi.mock('@/components/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)

const query: Query = {
  sql: 'SELECT * FROM syn123',
}
const queryBundleRequest: QueryBundleRequest = {
  query,
  partMask: BUNDLE_MASK_QUERY_COLUMN_MODELS | BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  entityId: 'syn123',
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
}

const fileEntityIdColumn: ColumnModel = {
  name: 'id',
  columnType: ColumnType.ENTITYID,
  id: '456',
}

const mockQueryContextValue: QueryContextType = {
  currentQueryRequest: queryBundleRequest,
  getCurrentQueryRequest: () => queryBundleRequest,
  nextQueryRequest: queryBundleRequest,
  fileIdColumnName: undefined,
  fileVersionColumnName: undefined,
  addValueToSelectedFacet: vi.fn(),
  currentPage: 0,
  executeQueryRequest: vi.fn(),
  fileNameColumnName: undefined,
  getInitQueryRequest: vi.fn(),
  goToPage: vi.fn(),
  hasFacetedSelectColumn: false,
  hasResettableFilters: false,
  isInfinite: false,
  lockedColumn: undefined,
  pageSize: 0,
  queryMetadataQueryOptions: { queryKey: [], queryFn: vi.fn() },
  removeQueryFilter: vi.fn(),
  removeSelectedFacet: vi.fn(),
  removeValueFromQueryFilter: vi.fn(),
  removeValueFromSelectedFacet: vi.fn(),
  resetDebounceTimer: vi.fn(),
  resetQuery: vi.fn(),
  rowDataInfiniteQueryOptions: {
    queryKey: [],
    queryFn: vi.fn() as never,
    initialPageParam: undefined,
    getNextPageParam: vi.fn(),
  },
  rowDataQueryOptions: { queryKey: [], queryFn: vi.fn() as never },
  setPageSize: vi.fn(),
  setRangeFacetValue: vi.fn(),
  versionNumber: undefined,
}

/**
 * Register the query metadata that the real `useSuspenseGetQueryMetadata` will load over the network,
 * point the (mocked) query context at the real query options, and render the hook under test inside
 * the standard test wrapper. Resolves once the hook has finished suspending and the table's entity, if any, has
 * loaded.
 */
async function renderHookWithQueryMetadata(
  columnModels: ColumnModel[],
  queryContextOverrides: Partial<QueryContextType> = {},
) {
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
  // The hook under test mutates the query it receives, so hand out a fresh copy on each call
  const getCurrentQueryRequest = () => cloneDeep(queryBundleRequest)
  mockUseQueryContext.mockReturnValue({
    ...mockQueryContextValue,
    queryMetadataQueryOptions,
    getCurrentQueryRequest,
    ...queryContextOverrides,
  })

  const SynapseWrapper = createWrapper()
  const wrapper = ({ children }: { children?: ReactNode }) => (
    <SynapseWrapper>
      <Suspense fallback={null}>{children}</Suspense>
    </SynapseWrapper>
  )
  const hookResult = renderHook(
    () => ({
      request: useGetAddToDownloadListRequestForCurrentQuery(),
      entity: useGetEntity(queryContextOverrides.entityId).data,
    }),
    { wrapper },
  )
  // result.current is null while the hook is suspended
  await waitFor(() => expect(hookResult.result.current).not.toBeNull())
  if (queryContextOverrides.entityId) {
    await waitFor(() => expect(hookResult.result.current.entity).toBeDefined())
  }
  return hookResult
}

function serveTable(concreteType: Entity['concreteType']) {
  const entity: Entity = { id: 'syn123', name: 'table', concreteType }
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID('syn123')}`,
      () => HttpResponse.json(entity),
    ),
  )
}

describe('useGetAddToDownloadListRequestForCurrentQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns AddToDownloadListRequest with file column from getFileColumnModelId if no fileId/fileVersion column names', async () => {
    const { result } = await renderHookWithQueryMetadata([fileEntityIdColumn], {
      fileIdColumnName: undefined,
      fileVersionColumnName: undefined,
    })
    expect(result.current.request).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: { ...query, selectFileColumn: Number(fileEntityIdColumn.id) },
    })
  })

  it('sets selectFileColumn and selectFileVersionColumn when fileIdColumnName and fileVersionColumnName are present', async () => {
    const columns: ColumnModel[] = [
      { id: '1', name: 'fileId', columnType: ColumnType.ENTITYID },
      { id: '2', name: 'fileVer', columnType: ColumnType.INTEGER },
    ]
    const { result } = await renderHookWithQueryMetadata(columns, {
      fileIdColumnName: 'fileId',
      fileVersionColumnName: 'fileVer',
    })

    expect(result.current.request).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: {
        ...query,
        selectFileColumn: 1,
        selectFileVersionColumn: 2,
      },
    })
  })

  it('selects the column named by fileIdColumnName even without a version column, as for selected rows', async () => {
    const columns: ColumnModel[] = [
      fileEntityIdColumn,
      { id: '9', name: 'fileId', columnType: ColumnType.ENTITYID },
    ]
    const { result } = await renderHookWithQueryMetadata(columns, {
      fileIdColumnName: 'fileId',
    })

    expect(result.current.request.query?.selectFileColumn).toBe(9)
    expect(
      result.current.request.query?.selectFileVersionColumn,
    ).toBeUndefined()
  })

  it.each<{
    tableType: string
    concreteType: Entity['concreteType']
    useVersionNumber: false | undefined
  }>([
    {
      tableType: 'a VirtualTable',
      concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
      useVersionNumber: false,
    },
    {
      tableType: 'a Table',
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
      useVersionNumber: false,
    },
    {
      tableType: 'a MaterializedView',
      concreteType: 'org.sagebionetworks.repo.model.table.MaterializedView',
      useVersionNumber: false,
    },
    {
      tableType: 'an EntityView',
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
      useVersionNumber: undefined,
    },
    {
      tableType: 'a Dataset',
      concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
      useVersionNumber: undefined,
    },
  ])(
    'for $tableType without a version column, sets useVersionNumber to $useVersionNumber',
    async ({ concreteType, useVersionNumber }) => {
      serveTable(concreteType)
      const { result } = await renderHookWithQueryMetadata(
        [fileEntityIdColumn],
        { entityId: 'syn123' },
      )
      expect(result.current.request).toEqual({
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        query: { ...query, selectFileColumn: Number(fileEntityIdColumn.id) },
        ...(useVersionNumber === undefined ? {} : { useVersionNumber }),
      })
    },
  )

  it('keeps the named version column for a VirtualTable', async () => {
    serveTable('org.sagebionetworks.repo.model.table.VirtualTable')
    const columns: ColumnModel[] = [
      { id: '1', name: 'fileId', columnType: ColumnType.ENTITYID },
      { id: '2', name: 'fileVer', columnType: ColumnType.INTEGER },
    ]
    const { result } = await renderHookWithQueryMetadata(columns, {
      entityId: 'syn123',
      fileIdColumnName: 'fileId',
      fileVersionColumnName: 'fileVer',
    })
    expect(result.current.request).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: { ...query, selectFileColumn: 1, selectFileVersionColumn: 2 },
    })
  })
})
