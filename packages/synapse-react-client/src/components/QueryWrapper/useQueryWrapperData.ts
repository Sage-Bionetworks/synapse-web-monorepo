import React from 'react'
import {
  useGetQueryResultBundleWithAsyncStatus,
  useInfiniteQueryResultBundle,
} from '../../synapse-queries'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useMemo, useState } from 'react'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { UseInfiniteQueryResult } from '@tanstack/react-query'

type InfiniteDataPage = number | 'ALL'

type InfiniteDataQueryPageControls = Pick<
  UseInfiniteQueryResult<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
    SynapseClientError
  >,
  | 'fetchNextPage'
  | 'fetchPreviousPage'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'isFetchingNextPage'
> & {
  currentPage: InfiniteDataPage
  setCurrentPage: React.Dispatch<React.SetStateAction<InfiniteDataPage>>
}

export type UseQueryWrapperDataReturn<TIsInfiniteData extends boolean> = {
  data?: QueryResultBundle
  currentAsyncStatus?: AsynchronousJobStatus<
    QueryBundleRequest,
    QueryResultBundle
  >
  error: SynapseClientError | null
  isLoadingNewBundle: boolean
} & (TIsInfiniteData extends true ? InfiniteDataQueryPageControls : object)

/**
 * Hook for the QueryWrapper component that fetches table query data and provides functions that can be used to
 * load additional data.
 *
 * Returned data can be paginated or "infinite" based on `isInfinite` parameter.
 */
export default function useQueryWrapperData<T extends boolean = boolean>(
  query: QueryBundleRequest,
  isInfinite?: T,
): UseQueryWrapperDataReturn<T> {
  const [currentAsyncStatus, setCurrentAsyncStatus] = useState<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle> | undefined
  >(undefined)

  /**
   * If we're showing an infinite list of data, use custom pagination handling instead of pagination utils provided by
   * useImmutableTableQuery
   */
  const [infiniteDataCurrentPage, setInfiniteDataCurrentPage] = useState<
    number | 'ALL'
  >(0)

  const {
    data: paginatedData,
    isLoading: paginatedQueryIsLoading,
    isPlaceholderData: newPaginatedQueryIsFetching,
    error: paginatedQueryError,
  } = useGetQueryResultBundleWithAsyncStatus(
    query,
    {
      enabled: !isInfinite,
      // We set `placeholderData` to be `previousData` because we don't want to clear out the current data when the query is modified via the UI
      placeholderData: previousData => previousData,
    },
    setCurrentAsyncStatus,
  )

  const {
    data: infiniteData,
    hasNextPage: infiniteDataHasNextPage,
    fetchPreviousPage: infiniteDataFetchPreviousPage,
    fetchNextPage: infiniteDataFetchNextPage,
    isFetchingNextPage: infiniteDataIsFetchingNextPage,
    isLoading: infiniteDataQueryIsLoading,
    error: infiniteDataError,
    isPlaceholderData: newInfiniteDataQueryIsFetching,
  } = useInfiniteQueryResultBundle(
    query,
    {
      enabled: isInfinite,
      // We set `placeholderData` to be `previousData` because we don't want to clear out the current data when the query is modified via the UI
      placeholderData: previousData => previousData,
    },
    setCurrentAsyncStatus,
  )

  const data = useMemo(() => {
    if (!isInfinite) {
      return paginatedData?.responseBody
    } else {
      if (
        infiniteData == null ||
        infiniteData.pages.length === 0 ||
        infiniteData.pages[0].responseBody == null
      ) {
        return undefined
      }

      if (infiniteDataCurrentPage === 'ALL') {
        // Modify the first page so the result is the concatenation of all the fetched rows.
        return {
          ...infiniteData?.pages[0].responseBody,
          queryResult: {
            ...infiniteData?.pages[0].responseBody?.queryResult,
            queryResults: {
              ...infiniteData?.pages[0].responseBody?.queryResult?.queryResults,
              rows:
                infiniteData.pages.flatMap(
                  page => page.responseBody!.queryResult?.queryResults.rows,
                ) ?? [],
            },
          },
        } as QueryResultBundle
      }
      return infiniteData?.pages[infiniteDataCurrentPage].responseBody
    }
  }, [
    infiniteData,
    infiniteDataCurrentPage,
    isInfinite,
    paginatedData?.responseBody,
  ])

  const error = isInfinite ? infiniteDataError : paginatedQueryError

  const queryIsLoading = isInfinite
    ? infiniteDataQueryIsLoading
    : paginatedQueryIsLoading
  const newQueryIsFetching = isInfinite
    ? newInfiniteDataQueryIsFetching
    : newPaginatedQueryIsFetching

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand-new query (newQueryIsFetching)
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  const paginationControls = (
    isInfinite
      ? {
          hasNextPage: infiniteDataHasNextPage,
          fetchPreviousPage: infiniteDataFetchPreviousPage,
          fetchNextPage: infiniteDataFetchNextPage,
          isFetchingNextPage: infiniteDataIsFetchingNextPage,
          currentPage: infiniteDataCurrentPage,
          setCurrentPage: setInfiniteDataCurrentPage,
        }
      : {}
  ) as T extends true ? InfiniteDataQueryPageControls : object

  return {
    data,
    currentAsyncStatus,
    isLoadingNewBundle,
    error,
    ...paginationControls,
  }
}
