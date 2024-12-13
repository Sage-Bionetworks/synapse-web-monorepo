import { useState } from 'react'
import { Direction, SortBy } from '@sage-bionetworks/synapse-types'
import { useGetEntityChildrenInfinite } from '../../synapse-queries/entity/useGetEntityChildren'

import useGetIsAllSelectedFromInfiniteList from '../../utils/hooks/useGetIsAllSelectedInfiniteList'
import { EntityDetailsListSharedProps } from '../EntityFinder/details/EntityDetailsList'
import { ChallengeDataTable } from './ChallengeDataTable'

type ChallengeEntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

export function ChallengeEntityChildrenDetails({
  parentContainerId,
  ...sharedProps
}: ChallengeEntityChildrenDetailsProps) {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)

  const getChildrenInfiniteRequestObject = {
    parentId: parentContainerId,
    includeTotalChildCount: true,
    includeTypes: sharedProps.visibleTypes,
    sortBy: sortBy,
    sortDirection: sortDirection,
  }
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetEntityChildrenInfinite(getChildrenInfiniteRequestObject, {
      throwOnError: true,
    })
  const entities = data?.pages.flatMap(page => page.page) ?? []
  const totalEntities = data?.pages[0].totalChildCount

  const selectAllCheckboxState = useGetIsAllSelectedFromInfiniteList(
    entities,
    sharedProps.selected.size,
    sharedProps.isIdSelected,
    sharedProps.isSelectable,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  )

  return (
    <ChallengeDataTable
      entities={entities}
      isLoading={isLoading}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      sort={{ sortBy, sortDirection }}
      setSort={(newSortBy, newSortDirection) => {
        setSortBy(newSortBy)
        setSortDirection(newSortDirection)
      }}
      selectAllIsChecked={selectAllCheckboxState}
      getChildrenInfiniteRequestObject={getChildrenInfiniteRequestObject}
      totalEntities={totalEntities}
      {...sharedProps}
    />
  )
}
