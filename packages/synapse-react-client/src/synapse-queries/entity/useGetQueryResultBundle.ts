import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { partitionQueryBundleRequestIntoRowsAndMetadata } from '@/utils/functions/queryUtils'
import {
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
  DEFAULT_PAGE_SIZE,
} from '@/utils/SynapseConstants'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { merge } from 'lodash-es'
import { useMemo } from 'react'
import { KeyFactory } from '../KeyFactory'

export const tableQueryUseQueryDefaults = {
  staleTime: 1000 * 60 * 30, // 30 minutes
}

/**
 *
 * @param queryBundleRequest
 * @param options
 * @returns
 *
 * @deprecated - use useGetQueryResultBundleWithAsyncStatus. That hook can be renamed and this can be removed
 *  when all cases are using useGetQueryResultBundleWithAsyncStatus
 */
export default function useGetQueryResultBundle<TData = QueryResultBundle>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<QueryResultBundle, SynapseClientError, TData>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<QueryResultBundle, SynapseClientError, TData>({
    ...tableQueryUseQueryDefaults,
    ...options,
    queryKey: keyFactory.getEntityTableQueryResultQueryKey(
      queryBundleRequest,
      false,
    ),
    queryFn: () =>
      SynapseClient.getQueryTableResults(queryBundleRequest, accessToken),
  })
}

function useGetQueryResultBundleWithAsyncStatusInternal<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TData
    >
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...tableQueryUseQueryDefaults,
    ...options,
    queryKey: keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
      queryBundleRequest,
      false,
    ),

    queryFn: () =>
      SynapseClient.getQueryTableAsyncJobResults(
        queryBundleRequest,
        accessToken,
        setCurrentAsyncStatus,
      ),
  })
}

