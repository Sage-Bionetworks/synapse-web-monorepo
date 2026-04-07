import * as SynapseClient from '@/synapse-client/SynapseClient'
import { tableQueryUseQueryDefaults } from '@/synapse-queries'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  AsynchronousJobStatus,
  ColumnModel,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import type {
  FacetRequest,
  SearchIndexQuery,
  SearchQueryResults,
} from '@sage-bionetworks/synapse-client'
import { InfiniteData } from '@tanstack/react-query'
import { omit } from 'lodash-es'
import { useMemo } from 'react'
import { TableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'
import { KeyFactory } from '@/synapse-queries/KeyFactory'

/**
 * Converts a QueryBundleRequest (used internally for state management) into a SearchIndexQuery
 * that can be sent to the SearchQueryServicesApi.
 *
 * Mapping:
 *  - query.selectedFacets → facetRequests (column names for aggregation)
 *  - query.limit → limit
 *  - query.offset → offset
 *  - partMask → dropped (SearchIndexQuery has no bitmask concept)
 */
export function toSearchIndexQuery(
  queryBundleRequest: QueryBundleRequest,
  searchIndexId: string,
): SearchIndexQuery {
  const facetRequests: FacetRequest[] | undefined =
    queryBundleRequest.query.selectedFacets?.map(f => ({
      columnName: f.columnName,
    }))

  return {
    searchIndexId,
    facetRequests: facetRequests?.length ? facetRequests : undefined,
    limit: queryBundleRequest.query.limit,
    offset: queryBundleRequest.query.offset,
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

  // Derive SelectColumn headers from returnFields or from the first hit's field names
  const fieldNames: string[] =
    query.returnFields ??
    results.hits?.[0]?.fields?.map(f => f.name ?? '').filter(Boolean) ??
    []

  const headers = fieldNames.map(name => ({
    name,
    columnType:
      columnModels?.find(cm => cm.name === name)?.columnType ??
      ('STRING' as const),
  }))

  const rows = (results.hits ?? []).map(hit => ({
    rowId: hit.rowId,
    versionNumber: hit.rowVersion,
    values: fieldNames.map(
      name => hit.fields?.find(f => f.name === name)?.value ?? null,
    ),
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
): TableQueryUseQueryOptions {
  const rowDataQuery = toSearchIndexQuery(queryBundleRequest, searchIndexId)
  const metadataQuery = toSearchIndexQuery(queryBundleRequest, searchIndexId)

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

  // `as unknown as` is necessary because TableQueryUseQueryOptions is parameterized
  // over QueryBundleRequest, but SearchIndexQuery has a different shape.
  // The runtime shape is compatible — only the TypeScript generics differ.
  const rowDataQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      rowDataQuery,
      false,
    ),
    queryFn: () => fetchAndConvert(rowDataQuery),
    select: (
      data: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    ): RowSet | undefined => data.responseBody?.queryResult?.queryResults,
  } as unknown as TableQueryUseQueryOptions['rowDataQueryOptions']

  const rowDataInfiniteQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      rowDataQuery,
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
        offset,
      }
      return fetchAndConvert(requestForPage)
    },
    select: (
      data: InfiniteData<
        AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>
      >,
    ) => data,
    // Same rationale as rowDataQueryOptions: SearchIndexQuery vs QueryBundleRequest generics.
  } as unknown as TableQueryUseQueryOptions['rowDataInfiniteQueryOptions']

  const queryMetadataQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      metadataQuery,
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
    // Same rationale as rowDataQueryOptions: SearchIndexQuery vs QueryBundleRequest generics.
  } as unknown as TableQueryUseQueryOptions['queryMetadataQueryOptions']

  return {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  }
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
): TableQueryUseQueryOptions {
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
