import { merge } from 'lodash-es'
import { useMemo } from 'react'
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  DEFAULT_PAGE_SIZE,
} from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

const sharedQueryDefaults = {
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
export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<QueryResultBundle, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<QueryResultBundle, SynapseClientError>(
    keyFactory.getEntityTableQueryResultQueryKey(queryBundleRequest, false),
    () => SynapseClient.getQueryTableResults(queryBundleRequest, accessToken),
    {
      ...sharedQueryDefaults,
      ...options,
    },
  )
}

function _useGetQueryResultBundleWithAsyncStatus<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TData
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TData
  >(
    keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
      queryBundleRequest,
      false,
    ),
    () =>
      SynapseClient.getQueryTableAsyncJobResults(
        queryBundleRequest,
        accessToken,
        setCurrentAsyncStatus,
      ),
    {
      ...sharedQueryDefaults,
      ...options,
    },
  )
}

function useGetQueryRows<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TData
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  // Get the request for just the rows
  const queryRowsBundleRequestMask =
    queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
  const rowsOnlyQueryBundleRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    partMask: queryRowsBundleRequestMask,
  }

  const enableQuery = queryRowsBundleRequestMask > 0 ? options?.enabled : false

  return _useGetQueryResultBundleWithAsyncStatus<TData>(
    rowsOnlyQueryBundleRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

function useGetQueryStats<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TData
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  // Bitwise remove the query result flag from the mask
  const queryStatsMask =
    queryBundleRequest.partMask & ~BUNDLE_MASK_QUERY_RESULTS
  const queryStatsRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    query: {
      ...queryBundleRequest.query,
      // Remove query fields that don't affect the results.
      offset: undefined,
      limit: undefined,
      sort: undefined,
    },
    partMask: queryStatsMask,
  }

  const enableQuery = queryStatsMask > 0 ? options?.enabled : false

  return _useGetQueryResultBundleWithAsyncStatus<TData>(
    queryStatsRequest,
    {
      ...options,
      enabled: enableQuery,
    },
    setCurrentAsyncStatus,
  )
}

export function useGetQueryResultBundleWithAsyncStatus<
  TData = AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
>(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError,
    TData
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
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

  const mergedBundle = useMemo(() => {
    // If either query is in error, return the error
    if (rowResult.status === 'error') {
      return rowResult
    } else if (statsResult.status === 'error') {
      return statsResult
    } else if (rowResult.status === 'loading') {
      // if either query is loading, return the loading status
      return rowResult
    } else if (statsResult.status === 'loading') {
      return statsResult
    } else {
      // Otherwise, both queries are successful or idle, Merge the results into a single object
      if (rowResult.status === 'idle') {
        // If the row result is idle, apply the stats result last to override the idle status
        return merge({}, rowResult, statsResult)
      } else {
        // Otherwise, always apply the rowResult last, since it is likely have been fetched more recently than the stats.
        return merge({}, statsResult, rowResult)
      }
    }
  }, [rowResult, statsResult])

  return mergedBundle
}
export function useInfiniteQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseInfiniteQueryOptions<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  setCurrentAsyncStatus?: (
    status: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >(
    keyFactory.getEntityTableQueryResultQueryKey(queryBundleRequest, true),
    (context: QueryFunctionContext<QueryKey, string>) => {
      const offset = context.pageParam ? parseInt(context.pageParam) : 0
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
           */
          partMask:
            offset !== 0
              ? queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS
              : queryBundleRequest.partMask,
        },
        accessToken,
        setCurrentAsyncStatus,
      )
    },
    {
      ...sharedQueryDefaults,
      ...options,
      select: data => {
        /**
         * Since we we only fetch queryResults on 2nd and subsequent pages, we add to all pages the aggregate parts
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
    },
  )
}

/**
 * Fetches all rows for a table query. Only use this request if you require all rows in a table at once.
 */
export function useGetFullTableQueryResults(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<QueryResultBundle, SynapseClientError>,
  forceAnonymous: boolean = false,
): UseQueryResult<QueryResultBundle, SynapseClientError> {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<QueryResultBundle, SynapseClientError>(
    keyFactory.getFullTableQueryResultQueryKey(
      queryBundleRequest,
      forceAnonymous,
    ),
    () =>
      SynapseClient.getFullQueryTableResults(
        queryBundleRequest,
        forceAnonymous ? undefined : accessToken,
      ),
    {
      ...sharedQueryDefaults,
      ...options,
    },
  )
}
