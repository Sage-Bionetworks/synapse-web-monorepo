import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material'
import { EntityType } from '@sage-bionetworks/synapse-client'

enum DownloadAction {
  downloadFile,
  addToCart,
  programmaticAccess,
  programmaticAccessDocker,
  exportTable,
}

// Function that creates menu items for download actions
function getMenuItemForAction(
  entityId: string,
  entityName: string,
  downloadAction: DownloadAction,
): DropdownMenuItem {
  switch (downloadAction) {
    case DownloadAction.downloadFile:
      return {
        text: 'Download File',
        onClick: () => {
          console.log('Download file:', entityId, entityName)
          // TODO: Implement file download functionality
        },
        tooltipText: 'Download this file directly',
      }
    case DownloadAction.addToCart:
      return {
        text: 'Add to Download Cart',
        onClick: () => {
          console.log('Add file(s) to cart:', entityId)
          // TODO: Implement add to cart functionality
        },
        tooltipText: 'Add file(s) to your download cart',
      }
    case DownloadAction.programmaticAccess:
      return {
        text: 'Programmatic Access',
        onClick: () => {
          console.log('Show programmatic access for:', entityId)
          // TODO: Implement programmatic access options
        },
        tooltipText: 'View programmatic access options',
      }
    case DownloadAction.programmaticAccessDocker:
      return {
        text: 'Programmatic Access (Docker)',
        onClick: () => {
          console.log('Show programmatic access (Docker) for:', entityId)
          // TODO: Implement programmatic access (Docker) options
        },
        tooltipText: 'View programmatic options to pull Docker image',
      }
    case DownloadAction.exportTable:
      return {
        text: 'Export Table',
        onClick: () => {
          console.log('Export table for:', entityId)
          // TODO: Implement export table functionality
        },
        tooltipText: 'Export table data',
      }
  }
}

// Function that returns DropdownMenuItem
function getDownloadActionsForEntityType(type: EntityType): DownloadAction[][] {
  switch (type) {
    case 'file':
      return [
        [DownloadAction.downloadFile],
        [DownloadAction.addToCart, DownloadAction.programmaticAccess],
      ]
    case 'project':
    case 'folder':
      return [[DownloadAction.addToCart, DownloadAction.programmaticAccess]]
    case 'entityview':
    case 'dataset':
    case 'table':
      return [[DownloadAction.addToCart, DownloadAction.programmaticAccess]]
    case 'dockerrepo':
      return [[DownloadAction.programmaticAccessDocker]]
    case 'datasetcollection':
    case 'materializedview':
    case 'submissionview':
    case 'virtualtable':
      return [[DownloadAction.exportTable, DownloadAction.programmaticAccess]]
    case 'link':
    case 'recordset':
      return [[DownloadAction.programmaticAccess]]
    default:
      // This will fail if a new EntityType is added and not handled
      throw new Error(`Unhandled EntityType: ${type}`)
  }
}

export function EntityDownloadButton(props: {
  entityId: string
  name: string
  entityType: EntityType
}) {
  const downloadActions = getDownloadActionsForEntityType(props.entityType)
  const downloadMenuItems = downloadActions.map(actionGroup =>
    actionGroup.map(action =>
      getMenuItemForAction(props.entityId, props.name, action),
    ),
  )

  return (
    <DropdownMenu
      items={downloadMenuItems}
      dropdownButtonText="Download"
      buttonTooltip="Download options for this entity"
      buttonProps={{
        variant: 'outlined',
        startIcon: <DownloadIcon />,
      }}
    />
  )
}
