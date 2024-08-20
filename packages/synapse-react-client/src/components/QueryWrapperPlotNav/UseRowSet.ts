import { useQueryContext } from '../QueryContext'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { cloneDeep } from 'lodash-es'
import { RowSet } from '@sage-bionetworks/synapse-types'
import { queryRequestsHaveSameTotalResults } from '../../utils/functions/queryUtils'

function useGetInfiniteRowSet() {
  const { isInfinite, rowDataInfiniteQueryOptions } = useQueryContext()
  const infiniteQuery = useInfiniteQuery({
    ...rowDataInfiniteQueryOptions,
    enabled: isInfinite,
  })

  const infiniteQueryProgressMessage = useInfiniteQuery({
    ...rowDataInfiniteQueryOptions,
    select: asyncJob => asyncJob.pages[0].progressMessage,
    enabled: isInfinite,
  })

  const infiniteQueryRowSet: RowSet | undefined = useMemo(() => {
    const rowSet = cloneDeep(
      infiniteQuery.data?.pages[0]?.responseBody?.queryResult?.queryResults,
    )
    if (rowSet) {
      rowSet.rows =
        infiniteQuery.data?.pages.flatMap(
          page => page.responseBody?.queryResult?.queryResults.rows || [],
        ) || []
    }
    return rowSet
  }, [infiniteQuery.data?.pages])

  return {
    infiniteQuery,
    infiniteQueryRowSet,
    infiniteQueryProgressMessage,
  }
}

function useGetPaginatedRowSet() {
  const { isInfinite, rowDataQueryOptions, getCurrentQueryRequest } =
    useQueryContext()
  const paginatedQuery = useQuery({
    ...rowDataQueryOptions,
    enabled: !isInfinite,
    // Keep the previous data when fetching a new page. We will use `UseQueryResult.isPlaceholderData` to trigger a showing placeholder UI
    placeholderData: prevData => {
      if (prevData) {
        // Check that only the page/sort changed; if the filters/sql changed, then don't hold on to the old data
        if (
          queryRequestsHaveSameTotalResults(
            prevData.requestBody.query,
            getCurrentQueryRequest().query,
          )
        ) {
          return prevData
        }
      }
      return undefined
    },
  })
  const paginatedQueryProgressMessage = useQuery({
    ...rowDataQueryOptions,
    select: asyncJob => asyncJob.progressMessage,
    enabled: !isInfinite,
    // Keep the previous data when fetching a new page. We will use `isPlaceholderData` to trigger a showing placeholder UI
    placeholderData: prevData => prevData,
  })

  return { paginatedQuery, paginatedQueryProgressMessage }
}

/**
 * Fetches the row data for a query and returns a RowSet that can be rendered as cards or a table. Respects the value of
 * QueryContext.isInfinite.
 * @param initialLimit
 */
export function useRowSet(initialLimit?: number) {
  const { isInfinite } = useQueryContext()

  const { paginatedQuery, paginatedQueryProgressMessage } =
    useGetPaginatedRowSet()
  const { infiniteQuery, infiniteQueryRowSet, infiniteQueryProgressMessage } =
    useGetInfiniteRowSet()

  const rowSet = useMemo(() => {
    let rowSet: RowSet | undefined
    if (isInfinite) {
      rowSet = infiniteQueryRowSet
    } else {
      rowSet = paginatedQuery.data
    }
    if (rowSet && initialLimit != null) {
      rowSet = { ...rowSet, rows: rowSet.rows.slice(0, initialLimit) }
    }
    return rowSet
  }, [infiniteQueryRowSet, initialLimit, isInfinite, paginatedQuery.data])

  const progressMessage: string | undefined = isInfinite
    ? infiniteQueryProgressMessage.data
    : paginatedQueryProgressMessage.data

  const isLoading = isInfinite
    ? infiniteQuery.isLoading
    : paginatedQuery.isLoading

  const isLoadingNewPage = isInfinite
    ? infiniteQuery.isFetchingNextPage
    : paginatedQuery.isPlaceholderData

  return {
    rowSet,
    progressMessage,
    isLoading,
    isLoadingNewPage,
    fetchNextPageOfInfiniteData: infiniteQuery.fetchNextPage,
    hasNextPageOfInfiniteData: infiniteQuery.hasNextPage,
  }
}
