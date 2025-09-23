import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material'

// Create menu items based on entity type
function createMenuItemsForEntityType(
  entityId: string,
  entityName: string,
  entityType: string,
) {
  const entityTypeLower = entityType.toLowerCase()

  // Create dynamic menu items with props
  const dynamicConfigs: Record<string, DropdownMenuItem> = {
    downloadFile: {
      text: 'Download File',
      onClick: () => {
        console.log('Download file:', entityId, entityName)
        // TODO: Implement file download functionality
      },
      tooltipText: 'Download this file directly',
    },
    addToCart: {
      text: 'Add to Download Cart',
      onClick: () => {
        console.log('Add file(s) to cart:', entityId)
        // TODO: Implement add to cart functionality
      },
      tooltipText: 'Add file(s) to your download cart',
    },
    programmaticAccess: {
      text: 'Programmatic Access',
      onClick: () => {
        console.log('Show programmatic access for:', entityId)
        // TODO: Implement programmatic access options
      },
      tooltipText: 'View programmatic access options',
    },
    programmaticAccessDocker: {
      text: 'Programmatic Access (Docker)',
      onClick: () => {
        console.log('Show programmatic access (Docker) for:', entityId)
        // TODO: Implement programmatic access (Docker) options
      },
      tooltipText: 'View programmatic options to pull Docker image',
    },
    exportTable: {
      text: 'Export Table',
      onClick: () => {
        console.log('Export table for:', entityId)
        // TODO: Implement export table functionality
      },
      tooltipText: 'Export table data',
    },
  }

  if (entityTypeLower === 'file') {
    return [
      [dynamicConfigs.downloadFile],
      [dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess],
    ]
  } else if (entityTypeLower === 'project' || entityTypeLower === 'folder') {
    return [[dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess]]
  } else if (
    entityTypeLower === 'entityview' ||
    entityTypeLower === 'dataset' ||
    entityTypeLower === 'table'
  ) {
    return [[dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess]]
  } else if (entityTypeLower === 'dockerrepo') {
    return [[dynamicConfigs.programmaticAccessDocker]]
  } else {
    // Other entity types (datasetcollection, materializedview, virtualtable, submissionview)
    return [[dynamicConfigs.exportTable, dynamicConfigs.programmaticAccess]]
  }
}

export function EntityDownloadButton(props: {
  entityId: string
  name: string
  entityType: string
}) {
  const downloadMenuItems = createMenuItemsForEntityType(
    props.entityId,
    props.name,
    props.entityType,
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
