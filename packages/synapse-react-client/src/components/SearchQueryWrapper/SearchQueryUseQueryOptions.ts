import * as SynapseClient from '@/synapse-client/SynapseClient'
import { tableQueryUseQueryDefaults } from '@/synapse-queries'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  AsynchronousJobStatus,
  ColumnModel,
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnRangeRequest,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
  TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import type {
  FacetRequest,
  KeyValues,
  SearchIndexQuery,
  SearchKeyRange,
  SearchQueryResults,
  SearchSearchQuery,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  FacetRequestSortDirectionEnum as FacetRequestSortDirectionEnumValues,
  FacetRequestSortFieldEnum as FacetRequestSortFieldEnumValues,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { omit } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { KeyFactory } from '@/synapse-queries/KeyFactory'

/**
 * TanStack Query options for the SearchQueryServicesApi, mirroring TableQueryUseQueryOptions
 * but parameterised over SearchIndexQuery rather than QueryBundleRequest. This eliminates
 * `as unknown as` casts inside the implementation. A single cast to TableQueryUseQueryOptions
 * is still required at the boundary where SearchQueryWrapper assigns these into QueryContextType.
 */
export type SearchTableQueryUseQueryOptions = {
  rowDataQueryOptions: UseSuspenseQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    RowSet | undefined
  >
  rowDataInfiniteQueryOptions: UseInfiniteQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    InfiniteData<AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>>,
    QueryKey,
    string | number | undefined
  >
  queryMetadataQueryOptions: UseSuspenseQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    Omit<QueryResultBundle, 'queryResult'>
  >
}

/**
 * Converts a QueryBundleRequest (used internally for state management) into a SearchIndexQuery
 * that can be sent to the SearchQueryServicesApi.
 *
 * Mapping:
 *  - columnModels (facetType defined) → facetRequests (columns to aggregate as facets, with optional sort config)
 *  - query.selectedFacets (enumeration) → termsFilters (IN-clause filters)
 *  - query.selectedFacets (range) → rangeFilters (range filters)
 *  - query.limit → limit
 *  - query.offset → offset
 *  - partMask → dropped (SearchIndexQuery has no bitmask concept)
 */
export function toSearchIndexQuery(
  queryBundleRequest: QueryBundleRequest,
  searchIndexId: string,
  columnModels?: ColumnModel[],
): SearchIndexQuery {
  // Build facetRequests from ColumnModels that have a facetType defined
  const facetRequests: FacetRequest[] | undefined = columnModels
    ?.filter(cm => cm.facetType != null)
    .map(cm => {
      const facetReq: FacetRequest = { columnName: cm.name, maxValueCount: 100 }
      if (cm.facetSortConfig) {
        // Map FacetColumnSortProperty ('FREQUENCY'|'VALUE') → FacetRequestSortFieldEnum ('COUNT'|'KEY')
        if (cm.facetSortConfig.property != null) {
          facetReq.sortField =
            cm.facetSortConfig.property === 'VALUE'
              ? FacetRequestSortFieldEnumValues.KEY
              : FacetRequestSortFieldEnumValues.COUNT
        }
        if (cm.facetSortConfig.direction != null) {
          facetReq.sortDirection =
            cm.facetSortConfig.direction === 'ASC'
              ? FacetRequestSortDirectionEnumValues.ASC
              : FacetRequestSortDirectionEnumValues.DESC
        }
      }
      return facetReq
    })

  // Build termsFilters from enumeration selectedFacets
  const termsFilters: KeyValues[] | undefined =
    queryBundleRequest.query.selectedFacets
      ?.filter(
        (f): f is FacetColumnValuesRequest =>
          f.concreteType === FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
      )
      .map(f => ({ key: f.columnName, values: f.facetValues }))

  // Build rangeFilters from range selectedFacets
  const rangeFilters: SearchKeyRange[] | undefined =
    queryBundleRequest.query.selectedFacets
      ?.filter(
        (f): f is FacetColumnRangeRequest =>
          f.concreteType === FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
      )
      .map(f => ({
        key: f.columnName,
        min: f.min,
        max: f.max,
      }))

  // Extract queryText by concatenating all TextMatchesQueryFilter searchExpression values
  const textMatchesExpressions = queryBundleRequest.query.additionalFilters
    ?.filter(
      (f): f is TextMatchesQueryFilter =>
        f.concreteType === TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
    )
    .map(f => f.searchExpression)
    .filter((expr): expr is string => expr != null && expr.length > 0)
  const queryText =
    textMatchesExpressions && textMatchesExpressions.length > 0
      ? textMatchesExpressions.join(' ')
      : undefined

  const searchQuery: SearchSearchQuery = {
    facetRequests: facetRequests?.length ? facetRequests : undefined,
    termsFilters: termsFilters?.length ? termsFilters : undefined,
    rangeFilters: rangeFilters?.length ? rangeFilters : undefined,
    queryText,
    limit: queryBundleRequest.query.limit,
    offset: queryBundleRequest.query.offset,
  }

  return {
    concreteType:
      'org.sagebionetworks.repo.model.search.table.SearchIndexQuery' as const,
    searchIndexId,
    searchQuery,
  }
}

/**
 * Converts a SearchQueryResults (the actual API response) into a QueryResultBundle
 * so that existing subcomponents (FacetFilterControls, RowSetView, etc.) work unchanged.
 *
 * Mapping:
 *  - totalHits → queryCount
 *  - hits → queryResult.queryResults (rows derived from hit.rowId/rowVersion/fields)
 *  - facets → facets (same FacetColumnResult type)
 */
export function searchQueryResultsToQueryResultBundle(
  results: SearchQueryResults | undefined,
  query: SearchIndexQuery,
  columnModels?: ColumnModel[],
): QueryResultBundle {
  if (!results) {
    return {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    }
  }

  // Derive column names from the server-returned selectColumns. Both the row data
  // query and the metadata query request SELECT_COLUMNS, so this is always present.
  const fieldNames: string[] =
    results.selectColumns
      ?.map(col => col.name)
      .filter((n): n is string => !!n) ?? []

  const headers = fieldNames.map(name => ({
    name,
    columnType:
      columnModels?.find(cm => cm.name === name)?.columnType ??
      ('STRING' as const),
  }))

  const rows = (results.hits ?? []).map(hit => ({
    rowId: hit.rowId,
    versionNumber: hit.rowVersion,
    values: fieldNames.map(name => {
      return hit.fields?.find(f => f.name === name)?.value ?? null
    }),
  }))

  const queryResult =
    headers.length > 0 || rows.length > 0
      ? {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryResult' as const,
          queryResults: {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryResultBundle',
            tableId: query.searchIndexId ?? '',
            etag: '',
            headers,
            rows,
          },
        }
      : undefined

  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: results.totalHits,
    selectColumns: headers,
    queryResult,
    // FacetColumnResult is the same discriminated union type in both response shapes
    facets: results.facets as QueryResultBundle['facets'],
  }
}

