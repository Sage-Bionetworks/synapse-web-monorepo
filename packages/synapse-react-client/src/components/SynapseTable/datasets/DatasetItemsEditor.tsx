import WideButton from '@/components/styled/WideButton'
import { datasetItemToReference } from '@/components/SynapseTable/datasets/DatasetEditorUtils'
import {
  useGetEntity,
  useGetEntityPath,
  useUpdateEntity,
} from '@/synapse-queries'
import { RequiredProperties } from '@/utils'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  isDataset,
  isDatasetCollection,
} from '@/utils/functions/EntityTypeUtils'
import { useSet } from '@/utils/hooks'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import {
  Alert,
  Button,
  Checkbox,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityRef,
  EntityRefCollectionView,
  Reference,
} from '@sage-bionetworks/synapse-types'
import {
  createColumnHelper,
  getCoreRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { isEqual, upperFirst } from 'lodash-es'
import pluralize from 'pluralize'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CreatedOnCell } from '../../EntityFinder/details/view/table/CreatedOnCell'
import { EntityBadgeIconsCell } from '../../EntityFinder/details/view/table/EntityBadgeIconsCell'
import { EntityNameCell } from '../../EntityFinder/details/view/table/EntityNameCell'
import { ModifiedByCell } from '../../EntityFinder/details/view/table/ModifiedByCell'
import { ModifiedOnCell } from '../../EntityFinder/details/view/table/ModifiedOnCell'
import { ParentProjectCell } from '../../EntityFinder/details/view/table/ParentProjectCell'
import { EntityFinderModal } from '../../EntityFinder/EntityFinderModal'
import { FinderScope } from '../../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../../EntityFinder/VersionSelectionType'
import { BlockingLoader } from '../../LoadingScreen/LoadingScreen'
import { SkeletonTable } from '../../Skeleton'
import WarningDialog from '../../SynapseForm/WarningDialog'
import ColumnHeader from '../../TanStackTable/ColumnHeader'
import StyledVirtualTanStackTable from '../../TanStackTable/StyledVirtualTanStackTable'
import { displayToast } from '../../ToastMessage'
import { DatasetEditorCheckboxCell } from './DatasetEditorCheckboxCell'
import { DatasetEditorVersionCell } from './DatasetEditorVersionCell'
import { EntityFetchErrorCell } from './EntityFetchErrorCell'

export type DatasetItemsEditorTableData = EntityRef & {
  isSelected: boolean
  setSelected: (value: boolean) => void
}

enum DatasetItemsEditorColumn {
  ERROR_STATE = 'errorState',
  SELECTED = 'isSelected',
  NAME = 'name',
  ENTITY_ID = 'entityId',
  BADGES = 'badges',
  VERSION = 'version',
  CREATED_ON = 'createdOn',
  MODIFIED_ON = 'modifieddOn',
  MODIFIED_BY = 'modifiedBy',
  PROJECT = 'project',
}

const columnHelper = createColumnHelper<DatasetItemsEditorTableData>()
function getColumns(
  opts: SelectAllCheckboxRendererProps & {
    changeVersionOnItem: (entityId: string, newVersion: number) => void
  },
) {
  const {
    datasetToUpdate,
    selectedIds,
    clearSelectedIds,
    addSelectedId,
    allItemsAreSelected,
    changeVersionOnItem,
  } = opts
  return [
    columnHelper.display({
      id: DatasetItemsEditorColumn.ERROR_STATE,
      minSize: 35,
      maxSize: 35,
      size: 35,
      enableResizing: false,
      header: () => null,
      cell: EntityFetchErrorCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.SELECTED,
      minSize: 40,
      maxSize: 40,
      size: 40,
      enableResizing: false,
      header: () => (
        <SelectAllCheckboxRenderer
          datasetToUpdate={datasetToUpdate}
          selectedIds={selectedIds}
          clearSelectedIds={clearSelectedIds}
          addSelectedId={addSelectedId}
          allItemsAreSelected={allItemsAreSelected}
        />
      ),
      cell: DatasetEditorCheckboxCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.NAME,
      minSize: 50,
      size: 300,
      header: props => <ColumnHeader {...props} title={'Name'} />,
      cell: EntityNameCell,
    }),
    columnHelper.accessor(DatasetItemsEditorColumn.ENTITY_ID, {
      minSize: 50,
      size: 130,
      header: props => <ColumnHeader {...props} title={'ID'} />,
      enableColumnFilter: false,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.BADGES,
      minSize: 80,
      size: 80,
      enableResizing: true,
      cell: EntityBadgeIconsCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.VERSION,
      minSize: 150,
      size: 150,
      header: props => <ColumnHeader {...props} title={'Version'} />,
      cell: props => (
        <DatasetEditorVersionCell
          {...props}
          toggleSelection={datasetItem => {
            changeVersionOnItem(datasetItem.entityId, datasetItem.versionNumber)
          }}
        />
      ),
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.CREATED_ON,
      header: props => <ColumnHeader {...props} title={'Created On'} />,
      size: 220,
      minSize: 170,
      cell: CreatedOnCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.MODIFIED_ON,
      header: props => <ColumnHeader {...props} title={'Modified On'} />,
      size: 220,
      minSize: 170,
      cell: ModifiedOnCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.MODIFIED_BY,
      header: props => <ColumnHeader {...props} title={'Modified By'} />,
      size: 250,
      enableResizing: true,
      cell: ModifiedByCell,
    }),
    columnHelper.display({
      id: DatasetItemsEditorColumn.PROJECT,
      header: props => <ColumnHeader {...props} title={'Size'} />,
      size: 300,
      cell: ParentProjectCell,
    }),
  ]
}