export function useGetQueryRows<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TData
    >
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { rowDataRequest } =
    partitionQueryBundleRequestIntoRowsAndMetadata(queryBundleRequest)

  const enableQuery = rowDataRequest.partMask > 0 ? options?.enabled : false

  return useGetQueryResultBundleWithAsyncStatusInternal<TData>(
    rowDataRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

export function useGetQueryStats<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TData
    >
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { queryMetadataRequest } =
    partitionQueryBundleRequestIntoRowsAndMetadata(queryBundleRequest)

  const enableQuery =
    queryMetadataRequest.partMask > 0 ? options?.enabled : false

  return useGetQueryResultBundleWithAsyncStatusInternal<TData>(
    queryMetadataRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

/**
 * The set of properties returned by UseQuery where the results can be safely merged and memoized
 */
type UseQueryResultMergeableProperties<TData, TError> = Pick<
  UseQueryResult<TData, TError>,
  | 'data'
  | 'status'
  | 'isError'
  | 'isLoading'
  | 'error'
  | 'isSuccess'
  | 'isPlaceholderData'
  | 'isPending'
  // Note -- this list is not comprehensive. If there is a merge-able property you need, then add it!
>

/**
 * Returns a memoized object that contains the merge-able properties in the provided UseQueryResult
 * @param useQueryResult
 */
function useGetMemoizedMergeableProperties<TData, TError>(
  useQueryResult: UseQueryResult<TData, TError>,
): UseQueryResultMergeableProperties<TData, TError> {
  return useMemo(
    () => ({
      data: useQueryResult.data,
      status: useQueryResult.status,
      isError: useQueryResult.isError,
      isLoading: useQueryResult.isLoading,
      error: useQueryResult.error,
      isSuccess: useQueryResult.isSuccess,
      isPlaceholderData: useQueryResult.isPlaceholderData,
      isPending: useQueryResult.isPending,
    }),
    [
      useQueryResult.data,
      useQueryResult.error,
      useQueryResult.isError,
      useQueryResult.isLoading,
      useQueryResult.isPending,
      useQueryResult.isPlaceholderData,
      useQueryResult.isSuccess,
      useQueryResult.status,
    ],
  )
}

export function useGetQueryResultBundleWithAsyncStatus<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<
      AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
      SynapseClientError,
      TData
    >
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
): UseQueryResultMergeableProperties<TData, SynapseClientError> {
  /**
   * Separate the query into two parts
   *  - Query result rows, which will change each page
   *  - Everything else, which does not change each page
   */
  const rowResult = useGetQueryRows<TData>(
    queryBundleRequest,
    options,
    setCurrentAsyncStatus,
  )
  const statsResult = useGetQueryStats<TData>(
    queryBundleRequest,
    options,
    setCurrentAsyncStatus,
  )

  // The rowResult and statsResult objects change every render.
  // Memoize the two query results so that we can safely memoize the result that we return
  const rowResultMergeableProperties =
    useGetMemoizedMergeableProperties(rowResult)
  const statsResultMergeableProperties =
    useGetMemoizedMergeableProperties(statsResult)

  const mergedBundle = useMemo(() => {
    // If either query is in error, return the error
    if (rowResultMergeableProperties.status === 'error') {
      return rowResultMergeableProperties
    } else if (statsResultMergeableProperties.status === 'error') {
      return statsResultMergeableProperties
    } else if (rowResultMergeableProperties.isLoading) {
      // if either query is loading, return the loading status
      return rowResultMergeableProperties
    } else if (statsResultMergeableProperties.isLoading) {
      return statsResultMergeableProperties
    } else {
      // Otherwise, both queries are successful or idle, Merge the results into a single object
      if (rowResultMergeableProperties.isPending) {
        // If the row result is pending, apply the stats result last to override the pending status
        return merge(
          {},
          rowResultMergeableProperties,
          statsResultMergeableProperties,
        )
      } else {
        // Otherwise, always apply the rowResult last, since it is likely have been fetched more recently than the stats.
        return merge(
          {},
          statsResultMergeableProperties,
          rowResultMergeableProperties,
        )
      }
    }
  }, [rowResultMergeableProperties, statsResultMergeableProperties])

  return mergedBundle
}

export function getInfiniteQueryResultBundleOptions(
  queryBundleRequest: QueryBundleRequest,
  keyFactory: KeyFactory,
  accessToken: string | undefined,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
): UseInfiniteQueryOptions<
  AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  SynapseClientError,
  InfiniteData<AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>>,
  QueryKey,
  string | number | undefined
> {
  return {
    ...tableQueryUseQueryDefaults,
    queryKey: keyFactory.getEntityTableQueryResultQueryKey(
      queryBundleRequest,
      true,
    ),
    queryFn: context => {
      const offset =
        typeof context.pageParam === 'string'
          ? parseInt(context.pageParam)
          : context.pageParam ?? 0
      return SynapseClient.getQueryTableAsyncJobResults(
        {
          ...queryBundleRequest,
          query: {
            ...queryBundleRequest.query,
            offset: offset,
          },
          /**
           * If we're on the first page, send the original partMask.
           * Otherwise, just ask for the queryResults (if they're in the original partMask), as it's the only part that changes between pages.
           *
           * We'll merge the "aggregation" parts and the pages of queryResults in the `select` function.
           *
           * We need the queryCount to know when to stop fetching data, so retrieve that in the first bundle.
           */
          partMask:
            offset !== 0
              ? queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
              : queryBundleRequest.partMask | BUNDLE_MASK_QUERY_COUNT,
        },
        accessToken,
        setCurrentAsyncStatus,
      )
    },
    select: data => {
      /**
       * Since we only fetch queryResults on 2nd and subsequent pages, we add to all pages the aggregate parts
       * that we only fetched on the first page.
       */
      const firstPage = data?.pages[0]
      if (firstPage.responseBody) {
        for (let i = 0; i < data.pages.length; i++) {
          const page = data.pages[i]
          if (page.responseBody != null) {
            data.pages[i].responseBody = {
              ...firstPage.responseBody,
              // queryResult changes on each page.
              queryResult: page.responseBody.queryResult,
            }
          }
        }
      }
      return data
    },
    getPreviousPageParam: firstPage => {
      if (firstPage.jobState !== 'COMPLETE') {
        return undefined
      }
      const request = firstPage.requestBody
      if (request.query.offset == null || request.query.offset === 0) {
        return undefined
      }
      const pageSize = request.query.limit ?? DEFAULT_PAGE_SIZE

      return Math.max(request.query.offset - pageSize, 0)
    },
    initialPageParam: undefined,
    getNextPageParam: (page, allPages) => {
      if (page.jobState !== 'COMPLETE') {
        return undefined
      }
      const request = page.requestBody
      const pageSize = request.query.limit ?? DEFAULT_PAGE_SIZE
      const totalQueryResultCount = allPages[0].responseBody?.queryCount
      if (totalQueryResultCount != null) {
        // We know the total number of results. See if our offset + pageSize is >= the total
        if ((request.query.offset ?? 0) + pageSize >= totalQueryResultCount) {
          return undefined
        }
      }
      return page.responseBody!.queryResult?.queryResults.rows.length ===
        pageSize
        ? (request.query.offset ?? 0) + pageSize
        : undefined
    },
  }
}

/**
 * Fetches all rows for a table query. Only use this request if you require all rows in a table at once.
 */
export function useGetFullTableQueryResults<TData = QueryResultBundle>(
  queryBundleRequest: QueryBundleRequest,
  options?: Partial<
    UseQueryOptions<QueryResultBundle, SynapseClientError, TData>
  >,
  forceAnonymous: boolean = false,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<QueryResultBundle, SynapseClientError, TData>({
    ...tableQueryUseQueryDefaults,
    ...options,
    queryKey: keyFactory.getFullTableQueryResultQueryKey(
      queryBundleRequest,
      forceAnonymous,
    ),

    queryFn: () =>
      SynapseClient.getFullQueryTableResults(
        queryBundleRequest,
        forceAnonymous ? undefined : accessToken,
      ),
  })
}
