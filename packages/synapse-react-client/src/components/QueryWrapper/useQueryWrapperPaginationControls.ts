import { ImmutableTableQueryResult } from '../../utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import { UseQueryWrapperDataReturn } from './useQueryWrapperData'

type PaginatedControls = {
  /** Navigates to a particular page, where the first page has value 1 */
  goToPage: (pageNum: number) => void
  /** The current page number, where page 1 is the first page. */
  currentPage: number
  /** Updates the page size */
  setPageSize: (pageSize: number) => void
  /** The current page size. */
  pageSize: number
}

type InfiniteQueryPaginationControls = {
  /** Returns true when loading a new page of query results */
  isLoadingNewPage: boolean
  /** Whether the query result bundle has a next page */
  hasNextPage?: boolean
  /** Invoke this method to fetch and append the next page of rows to the data  */
  appendNextPageToResults: () => Promise<void>
  /** Invoke to fetch and update the data with the next page of query results */
  goToNextPage: () => Promise<void>
  /** Whether the query result bundle has a previous page */
  hasPreviousPage: boolean
  /** Invoke to fetch and update the data with the previous page of query results */
  goToPreviousPage: () => Promise<void>
}

type UseQueryWrapperPaginationControlsOptions<T extends boolean> = {
  immutableTableQueryResult: ImmutableTableQueryResult
  queryWrapperData: UseQueryWrapperDataReturn<T>
  isInfinite: T
}

type UseQueryWrapperPaginationControlsReturn<T extends boolean> = T extends true
  ? InfiniteQueryPaginationControls
  : PaginatedControls

/**
 * Uses the QueryWrapper data to create a set of functions and data that comprise the QueryWrapper pagination API.
 * @param options
 */
export function useQueryWrapperPaginationControls<T extends boolean>(
  options: UseQueryWrapperPaginationControlsOptions<T>,
): UseQueryWrapperPaginationControlsReturn<T> {
  const { immutableTableQueryResult, queryWrapperData, isInfinite } = options

  if (isInfinite) {
    const {
      hasNextPage,
      fetchNextPage,
      fetchPreviousPage,
      currentPage,
      setCurrentPage,
      isFetchingNextPage,
    } = queryWrapperData as UseQueryWrapperDataReturn<true>
    const hasPreviousPage = currentPage !== 'ALL' && currentPage > 0

    const controls: InfiniteQueryPaginationControls = {
      hasNextPage: hasNextPage,
      isLoadingNewPage: isFetchingNextPage,
      hasPreviousPage,
      appendNextPageToResults: async function (): Promise<void> {
        if (!hasNextPage) {
          throw new Error(
            'Called appendNextPageToResults when there is no next page',
          )
        }
        await fetchNextPage()
        setCurrentPage('ALL')
      },

      goToNextPage: async function (): Promise<void> {
        if (currentPage === 'ALL') {
          throw new Error('Cannot go to next page when all pages are displayed')
        }
        if (!hasNextPage) {
          throw new Error('Called goToNextPage when there is no next page')
        }
        await fetchNextPage()
        setCurrentPage(currentPage + 1)
      },

      goToPreviousPage: async function (): Promise<void> {
        if (currentPage === 'ALL') {
          throw new Error(
            'Cannot go to previous page when all pages are displayed',
          )
        }
        if (!hasPreviousPage) {
          throw new Error(
            'Called goToPreviousPage when there is no previous page',
          )
        }
        await fetchPreviousPage()
        setCurrentPage(currentPage - 1)
      },
    }
    return controls as UseQueryWrapperPaginationControlsReturn<T>
  } else {
    const { currentPage, goToPage, pageSize, setPageSize } =
      immutableTableQueryResult
    return {
      currentPage,
      goToPage,
      pageSize,
      setPageSize,
    } as UseQueryWrapperPaginationControlsReturn<T>
  }
}
