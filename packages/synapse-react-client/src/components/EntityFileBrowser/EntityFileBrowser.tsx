import React, { useState } from 'react'
import { Direction, EntityType, SortBy } from '@sage-bionetworks/synapse-types'
import { EntityDetailsListSharedProps } from '../EntityFinder/details/EntityDetailsList'
import { useGetEntityChildrenInfinite } from '../../synapse-queries'
import { EntityFileBrowserTable } from './EntityFileBrowserTable'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { Map } from 'immutable'

export type EntityFileBrowserProps = {
  parentContainerId: string
}

export const EntityFileBrowser: React.FunctionComponent<
  EntityFileBrowserProps
> = ({ parentContainerId }) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NAME)
  const [sortDirection, setSortDirection] = useState<Direction>(Direction.ASC)
  const sharedProps: EntityDetailsListSharedProps = {
    versionSelection: VersionSelectionType.DISALLOWED,
    selectColumnType: 'none',
    enableSelectAll: false,
    visibleTypes: [EntityType.FILE, EntityType.FOLDER, EntityType.LINK],
    selectableTypes: [],
    isSelectable: () => true,
    isIdSelected: () => true,
    selected: Map<string, number>(),
    toggleSelection: () => {},
  }

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

  return (
    <EntityFileBrowserTable
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
      getChildrenInfiniteRequestObject={getChildrenInfiniteRequestObject}
      totalEntities={totalEntities}
      {...sharedProps}
    />
  )
}
