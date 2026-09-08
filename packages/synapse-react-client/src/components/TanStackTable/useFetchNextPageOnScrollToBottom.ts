import { useCallback, useEffect } from 'react'

/** Once the user has scrolled within this many pixels of the bottom, fetch the next page. */
export const SCROLL_FETCH_THRESHOLD_PX = 500

export type UseFetchNextPageOnScrollToBottomParams = {
  containerRef: React.RefObject<HTMLDivElement | null>
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
  fetchNextPage?: () => Promise<unknown>
  /**
   * Re-checks the scroll position whenever this changes, in case the container is already
   * scrolled to the bottom -- e.g. on mount, or right after a fetch resolves with data that
   * didn't fill the container.
   */
  data: unknown
}

/**
 * Returns a scroll-event callback that fetches the next page of a paginated/infinite query once
 * `containerRef`'s element is within {@link SCROLL_FETCH_THRESHOLD_PX} of its bottom. Also
 * re-runs that check whenever `data` changes.
 */
export function useFetchNextPageOnScrollToBottom(
  params: UseFetchNextPageOnScrollToBottomParams,
) {
  const { containerRef, hasNextPage, isFetchingNextPage, fetchNextPage, data } =
    params

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (
          scrollHeight - scrollTop - clientHeight < SCROLL_FETCH_THRESHOLD_PX &&
          !isFetchingNextPage &&
          hasNextPage &&
          fetchNextPage
        ) {
          void fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetchingNextPage, hasNextPage],
  )

  useEffect(() => {
    fetchMoreOnBottomReached(containerRef.current)
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [data, fetchMoreOnBottomReached])

  return fetchMoreOnBottomReached
}
