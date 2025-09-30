import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'

// Python client import and login instructions
export const PYTHON_CLIENT_IMPORT_AND_LOGIN = `import synapseclient
syn = synapseclient.Synapse()
syn.login(authToken="YOUR_TOKEN_HERE")`

// R client import and login instructions
export const R_CLIENT_IMPORT_AND_LOGIN = `library(synapser)
synLogin(authToken="YOUR_TOKEN_HERE")`

export const DOCKER_LOGIN =
  'docker login -u <synapse username> -p <synapse password> docker.synapse.org'

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
  setIsShowingModalProgrammaticAccess: (show: boolean) => void,
  setIsShowingModalDocker: (show: boolean) => void,
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
          setIsShowingModalProgrammaticAccess(true)
        },
        tooltipText: 'View programmatic access options',
      }
    case DownloadAction.programmaticAccessDocker:
      return {
        text: 'Programmatic Access (Docker)',
        onClick: () => {
          setIsShowingModalDocker(true)
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
export function getDownloadActionsForEntityType(
  type: EntityType,
): DownloadAction[][] {
  switch (type) {
    case 'file':
    case 'recordset':
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
  // state to manage programmatic access modal visibility
  const [
    isShowingModalProgrammaticAccess,
    setIsShowingModalProgrammaticAccess,
  ] = useState<boolean>(false)
  const handleCloseModalProgrammaticAccess = () => {
    setIsShowingModalProgrammaticAccess(false)
  }

  // Generate programmatic access instructions
  const pythonCode = `${PYTHON_CLIENT_IMPORT_AND_LOGIN}
# Download file
syn.get('${props.entityId}')`

  const rCode = `${R_CLIENT_IMPORT_AND_LOGIN}
# Download file
synGet('${props.entityId}')`

  const cliCode = `synapse get ${props.entityId}`

  // state to manage docker modal visibility
  const [isShowingModalDocker, setIsShowingModalDocker] =
    useState<boolean>(false)
  const handleCloseModalDocker = () => {
    setIsShowingModalDocker(false)
  }

  // Generate Docker instructions
  // FIXME: need to find a way to replace <myrepo>
  const dockerCode = `${DOCKER_LOGIN}
docker pull docker.synapse.org/${props.entityId}/myrepo`

  // Create download menu items
  const downloadActions = getDownloadActionsForEntityType(props.entityType)
  const downloadMenuItems = downloadActions.map(actionGroup =>
    actionGroup.map(action =>
      getMenuItemForAction(
        props.entityId,
        props.name,
        action,
        setIsShowingModalProgrammaticAccess,
        setIsShowingModalDocker,
      ),
    ),
  )

  return (
    <>
      <DropdownMenu
        items={downloadMenuItems}
        dropdownButtonText="Download"
        buttonTooltip="Download options for this entity"
        buttonProps={{
          variant: 'outlined',
          startIcon: <DownloadIcon />,
        }}
      />
      <ProgrammaticInstructionsModal
        show={isShowingModalProgrammaticAccess}
        title={`Programmatic Access: ${props.name}`}
        onClose={handleCloseModalProgrammaticAccess}
        pythonCode={pythonCode}
        rCode={rCode}
        cliCode={cliCode}
        helpUrl="https://help.synapse.org/docs/Getting-Started-with-Downloading.2003796248.html"
        hasCancelButton={false}
      />
      <ProgrammaticInstructionsModal
        show={isShowingModalDocker}
        title={`Programmatic Access: ${props.name}`}
        onClose={handleCloseModalDocker}
        cliCode={dockerCode}
        helpUrl="https://help.synapse.org/docs/Synapse-Docker-Registry.2011037752.html#SynapseDockerRegistry-UsingDockerImagesStoredintheSynapseDockerRegistry"
        hasCancelButton={false}
      />
    </>
  )
}
