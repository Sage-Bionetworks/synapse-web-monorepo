import { getEntityVersions } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  getEntityTypeFromHeader,
  isContainerType,
  isVersionableEntityType,
} from '@/utils/functions/EntityTypeUtils'
import { Checkbox, Tooltip } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityChildrenRequest,
  EntityHeader,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { useQueryClient } from '@tanstack/react-query'
import {
  CellContext,
  createColumnHelper,
  getCoreRowModel,
  OnChangeFn,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  BlockingLoader,
  SynapseSpinner,
} from '../../../LoadingScreen/LoadingScreen'
import ColumnHeader from '../../../TanStackTable/ColumnHeader'
import StyledVirtualTanStackTable from '../../../TanStackTable/StyledVirtualTanStackTable'
import { EntityFinderHeader } from '../../EntityFinderHeader'
import { EntitySelectionMapType } from '../../useEntitySelection'
import { VersionSelectionType } from '../../VersionSelectionType'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { AddFileToDownloadListCell } from './table/AddToDownloadListCell'
import { CreatedOnCell } from './table/CreatedOnCell'
import { EntityBadgeIconsCell } from './table/EntityBadgeIconsCell'
import { EntityFinderCheckboxCell } from './table/EntityFinderCheckboxCell'
import { EntityFinderVersionCell } from './table/EntityFinderVersionCell'
import { EntityTypeCell } from './table/EntityTypeCell'
import { FileEntityDirectDownloadCell } from './table/FileEntityDirectDownloadCell'
import { FileEntityMD5Cell } from './table/FileEntityMD5Cell'
import { FileEntitySizeCell } from './table/FileEntitySizeCell'
import { ModifiedByCell } from './table/ModifiedByCell'
import { ModifiedOnCell } from './table/ModifiedOnCell'
import { VersionColumnHeader } from './VersionColumnHeader'

/**
 * Set of all columns that can be shown in the DetailsView
 * Note: Some of these values are used as accessors, so ensure that those columns match the accessor key in the row data
 */
export enum DetailsViewColumn {
  NAME = 'name',
  ENTITY_TYPE = 'entityType',
  ID = 'id',
  CREATED_ON = 'createdOn',
  MODIFIED_ON = 'modifiedOn',
  MODIFIED_BY = 'modifiedBy',
  ADD_TO_DOWNLOAD_CART = 'addToDownloadCart',
  DIRECT_DOWNLOAD = 'directDownload',
  SELECTED = 'selected',
  VERSION = 'version',
  SIZE = 'size',
  MD5 = 'md5',
  BADGES = 'badges',
}