function getSelectableTypes(entity: EntityRefCollectionView) {
  if (isDataset(entity)) {
    return [EntityType.file]
  } else if (isDatasetCollection(entity)) {
    return [EntityType.dataset]
  } else {
    console.error(
      'Cannot determine selectable types for entity type: ' +
        entity.concreteType,
    )
    return []
  }
}

export function getCopy(entity?: EntityRefCollectionView) {
  const displayName = entity
    ? entityTypeToFriendlyName(convertToEntityType(entity.concreteType))
    : 'Collection'
  let itemName = 'Item'
  let currentVersionName = 'Current Version'
  if (entity && isDataset(entity)) {
    itemName = entityTypeToFriendlyName(EntityType.file)
    currentVersionName = 'Draft'
  } else if (entity && isDatasetCollection(entity)) {
    itemName = entityTypeToFriendlyName(EntityType.dataset)
  }

  const entityFinderPopover =
    entity && isDataset(entity)
      ? `Use the left pane to browse projects and folders. Select ${pluralize(
          itemName,
        )} from the right pane to add to this ${displayName}. ${upperFirst(
          pluralize(itemName),
        )} in a ${displayName} can be added from multiple folders. You can also use Search to find and select ${pluralize(
          itemName,
        )}.`
      : `Use the left pane to browse projects. Select ${pluralize(
          itemName,
        )} from the right pane to add to this ${displayName}. ${upperFirst(
          pluralize(itemName),
        )} in a ${displayName} can be added from multiple projects. You can also use Search to find and select ${pluralize(
          itemName,
        )}.`

  return {
    ADD_ITEMS: `Add ${pluralize(itemName)}`,
    ADD_ITEMS_TO: `Add ${pluralize(itemName)} to ${displayName}`,
    REMOVE_ITEMS: `Remove ${pluralize(itemName)}`,
    NO_ITEMS_IN_THIS_DATASET: `No ${pluralize(
      itemName,
    )} in this ${displayName}`,
    SAVE_TO_CONTINUE: `Save the ${displayName} to continue`,
    CREATE_VERSION_TO_FREEZE: `Create a Version of this ${displayName} to freeze it in its current state`,
    ENTITY_SAVED: `${displayName} Saved`,
    SAVE_CHANGES: `Save changes to ${currentVersionName}`,
    ENTITY_FINDER_POPOVER: entityFinderPopover,
    ENTITY_FINDER_PROMPT: `Find ${pluralize(
      itemName,
    )} to add to the ${displayName}.`,
    PRECONDITION_FAILED_MESSAGE: `Re-retrieve the ${displayName} to get the latest changes. Your current changes will be lost.`,
    PRECONDITION_FAILED_TITLE: `${displayName} updated since last fetched`,
    PRECONDITION_FAILED_ACTION: `Retrieve ${displayName}`,
    NO_CHANGES_MADE: `You have not made any changes to the ${displayName}.`,
  }
}

