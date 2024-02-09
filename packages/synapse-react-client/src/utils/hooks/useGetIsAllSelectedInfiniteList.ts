import { useEffect, useState } from 'react'
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { SynapseClientError } from '../SynapseClientError'

/**
 * Given a list of items and predicates to determine what items are are selected, and which are selectable, return a boolean indicating if all of the entities that can be selected
 * are selected.
 *
 * This function is compatible with react-query's useInfiniteQuery pagination, in which case it's recommended to use the hook version
 * of this function to get updates as pages are fetched and updated.
 *
 * We don't currently support an indeterminate checkbox state because that would require always fetching all pages of a given query, which does not scale.
 * @param items An arbitrary list of items that have already been fetched
 * @param numSelected The number of items that have been selected.
 * @param isSelected A function that takes an item and returns a boolean indicating if that item is selected
 * @param isSelectable A function that takes an item and returns a boolean indicating if that item can be selected
 * @param hasNextPage Whether or not there are additional pages of items (typically supplied by useInfiniteQuery)
 * @param fetchNextPage A function to be invoked to fetch an additional page of items (typically supplied by useInfiniteQuery)
 * @param isFetchingNextPage Indicates if the next page of items is being fetched (typically supplied by useInfiniteQuery)
 * @returns true iff all selectable items have been selected, and there are no additional pages to fetch (because an unfetched page may include an unselected item)
 */
export function getIsAllSelectedFromInfiniteList<TItem, TFetchResult>(
  items: TItem[],
  numSelected: number,
  isSelected: (item: TItem) => boolean,
  isSelectable: (item: TItem) => boolean,
  hasNextPage?: boolean | undefined,
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<TFetchResult, SynapseClientError>>,
  isFetchingNextPage?: boolean,
): boolean {
  if (items.length === 0 || numSelected === 0) {
    return false
  } else {
    const allSelectableFetchedChildrenAreSelected = items.every(
      e => isSelected(e) || !isSelectable(e),
    )
    if (
      allSelectableFetchedChildrenAreSelected &&
      hasNextPage &&
      fetchNextPage &&
      !isFetchingNextPage
    ) {
      // We don't yet know if the checkbox should be true or false, so get the next page
      fetchNextPage()
      return false
    } else {
      if (isFetchingNextPage) {
        // Wait for the next page to be retrieved
        return false
      }

      // At this point, we've fetched all of the pages or encountered an unselected entity
      // The checkbox should be true if there are no unselected entities, and there's at least one selectable entity
      const selectableEntitiesArePresent = items.some(e => isSelectable(e))
      return (
        allSelectableFetchedChildrenAreSelected && selectableEntitiesArePresent
      )
    }
  }
}

/**
 * Given a list of items and predicates to determine what items are are selected, and which are selectable, return a boolean indicating if all of the entities that can be selected
 * are selected.
 *
 * This function is compatible with react-query's useInfiniteQuery pagination.
 *
 * There is also a non-hook version of this function that can be called in contexts where hooks cannot be used.
 * @param items An arbitrary list of items that have already been fetched
 * @param numSelected The number of items that have been selected.
 * @param isSelected A function that takes an item and returns a boolean indicating if that item is selected
 * @param isSelectable A function that takes an item and returns a boolean indicating if that item can be selected
 * @param hasNextPage Whether or not there are additional pages of items (typically supplied by useInfiniteQuery)
 * @param fetchNextPage A function to be invoked to fetch an additional page of items (typically supplied by useInfiniteQuery)
 * @param isFetchingNextPage Indicates if the next page of items is being fetched (typically supplied by useInfiniteQuery)
 * @returns true iff all selectable items have been selected, and there are no additional pages to fetch (because an unfetched page may include an unselected item)
 */
export default function useGetIsAllSelectedFromInfiniteList<
  TItem,
  TFetchResult,
>(
  items: TItem[],
  numSelected: number,
  isSelected: (item: TItem) => boolean,
  isSelectable: (item: TItem) => boolean,
  hasNextPage?: boolean | undefined,
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<TFetchResult, SynapseClientError>>,
  isFetchingNextPage?: boolean,
) {
  const [isSelectAll, setIsSelectAll] = useState(false)
  useEffect(() => {
    setIsSelectAll(
      getIsAllSelectedFromInfiniteList(
        items,
        numSelected,
        isSelected,
        isSelectable,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
      ),
    )
  }, [
    items,
    numSelected,
    fetchNextPage,
    hasNextPage,
    isSelected,
    isSelectable,
    isFetchingNextPage,
  ])

  return isSelectAll
}