export type DetailsViewProps = EntityDetailsListSharedProps & {
  entities: EntityFinderHeader[]
  isLoading: boolean
  hasNextPage?: boolean
  fetchNextPage?: () => Promise<unknown>
  isFetchingNextPage?: boolean
  enableSorting?: boolean
  enableMultiSort?: boolean
  sortableColumns?: DetailsViewColumn[]
  /** The current sort of the view. */
  sorting?: SortingState
  /** If enableSorting is true, `setSort` will be invoked when the user tries to change the sort */
  onSortingChange?: OnChangeFn<SortingState>
  noResultsPlaceholder?: ReactNode
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

const columnHelper = createColumnHelper<EntityFinderTableViewRowData>()

function NameRenderer(props: {
  context: CellContext<EntityFinderTableViewRowData, string>
  setCurrentContainer?: (containerId: string) => void
}) {
  const { context, setCurrentContainer } = props
  const { row, getValue } = context
  const rowName = getValue()
  if (setCurrentContainer && isContainerType(row.original.entityType)) {
    return (
      <span
        role="link"
        className="EntityFinderTableCellContainerLink"
        onClick={e => {
          e.stopPropagation()
          setCurrentContainer(row.original.id)
        }}
      >
        <Tooltip title={rowName}>
          <span className="nameColumnCell">{rowName}</span>
        </Tooltip>
      </span>
    )
  } else {
    return (
      <Tooltip title={rowName}>
        <span className="nameColumnCell">{rowName}</span>
      </Tooltip>
    )
  }
}

function SelectAllCheckboxRenderer(props: {
  isVisible: boolean
  disabled: boolean
  checked: boolean
  onSelectAll: () => void
}) {
  const { isVisible, disabled, checked, onSelectAll } = props
  if (!isVisible) {
    return null
  }

  return (
    <Checkbox
      inputProps={{ 'aria-label': 'Select All' }}
      checked={checked}
      disabled={disabled}
      onChange={() => {
        onSelectAll()
      }}
    />
  )
}

function getColumns(opts: {
  setCurrentContainer?: (containerId: string) => void
  isSelectAllVisible: boolean
  isSelectAllDisabled: boolean
  isSelectAllChecked: boolean
  onSelectAll: () => void
  versionSelection: VersionSelectionType
  toggleSelection: (entity: Reference | Reference[]) => void
  sortableColumns?: DetailsViewColumn[]
}) {
  const {
    setCurrentContainer,
    isSelectAllVisible,
    isSelectAllDisabled,
    isSelectAllChecked,
    onSelectAll,
    versionSelection,
    toggleSelection,
    sortableColumns = [],
  } = opts
  return [
    columnHelper.display({
      id: DetailsViewColumn.SELECTED,
      minSize: 50,
      maxSize: 50,
      size: 50,
      header: () => (
        <SelectAllCheckboxRenderer
          isVisible={isSelectAllVisible}
          disabled={isSelectAllDisabled}
          checked={isSelectAllChecked}
          onSelectAll={onSelectAll}
        />
      ),
      cell: EntityFinderCheckboxCell,
    }),

    columnHelper.accessor(DetailsViewColumn.ENTITY_TYPE, {
      minSize: 45,
      maxSize: 45,
      size: 45,
      header: () => null,
      enableResizing: false,
      cell: EntityTypeCell,
      meta: {
        textAlign: 'center',
      },
    }),
    columnHelper.accessor(DetailsViewColumn.NAME, {
      size: 300,
      enableSorting: sortableColumns.includes(DetailsViewColumn.NAME),
      // sortable: sort != null,
      // resizable: true,
      header: props => <ColumnHeader {...props} title={'Name'} />,
      cell: context => (
        <NameRenderer
          context={context}
          setCurrentContainer={setCurrentContainer}
        />
      ),
      enableColumnFilter: false,
    }),
    columnHelper.display({
      id: DetailsViewColumn.BADGES,
      minSize: 75,
      maxSize: 75,
      size: 75,
      header: () => null,
      cell: EntityBadgeIconsCell,
    }),
    columnHelper.accessor(DetailsViewColumn.ID, {
      size: 130,
      header: props => <ColumnHeader {...props} title={'ID'} />,
      minSize: 130,
      enableColumnFilter: false,
      enableSorting: sortableColumns.includes(DetailsViewColumn.ID),
    }),
    columnHelper.display({
      id: DetailsViewColumn.VERSION,
      minSize: 150,
      size: 200,
      header: () => <VersionColumnHeader versionSelection={versionSelection} />,
      cell: context => (
        <EntityFinderVersionCell
          versionSelection={versionSelection}
          toggleSelection={toggleSelection}
          context={context}
        />
      ),
    }),
    columnHelper.accessor(DetailsViewColumn.CREATED_ON, {
      header: props => <ColumnHeader {...props} title={'Created On'} />,
      size: 220,
      minSize: 170,
      cell: CreatedOnCell,
      enableColumnFilter: false,
      enableSorting: sortableColumns.includes(DetailsViewColumn.CREATED_ON),
    }),
    columnHelper.accessor(DetailsViewColumn.MODIFIED_ON, {
      header: props => <ColumnHeader {...props} title={'Modified On'} />,
      size: 220,
      minSize: 170,
      enableColumnFilter: false,
      cell: ModifiedOnCell,
      enableSorting: sortableColumns.includes(DetailsViewColumn.MODIFIED_ON),
    }),
    columnHelper.accessor(DetailsViewColumn.MODIFIED_BY, {
      header: props => <ColumnHeader {...props} title={'Modified By'} />,
      size: 250,
      enableResizing: true,
      cell: ModifiedByCell,
      enableColumnFilter: false,
      enableSorting: sortableColumns.includes(DetailsViewColumn.MODIFIED_BY),
    }),
    columnHelper.display({
      id: DetailsViewColumn.SIZE,
      header: props => <ColumnHeader {...props} title={'Size'} />,
      size: 120,
      minSize: 85,
      enableSorting: false,
      enableResizing: true,
      cell: FileEntitySizeCell,
    }),
    columnHelper.display({
      id: DetailsViewColumn.MD5,
      header: props => <ColumnHeader {...props} title={'MD5'} />,
      size: 200,
      enableSorting: false,
      enableResizing: true,
      cell: FileEntityMD5Cell,
    }),
    columnHelper.display({
      id: DetailsViewColumn.ADD_TO_DOWNLOAD_CART,
      header: () => null,
      size: 45,
      minSize: 45,
      enableSorting: false,
      enableResizing: false,
      cell: AddFileToDownloadListCell,
    }),
    columnHelper.display({
      id: DetailsViewColumn.DIRECT_DOWNLOAD,
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      size: 75,
      minSize: 75,
      enableSorting: false,
      enableResizing: false,
      cell: FileEntityDirectDownloadCell,
    }),
  ]
}

type DetailsViewRowAppearance = 'hidden' | 'disabled' | 'selected' | 'default'

const determineRowAppearance = (args: {
  visibleTypes: EntityType[]
  selectableTypes: EntityType[]
  selected: EntitySelectionMapType
  entity: EntityFinderHeader
}): DetailsViewRowAppearance => {
  const { visibleTypes, selectableTypes, selected, entity } = args
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

const DEFAULT_HIDDEN_COLUMNS = [DetailsViewColumn.DIRECT_DOWNLOAD]

/**
 * Displays a list of entities in a table.
 *
 * If the list of entities is paginated, the `hasNextPage` prop can be set to indicate that there is more data to load.
 * When the view is ready to load more data, the `fetchNextPage` callback will be invoked. The view is designed to handle
 * an "infinite scroll" pattern, so entities should not be removed from the list when loading the next page.
 */
export function DetailsView(props: DetailsViewProps) {
  'use no memo' // skip react compiler for this component
  const {
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
    enableSorting,
    enableMultiSort,
    sortableColumns,
    sorting,
    onSortingChange,
    noResultsPlaceholder,
    enableSelectAll,
    selectAllIsChecked = false,
    getChildrenInfiniteRequestObject,
    totalEntities,
    setCurrentContainer,
    hiddenColumns = DEFAULT_HIDDEN_COLUMNS,
  } = props
  const queryClient = useQueryClient()

  const { accessToken, keyFactory: queryClientKeyFactory } = useSynapseContext()

  const showSelectColumn = selectColumnType !== 'none'

  const [shouldSelectAll, setShouldSelectAll] = useState(false)
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)

  const cancelQuery = () => {
    // It's likely that the user will be throttled by the Synapse backend and may be waiting a
    // noticeable amount of time for the current request, so cancel it (in addition to cancelling future requests)
    void queryClient.cancelQueries({
      queryKey: queryClientKeyFactory.getEntityChildrenQueryKey(
        getChildrenInfiniteRequestObject!,
        true,
      ),
    })
    setShowLoadingScreen(false)
    setShouldSelectAll(false)
  }

  useEffect(() => {
    async function handleSelectAll() {
      if (shouldSelectAll) {
        if (hasNextPage && fetchNextPage) {
          // Show the loading screen since we must fetch data (potentially a lot) to finish the task
          setShowLoadingScreen(true)
          if (!isFetchingNextPage) {
            void fetchNextPage()
            // The effect will re-run after fetch completes, and the next page (if it exists) will be fetched.
          }
        } else {
          if (selectAllIsChecked) {
            // All the items are selected, so we will deselect all
            toggleSelection(
              entities
                .filter(e => {
                  // Collect just entities that are selected
                  // An entity may be in the list and unselected because it isn't of a selectable type
                  return selected.has(e.id)
                })
                .map(e => selected.get(e.id)!),
            )
          } else {
            // Not all the items are selected, so we will select all
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
    queryClientKeyFactory,
  ])

  const tableData = useMemo(
    () =>
      entities.reduce((entities: EntityFinderTableViewRowData[], entity) => {
        const appearance = determineRowAppearance({
          visibleTypes,
          selectableTypes,
          selected,
          entity,
        })
        if (appearance !== 'hidden') {
          // only include entities that should not be hidden
          const entityType = getEntityTypeFromHeader(entity)

          const currentSelectedVersion = selected.get(
            entity.id,
          )?.targetVersionNumber
          let versionNumber: number | undefined = undefined
          if ('versionNumber' in entity) {
            if (currentSelectedVersion != null) {
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
      }, []),
    [entities, selectableTypes, selected, versionSelection, visibleTypes],
  )

  const isSelectAllVisible = enableSelectAll

  // Enabled if there's at least one visible & selectable entity, OR there's a page we haven't fetched
  const isSelectAllDisabled = !(
    hasNextPage ||
    entities.filter(
      e =>
        selectableTypes.includes(getEntityTypeFromHeader(e)) &&
        visibleTypes.includes(getEntityTypeFromHeader(e)),
    ).length > 0
  )

  const columns = useMemo(
    () =>
      getColumns({
        setCurrentContainer,
        isSelectAllVisible: isSelectAllVisible,
        isSelectAllDisabled: isSelectAllDisabled,
        isSelectAllChecked: selectAllIsChecked,
        onSelectAll: () => {
          setShouldSelectAll(true)
        },
        versionSelection,
        toggleSelection,
        sortableColumns,
      }),
    [
      isSelectAllDisabled,
      isSelectAllVisible,
      selectAllIsChecked,
      setCurrentContainer,
      sortableColumns,
      toggleSelection,
      versionSelection,
    ],
  )

  const hideColumnOverrides = useMemo(() => {
    return hiddenColumns.reduce(
      (acc: Partial<Record<DetailsViewColumn, boolean>>, column) => {
        acc[column] = false
        return acc
      },
      {},
    )
  }, [hiddenColumns])

  const table: Table<EntityFinderTableViewRowData> =
    useReactTable<EntityFinderTableViewRowData>({
      data: tableData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      manualSorting: true,
      enableSorting,
      enableMultiSort,
      onSortingChange,
      state: {
        sorting,
        columnVisibility: {
          [DetailsViewColumn.SELECTED]: showSelectColumn,
          [DetailsViewColumn.VERSION]:
            versionSelection !== VersionSelectionType.DISALLOWED,
          [DetailsViewColumn.SIZE]: visibleTypes.includes(EntityType.file),
          [DetailsViewColumn.MD5]: visibleTypes.includes(EntityType.file),
          [DetailsViewColumn.ADD_TO_DOWNLOAD_CART]: visibleTypes.includes(
            EntityType.file,
          ),
          [DetailsViewColumn.DIRECT_DOWNLOAD]: visibleTypes.includes(
            EntityType.file,
          ),
          ...hideColumnOverrides,
        },
      },
    })

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: totalEntities ?? table.getRowModel().rows.length,
    estimateSize: () => 40, // estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    // measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  function onRowClick(rowData: EntityFinderTableViewRowData) {
    const { id, isDisabled, isVersionableEntity } = rowData
    let { currentSelectedVersion } = rowData
    if (!isDisabled) {
      if (
        isVersionableEntity &&
        versionSelection === VersionSelectionType.REQUIRED &&
        currentSelectedVersion == null &&
        Object.prototype.hasOwnProperty.call(rowData, 'versionNumber')
      ) {
        currentSelectedVersion = rowData.versionNumber
        // Note that here we aren't handling the case where the header doesn't have a version, e.g. a search result
        // That case is actually handled by the VersionRenderer, which has an effect that will toggle the selection after data is fetched.
      }

      toggleSelection({
        targetId: id,
        targetVersionNumber: currentSelectedVersion,
      })
    }
  }

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement

        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetchingNextPage &&
          hasNextPage &&
          fetchNextPage
        ) {
          void fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetchingNextPage, hasNextPage],
  )

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [entities, fetchMoreOnBottomReached])

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
      {!isLoading && entities.length > 0 && (
        <StyledVirtualTanStackTable<EntityFinderTableViewRowData>
          styledTableContainerProps={{
            className: 'DetailsViewTable',
            ref: tableContainerRef,
            height: '100%',
          }}
          onTableContainerScroll={target =>
            fetchMoreOnBottomReached(target as HTMLDivElement)
          }
          table={table}
          rowVirtualizer={rowVirtualizer}
          slotProps={{
            Tr: ownerState => {
              const { tableRow } = ownerState

              return {
                className: `EntityFinderDetailsViewRow`,
                ['aria-selected']: tableRow?.original.isSelected,
                ['aria-disabled']: tableRow?.original.isDisabled,
                onClick: () => {
                  if (tableRow) {
                    onRowClick(tableRow.original)
                  }
                },
              }
            },
          }}
        />
      )}
      {isLoading && (
        <div className="EntityFinderDetailsViewPlaceholder">
          <SynapseSpinner size={30} />
        </div>
      )}
      {!isLoading && entities.length === 0 && (
        <div className="EntityFinderDetailsViewPlaceholder">
          {noResultsPlaceholder || <div>Empty</div>}
        </div>
      )}
    </div>
  )
}
