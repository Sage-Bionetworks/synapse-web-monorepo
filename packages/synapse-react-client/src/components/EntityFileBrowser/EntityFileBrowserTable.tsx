import BaseTable, {
  AutoResizer,
  Column,
  SortOrder,
} from '@sage-bionetworks/react-base-table'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { EntityFinderHeader } from '../EntityFinder/EntityFinderHeader'
import {
  Direction,
  EntityHeader,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils'
import {
  getEntityTypeFromHeader,
  isContainerType,
  isVersionableEntityType,
} from '../../utils/functions/EntityTypeUtils'
import {
  CellRendererProps,
  CustomSortIndicator,
  EmptyRenderer,
  EntityIdAndVersionNumber,
  LoadingRenderer,
  ModifiedOnRenderer,
  TypeIconRenderer,
} from '../EntityFinder/details/view/DetailsViewTableRenderers'
import { BlockingLoader } from '../LoadingScreen/LoadingScreen'
import {
  DownloadRenderer,
  SizeRenderer,
} from '../ChallengeDataDownload/Renderers'
import {
  DetailsViewProps,
  EntityFinderTableViewRowData,
} from '../EntityFinder/details/view/DetailsView'

const MIN_TABLE_WIDTH = 1200
const ROW_HEIGHT = 46

/**
 * Displays a list of entities in a table where folder rows can be expanded
 *
 * @param param0
 */
export const EntityFileBrowserTable: React.FunctionComponent<
  DetailsViewProps
> = ({
  entities,
  isLoading,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  sort,
  setSort,
  noResultsPlaceholder,
  getChildrenInfiniteRequestObject,
  totalEntities,
  setCurrentContainer,
}) => {
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)

  const cancelQuery = () => {
    // It's likely that the user will be throttled by the Synapse backend and may be waiting a
    // noticeable amount of time for the current request, so cancel it (in addition to cancelling future requests)
    if (getChildrenInfiniteRequestObject) {
      queryClient.cancelQueries({
        queryKey: keyFactory.getEntityChildrenQueryKey(
          getChildrenInfiniteRequestObject,
          true,
        ),
      })
    }
    setShowLoadingScreen(false)
  }

  const tableData = entities.reduce(
    (entities: EntityFinderTableViewRowData[], entity) => {
      // only include entities that should not be hidden
      const entityType = getEntityTypeFromHeader(entity)
      entities.push({
        ...entity,
        entityId: entity.id,
        versionNumber: undefined, //current version info
        entityType: entityType,
        isSelected: false,
        isDisabled: false,
        isVersionableEntity: isVersionableEntityType(entityType),
        isExpanded: false,
      })

      return entities
    },
    [],
  )

  const NameRenderer = useCallback(
    (props: CellRendererProps<EntityFinderTableViewRowData>) => {
      if (setCurrentContainer && isContainerType(props.rowData.entityType)) {
        return (
          <span>
            <button>{props.rowData.isExpanded ? '▼' : '▶'}</button>
            <span
              role="link"
              className="EntityFinderTableCellContainerLink"
              onClick={e => {
                e.stopPropagation()
                setCurrentContainer(props.rowData.id)
              }}
            >
              {props.rowData.name}
            </span>
          </span>
        )
      } else {
        return props.rowData.name
      }
    },
    [setCurrentContainer],
  )

  const sortState: Record<string, SortOrder> = {}
  if (sort) {
    sortState[sort.sortBy] = sort.sortDirection.toLowerCase() as SortOrder
  }

  return (
    <div className="EntityFinderDetailsView">
      <BlockingLoader
        show={showLoadingScreen}
        currentProgress={entities.length}
        totalProgress={totalEntities}
        hintText={
          totalEntities
            ? `${entities.length.toLocaleString()} of ${totalEntities?.toLocaleString()}`
            : `Fetching ${entities.length.toLocaleString()}`
        }
        headlineText={'Fetching selected items'}
        onCancel={cancelQuery}
      />
      <AutoResizer className="DetailsViewAutosizer">
        {({ height, width }: { height: number; width: number }) => (
          <BaseTable<EntityFinderTableViewRowData>
            classPrefix="DetailsViewTable"
            data={tableData}
            height={height}
            width={width > MIN_TABLE_WIDTH ? width : MIN_TABLE_WIDTH}
            rowHeight={ROW_HEIGHT}
            overscanRowCount={5}
            // Apply classes to the rows for styling
            rowClassName={({ rowIndex }: { rowIndex: number }) => {
              // TODO: Apply different style for Folder data?
              let className = 'EntityFinderDetailsViewRow'
              if (rowIndex % 2 === 0) {
                // Apply a class based on index so we can get alternating colors
                // We don't use CSSs nth-child because the rows are virtualized, so an even child might change to odd on-the-fly
                className += ' isEven'
              }
              return className
            }}
            headerCellProps={{
              role: 'columnheader',
            }}
            // Sorting:
            sortState={sortState}
            components={{ SortIndicator: CustomSortIndicator }}
            onColumnSort={({ key, order }) => {
              if (sort && setSort) {
                setSort(
                  key as SortBy,
                  order === 'asc' ? Direction.ASC : Direction.DESC,
                )
              }
            }}
            rowEventHandlers={
              {
                // onClick: ({ rowData }) => {
                //   //TODO: expand if folder and it is not already expanded
                //   const {entityId, isVersionableEntity } = rowData
                // },
              }
            }
            onEndReached={() => {
              if (hasNextPage && fetchNextPage && !isFetchingNextPage) {
                fetchNextPage()
              }
            }}
            emptyRenderer={
              isLoading
                ? LoadingRenderer
                : () => (
                    <EmptyRenderer
                      noResultsPlaceholder={noResultsPlaceholder}
                    />
                  )
            }
          >
            <Column<EntityFinderTableViewRowData>
              key="type"
              title=""
              minWidth={45}
              maxWidth={45}
              width={45}
              dataKey="entityType"
              align="center"
              cellRenderer={TypeIconRenderer}
            />
            <Column<EntityFinderTableViewRowData>
              key={SortBy.NAME}
              title="File Name"
              width={500}
              sortable={sort != null}
              resizable={true}
              cellRenderer={NameRenderer}
            />
            <Column<EntityFinderTableViewRowData>
              key={'SIZE'}
              title="Size"
              width={200}
              sortable={false}
              resizable={true}
              cellRenderer={SizeRenderer}
            />
            <Column<EntityIdAndVersionNumber>
              key={SortBy.MODIFIED_ON}
              title="Modified On"
              width={220}
              minWidth={170}
              sortable={sort != null}
              cellRenderer={ModifiedOnRenderer}
            />
            <Column<EntityFinderTableViewRowData>
              key="id"
              width={130}
              dataKey="id"
              title="ID"
              minWidth={130}
            />
            <Column<EntityIdAndVersionNumber>
              key={'actions'}
              title={'Actions'}
              minWidth={100}
              maxWidth={100}
              width={100}
              cellRenderer={DownloadRenderer}
            />
          </BaseTable>
        )}
      </AutoResizer>
    </div>
  )
}
