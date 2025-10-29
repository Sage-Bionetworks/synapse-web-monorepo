import { QueryContextType, useQueryContext } from '@/components/index'
import {
  useHasSelectedRowsAtomValue,
  useRowSelectionPrimaryKeyAtomValue,
  useSelectedRowsAtomValue,
} from '@/components/QueryWrapper/TableRowSelectionState'
import { useSuspenseGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import { getUseQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { ColumnType } from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  Query,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { renderHook } from '@testing-library/react'
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
vi.mock('@/components/QueryWrapper/useGetQueryMetadata', () => ({
  useSuspenseGetQueryMetadata: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseHasSelectedRowsAtomValue = vi.mocked(useHasSelectedRowsAtomValue)
const mockUseRowSelectionPrimaryKeyAtomValue = vi.mocked(
  useRowSelectionPrimaryKeyAtomValue,
)
const mockUseSelectedRowsAtomValue = vi.mocked(useSelectedRowsAtomValue)
const mockUseSuspenseGetQueryMetadata = vi.mocked(useSuspenseGetQueryMetadata)

const query: Query = {
  sql: 'SELECT * FROM syn123',
}
const queryBundleRequest: QueryBundleRequest = {
  query,
  partMask: 0,
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
    queryFn: vi.fn(),
    initialPageParam: undefined,
    getNextPageParam: vi.fn(),
  },
  rowDataQueryOptions: { queryKey: [], queryFn: vi.fn() },
  setPageSize: vi.fn(),
  setRangeFacetValue: vi.fn(),
  versionNumber: undefined,
}

describe('useGetAddToDownloadListRequestForCurrentQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns AddToDownloadListRequest with file column from getFileColumnModelId if no fileId/fileVersion column names', () => {
    mockUseQueryContext.mockReturnValue({
      ...mockQueryContextValue,
      getCurrentQueryRequest: () => queryBundleRequest,
      fileIdColumnName: undefined,
      fileVersionColumnName: undefined,
    })
    mockUseSuspenseGetQueryMetadata.mockReturnValue(
      getUseQuerySuccessMock({
        columnModels: [fileEntityIdColumn],
        selectColumns: [fileEntityIdColumn],
      }),
    )
    mockUseHasSelectedRowsAtomValue.mockReturnValue(false)
    const { result } = renderHook(() =>
      useGetAddToDownloadListRequestForCurrentQuery(),
    )
    expect(result.current).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      query: query,
    })
  })

  it('sets selectFileColumn and selectFileVersionColumn when fileIdColumnName and fileVersionColumnName are present', () => {
    const columns: ColumnModel[] = [
      { id: '1', name: 'fileId', columnType: ColumnType.ENTITYID },
      { id: '2', name: 'fileVer', columnType: ColumnType.INTEGER },
    ]
    mockUseQueryContext.mockReturnValue({
      ...mockQueryContextValue,
      getCurrentQueryRequest: () => queryBundleRequest,
      fileIdColumnName: 'fileId',
      fileVersionColumnName: 'fileVer',
    })
    mockUseSuspenseGetQueryMetadata.mockReturnValue(
      getUseQuerySuccessMock<QueryResultBundle>({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        columnModels: columns,
        selectColumns: columns,
      }),
    )
    mockUseHasSelectedRowsAtomValue.mockReturnValue(false)
    const { result } = renderHook(() =>
      useGetAddToDownloadListRequestForCurrentQuery(),
    )

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

  it('adds additionalFilters when selected rows are present', () => {
    mockUseQueryContext.mockReturnValue({
      ...mockQueryContextValue,
      getCurrentQueryRequest: () => queryBundleRequest,
      fileIdColumnName: undefined,
      fileVersionColumnName: undefined,
    })
    mockUseSuspenseGetQueryMetadata.mockReturnValue(
      getUseQuerySuccessMock<QueryResultBundle>({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        columnModels: [primaryKeyColumn],
        selectColumns: [primaryKeyColumn],
      }),
    )
    mockUseHasSelectedRowsAtomValue.mockReturnValue(true)
    mockUseRowSelectionPrimaryKeyAtomValue.mockReturnValue([
      primaryKeyColumn.name,
    ])
    mockUseSelectedRowsAtomValue.mockReturnValue([
      { values: ['row1'] },
      { values: ['row2'] },
    ])
    const { result } = renderHook(() =>
      useGetAddToDownloadListRequestForCurrentQuery(),
    )
    expect(result.current.query!.additionalFilters).toContainEqual({
      columnName: primaryKeyColumn.name,
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      operator: 'IN',
      values: ['row1', 'row2'],
    })
  })
})
