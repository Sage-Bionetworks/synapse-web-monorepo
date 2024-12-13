import { useQueryContext } from '../QueryContext/QueryContext'
import { useMemo } from 'react'
import { SortingState, Updater } from '@tanstack/react-table'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { SortItem } from '@sage-bionetworks/synapse-types'
import { ReadonlyDeep } from 'type-fest'

function transformQueryWrapperSortToTanStackSort(
  sort: ReadonlyDeep<SortItem[]>,
): SortingState {
  return sort.map(sortItem => ({
    id: sortItem.column,
    desc: sortItem.direction === 'DESC',
  }))
}

function transformTanStackSortToQueryWrapperSort(
  sortingState: SortingState,
): SortItem[] {
  return sortingState.map(columnSort => ({
    column: columnSort.id,
    direction: columnSort.desc ? 'DESC' : 'ASC',
  }))
}

// Transforms TanStack table sort into QueryWrapper-compatible sort
export function useTableSort() {
  const queryContext = useQueryContext()
  const sort = useDeepCompareMemoize(queryContext.nextQueryRequest?.query?.sort)

  const sortingState = useMemo(() => {
    return sort ? transformQueryWrapperSortToTanStackSort(sort) : []
  }, [sort])

  const setSortingState = (
    updaterOrValue: SortingState | Updater<SortingState>,
  ) => {
    let newSortingState: SortingState | undefined = undefined
    if (typeof updaterOrValue === 'function') {
      newSortingState = updaterOrValue(sortingState)
    } else {
      newSortingState = updaterOrValue
    }

    const newSort = transformTanStackSortToQueryWrapperSort(newSortingState)
    queryContext.executeQueryRequest(qr => ({
      ...qr,
      query: {
        ...qr.query,
        sort: newSort,
        offset: 0,
      },
    }))
  }

  return {
    sort: sortingState,
    setSort: setSortingState,
  }
}