function getDataSetDifference(
  oldDataSet: EntityRef[],
  changedItems: EntityRef[],
) {
  const unchangedItems = oldDataSet.filter(
    oldItem =>
      !changedItems.find(newItem => newItem.entityId === oldItem.entityId),
  )
  const deletedItems = [...unchangedItems]
  const { updatedItems, newItems } = changedItems.reduce(
    (results, result) => {
      const oldItem = oldDataSet.find(old => old.entityId === result.entityId)
      if (oldItem) {
        if (result.versionNumber !== oldItem.versionNumber) {
          results['updatedItems'].push(result)
        } else {
          unchangedItems.push(result)
        }
      } else {
        results['newItems'].push(result)
      }
      return results
    },
    { updatedItems: [], newItems: [] } as {
      updatedItems: EntityRef[]
      newItems: EntityRef[]
    },
  )

  return { unchangedItems, updatedItems, newItems, deletedItems }
}

function getDatasetChangedToastMessageTitle(
  previousDatasetToUpdate?: RequiredProperties<
    EntityRefCollectionView,
    'items'
  >,
  datasetToUpdate?: RequiredProperties<EntityRefCollectionView, 'items'>,
) {
  const { updatedItems, newItems, deletedItems } = getDataSetDifference(
    previousDatasetToUpdate?.items ?? [],
    datasetToUpdate?.items!,
  )
  let toastTitle = ''

  // "X items(s) deleted"
  if (deletedItems.length > 0) {
    toastTitle += `${deletedItems.length} Item${
      deletedItems.length === 1 ? '' : 's'
    } removed`
  } else {
    // "Y item(s) added"
    toastTitle += `${newItems.length} Item${
      newItems.length === 1 ? '' : 's'
    } added`

    // "and Z item(s) updated", only shown if there are updated items
    if (updatedItems.length > 0) {
      toastTitle += ` and ${updatedItems.length} Item${
        updatedItems.length === 1 ? '' : 's'
      } updated`
    }
  }
  return toastTitle
}

export type DatasetItemsEditorProps = {
  /* The synId of the EntityRefCollectionView to modify */
  entityId: string
  /** Callback invoked when the editor changes state to contain un/saved changes. */
  onUnsavedChangesChange?: (hasUnsavedChanges: boolean) => void
  onSave?: () => void
  onClose?: () => void
}

const ROW_HEIGHT = 48

type SelectAllCheckboxRendererProps = {
  datasetToUpdate: RequiredProperties<EntityRefCollectionView, 'items'>
  selectedIds: Omit<Set<string>, 'add' | 'delete' | 'clear'>
  addSelectedId: (...items: string[]) => void
  clearSelectedIds: () => void
  allItemsAreSelected: boolean
}

const SelectAllCheckboxRenderer = (props: SelectAllCheckboxRendererProps) => {
  const {
    datasetToUpdate,
    clearSelectedIds,
    allItemsAreSelected,
    addSelectedId,
  } = props
  const isChecked = allItemsAreSelected

  return (
    <Checkbox
      inputProps={{ 'aria-label': 'Select All' }}
      checked={isChecked}
      disabled={datasetToUpdate.items.length === 0}
      onChange={() => {
        if (isChecked) {
          clearSelectedIds()
        } else {
          addSelectedId(...datasetToUpdate.items.map(item => item.entityId))
        }
      }}
    />
  )
}

function NoItemsPlaceholder(props: {
  titleCopy: string
  buttonCopy: string
  onButtonClick: () => void
}) {
  const { titleCopy, buttonCopy, onButtonClick } = props
  return (
    <div className="NoItemsPlaceholder">
      <Typography variant={'headline3'}>{titleCopy}</Typography>
      <WideButton
        variant="contained"
        color="primary"
        onClick={onButtonClick}
        startIcon={<AddCircleTwoToneIcon />}
        sx={{ mt: 2 }}
      >
        {buttonCopy}
      </WideButton>
    </div>
  )
}

