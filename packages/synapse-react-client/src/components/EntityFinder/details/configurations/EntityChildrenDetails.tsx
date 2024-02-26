import React, { useState } from 'react'
import { useGetEntityChildrenInfinite } from '../../../../synapse-queries/entity/useGetEntityChildren'
import { Direction, SortBy } from '@sage-bionetworks/synapse-types'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'

type EntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

export const EntityChildrenDetails: React.FunctionComponent<
  EntityChildrenDetailsProps
> = ({ parentContainerId, ...sharedProps }) => {
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
    <DetailsView
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
