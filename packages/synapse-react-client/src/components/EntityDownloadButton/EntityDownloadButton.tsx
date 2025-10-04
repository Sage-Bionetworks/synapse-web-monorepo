import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import { ModalDownload } from '../ModalDownload/ModalDownload'
import { useGetEntity } from '@/synapse-queries'
import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'

// Have to keep these consts outside of getProgrammaticAccessCode because
// they are being called in ProgrammaticTableDownload.tsx
// Python client import and login instructions
export const PYTHON_CLIENT_IMPORT_AND_LOGIN = `import synapseclient
syn = synapseclient.Synapse()
syn.login(authToken="YOUR_TOKEN_HERE")`

// R client import and login instructions
export const R_CLIENT_IMPORT_AND_LOGIN = `library(synapser)
synLogin(authToken="YOUR_TOKEN_HERE")`

type ProgrammaticAccessCode = {
  cliCode: string | undefined
  rCode: string | undefined
  pythonCode: string | undefined
}

// Generate programmatic access code snippet content based on entity type
function getProgrammaticAccessCode(
  type: EntityType,
  entityId: string,
): ProgrammaticAccessCode {
  switch (type) {
    case 'file':
    case 'folder':
    case 'project':
      return {
        cliCode: `${PYTHON_CLIENT_IMPORT_AND_LOGIN} \n
# Download file
syn.get('${entityId}')`,
        rCode: `${R_CLIENT_IMPORT_AND_LOGIN} \n
# Download file
synGet('${entityId}')`,
        pythonCode: `${PYTHON_CLIENT_IMPORT_AND_LOGIN} \n
# Download file
syn.get('${entityId}')`,
      }
    case 'dockerrepo':
      return {
        cliCode: `docker login -u <synapse username> -p <synapse password> docker.synapse.org \n
docker pull docker.synapse.org/${entityId}/myrepo`,
        rCode: undefined,
        pythonCode: undefined,
      }
    case 'dataset':
    case 'entityview':
    case 'datasetcollection':
    case 'table':
    case 'materializedview':
    case 'submissionview':
    case 'virtualtable':
    case 'recordset':
      return {
        cliCode: `synapse get -q "SELECT * FROM ${entityId}"`,
        rCode: `${R_CLIENT_IMPORT_AND_LOGIN} \n
query <- synTableQuery("SELECT * FROM ${entityId}")
read.table(query$filepath, sep=",")`,
        pythonCode: `${PYTHON_CLIENT_IMPORT_AND_LOGIN} \n
query = syn.tableQuery("SELECT * FROM ${entityId}")
query.asDataFrame()`,
      }
    default:
      throw new Error(`Unhandled EntityType: ${type}`)
  }
}

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
  setShowProgrammaticAccess: (show: boolean) => void,
  setShowExportMetadata: (show: boolean) => void,
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
          setShowProgrammaticAccess(true)
        },
        tooltipText: 'View programmatic access options',
      }
    case DownloadAction.programmaticAccessDocker:
      return {
        text: 'Programmatic Access (Docker)',
        onClick: () => {
          setShowProgrammaticAccess(true)
        },
        tooltipText: 'View programmatic options to pull Docker image',
      }
    case DownloadAction.exportTable:
      return {
        text: 'Export Table',
        onClick: () => {
          setShowExportMetadata(true)
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
    case 'dockerrepo':
      return [[DownloadAction.programmaticAccessDocker]]
    case 'entityview':
    case 'dataset':
    case 'table':
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

// get latest version number of the entityId
function useGetLatestVersionNumber(entityId: string) {
  const { data: entity, isLoading } = useGetEntity(entityId) // No version = latest

  const latestVersionNumber =
    entity && isVersionableEntity(entity) ? entity.versionNumber : undefined

  return { latestVersionNumber, isLoading }
}

// create default queryBundleRequest
function getDefaultQueryBundleRequestForEntity(
  entityId: string,
  versionNumber: number | undefined,
  entityType: EntityType,
): QueryBundleRequest {
  const sql =
    entityType === 'dataset'
      ? `SELECT * FROM ${entityId}.${versionNumber}`
      : `SELECT * FROM ${entityId}`

  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: `${entityId}`,
    query: {
      sql: sql,
    } as Query,
    partMask: 0,
  }
}

export function EntityDownloadButton(props: {
  entityId: string
  name: string
  entityType: EntityType
}) {
  // create queryBundleRequest
  const { latestVersionNumber } = useGetLatestVersionNumber(props.entityId)
  const defaultQueryBundleRequest = getDefaultQueryBundleRequestForEntity(
    props.entityId,
    latestVersionNumber,
    props.entityType,
  )

  // state to manage programmatic access modal visibility
  const [ShowProgrammaticAccess, setShowProgrammaticAccess] =
    useState<boolean>(false)

  const handleCloseProgrammaticAccess = () => {
    setShowProgrammaticAccess(false)
  }

  // state to manage export metadata modal visibility
  const [showExportMetadata, setShowExportMetadata] = useState<boolean>(false)

  const handleCloseExportMetadata = () => {
    setShowExportMetadata(false)
  }

  // Create download menu items
  const downloadActions = getDownloadActionsForEntityType(props.entityType)
  const downloadMenuItems = downloadActions.map(actionGroup =>
    actionGroup.map(action =>
      getMenuItemForAction(
        props.entityId,
        props.name,
        action,
        setShowProgrammaticAccess,
        setShowExportMetadata,
      ),
    ),
  )

  // Return programmatic access modal content
  const { cliCode, rCode, pythonCode } = getProgrammaticAccessCode(
    props.entityType,
    props.entityId,
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
        show={ShowProgrammaticAccess}
        title={`Programmatic Access: ${props.name}`}
        onClose={handleCloseProgrammaticAccess}
        pythonCode={pythonCode}
        rCode={rCode}
        cliCode={cliCode}
        helpUrl="https://help.synapse.org/docs/Synapse-Docker-Registry.2011037752.html#SynapseDockerRegistry-UsingDockerImagesStoredintheSynapseDockerRegistry"
        hasCancelButton={false}
      />
      {showExportMetadata && (
        <ModalDownload
          queryBundleRequest={defaultQueryBundleRequest}
          onClose={handleCloseExportMetadata}
        />
      )}
    </>
  )
}