export function getSearchQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  keyFactory: KeyFactory,
  accessToken: string | undefined,
  searchIndexId: string,
  columnModels?: ColumnModel[],
): SearchTableQueryUseQueryOptions {
  const rowDataQuery: SearchIndexQuery = {
    ...toSearchIndexQuery(queryBundleRequest, searchIndexId, columnModels),
    // Request SELECT_COLUMNS so headers are available for row rendering.
    // HITS is returned by default even when responseParts is specified.
    responseParts: new Set(['HITS', 'SELECT_COLUMNS'] as const),
  }
  const metadataQuery: SearchIndexQuery = {
    ...toSearchIndexQuery(queryBundleRequest, searchIndexId, columnModels),
    // Request all opt-in parts needed for the metadata response:
    // TOTAL_HITS → queryCount (drives tab count / spinner resolution)
    // SELECT_COLUMNS → column headers for the table
    // FACETS → facet aggregations for FacetFilterControls / plots
    responseParts: new Set(['TOTAL_HITS', 'SELECT_COLUMNS', 'FACETS'] as const),
  }

  // Convert responseParts Set → sorted array for query key building.
  // JSON.stringify(new Set([...])) === '{}', so two queries whose only difference is
  // their responseParts would hash to the same key and share a cache entry.
  // Using a sorted array gives each query a distinct, stable key.
  const toKeyShape = (query: SearchIndexQuery) => ({
    ...query,
    responseParts: query.responseParts
      ? [...query.responseParts].sort()
      : undefined,
  })

  // Fetches from the SearchQueryServicesApi and converts the SearchQueryResults responseBody
  // into QueryResultBundle shape. This allows all downstream shared components
  // (UseRowSet, QueryVisualizationWrapper, etc.) to access data.responseBody.*
  // using the same patterns as regular table queries (queryResult.queryResults, selectColumns, etc.).
  const fetchAndConvert = async (query: SearchIndexQuery) => {
    const asyncStatus = await SynapseClient.getSearchQueryAsyncJobResults(
      query,
      accessToken,
    )
    return {
      ...asyncStatus,
      responseBody: searchQueryResultsToQueryResultBundle(
        asyncStatus.responseBody,
        query,
        columnModels,
      ),
    }
  }

  // `as unknown as` is necessary because SearchIndexQuery.responseParts is a Set but
  // toKeyShape converts it to a sorted string[] for stable cache key serialisation.
  const rowDataQueryOptions: SearchTableQueryUseQueryOptions['rowDataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(rowDataQuery) as unknown as SearchIndexQuery,
        false,
      ),
      queryFn: () => fetchAndConvert(rowDataQuery),
      select: (
        data: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
      ): RowSet | undefined => data.responseBody?.queryResult?.queryResults,
    }

  const rowDataInfiniteQueryOptions: SearchTableQueryUseQueryOptions['rowDataInfiniteQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(rowDataQuery) as unknown as SearchIndexQuery,
        true,
      ),
      initialPageParam: 0 as number | string | undefined,
      getNextPageParam: (
        lastPage: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
        allPages: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>[],
      ): number | string | undefined => {
        const totalRows = lastPage.responseBody?.queryCount
        const fetchedRows = allPages.reduce(
          (acc, page) =>
            acc +
            (page.responseBody?.queryResult?.queryResults.rows?.length ?? 0),
          0,
        )
        if (totalRows != null && fetchedRows >= totalRows) {
          return undefined
        }
        return fetchedRows
      },
      queryFn: (context: { pageParam?: number | string }) => {
        const offset =
          typeof context.pageParam === 'string'
            ? parseInt(context.pageParam)
            : context.pageParam ?? 0
        const requestForPage: SearchIndexQuery = {
          ...rowDataQuery,
          searchQuery: {
            ...rowDataQuery.searchQuery,
            offset,
          },
        }
        return fetchAndConvert(requestForPage)
      },
      select: (
        data: InfiniteData<
          AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>
        >,
      ) => data,
    }

  const queryMetadataQueryOptions: SearchTableQueryUseQueryOptions['queryMetadataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(metadataQuery) as unknown as SearchIndexQuery,
        false,
      ),
      queryFn: () => fetchAndConvert(metadataQuery),
      select: (
        data: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
      ): Omit<QueryResultBundle, 'queryResult'> => {
        const result = omit(data.responseBody ?? {}, 'queryResult') as Omit<
          QueryResultBundle,
          'queryResult'
        >
        return columnModels ? { ...result, columnModels } : result
      },
    }

  return {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  }
}