export function DatasetItemsEditor(props: DatasetItemsEditorProps) {
  const { entityId, onSave, onClose, onUnsavedChangesChange } = props
  const [showEntityFinder, setShowEntityFinder] = useState<boolean>(false)
  const [showWarningDialog, setShowWarningDialog] = useState<boolean>(false)

  // The current 'client state' of dataset that the user is currently editing. Updates to this state are not saved until the user clicks 'Save'.
  const [datasetToUpdate, setDatasetToUpdate] =
    useState<RequiredProperties<EntityRefCollectionView, 'items'>>()

  // The previous value of the datasetToUpdate variable. This is used to calculate a summary of bulk actions since the last update to the unsaved dataset state.
  const [previousDatasetToUpdate, setPreviousDatasetToUpdate] =
    useState<RequiredProperties<EntityRefCollectionView, 'items'>>()

  // Stores the `close` function that will be used to hide the last toast that prompted the user to save
  const [onCloseLastSavePromptToast, setOnCloseLastSavePromptToast] = useState<
    { close: () => void } | undefined
  >()

  const { data: datasetOnServer, refetch: refetchDataset } = useGetEntity<
    RequiredProperties<EntityRefCollectionView, 'items'>
  >(entityId, undefined, {
    staleTime: Infinity,
  })

  const hasChangedSinceLastSave = Boolean(
    datasetOnServer &&
      datasetToUpdate &&
      !isEqual(datasetOnServer, datasetToUpdate),
  )

  const {
    ADD_ITEMS,
    ADD_ITEMS_TO,
    REMOVE_ITEMS,
    NO_ITEMS_IN_THIS_DATASET,
    SAVE_TO_CONTINUE,
    CREATE_VERSION_TO_FREEZE,
    ENTITY_SAVED,
    SAVE_CHANGES,
    PRECONDITION_FAILED_TITLE,
    PRECONDITION_FAILED_MESSAGE,
    PRECONDITION_FAILED_ACTION,
    ENTITY_FINDER_POPOVER,
    ENTITY_FINDER_PROMPT,
    NO_CHANGES_MADE,
  } = useMemo(() => getCopy(datasetOnServer), [datasetOnServer])

  useEffect(() => {
    if (datasetOnServer) {
      // SWC-5876: Dataset Items may be undefined. This has the same inherent meaning as the empty list, so we'll just change it to save us some null checks.
      if (datasetOnServer.items == null) {
        datasetOnServer.items = []
      }
      setDatasetToUpdate(datasetOnServer)
    }
  }, [datasetOnServer])

  const {
    set: selectedIds,
    add: addSelectedId,
    remove: removeSelectedId,
    clear: clearSelectedIds,
  } = useSet<string>()
  const allItemsAreSelected = Boolean(
    datasetToUpdate && datasetToUpdate.items.length === selectedIds.size,
  )

  useEffect(() => {
    if (datasetToUpdate && datasetOnServer && onUnsavedChangesChange) {
      onUnsavedChangesChange(hasChangedSinceLastSave)
    }
  }, [
    datasetOnServer,
    datasetToUpdate,
    hasChangedSinceLastSave,
    onUnsavedChangesChange,
  ])

  // We get the project ID to show the "Current Project" context in the Entity Finder.
  const { data: path } = useGetEntityPath(entityId)
  const projectId = path?.path[1]?.id

  const { mutate, isPending: updateIsPending } =
    useUpdateEntity<EntityRefCollectionView>({
      onMutate: () => {
        // Close existing toast that prompted the user to save
        if (onCloseLastSavePromptToast) {
          onCloseLastSavePromptToast.close()
          setOnCloseLastSavePromptToast(undefined)
        }
      },
      onSuccess: () => {
        // The query should automatically be invalidated, but just in case
        void refetchDataset()

        if (onSave) {
          onSave()
        } else {
          // If onSave isn't specified, push a generic toast message.
          displayToast(CREATE_VERSION_TO_FREEZE, 'success', {
            title: ENTITY_SAVED,
          })
        }
      },
      onError: error => {
        if (error.status === 412) {
          displayToast(PRECONDITION_FAILED_MESSAGE, 'warning', {
            title: PRECONDITION_FAILED_TITLE,
            primaryButtonConfig: {
              text: PRECONDITION_FAILED_ACTION,
              onClick: () => {
                void refetchDataset()
              },
            },
          })
        } else {
          displayToast(error.reason, 'danger', {
            title: 'An Error Occurred',
          })
        }
      },
    })

  useEffect(() => {
    // When changes are made (but not saved) to the datasetToUpdate, show a notification that summarizes the change and prompts the user to save
    if (
      previousDatasetToUpdate &&
      datasetToUpdate &&
      !isEqual(previousDatasetToUpdate.items, datasetToUpdate.items) &&
      !updateIsPending
    ) {
      const toastMessageTitle = getDatasetChangedToastMessageTitle(
        previousDatasetToUpdate,
        datasetToUpdate,
      )
      // Replace existing toast that prompts the user to save before showing the new one
      if (onCloseLastSavePromptToast) {
        onCloseLastSavePromptToast.close()
      }
      const onCloseToast = displayToast(SAVE_TO_CONTINUE, 'info', {
        title: toastMessageTitle,
        primaryButtonConfig: {
          text: SAVE_CHANGES,
          onClick: () => mutate(datasetToUpdate),
        },
      })
      setOnCloseLastSavePromptToast({ close: onCloseToast })
    }
    setPreviousDatasetToUpdate(datasetToUpdate)
    // Only run when datasetToUpdate changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datasetToUpdate])

  const tableData = useMemo(
    () =>
      datasetToUpdate?.items.map(
        (item: EntityRef): DatasetItemsEditorTableData => {
          return {
            ...item,
            isSelected: selectedIds.has(item.entityId),
            setSelected: (value: boolean) => {
              return value
                ? addSelectedId(item.entityId)
                : removeSelectedId(item.entityId)
            },
          }
        },
      ) ?? [],
    [addSelectedId, datasetToUpdate?.items, removeSelectedId, selectedIds],
  )

  function addItemsToDataset(itemsToAdd: Reference[]) {
    setDatasetToUpdate(datasetToUpdate => {
      if (datasetToUpdate) {
        const refToDatasetItem = itemsToAdd.map(item => ({
          entityId: item.targetId,
          versionNumber: item.targetVersionNumber!,
        }))
        const { unchangedItems, updatedItems, newItems } = getDataSetDifference(
          datasetToUpdate.items,
          refToDatasetItem,
        )

        if (updatedItems.length == 0 && newItems.length == 0) {
          // No items were added or updated, so don't update the state variable.
          return datasetToUpdate
        }

        const items = [...unchangedItems, ...updatedItems, ...newItems]

        return {
          ...datasetToUpdate,
          items: items,
        }
      } else {
        console.warn(
          'Cannot add items to the Collection because it is undefined. The Collection may not have been fetched yet.',
        )
        return datasetToUpdate
      }
    })
    clearSelectedIds()
  }

  function removeSelectedItemsFromDataset() {
    setDatasetToUpdate(dataset => ({
      ...dataset!,
      items: dataset!.items.filter(
        datasetItem => !selectedIds.has(datasetItem.entityId),
      ),
    }))
    clearSelectedIds()
  }

  function changeVersionOnItem(entityId: string, newVersion: number) {
    setDatasetToUpdate(dataset => ({
      ...dataset!,
      items: dataset!.items.map(datasetItem =>
        datasetItem.entityId === entityId
          ? { entityId: entityId, versionNumber: newVersion }
          : datasetItem,
      ),
    }))
  }

  const selectableTypes: EntityType[] | undefined = useMemo(() => {
    if (datasetOnServer) {
      return getSelectableTypes(datasetOnServer)
    } else {
      return undefined
    }
  }, [datasetOnServer])

  const columns = useMemo(() => {
    if (!datasetToUpdate) {
      return []
    }
    return getColumns({
      datasetToUpdate,
      selectedIds,
      clearSelectedIds,
      addSelectedId,
      allItemsAreSelected,
      changeVersionOnItem,
    })
  }, [
    addSelectedId,
    allItemsAreSelected,
    clearSelectedIds,
    datasetToUpdate,
    selectedIds,
  ])

  const table: Table<DatasetItemsEditorTableData> =
    useReactTable<DatasetItemsEditorTableData>({
      data: tableData,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      // There are no backend sort controls. The server only provides ID/version, and a dataset could be up to 10k items,
      // so client side sorting is non-trivial. We may consider fetching all entity headers upon user request.
      enableSorting: false,
    })

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: tableData?.length ?? 0,
    estimateSize: () => ROW_HEIGHT, // estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    // measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  const datasetItemsAsEntityFinderRef = useMemo(
    () => datasetToUpdate?.items.map(datasetItemToReference),
    [datasetToUpdate],
  )

  return (
    <div className="DatasetEditor">
      <EntityFinderModal
        initialSelected={datasetItemsAsEntityFinderRef}
        configuration={{
          projectId: projectId,
          selectMultiple: true,
          initialScope: FinderScope.CURRENT_PROJECT,
          initialContainer: projectId ?? null,
          selectableTypes: selectableTypes,
          versionSelection: VersionSelectionType.REQUIRED,
        }}
        titleHelpPopoverProps={{
          markdownText: ENTITY_FINDER_POPOVER,
          helpUrl: 'https://help.synapse.org/docs/Datasets.2611281979.html',
          placement: 'right',
        }}
        promptCopy={ENTITY_FINDER_PROMPT}
        show={showEntityFinder}
        title={ADD_ITEMS_TO}
        confirmButtonCopy={'Apply changes'}
        onConfirm={items => {
          addItemsToDataset(items)
          setShowEntityFinder(false)
        }}
        onCancel={() => setShowEntityFinder(false)}
      />
      <WarningDialog
        title="Unsaved Changes"
        content="Any unsaved changes will be lost. Are you sure you want to close the editor?"
        confirmButtonText="Close Editor"
        onConfirm={() => {
          if (onClose) {
            setShowWarningDialog(false)
            if (onUnsavedChangesChange) {
              onUnsavedChangesChange(false)
            }
            onClose()
          }
        }}
        open={showWarningDialog}
        onConfirmCallbackArgs={[]}
        onCancel={() => setShowWarningDialog(false)}
      />

      <div className="DatasetEditorTopBottomPanel">
        <BlockingLoader show={updateIsPending} />
        <div className="ItemCount">
          {datasetToUpdate ? (
            <Typography variant="headline3">
              {datasetToUpdate.items.length === 0
                ? 'No'
                : datasetToUpdate.items.length.toLocaleString()}{' '}
              File
              {datasetToUpdate.items.length !== 1 && 's'}
            </Typography>
          ) : (
            <Skeleton variant="rectangular" width={200} />
          )}
        </div>

        <Button
          variant="contained"
          color="primary"
          disabled={datasetToUpdate == null}
          onClick={() => setShowEntityFinder(true)}
        >
          {ADD_ITEMS}
        </Button>
        <Button
          disabled={selectedIds.size === 0}
          variant="outlined"
          color="primary"
          onClick={removeSelectedItemsFromDataset}
        >
          {REMOVE_ITEMS}
        </Button>
      </div>
      <div className="DatasetEditorTableContainer">
        {datasetToUpdate && datasetToUpdate.items.length === 0 && (
          <NoItemsPlaceholder
            titleCopy={NO_ITEMS_IN_THIS_DATASET}
            buttonCopy={ADD_ITEMS}
            onButtonClick={() => setShowEntityFinder(true)}
          />
        )}
        {datasetToUpdate && datasetToUpdate.items.length > 0 && (
          <StyledVirtualTanStackTable<DatasetItemsEditorTableData>
            styledTableContainerProps={{
              className: 'DatasetEditorTable',
              ref: tableContainerRef,
              height: '350px',
            }}
            table={table}
            rowVirtualizer={rowVirtualizer}
            slotProps={{
              Tr: {
                className: `DatasetEditorRow`,
                style: {
                  height: `${ROW_HEIGHT}px`,
                  maxHeight: `${ROW_HEIGHT}px`,
                },
              },
            }}
          />
        )}
        {!datasetToUpdate && (
          <SkeletonTable
            className="DatasetItemsEditorSkeleton"
            numRows={8}
            numCols={6}
            rowHeight={`${ROW_HEIGHT}px`}
          />
        )}
      </div>
      <div className="DatasetEditorTopBottomPanel">
        {hasChangedSinceLastSave && (
          <Alert severity="warning">You have unsaved changes</Alert>
        )}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            if (hasChangedSinceLastSave) {
              setShowWarningDialog(true)
            } else if (onClose) {
              onClose()
            }
          }}
        >
          Cancel
        </Button>

        <Tooltip title={!hasChangedSinceLastSave && NO_CHANGES_MADE}>
          <div>
            <Button
              disabled={!datasetToUpdate || !hasChangedSinceLastSave}
              variant="contained"
              color="primary"
              onClick={() => mutate(datasetToUpdate!)}
            >
              Save
            </Button>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default DatasetItemsEditor
