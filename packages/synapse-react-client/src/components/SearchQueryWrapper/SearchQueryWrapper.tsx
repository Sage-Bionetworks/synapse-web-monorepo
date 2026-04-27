import { hasResettableFilters as hasResettableFiltersUtil } from '@/utils/functions/queryUtils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import useImmutableTableQuery from '@/utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Provider } from 'jotai'
import { PropsWithChildren, useMemo } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import {
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import { useSearchQueryUseQueryOptions } from './SearchQueryUseQueryOptions'
import useHasFacetedSelectColumn from '../QueryWrapper/useHasFacetedSelectColumn'
import { SessionInitializedGuard } from '@/utils/AppUtils/session/SessionInitializedGuard'
import { useGetEntity } from '@/synapse-queries'
import { SearchIndex } from '@sage-bionetworks/synapse-client'

/**
 * The initQueryRequest used internally within SearchQueryWrapper. It uses a synthetic entity ID
 * and SQL so we can reuse useImmutableTableQuery for facet/pagination state management, even though
 * the actual data is fetched from the SearchQueryServicesApi (not a table entity).
 */
export const SEARCH_QUERY_WRAPPER_SYNTHETIC_ENTITY_ID = 'search'
export const SEARCH_QUERY_WRAPPER_SYNTHETIC_SQL = `SELECT * FROM ${SEARCH_QUERY_WRAPPER_SYNTHETIC_ENTITY_ID}`

export type SearchQueryWrapperProps = PropsWithChildren<{
  /**
   * The ID of the SearchIndex entity to query.
   */
  searchIndexId: string
  /**
   * The initial query request. Only `query.selectedFacets`, `query.limit`, and `query.offset`
   * are used; the `entityId` and `sql` fields are overridden with synthetic values.
   * The `partMask` controls which parts of the response bundle to request.
   */
  initQueryRequest: {
    concreteType?: QueryBundleRequest['concreteType']
    partMask?: QueryBundleRequest['partMask']
    query?: Partial<QueryBundleRequest['query']>
  }
  /** If onQueryChange is set, the callback will be invoked when the Query changes */
  onQueryChange?: (newQueryJson: string) => void
  isInfinite?: boolean
}>

function SearchQueryWrapperInternal(props: SearchQueryWrapperProps) {
  return (
    <SessionInitializedGuard>
      <SearchQueryWrapperInternalWithSession {...props} />
    </SessionInitializedGuard>
  )
}

function SearchQueryWrapperInternalWithSession(props: SearchQueryWrapperProps) {
  const {
    initQueryRequest: initQueryRequestFromProps,
    onQueryChange,
    isInfinite = false,
    searchIndexId,
  } = props

  const { data: searchIndexEntity } = useGetEntity(
    searchIndexId,
  ) as unknown as { data: SearchIndex | undefined }

  const synapseId = searchIndexEntity?.definingSQL
    ? parseEntityIdFromSqlStatement(searchIndexEntity.definingSQL)
    : undefined

  // Build a full synthetic QueryBundleRequest so we can reuse useImmutableTableQuery.
  // The entityId and sql are placeholders; only selectedFacets, limit, offset, and partMask
  // are passed through to the actual SearchQueryServicesApi call.
  const initQueryRequest = useDeepCompareMemoize({
    concreteType:
      'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
    entityId: SEARCH_QUERY_WRAPPER_SYNTHETIC_ENTITY_ID,
    partMask: initQueryRequestFromProps.partMask ?? 0,
    query: {
      sql: SEARCH_QUERY_WRAPPER_SYNTHETIC_SQL,
      selectedFacets: initQueryRequestFromProps.query?.selectedFacets,
      limit: initQueryRequestFromProps.query?.limit,
      offset: initQueryRequestFromProps.query?.offset,
    },
  }) as QueryBundleRequest

  const immutableTableQueryResult = useImmutableTableQuery({
    initQueryRequest,
    onQueryChange,
  })

  const {
    getInitQueryRequest,
    getCurrentQueryRequest,
    setQuery,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
    nextQueryRequest,
    currentQueryRequest,
    addValueToSelectedFacet,
    setRangeFacetValue,
    resetDebounceTimer,
    currentPage,
    goToPage,
    pageSize,
    setPageSize,
  } = immutableTableQueryResult

  const {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  } = useSearchQueryUseQueryOptions(
    currentQueryRequest as QueryBundleRequest,
    searchIndexId,
    synapseId,
  )

  const hasFacetedSelectColumn = useHasFacetedSelectColumn(
    queryMetadataQueryOptions,
  )

  const hasResettableFilters = useMemo(() => {
    const request = getCurrentQueryRequest()
    return hasResettableFiltersUtil(request.query, undefined)
  }, [getCurrentQueryRequest])

  const context: QueryContextType = useDeepCompareMemoize({
    isInfinite,
    entityId: undefined,
    versionNumber: undefined,
    nextQueryRequest,
    currentQueryRequest,
    getCurrentQueryRequest,
    getInitQueryRequest,
    executeQueryRequest: setQuery,
    hasFacetedSelectColumn,
    hasResettableFilters,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    onViewSharingSettingsClicked: undefined,
    addValueToSelectedFacet,
    combineRangeFacetConfig: undefined,
    setRangeFacetValue,
    resetDebounceTimer,
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
    currentPage,
    goToPage,
    pageSize,
    setPageSize,
    lockedColumn: undefined,
    fileIdColumnName: undefined,
    fileVersionColumnName: undefined,
    fileNameColumnName: undefined,
  })

  return (
    <QueryContextProvider queryContext={context}>
      {props.children}
    </QueryContextProvider>
  )
}

/**
 * Provides a QueryContext populated by results from the SearchQueryServicesApi rather than
 * the standard Table Query Services. All subcomponents that consume QueryContext can be
 * used unchanged within a SearchQueryWrapper tree.
 */
export function SearchQueryWrapper(props: SearchQueryWrapperProps) {
  return (
    <Provider>
      <SearchQueryWrapperInternal {...props} />
    </Provider>
  )
}