/**
 * Returns a stable callback that fetches autocomplete suggestions for a search input
 * using the synchronous `POST /search/autocomplete` endpoint.
 *
 * The query is built from the current `searchIndexId` and `autocompleteFieldName`:
 *  - `searchQuery.queryText` is set to the user-entered search text
 *  - `searchQuery.queryFields` is set to `[autocompleteFieldName]` so the server
 *    only returns values for that single field
 *
 * When `autocompleteFieldName` is undefined, the returned callback immediately returns `[]`.
 */
export function useGetSuggestionsForSearchIndex(
  searchIndexId: string,
  autocompleteFieldName: string | undefined,
): (searchText: string) => Promise<string[]> {
  const { synapseClient } = useSynapseContext()

  return useCallback(
    async (searchText: string): Promise<string[]> => {
      if (!autocompleteFieldName) return []
      const trimmed = searchText.trim()
      if (!trimmed) return []
      const results =
        await synapseClient.searchManagementServicesClient.postRepoV1SearchAutocomplete(
          {
            searchIndexQuery: {
              concreteType:
                'org.sagebionetworks.repo.model.search.table.SearchIndexQuery' as const,
              searchIndexId,
              searchQuery: {
                queryText: trimmed,
                queryFields: [autocompleteFieldName],
                returnFields: [autocompleteFieldName],
              },
            },
          },
        )
      const suggestions: string[] = []
      for (const hit of results.hits ?? []) {
        for (const field of hit.fields ?? []) {
          if (field.value) {
            suggestions.push(field.value)
          }
        }
      }
      return suggestions
    },
    [synapseClient, searchIndexId, autocompleteFieldName],
  )
}

/**
 * Returns TanStack Query options that call the SearchQueryServicesApi (instead of the
 * standard Table Query API) but return data in the same QueryResultBundle format, allowing
 * all existing subcomponents (FacetFilterControls, RowSetView, etc.) to work unchanged.
 */
export function useSearchQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  searchIndexId: string,
  synapseId?: string,
): SearchTableQueryUseQueryOptions {
  const { keyFactory, accessToken } = useSynapseContext()

  const { data: entityBundle } = useGetEntityBundle(synapseId, undefined, {
    includeTableBundle: true,
  })
  const columnModels = entityBundle?.tableBundle?.columnModels

  return useMemo(
    () =>
      getSearchQueryUseQueryOptions(
        queryBundleRequest,
        keyFactory,
        accessToken,
        searchIndexId,
        columnModels,
      ),
    [keyFactory, accessToken, queryBundleRequest, searchIndexId, columnModels],
  )
}
