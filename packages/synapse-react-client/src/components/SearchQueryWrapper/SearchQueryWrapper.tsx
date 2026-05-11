import { hasResettableFilters as hasResettableFiltersUtil } from '@/utils/functions/queryUtils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import useImmutableTableQuery from '@/utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import { goToPage as transformQueryToGoToPage } from '@/utils/hooks/useImmutableTableQuery/TableQueryReducerActions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Provider } from 'jotai'
import { PropsWithChildren, useCallback, useEffect, useMemo } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import {
  QueryContextProvider,
  QueryContextType,
  useQueryContext,
} from '../QueryContext/QueryContext'
import {
  getSearchQueryUseQueryOptions,
  useSearchQueryUseQueryOptions,
} from './SearchQueryUseQueryOptions'
import { TableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'
import useHasFacetedSelectColumn from '../QueryWrapper/useHasFacetedSelectColumn'
import { SessionInitializedGuard } from '@/utils/AppUtils/session/SessionInitializedGuard'
import { useGetEntity, useGetEntityBundle } from '@/synapse-queries'
import { SearchIndex } from '@sage-bionetworks/synapse-client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { cloneDeep } from 'lodash-es'

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
   * The initial query request. Only `query.selectedFacets`, `query.additionalFilters`,
   * `query.limit`, and `query.offset` are used; the `entityId` and `sql` fields are
   * overridden with synthetic values. The `partMask` controls which parts of the response
   * bundle to request.
   */
  initQueryRequest: {
    concreteType?: QueryBundleRequest['concreteType']
    partMask?: QueryBundleRequest['partMask']
    query?: Partial<QueryBundleRequest['query']>
  }
  /** If onQueryChange is set, the callback will be invoked when the Query changes */
  onQueryChange?: (newQueryJson: string) => void
  /** If onQueryResultBundleChange is set, it will be called whenever the query result bundle changes */
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  isInfinite?: boolean
}>

/**
 * Internal component that reads the current query metadata from QueryContext and fires
 * onQueryResultBundleChange whenever the data changes. Must be rendered as a child of
 * QueryContextProvider (i.e. inside SearchQueryWrapper).
 */
function SearchQueryResultBundleChangeNotifier({
  onQueryResultBundleChange,
}: {
  onQueryResultBundleChange: (json: string) => void
}) {
  const { queryMetadataQueryOptions } = useQueryContext()
  // queryMetadataQueryOptions is UseSuspenseQueryOptions; cast to UseQueryOptions so we can use
  // regular (non-suspense) `useQuery` here — the same cache key is shared, so no extra request is made.
  const queryOpts = queryMetadataQueryOptions as UseQueryOptions<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >
  const { data } = useQuery(queryOpts)
  useEffect(() => {
    if (data) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])
  return null
}

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
    onQueryResultBundleChange,
    isInfinite = false,
    searchIndexId,
  } = props

  const { keyFactory, accessToken } = useSynapseContext()

  const { data: searchIndexEntityData } = useGetEntity(
    searchIndexId,
    undefined,
    {
      throwOnError: true,
    },
  )
  const searchIndexEntity = searchIndexEntityData as SearchIndex | undefined

  const synapseId = searchIndexEntity?.definingSQL
    ? parseEntityIdFromSqlStatement(searchIndexEntity.definingSQL)
    : undefined

  const { data: entityBundle } = useGetEntityBundle(synapseId, undefined, {
    includeTableBundle: true,
    throwOnError: true,
  })
  const columnModels = entityBundle?.tableBundle?.columnModels

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
      additionalFilters: initQueryRequestFromProps.query?.additionalFilters,
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

  // SearchTableQueryUseQueryOptions uses SearchIndexQuery generics rather than QueryBundleRequest.
  // QueryContextType (and all downstream consumers) expect TableQueryUseQueryOptions. The runtime
  // shapes are identical — only the TypeScript generics differ — so a single cast is made here at
  // the architectural boundary rather than scattering `as unknown as` across the implementation.
  const {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  } = useSearchQueryUseQueryOptions(
    currentQueryRequest as QueryBundleRequest,
    searchIndexId,
    synapseId,
  ) as unknown as TableQueryUseQueryOptions

  const hasFacetedSelectColumn = useHasFacetedSelectColumn(
    queryMetadataQueryOptions,
  )

  const hasResettableFilters = useMemo(() => {
    const request = getCurrentQueryRequest()
    return hasResettableFiltersUtil(request.query, undefined)
  }, [getCurrentQueryRequest])

  // Provides page-specific row query options using the search API, so components like
  // usePrefetchTableRows don't accidentally call the standard table query API with the
  // synthetic entity ID.
  const getRowDataQueryOptionsForPage = useCallback(
    (pageNumber: number) => {
      const queryWithUpdatedPage = transformQueryToGoToPage(
        { type: 'goToPage', pageNumber },
        cloneDeep(getCurrentQueryRequest()),
      )
      return (
        getSearchQueryUseQueryOptions(
          queryWithUpdatedPage,
          keyFactory,
          accessToken,
          searchIndexId,
          columnModels,
        ) as unknown as TableQueryUseQueryOptions
      ).rowDataQueryOptions
    },
    [
      getCurrentQueryRequest,
      keyFactory,
      accessToken,
      searchIndexId,
      columnModels,
    ],
  )

  // TODO: useDeepCompareMemoize cannot meaningfully compare functions — it falls back to
  // reference equality for them. The callbacks below (getCurrentQueryRequest, removeSelectedFacet,
  // getRowDataQueryOptionsForPage, etc.) behave identically to a shallow useMemo dep.
  // The correct fix is to deep-compare only serializable data fields and use a plain useMemo for
  // the full context object. QueryWrapper.tsx has the same issue; fix both together in a follow-up.
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
    getRowDataQueryOptionsForPage,
  })

  return (
    <QueryContextProvider queryContext={context}>
      {onQueryResultBundleChange && (
        <SearchQueryResultBundleChangeNotifier
          onQueryResultBundleChange={onQueryResultBundleChange}
        />
      )}
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
