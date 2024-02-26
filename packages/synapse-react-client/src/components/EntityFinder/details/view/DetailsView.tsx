import BaseTable, {
  AutoResizer,
  Column,
  SortOrder,
} from '@sage-bionetworks/react-base-table'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import {
  getEntityTypeFromHeader,
  isContainerType,
  isVersionableEntityType,
} from '../../../../utils/functions/EntityTypeUtils'
import { getEntityVersions } from '../../../../synapse-client/SynapseClient'
import { useSynapseContext } from '../../../../utils/context/SynapseContext'
import {
  Direction,
  EntityChildrenRequest,
  EntityHeader,
  EntityType,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { BlockingLoader } from '../../../LoadingScreen/LoadingScreen'
import { Checkbox } from '../../../widgets/Checkbox'
import { NO_VERSION_NUMBER } from '../../EntityFinder'
import { EntityFinderHeader } from '../../EntityFinderHeader'
import { VersionSelectionType } from '../../VersionSelectionType'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import {
  BadgeIconsRenderer,
  CellRendererProps,
  CreatedOnRenderer,
  CustomSortIndicator,
  DetailsViewCheckboxRenderer,
  DetailsViewVersionRenderer,
  EmptyRenderer,
  EntityIdAndVersionNumber,
  LoadingRenderer,
  ModifiedByRenderer,
  ModifiedOnRenderer,
  TypeIconRenderer,
} from './DetailsViewTableRenderers'
import { VersionColumnHeader } from './VersionColumnHeader'

const MIN_TABLE_WIDTH = 1200
const ROW_HEIGHT = 46

export type DetailsViewProps = EntityDetailsListSharedProps & {
  entities: EntityFinderHeader[]
  isLoading: boolean
  hasNextPage?: boolean
  fetchNextPage?: () => Promise<any>
  isFetchingNextPage?: boolean
  /** The current sort of the view. If the view cannot be sorted, set this to `undefined` */
  sort?: { sortBy: SortBy; sortDirection: Direction }
  /** If sortable, `setSort` will be invoked when the user tries to change the sort */
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
  noResultsPlaceholder?: React.ReactElement
  /** We defer to the configuration component to determine this */
  selectAllIsChecked?: boolean
  /** This request object is only used to tell react-query to cancel fetching all children at once. */
  getChildrenInfiniteRequestObject?: EntityChildrenRequest
  /** The total number of entities that can be retrieved */
  totalEntities?: number
}

/**
 * Describes the shape of the data passed to the BaseTable
 */
export type EntityFinderTableViewRowData = EntityFinderHeader & {
  entityId: string
  versionNumber?: number
  entityType: EntityType
  isSelected: boolean
  isDisabled: boolean
  isVersionableEntity: boolean
  currentSelectedVersion?: number
}

/**
 * Displays a list of entities in a table.
 *
 * If the list of entities is paginated, the `hasNextPage` prop can be set to indicate that there is more data to load.
 * When the view is ready to load more data, the `fetchNextPage` callback will be invoked. The view is designed to handle
 * an "infinite scroll" pattern, so entities should not be removed from the list when loading the next page.
 *
 * @param param0
 */
export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  entities,
  isLoading,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  versionSelection,
  selectColumnType,
  selected,
  visibleTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
  enableSelectAll,
  selectAllIsChecked = false,
  getChildrenInfiniteRequestObject,
  totalEntities,
  setCurrentContainer,
}) => {
  const queryClient = useQueryClient()

  const { accessToken, keyFactory: queryClientKeyFactory } = useSynapseContext()

  const showSelectColumn = selectColumnType !== 'none'

  const [shouldSelectAll, setShouldSelectAll] = useState(false)
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)

  const cancelQuery = () => {
    // It's likely that the user will be throttled by the Synapse backend and may be waiting a
    // noticeable amount of time for the current request, so cancel it (in addition to cancelling future requests)
    queryClient.cancelQueries({
      queryKey: queryClientKeyFactory.getEntityChildrenQueryKey(
        getChildrenInfiniteRequestObject!,
        true,
      ),
    })
    setShowLoadingScreen(false)
    setShouldSelectAll(false)
  }
  type DetailsViewRowAppearance = 'hidden' | 'disabled' | 'selected' | 'default'

  const determineRowAppearance = (
    entity: EntityFinderHeader,
  ): DetailsViewRowAppearance => {
    if (!visibleTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'hidden'
    } else if (!selectableTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'disabled'
    } else if (selected.has(entity.id)) {
      return 'selected'
    } else {
      return 'default'
    }
  }

  useEffect(() => {
    async function handleSelectAll() {
      if (shouldSelectAll) {
        if (hasNextPage && fetchNextPage) {
          // Show the loading screen since we must fetch data (potentially a lot) to finish the task
          setShowLoadingScreen(true)
          if (!isFetchingNextPage) {
            fetchNextPage()
          }
        } else {
          if (selectAllIsChecked) {
            // All of the items are selected, so we will deselect all
            toggleSelection(
              entities
                .filter(e => {
                  // Collect just entities that are selected
                  // An entity may be in the list and unselected because it isn't of a selectable type
                  return selected.has(e.id)
                })
                .map(e => {
                  const selectedVersion = selected.get(e.id)
                  return {
                    targetId: e.id,
                    targetVersionNumber:
                      selectedVersion === NO_VERSION_NUMBER
                        ? undefined
                        : selectedVersion,
                  }
                }),
            )
          } else {
            // Not all of the items are selected, so we will select all
            toggleSelection(
              await Promise.all(
                entities
                  .filter(e => {
                    // must filter just selectable types or else any entities of unselectable types will get selected
                    const type = getEntityTypeFromHeader(e)
                    // also exclude already-selected entities, since we don't want to toggle those
                    return (
                      !selected.has(e.id) &&
                      selectableTypes.includes(type) &&
                      visibleTypes.includes(type)
                    )
                  })
                  .map(async e => {
                    let latestVersion: number | undefined
                    if (
                      versionSelection === VersionSelectionType.REQUIRED &&
                      isVersionableEntityType(getEntityTypeFromHeader(e))
                    ) {
                      // If VersionSelectionType.REQUIRED, then we need to supply a version with the entity.
                      // We may already have the version from the header:
                      if (
                        Object.prototype.hasOwnProperty.call(e, 'versionNumber')
                      ) {
                        latestVersion = (e as EntityHeader).versionNumber
                      }
                      if (!latestVersion) {
                        // Failsafe if we didn't get the version in the header. This is rare/unlikely, since the only cases we're sure we don't get versions are:
                        //  - ProjectHeaders (which are versionless)
                        //  - Search Results (for which we don't support Select All)
                        // For large lists, there's a good chance for this to trigger throttling.

                        // Show the loading screen since we must fetch data (potentially a lot) to finish the task
                        setShowLoadingScreen(true)

                        const versionsQueryOffset = 0
                        const versionsQueryLimit = 1
                        const versions = await queryClient.fetchQuery({
                          queryKey:
                            queryClientKeyFactory.getPaginatedEntityVersionsQueryKey(
                              e.id,
                              versionsQueryLimit,
                              versionsQueryOffset,
                            ),
                          queryFn: () =>
                            getEntityVersions(
                              e.id,
                              accessToken,
                              versionsQueryOffset,
                              versionsQueryLimit,
                            ),
                        })
                        // we pick the first version in the list because it is the most recent
                        latestVersion = versions.results[0]?.versionNumber
                      }
                    }
                    return {
                      targetId: e.id,
                      targetVersionNumber: latestVersion,
                    }
                  }),
              ),
            )
          }
          setShouldSelectAll(false)
          setShowLoadingScreen(false)
        }
      }
    }
    handleSelectAll()
  }, [
    accessToken,
    entities,
    fetchNextPage,
    hasNextPage,
    versionSelection,
    queryClient,
    isFetchingNextPage,
    selectAllIsChecked,
    selectableTypes,
    selected,
    shouldSelectAll,
    toggleSelection,
    visibleTypes,
  ])

  const tableData = entities.reduce(
    (entities: EntityFinderTableViewRowData[], entity) => {
      const appearance = determineRowAppearance(entity)
      if (appearance !== 'hidden') {
        // only include entities that should not be hidden
        const entityType = getEntityTypeFromHeader(entity)

        const currentSelectedVersion = selected.get(entity.id)
        let versionNumber: number | undefined = undefined
        if ('versionNumber' in entity) {
          if (
            currentSelectedVersion != null &&
            currentSelectedVersion !== NO_VERSION_NUMBER
          ) {
            // if a version is selected, the row should show that version's data
            versionNumber = currentSelectedVersion
          } else if (versionSelection === VersionSelectionType.REQUIRED) {
            // if a version is not selected, but version selection is required, the row should show the latest version's data
            versionNumber = entity.versionNumber
          }
          // otherwise, show the current version's data (versionNumber is undefined)
        }

        entities.push({
          ...entity,
          entityId: entity.id,
          versionNumber: versionNumber,
          entityType: entityType,
          isSelected: appearance === 'selected',
          isDisabled: appearance === 'disabled',
          isVersionableEntity: isVersionableEntityType(entityType),
          currentSelectedVersion: currentSelectedVersion,
        })
      }
      return entities
    },
    [],
  )

  const SelectAllCheckboxRenderer = useMemo(() => {
    // Enabled if there's at least one visible & selectable entity, OR there's a page we haven't fetched
    const isEnabled =
      hasNextPage ||
      entities.filter(
        e =>
          selectableTypes.includes(getEntityTypeFromHeader(e)) &&
          visibleTypes.includes(getEntityTypeFromHeader(e)),
      ).length > 0
    return (
      enableSelectAll && (
        <div
          data-testid="Select All"
          style={isEnabled ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
          onClick={() => {
            if (isEnabled) {
              setShouldSelectAll(true)
            }
          }}
        >
          <Checkbox
            label="Select All"
            hideLabel={true}
            className="SRC-pointer-events-none"
            checked={selectAllIsChecked}
            disabled={!isEnabled}
            onChange={() => {
              // no-op
            }}
          />
        </div>
      )
    )
  }, [
    enableSelectAll,
    entities,
    hasNextPage,
    selectAllIsChecked,
    selectableTypes,
    visibleTypes,
  ])

  const NameRenderer = useCallback(
    (props: CellRendererProps<EntityFinderTableViewRowData>) => {
      if (setCurrentContainer && isContainerType(props.rowData.entityType)) {
        return (
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
    <div className="EntityFinderDetailsView bootstrap-4-backport">
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
              let className = 'EntityFinderDetailsViewRow'
              if (rowIndex % 2 === 0) {
                // Apply a class based on index so we can get alternating colors
                // We don't use CSSs nth-child because the rows are virtualized, so an even child might change to odd on-the-fly
                className += ' isEven'
              }
              return className
            }}
            // Apply aria roles to the rows for a11y/styling
            rowProps={({ rowData }) => {
              return {
                'aria-selected': rowData.isSelected,
                'aria-disabled': rowData.isDisabled,
              }
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
            rowEventHandlers={{
              onClick: ({ rowData }) => {
                const { id, isDisabled, isVersionableEntity } = rowData
                let { currentSelectedVersion } = rowData
                if (!isDisabled) {
                  if (
                    isVersionableEntity &&
                    versionSelection === VersionSelectionType.REQUIRED &&
                    currentSelectedVersion == null &&
                    Object.prototype.hasOwnProperty.call(
                      rowData,
                      'versionNumber',
                    )
                  ) {
                    currentSelectedVersion = (rowData as EntityHeader)
                      .versionNumber
                    // Note that here we aren't handling the case where the header doesn't have a version, e.g. a search result
                    // That case is actually handled by the VersionRenderer, which has an effect that will toggle the selection after data is fetched.
                  }

                  toggleSelection({
                    targetId: id,
                    targetVersionNumber:
                      currentSelectedVersion === NO_VERSION_NUMBER
                        ? undefined
                        : currentSelectedVersion,
                  })
                }
              },
            }}
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
            {showSelectColumn && (
              <Column<EntityFinderTableViewRowData>
                key="isSelected"
                title=""
                minWidth={50}
                maxWidth={50}
                width={50}
                dataKey="isSelected"
                headerRenderer={SelectAllCheckboxRenderer}
                cellRenderer={DetailsViewCheckboxRenderer}
              />
            )}
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
              title="Name"
              width={800}
              sortable={sort != null}
              resizable={true}
              cellRenderer={NameRenderer}
            />
            <Column<EntityIdAndVersionNumber>
              key="badge"
              title=""
              width={75}
              maxWidth={75}
              minWidth={75}
              cellRenderer={BadgeIconsRenderer}
            />

            <Column<EntityFinderTableViewRowData>
              key="id"
              width={130}
              dataKey="id"
              title="ID"
              minWidth={130}
            />
            {versionSelection !== VersionSelectionType.DISALLOWED && (
              <Column<EntityFinderTableViewRowData>
                key="version"
                minWidth={150}
                width={500}
                title="Version"
                cellRenderer={props => (
                  <DetailsViewVersionRenderer
                    versionSelection={versionSelection}
                    toggleSelection={toggleSelection}
                    {...props}
                  />
                )}
                headerRenderer={
                  <VersionColumnHeader versionSelection={versionSelection} />
                }
              />
            )}
            <Column<EntityIdAndVersionNumber>
              key={SortBy.CREATED_ON}
              sortable={sort != null}
              title="Created On"
              width={220}
              minWidth={170}
              cellRenderer={CreatedOnRenderer}
            />
            <Column<EntityIdAndVersionNumber>
              key={SortBy.MODIFIED_ON}
              title="Modified On"
              width={220}
              minWidth={170}
              sortable={sort != null}
              cellRenderer={ModifiedOnRenderer}
            />
            <Column<EntityIdAndVersionNumber>
              key="modifiedBy"
              title="Modified By"
              width={500}
              resizable
              cellRenderer={ModifiedByRenderer}
            />
          </BaseTable>
        )}
      </AutoResizer>
    </div>
  )
}
