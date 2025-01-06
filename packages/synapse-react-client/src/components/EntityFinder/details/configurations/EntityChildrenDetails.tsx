import { Direction, SortBy } from '@sage-bionetworks/synapse-types'
import { SortingState } from '@tanstack/react-table'
import { useState } from 'react'
import { useGetEntityChildrenInfinite } from '../../../../synapse-queries/entity/useGetEntityChildren'
import useGetIsAllSelectedFromInfiniteList from '../../../../utils/hooks/useGetIsAllSelectedInfiniteList'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView, DetailsViewColumn } from '../view/DetailsView'

type EntityChildrenDetailsProps = EntityDetailsListSharedProps & {
  parentContainerId: string
}

const sortableColumns = [
  DetailsViewColumn.NAME,
  DetailsViewColumn.CREATED_ON,
  DetailsViewColumn.MODIFIED_ON,
]

function convertColumnToSortBy(column: DetailsViewColumn): SortBy | undefined {
  switch (column) {
    case DetailsViewColumn.NAME:
      return SortBy.NAME
    case DetailsViewColumn.CREATED_ON:
      return SortBy.CREATED_ON
    case DetailsViewColumn.MODIFIED_ON:
      return SortBy.MODIFIED_ON
  }

  return undefined
}

export function EntityChildrenDetails({
  parentContainerId,
  ...sharedProps
}: EntityChildrenDetailsProps) {
  const [sortingState, setSortingState] = useState<SortingState>([
    {
      id: DetailsViewColumn.NAME,
      desc: false,
    },
  ])

  const getChildrenInfiniteRequestObject = {
    parentId: parentContainerId,
    includeTotalChildCount: true,
    includeTypes: sharedProps.visibleTypes,
    sortBy: sortingState[0]
      ? convertColumnToSortBy(sortingState[0].id as DetailsViewColumn)
      : undefined,
    sortDirection: sortingState[0]
      ? sortingState[0].desc
        ? Direction.DESC
        : Direction.ASC
      : undefined,
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
      enableSorting={true}
      enableMultiSort={false}
      sortableColumns={sortableColumns}
      sorting={sortingState}
      onSortingChange={setSortingState}
      selectAllIsChecked={selectAllCheckboxState}
      getChildrenInfiniteRequestObject={getChildrenInfiniteRequestObject}
      totalEntities={totalEntities}
      {...sharedProps}
    />
  )
}
