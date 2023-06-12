import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  isFacetAvailable,
  hasResettableFilters as isFilteredUtil,
  removeLockedColumnFromFacetData,
} from '../utils/functions/queryUtils'
import { useGetEntity, useInfiniteQueryResultBundle } from '../synapse-queries'
import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteQueryContextType,
  LockedColumn,
  QueryContextProvider,
} from './QueryContext/QueryContext'
import useImmutableTableQuery from './useImmutableTableQuery'

export type InfiniteQueryWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  initQueryRequest: QueryBundleRequest
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  lockedColumn?: LockedColumn
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

/**
 * Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using
 * either `useQueryContext` or `QueryContextConsumer`.
 */
export function InfiniteQueryWrapper(props: InfiniteQueryWrapperProps) {
  const {
    initQueryRequest,
    onQueryChange,
    onQueryResultBundleChange,
    lockedColumn,
    componentIndex,
    shouldDeepLink,
    onViewSharingSettingsClicked,
  } = props
  const [currentAsyncStatus, setCurrentAsyncStatus] = useState<
    AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle> | undefined
  >(undefined)

  const {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
  } = useImmutableTableQuery({
    initQueryRequest,
    componentIndex,
    shouldDeepLink,
    onQueryChange,
  })

  const lastQueryRequest = useMemo(() => {
    return getLastQueryRequest()
  }, [getLastQueryRequest])

  const {
    data: infiniteData,
    hasNextPage,
    fetchPreviousPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: queryIsLoading,
    error,
    isPreviousData: newQueryIsFetching,
  } = useInfiniteQueryResultBundle(
    lastQueryRequest,
    {
      // We use `keepPreviousData` because we don't want to clear out the current data when the query is modified via the UI
      keepPreviousData: true,
    },
    setCurrentAsyncStatus,
  )

  // Indicate if we're fetching data for the first time (queryIsLoading) or if we're fetching data for a brand-new query (newQueryIsFetching)
  const isLoadingNewBundle = queryIsLoading || newQueryIsFetching

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  /**
   * Since we're showing an infinite list of data, use custom pagination handling instead of pagination utils provided by
   * useImmutableTableQuery
   */
  const [currentPage, setCurrentPage] = useState<number | 'ALL'>(0)

  async function appendNextPageToResults(): Promise<void> {
    if (!hasNextPage) {
      throw new Error(
        'Called appendNextPageToResults when there is no next page',
      )
    }
    await fetchNextPage()
    setCurrentPage('ALL')
  }

  async function goToNextPage(): Promise<void> {
    if (!hasNextPage) {
      throw new Error('Called goToNextPage when there is no next page')
    }
    if (currentPage === 'ALL') {
      throw new Error('Cannot go to next page when all pages are displayed')
    }
    await fetchNextPage()
    setCurrentPage(currentPage + 1)
  }

  const hasPreviousPage = currentPage !== 'ALL' && currentPage > 0

  async function goToPreviousPage(): Promise<void> {
    if (currentPage === 'ALL') {
      throw new Error('Cannot go to previous page when all pages are displayed')
    }
    if (!hasPreviousPage) {
      throw new Error('Called goToNextPage when there is no next page')
    }

    await fetchPreviousPage()
    setCurrentPage(currentPage - 1)
  }

  const data: QueryResultBundle | undefined = useMemo(() => {
    if (
      infiniteData == null ||
      infiniteData.pages.length === 0 ||
      infiniteData.pages[0].responseBody == null
    ) {
      return undefined
    }

    if (currentPage === 'ALL') {
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

    return infiniteData?.pages[currentPage].responseBody
  }, [currentPage, infiniteData])

  useEffect(() => {
    if (data && onQueryResultBundleChange) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  /**
   * Remove a particular facet name (e.g. study) and all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedColumnFacetRemoved = useMemo(() => {
    return removeLockedColumnFromFacetData(data, lockedColumn)
  }, [data, lockedColumn])

  const hasResettableFilters = useMemo(() => {
    const request = getLastQueryRequest()
    return isFilteredUtil(request.query, lockedColumn)
  }, [getLastQueryRequest, lockedColumn])

  const getColumnModel = useCallback(
    (columnName: string) => {
      return data?.columnModels?.find(cm => cm.name === columnName) ?? null
    },
    [data?.columnModels],
  )

  const context: InfiniteQueryContextType = {
    data: dataWithLockedColumnFacetRemoved,
    isLoadingNewPage: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    hasPreviousPage: hasPreviousPage,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    error: error,
    entity,
    executeQueryRequest: setQuery,
    isFacetsAvailable,
    asyncJobStatus: currentAsyncStatus,
    appendNextPageToResults: appendNextPageToResults,
    goToNextPage,
    goToPreviousPage,
    hasResettableFilters,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    lockedColumn,
    getColumnModel,
    onViewSharingSettingsClicked,
  }
  /**
   * Render the children without any formatting
   */
  const { children } = props
  return (
    <QueryContextProvider queryContext={context}>
      {children}
    </QueryContextProvider>
  )
}
