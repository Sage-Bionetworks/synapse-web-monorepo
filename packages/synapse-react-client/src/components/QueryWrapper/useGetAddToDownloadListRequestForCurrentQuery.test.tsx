import { QueryContextType, useQueryContext } from '@/components/index'
import { getTableQueryUseQueryOptions } from '@/components/QueryWrapper/TableQueryUseQueryOptions'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '@/components/QueryWrapper/TableRowSelectionState'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { ColumnType } from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  Query,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import { ReactNode, Suspense } from 'react'
import { vi } from 'vitest'
import { useGetAddToDownloadListRequestForCurrentQuery } from './useGetAddToDownloadListRequestForCurrentQuery'

vi.mock('@/components/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))
vi.mock('@/components/QueryWrapper/TableRowSelectionState', () => ({
  useHasSelectedRowsAtomValue: vi.fn(),
  useRowSelectionPrimaryKeyAtomValue: vi.fn(),
  useSelectedRowsAtomValue: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseHasSelectedRowsAtomValue = vi.mocked(useHasSelectedRowsAtomValue)
const mockUseRowSelectionPrimaryKeyAtomValue = vi.mocked(
  useRowSelectionPrimaryKeyAtomValue,
)
const mockUseSelectedRowsAtomValue = vi.mocked(useSelectedRowsAtomValue)

const query: Query = {
  sql: 'SELECT * FROM syn123',
}
const queryBundleRequest: QueryBundleRequest = {
  query,
  partMask: BUNDLE_MASK_QUERY_COLUMN_MODELS | BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  entityId: 'syn123',
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
}

const primaryKeyColumn: ColumnModel = {
  name: 'pk',
  columnType: ColumnType.STRING,
  id: '123',
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
  rowDataQueryOptions: { queryKey: [], queryFn: vi.fn() },
  setPageSize: vi.fn(),
  setRangeFacetValue: vi.fn(),
  versionNumber: undefined,
}

/**
 * Register the query metadata that the real `useSuspenseGetQueryMetadata` will load over the network,
 * point the (mocked) query context at the real query options, and render the hook under test inside
 * the standard test wrapper. Resolves once the hook has finished suspending.
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
    () => useGetAddToDownloadListRequestForCurrentQuery(),
    { wrapper },
  )
  // result.current is null while the hook is suspended
  await waitFor(() => expect(hookResult.result.current).not.toBeNull())
  return hookResult
}

describe('useGetAddToDownloadListRequestForCurrentQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns AddToDownloadListRequest with file column from getFileColumnModelId if no fileId/fileVersion column names', async () => {
    mockUseHasSelectedRowsAtomValue.mockReturnValue(false)
    const { result } = await renderHookWithQueryMetadata([fileEntityIdColumn], {
      fileIdColumnName: undefined,
      fileVersionColumnName: undefined,
    })
    expect(result.current).toEqual({
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
    mockUseHasSelectedRowsAtomValue.mockReturnValue(false)
    const { result } = await renderHookWithQueryMetadata(columns, {
      fileIdColumnName: 'fileId',
      fileVersionColumnName: 'fileVer',
    })

    expect(result.current).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: {
        ...query,
        selectFileColumn: 1,
        selectFileVersionColumn: 2,
      },
    })
  })

  it('adds additionalFilters when selected rows are present', async () => {
    mockUseHasSelectedRowsAtomValue.mockReturnValue(true)
    mockUseRowSelectionPrimaryKeyAtomValue.mockReturnValue([
      primaryKeyColumn.name,
    ])
    mockUseSelectedRowsAtomValue.mockReturnValue([
      { values: ['row1'] },
      { values: ['row2'] },
    ])
    const { result } = await renderHookWithQueryMetadata([primaryKeyColumn], {
      fileIdColumnName: undefined,
      fileVersionColumnName: undefined,
    })
    expect(result.current.query!.additionalFilters).toContainEqual({
      columnName: primaryKeyColumn.name,
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      operator: 'IN',
      values: ['row1', 'row2'],
    })
  })
})
