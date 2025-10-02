import { useCallback } from 'react'
import { SortingState } from '@tanstack/react-table'
import { SortBy, Direction } from '@sage-bionetworks/synapse-types'

export const useSorting = (sorting: SortingState) => {
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

  const { sortBy, sortDirection } = getSortingParams()

  return {
    sortBy,
    sortDirection,
    getSortingParams,
  }
}
