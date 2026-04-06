import * as SynapseClient from '@/synapse-client/SynapseClient'
import { tableQueryUseQueryDefaults } from '@/synapse-queries'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
} from '@/utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
  SearchQueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { InfiniteData } from '@tanstack/react-query'
import { omit } from 'lodash-es'
import { useMemo } from 'react'
import { TableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'
import { KeyFactory } from '@/synapse-queries/KeyFactory'

/**
 * Converts a QueryBundleRequest (used internally for state management) into a SearchQueryBundleRequest
 * that can be sent to the SearchQueryServicesApi.
 */
export function toSearchQueryBundleRequest(
  queryBundleRequest: QueryBundleRequest,
  partMask?: number,
): SearchQueryBundleRequest {
  return {
    concreteType:
      'org.sagebionetworks.repo.model.search.query.SearchQueryBundleRequest',
    query: {
      selectedFacets: queryBundleRequest.query.selectedFacets,
      limit: queryBundleRequest.query.limit,
      offset: queryBundleRequest.query.offset,
    },
    partMask: partMask ?? queryBundleRequest.partMask,
  }
}

export function getSearchQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  keyFactory: KeyFactory,
  accessToken: string | undefined,
): TableQueryUseQueryOptions {
  const rowDataRequest = toSearchQueryBundleRequest(
    queryBundleRequest,
    BUNDLE_MASK_QUERY_RESULTS,
  )

  const metadataPartMask =
    (queryBundleRequest.partMask ?? 0) & ~BUNDLE_MASK_QUERY_RESULTS
  const metadataRequest = toSearchQueryBundleRequest(
    queryBundleRequest,
    metadataPartMask,
  )

  // Cast to the expected TableQueryUseQueryOptions types — necessary because
  // SearchQueryBundleRequest differs from QueryBundleRequest (no entityId/sql).
  const rowDataQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      rowDataRequest,
      false,
    ),
    queryFn: () =>
      SynapseClient.getSearchQueryAsyncJobResults(rowDataRequest, accessToken),
    select: (
      data: AsynchronousJobStatus<SearchQueryBundleRequest, QueryResultBundle>,
    ): RowSet | undefined => data.responseBody?.queryResult?.queryResults,
  } as unknown as TableQueryUseQueryOptions['rowDataQueryOptions']

  const rowDataInfiniteQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      rowDataRequest,
      true,
    ),
    initialPageParam: 0 as number | string | undefined,
    getNextPageParam: (
      lastPage: AsynchronousJobStatus<
        SearchQueryBundleRequest,
        QueryResultBundle
      >,
      allPages: AsynchronousJobStatus<
        SearchQueryBundleRequest,
        QueryResultBundle
      >[],
    ): number | string | undefined => {
      const totalRows = lastPage.responseBody?.queryCount
      const fetchedRows = allPages.reduce(
        (acc, page) =>
          acc +
          (page.responseBody?.queryResult?.queryResults?.rows?.length ?? 0),
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
      const requestForPage = toSearchQueryBundleRequest(
        queryBundleRequest,
        offset !== 0
          ? BUNDLE_MASK_QUERY_RESULTS
          : (queryBundleRequest.partMask ?? 0) | BUNDLE_MASK_QUERY_COUNT,
      )
      requestForPage.query.offset = offset
      return SynapseClient.getSearchQueryAsyncJobResults(
        requestForPage,
        accessToken,
      )
    },
    select: (
      data: InfiniteData<
        AsynchronousJobStatus<SearchQueryBundleRequest, QueryResultBundle>
      >,
    ) => {
      // Merge first-page metadata into subsequent pages that only have row data
      const firstPage = data?.pages[0]
      if (firstPage?.responseBody) {
        for (let i = 1; i < data.pages.length; i++) {
          if (data.pages[i].responseBody == null) {
            data.pages[i] = {
              ...data.pages[i],
              responseBody: {
                ...firstPage.responseBody,
                queryResult: data.pages[i].responseBody?.queryResult,
              },
            }
          }
        }
      }
      return data
    },
  } as unknown as TableQueryUseQueryOptions['rowDataInfiniteQueryOptions']

  const queryMetadataQueryOptions = {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
      metadataRequest,
      false,
    ),
    queryFn: () =>
      SynapseClient.getSearchQueryAsyncJobResults(metadataRequest, accessToken),
    select: (
      data: AsynchronousJobStatus<SearchQueryBundleRequest, QueryResultBundle>,
    ): Omit<QueryResultBundle, 'queryResult'> =>
      omit(data.responseBody, 'queryResult') as Omit<
        QueryResultBundle,
        'queryResult'
      >,
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
): TableQueryUseQueryOptions {
  const { keyFactory, accessToken } = useSynapseContext()

  return useMemo(
    () =>
      getSearchQueryUseQueryOptions(
        queryBundleRequest,
        keyFactory,
        accessToken,
      ),
    [keyFactory, accessToken, queryBundleRequest],
  )
}
