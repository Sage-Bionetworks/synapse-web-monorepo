import { useCallback, useEffect, useRef } from 'react'
import { SortingState } from '@tanstack/react-table'
import { SortBy, Direction } from '@sage-bionetworks/synapse-types'

export const useSorting = (
  sorting: SortingState,
  resetTreeState: () => void,
) => {
  // Track previous sorting to detect changes
  const prevSortingRef = useRef<SortingState>([])
  const isInitialMount = useRef(true)

  // Convert TanStack Table sorting to API sorting parameters
  const getSortingParams = useCallback(() => {
    if (!sorting.length) return {}

    const firstSort = sorting[0]
    let sortBy: SortBy | undefined

    switch (firstSort.id) {
      case 'name':
        sortBy = SortBy.NAME
        break
      case 'createdOn':
        sortBy = SortBy.CREATED_ON
        break
      case 'modifiedOn':
        sortBy = SortBy.MODIFIED_ON
        break
      default:
        return {}
    }

    return {
      sortBy,
      sortDirection: firstSort.desc ? Direction.DESC : Direction.ASC,
    }
  }, [sorting])

  // Reset tree when sorting changes (but not on initial mount)
  useEffect(() => {
    const sortingChanged =
      JSON.stringify(prevSortingRef.current) !== JSON.stringify(sorting)

    if (sortingChanged && !isInitialMount.current) {
      // Reset tree state when sorting changes to force re-fetch with new sort order
      resetTreeState()
    }

    prevSortingRef.current = sorting
    isInitialMount.current = false
  }, [sorting, resetTreeState])

  const { sortBy, sortDirection } = getSortingParams()

  return {
    sortBy,
    sortDirection,
    getSortingParams,
  }
}
