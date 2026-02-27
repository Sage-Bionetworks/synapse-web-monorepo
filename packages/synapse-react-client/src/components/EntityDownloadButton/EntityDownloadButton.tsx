import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import { DownloadOutlined as DownloadIcon } from '@mui/icons-material'
import {
  AddToDownloadListRequest,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import { ModalDownload } from '../ModalDownload/ModalDownload'
import {
  useGetEntity,
  useGetVersions,
  useGetEntityChildren,
} from '@/synapse-queries'
import {
  entityTypeToFriendlyName,
  hasFilesInView,
  isDataset,
  isEntityView,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '@/utils'
import {
  useAddFileToDownloadList,
  useAddToDownloadList,
} from '@/synapse-queries/index'
import { displayFilesWereAddedToDownloadListSuccess } from '../download_list/DownloadConfirmationUtils'
import { displayToast } from '../ToastMessage/index'

// WIP
// Per Nick Grosenbacher: For this to be reusable, I think we would also need to accept versionNumber as a prop. Where we would have the following behavior:
// - If the version number is present, use it
// - If the version number is null, do not use it,
// - If the version number is undefined, then we would try to do the 'smart' thing-- get the latest version for datasets, otherwise don't use it.

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
  version: number | undefined,
): ProgrammaticAccessCode {
  const id =
    type === EntityType.dataset && version ? `${entityId}.${version}` : entityId
  switch (type) {
    case EntityType.file:
    case EntityType.folder:
    case EntityType.project:
    case EntityType.link:
      return {
        cliCode: `synapse get -r ${entityId}`,
        rCode: `${R_CLIENT_IMPORT_AND_LOGIN} \n
# Download file
synGet('${entityId}')`,
        pythonCode: `${PYTHON_CLIENT_IMPORT_AND_LOGIN} \n
# Download file
syn.get('${entityId}')`,
      }
    case EntityType.dockerrepo:
      return {
        cliCode: `docker login -u <synapse username> -p <synapse password> docker.synapse.org \n
docker pull docker.synapse.org/${entityId}/myrepo`,
        rCode: undefined,
        pythonCode: undefined,
      }
    case EntityType.dataset:
    case EntityType.entityview:
    case EntityType.datasetcollection:
    case EntityType.table:
    case EntityType.materializedview:
    case EntityType.submissionview:
    case EntityType.virtualtable:
    case EntityType.recordset:
      return {
        cliCode: `synapse get -q "SELECT * FROM ${id}"`,
        rCode: `${R_CLIENT_IMPORT_AND_LOGIN} \n
query <- synTableQuery("SELECT * FROM ${id}")
read.table(query$filepath, sep=",")`,
        pythonCode: `${PYTHON_CLIENT_IMPORT_AND_LOGIN} \n
query = syn.tableQuery("SELECT * FROM ${id}")
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
  entityType: EntityType,
  downloadAction: DownloadAction,
  setShowProgrammaticAccess: (show: boolean) => void,
  setShowExportMetadata: (show: boolean) => void,
  addFileToDownloadList: (params: {
    entityId: string
    entityVersionNumber: number | undefined
  }) => void,
  addQueryToDownloadList: (request: AddToDownloadListRequest) => void,
  versionNumber?: number,
  addToCartDisabled?: boolean,
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
        disabled: addToCartDisabled,
        tooltipText: getAddToCartTooltip(entityType, !!addToCartDisabled),
        onClick: () => {
          if (
            entityType === EntityType.file ||
            entityType === EntityType.recordset
          ) {
            addFileToDownloadList({
              entityId,
              entityVersionNumber: versionNumber,
            })
          }
          // dataset
          else if (entityType === EntityType.dataset) {
            addQueryToDownloadList({
              parentId: entityId,
              useVersionNumber: true,
              concreteType:
                'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
            })
          }
          // entity view
          else if (entityType === EntityType.entityview) {
            addQueryToDownloadList({
              concreteType:
                'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
              query: {
                sql: `SELECT * FROM ${entityId}`,
              },
            })
          } else {
            addQueryToDownloadList({
              parentId: entityId,
              concreteType:
                'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
            })
          }
        },
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

/**
 * Determines the tooltip message based on the entity type and its "add to cart" status.
 */
const getAddToCartTooltip = (
  entityType: EntityType,
  isDisabled: boolean,
): string => {
  if (!isDisabled) {
    return 'Add file(s) to your download cart'
  }
  const entityFriendlyName = entityTypeToFriendlyName(entityType)
  return `This ${entityFriendlyName} has no accessible files`
}

// Function that returns DropdownMenuItem
export function getDownloadActionsForEntityType(
  type: EntityType,
): DownloadAction[][] {
  switch (type) {
    case EntityType.file:
    case EntityType.recordset:
      return [
        // [DownloadAction.downloadFile], // todo: implement direct file download functionality then uncomment this option
        [DownloadAction.addToCart, DownloadAction.programmaticAccess],
      ]
    case EntityType.project:
    case EntityType.folder:
      return [[DownloadAction.addToCart, DownloadAction.programmaticAccess]]
    case EntityType.dockerrepo:
      return [[DownloadAction.programmaticAccessDocker]]
    case EntityType.entityview:
    case EntityType.dataset:
      return [
        [
          DownloadAction.exportTable,
          DownloadAction.programmaticAccess,
          DownloadAction.addToCart,
        ],
      ]
    case EntityType.datasetcollection:
    case EntityType.table:
    case EntityType.materializedview:
    case EntityType.submissionview:
    case EntityType.virtualtable:
      return [[DownloadAction.exportTable, DownloadAction.programmaticAccess]]
    case EntityType.link:
      return [[DownloadAction.programmaticAccess]]
    default:
      // this will fail if a new EntityType is added and not handled
      throw new Error(`Unhandled EntityType: ${type}`)
  }
}

// get the appropriate version number for download based on entity type
// for datasets: returns the most recent released version if any exist, undefined otherwise
// for other entities: returns the current version number
function useGetLatestVersionNumber(entityId: string, entityType: EntityType) {
  // get entity data
  const { data: entityData, isLoading: entityDataLoading } =
    useGetEntity(entityId) // No version = latest

  // for datasets, check if any versions exist and use the most recent one
  const mustGetVersion = entityType === EntityType.dataset
  const { data: versionsData, isLoading: versionsLoading } = useGetVersions(
    entityId,
    0,
    1,
    {
      enabled: mustGetVersion,
    },
  )

  let latestVersionNumber: number | undefined

  if (mustGetVersion) {
    // for datasets, check if any versions exist
    if (versionsData?.results && versionsData.results.length > 0) {
      // Use the most recent released version (first in the list, since versions are returned in descending order)
      latestVersionNumber = versionsData.results[0].versionNumber
    } else {
      // no versions exist, use undefined (will use current/draft version)
      latestVersionNumber = undefined
    }
  } else {
    // for non-datasets, use the entity's version number
    latestVersionNumber =
      entityData && isVersionableEntity(entityData)
        ? entityData.versionNumber
        : undefined
  }

  const isLoading = entityDataLoading || versionsLoading

  return { latestVersionNumber, isLoading }
}

// create default queryBundleRequest with appropriate SQL
function getDefaultQueryBundleRequestForEntity(
  entityId: string,
  versionNumber: number | undefined,
  entityType: EntityType,
): QueryBundleRequest {
  let sql: string

  if (entityType === EntityType.dataset) {
    // for datasets:
    // - if a version number exists (released version), use it: syn123.5
    // - if no version number (no released versions), use current/draft: syn123
    sql = versionNumber
      ? `SELECT * FROM ${entityId}.${versionNumber}`
      : `SELECT * FROM ${entityId}`
  } else {
    // For non-datasets, always use entity ID without version
    sql = `SELECT * FROM ${entityId}`
  }

  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: `${entityId}`,
    query: {
      sql: sql,
    },
    partMask: 0,
  }
}

export function EntityDownloadButton(props: {
  entityId: string
  name: string
  entityType: EntityType
}) {
  // get the appropriate version number for the entity
  const { latestVersionNumber } = useGetLatestVersionNumber(
    props.entityId,
    props.entityType,
  )
  // create queryBundleRequest with appropriate SQL based on entity type and version
  const defaultQueryBundleRequest = getDefaultQueryBundleRequestForEntity(
    props.entityId,
    latestVersionNumber,
    props.entityType,
  )

  // Get context and download functionality
  const { downloadCartPageUrl } = useSynapseContext()
  const { mutate: addFileToDownloadList } = useAddFileToDownloadList({
    onSuccess: data => {
      if (data.numberOfFilesAdded > 0) {
        displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
      } else {
        displayToast('0 Files added to your Download Cart', 'info')
      }
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  const { mutate: addQueryToDownloadList } = useAddToDownloadList({
    onSuccess: data => {
      if (data.numberOfFilesAdded != null && data.numberOfFilesAdded > 0) {
        displayFilesWereAddedToDownloadListSuccess(downloadCartPageUrl)
      } else {
        displayToast('0 Files added to your Download Cart', 'info')
      }
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  // state to manage programmatic access modal visibility
  const [showProgrammaticAccess, setShowProgrammaticAccess] =
    useState<boolean>(false)

  const handleCloseProgrammaticAccess = () => {
    setShowProgrammaticAccess(false)
  }

  const isFolderOrProject =
    props.entityType === EntityType.folder ||
    props.entityType === EntityType.project

  const { data: entityChildren } = useGetEntityChildren(
    {
      parentId: props.entityId,
      includeTypes: [EntityType.file],
      includeTotalChildCount: true,
    },
    {
      enabled: isFolderOrProject,
    },
  )

  const hasNoImmediateFileChildren =
    isFolderOrProject && entityChildren?.totalChildCount === 0

  const { data: entityData } = useGetEntity(props.entityId)

  const entityViewHasNoFiles =
    entityData && isEntityView(entityData) && !hasFilesInView(entityData)

  const datasetHasNoFiles =
    entityData &&
    isDataset(entityData) &&
    (!entityData.items || entityData.items.length === 0)

  const addToCartDisabled =
    hasNoImmediateFileChildren || entityViewHasNoFiles || datasetHasNoFiles

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
        props.entityType,
        action,
        setShowProgrammaticAccess,
        setShowExportMetadata,
        addFileToDownloadList,
        addQueryToDownloadList,
        latestVersionNumber,
        addToCartDisabled,
      ),
    ),
  )

  // Return programmatic access modal content
  const { cliCode, rCode, pythonCode } = getProgrammaticAccessCode(
    props.entityType,
    props.entityId,
    latestVersionNumber,
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
        show={showProgrammaticAccess}
        title={`Programmatic Access: ${props.name}`}
        onClose={handleCloseProgrammaticAccess}
        pythonCode={pythonCode}
        rCode={rCode}
        cliCode={cliCode}
        helpUrl="https://help.synapse.org/docs/Synapse-Docker-Registry.2011037752.html#SynapseDockerRegistry-UsingDockerImagesStoredintheSynapseDockerRegistry"
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
