import { Alert, Button, Skeleton, Typography } from '@mui/material'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import BaseTable, {
  AutoResizer,
  ColumnShape,
} from '@sage-bionetworks/react-base-table'
import { isEqual, upperFirst } from 'lodash-es'
import pluralize from 'pluralize'
import React, { useEffect, useMemo, useState } from 'react'
import { SkeletonTable } from '../../Skeleton/SkeletonTable'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  isDataset,
  isDatasetCollection,
} from '../../../utils/functions/EntityTypeUtils'
import {
  useGetEntity,
  useGetEntityPath,
  useUpdateEntity,
} from '../../../synapse-queries/entity/useEntity'
import { useSet } from '../../../utils/hooks/useSet'
import {
  EntityRef,
  EntityRefCollectionView,
  EntityType,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { RequiredProperties } from '../../../utils/types/RequiredProperties'
import {
  BadgeIconsRenderer,
  CellRendererProps,
  CreatedOnRenderer,
  DatasetEditorCheckboxRenderer,
  DatasetEditorVersionRenderer,
  EntityErrorRenderer,
  EntityNameRenderer,
  ModifiedByRenderer,
  ModifiedOnRenderer,
  ProjectRenderer,
} from '../../EntityFinder/details/view/DetailsViewTableRenderers'
import { EntityFinderModal } from '../../EntityFinder/EntityFinderModal'
import { FinderScope } from '../../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../../EntityFinder/VersionSelectionType'
import { BlockingLoader } from '../../LoadingScreen/LoadingScreen'
import WarningDialog from '../../SynapseForm/WarningDialog'
import { displayToast } from '../../ToastMessage/ToastMessage'
import { Checkbox } from '../../widgets/Checkbox'
import WideButton from '../../../components/styled/WideButton'

function getSelectableTypes(entity: EntityRefCollectionView) {
  if (isDataset(entity)) {
    return [EntityType.FILE]
  } else if (isDatasetCollection(entity)) {
    return [EntityType.DATASET]
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
    itemName = entityTypeToFriendlyName(EntityType.FILE)
    currentVersionName = 'Draft'
  } else if (entity && isDatasetCollection(entity)) {
    itemName = entityTypeToFriendlyName(EntityType.DATASET)
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
  }
}

export type DatasetItemsEditorProps = {
  /* The synId of the EntityRefCollectionView to modify */
  entityId: string
  /** Callback invoked when the editor changes state to contain un/saved changes. */
  onUnsavedChangesChange?: (hasUnsavedChanges: boolean) => void
  onSave?: () => void
  onClose?: () => void
}

export type DatasetItemsEditorTableData = EntityRef & {
  isSelected: boolean
  setSelected: (value: boolean) => void
}

const ROW_HEIGHT = 42
const TABLE_HEIGHT = 350

export function DatasetItemsEditor(props: DatasetItemsEditorProps) {
  const { entityId, onSave, onClose, onUnsavedChangesChange } = props
  const [showEntityFinder, setShowEntityFinder] = useState<boolean>(false)
  const [showWarningDialog, setShowWarningDialog] = useState<boolean>(false)
  const [hasChangedSinceLastSave, setHasChangedSinceLastSave] = useState(false)
  // Disable updating the entity after the initial fetch because we don't want to replace edits that the user makes.
  const [datasetToUpdate, _setDatasetToUpdate] =
    useState<RequiredProperties<EntityRefCollectionView, 'items'>>()
  const [previousDatasetToUpdate, setPreviousDatasetToUpdate] =
    useState<RequiredProperties<EntityRefCollectionView, 'items'>>()
  const setDatasetToUpdate = (
    dataset: React.SetStateAction<
      RequiredProperties<EntityRefCollectionView, 'items'> | undefined
    >,
  ) => {
    setHasChangedSinceLastSave(true)
    _setDatasetToUpdate(dataset)
  }

  const { data: fetchedDataset, refetch } = useGetEntity<
    RequiredProperties<EntityRefCollectionView, 'items'>
  >(entityId, undefined, {
    enabled: !datasetToUpdate,
  })

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
  } = useMemo(() => getCopy(fetchedDataset), [fetchedDataset])

  useEffect(() => {
    // Don't update when we already have datasetToUpdate
    if (!datasetToUpdate && fetchedDataset) {
      // SWC-5876: Dataset Items may be undefined. This has the same inherent meaning as the empty list, so we'll just change it to save us some null checks.
      if (fetchedDataset.items == null) {
        fetchedDataset.items = []
      }
      setDatasetToUpdate(fetchedDataset)
      setHasChangedSinceLastSave(false)
    }
  }, [fetchedDataset, datasetToUpdate])

  const {
    set: selectedIds,
    add: addSelectedId,
    remove: removeSelectedId,
    clear: clearSelectedIds,
  } = useSet<string>()
  const allItemsAreSelected = !!(
    datasetToUpdate && datasetToUpdate.items.length === selectedIds.size
  )

  useEffect(() => {
    if (onUnsavedChangesChange) {
      onUnsavedChangesChange(hasChangedSinceLastSave)
    }
  }, [hasChangedSinceLastSave, onUnsavedChangesChange])

  useEffect(() => {
    if (
      previousDatasetToUpdate &&
      datasetToUpdate &&
      !isEqual(previousDatasetToUpdate, datasetToUpdate)
    ) {
      const toastMessageTitle = getToastMessageTitle()
      displayToast(SAVE_TO_CONTINUE, 'info', {
        title: toastMessageTitle,
        primaryButtonConfig: {
          text: SAVE_CHANGES,
          onClick: () => mutate(datasetToUpdate),
        },
      })
    }
    setPreviousDatasetToUpdate(datasetToUpdate)
  }, [datasetToUpdate])

  // We get the project ID to show the "Current Project" context in the Entity Finder.
  const { data: path } = useGetEntityPath(entityId)
  const projectId = path?.path[1]?.id

  const { mutate, isPending: updateIsPending } =
    useUpdateEntity<EntityRefCollectionView>({
      onSuccess: () => {
        setHasChangedSinceLastSave(false)
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
                refetch()
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

  const tableData = datasetToUpdate?.items.map((item: EntityRef) => {
    return {
      ...item,
      isSelected: selectedIds.has(item.entityId),
      setSelected: (value: boolean) => {
        return value
          ? addSelectedId(item.entityId)
          : removeSelectedId(item.entityId)
      },
    }
  })

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

  function getToastMessageTitle() {
    const { updatedItems, newItems, deletedItems } = getDataSetDifference(
      previousDatasetToUpdate?.items!,
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

  const DatasetItemVersionRenderer = (
    props: CellRendererProps<DatasetItemsEditorTableData>,
  ) => {
    return (
      <DatasetEditorVersionRenderer
        {...props}
        toggleSelection={datasetItem => {
          changeVersionOnItem(datasetItem.entityId, datasetItem.versionNumber)
        }}
      />
    )
  }

  type SelectAllCheckboxRendererProps = {
    datasetToUpdate: RequiredProperties<EntityRefCollectionView, 'items'>
    selectedIds: Omit<Set<string>, 'add' | 'delete' | 'clear'>
    addSelectedId: (...items: string[]) => void
    clearSelectedIds: () => void
    allItemsAreSelected: boolean
  }
  const SelectAllCheckboxRenderer = (props: SelectAllCheckboxRendererProps) => {
    const { datasetToUpdate, clearSelectedIds, addSelectedId } = props
    const isChecked = allItemsAreSelected

    return datasetToUpdate ? (
      <div
        data-testid="Select All"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          if (isChecked) {
            clearSelectedIds()
          } else {
            addSelectedId(...datasetToUpdate.items.map(item => item.entityId))
          }
        }}
      >
        <Checkbox
          label="Select All"
          hideLabel={true}
          className="SRC-pointer-events-none"
          checked={isChecked}
          disabled={datasetToUpdate.items.length === 0}
          onChange={() => {
            // no-op
          }}
        />
      </div>
    ) : (
      <></>
    )
  }

  const renderedSelectAllCheckbox = datasetToUpdate ? (
    <SelectAllCheckboxRenderer
      datasetToUpdate={datasetToUpdate}
      selectedIds={selectedIds}
      clearSelectedIds={clearSelectedIds}
      addSelectedId={addSelectedId}
      allItemsAreSelected={allItemsAreSelected}
    />
  ) : (
    <></>
  )

  const defaultColumns: ColumnShape<DatasetItemsEditorTableData>[] = [
    {
      key: 'errorState',
      width: 30,
      cellRenderer: EntityErrorRenderer,
    },
    {
      key: 'isSelected',
      width: 40,
      dataKey: 'isSelected',
      headerRenderer: renderedSelectAllCheckbox,
      cellRenderer: DatasetEditorCheckboxRenderer,
    },
    {
      key: 'name',
      width: 350,
      dataKey: 'entityId',
      title: 'Name',
      resizable: true,
      cellRenderer: EntityNameRenderer,
    },
    {
      key: 'status',
      width: 80,
      resizable: true,
      cellRenderer: BadgeIconsRenderer,
    },
    {
      key: 'id',
      width: 140,
      title: 'ID',
      dataKey: 'entityId',
      resizable: true,
    },
    {
      key: 'version',
      width: 150,
      title: 'Version',
      dataKey: 'entityId',
      cellRenderer: DatasetItemVersionRenderer,
    },
    {
      key: 'createdOn',
      width: 200,
      title: 'Created On',
      dataKey: 'entityId',
      resizable: true,
      cellRenderer: CreatedOnRenderer,
    },
    {
      key: 'modifiedOn',
      width: 200,
      title: 'Modified On',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ModifiedOnRenderer,
    },
    {
      key: 'modifiedBy',
      width: 250,
      title: 'Modified By',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ModifiedByRenderer,
    },
    {
      key: 'projectId',
      width: 300,
      title: 'Project',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ProjectRenderer,
    },
  ]

  const totalColumnWidth = defaultColumns.reduce((totalWidth, column) => {
    return totalWidth + column.width
  }, 0)

  function NoItemsPlaceholder() {
    return (
      <div className="NoItemsPlaceholder">
        <Typography variant={'headline3'}>
          {NO_ITEMS_IN_THIS_DATASET}
        </Typography>
        <WideButton
          variant="contained"
          color="primary"
          onClick={() => setShowEntityFinder(true)}
          startIcon={<AddCircleTwoToneIcon />}
          sx={{ mt: 2 }}
        >
          {ADD_ITEMS}
        </WideButton>
      </div>
    )
  }

  const selectableTypes: EntityType[] | undefined = useMemo(() => {
    if (fetchedDataset) {
      return getSelectableTypes(fetchedDataset)
    } else {
      return undefined
    }
  }, [fetchedDataset])

  return (
    <div className="DatasetEditor">
      <EntityFinderModal
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
        confirmButtonCopy={ADD_ITEMS}
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
            onUnsavedChangesChange && onUnsavedChangesChange(false)
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
        {datasetToUpdate ? (
          datasetToUpdate.items.length === 0 ? (
            <NoItemsPlaceholder></NoItemsPlaceholder>
          ) : (
            <AutoResizer height={TABLE_HEIGHT}>
              {({ height, width }: { height: number; width: number }) => (
                <BaseTable
                  classPrefix="DatasetEditorTable"
                  data={tableData}
                  height={height}
                  width={width > totalColumnWidth ? width : totalColumnWidth}
                  rowHeight={ROW_HEIGHT}
                  overscanRowCount={5}
                  columns={defaultColumns}
                  rowClassName={'DatasetEditorRow'}
                  rowProps={({ rowData }) => {
                    return {
                      'aria-selected': rowData.isSelected,
                    }
                  }}
                  headerCellProps={{
                    role: 'columnheader',
                  }}
                ></BaseTable>
              )}
            </AutoResizer>
          )
        ) : (
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

        <Button
          disabled={!datasetToUpdate}
          variant="contained"
          color="primary"
          onClick={() => mutate(datasetToUpdate!)}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
