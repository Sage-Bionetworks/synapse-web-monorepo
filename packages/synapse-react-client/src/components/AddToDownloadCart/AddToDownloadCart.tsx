import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { useSynapseContext } from '../../utils'
import { FolderDownloadConfirmation } from '../download_list/FolderDownloadConfirmation'
import { TableQueryDownloadConfirmation } from '../download_list/TableQueryDownloadConfirmation'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { SynapseConstants } from '../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import SynapseClient from '../../synapse-client'
import { GetAppTwoTone } from '@mui/icons-material'

export type AddToDownloadCartProps = {
  folderId: string
}

export const AddToDownloadCart: React.FC<AddToDownloadCartProps> = ({
  folderId,
}: AddToDownloadCartProps) => {
  const { accessToken } = useSynapseContext()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [entityType, setEntityType] = useState<string | undefined>(undefined)

  useEffect(() => {
    const getEntity = async () => {
      try {
        // will return 40X if not logged in
        const { concreteType: entityType } = await SynapseClient.getEntity(
          accessToken,
          folderId,
        )
        setEntityType(entityType)
      } catch (e) {
        console.error('Error on getting entity information = ', e)
        // should this error out or just default to folder?
        //setEntityType('org.sagebionetworks.repo.model.Folder');
      }
    }
    getEntity()
  }, [folderId, accessToken])

  const handleClose = () => {
    setShowConfirmation(false)
  }

  const onAddClick = () => {
    setShowConfirmation(true)
  }
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: folderId,
    query: {
      sql: `select * from ${folderId}`,
      limit: DEFAULT_PAGE_SIZE,
      sort: undefined,
      additionalFilters: undefined,
    },
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  }
  const queryWrapperKey = JSON.stringify(initQueryRequest)

  function folderTsx() {
    return (
      <FolderDownloadConfirmation folderId={folderId} fnClose={handleClose} />
    )
  }

  function tableTsx() {
    return (
      <QueryWrapper initQueryRequest={initQueryRequest} key={queryWrapperKey}>
        <QueryWrapperErrorBoundary>
          <TableQueryDownloadConfirmation />
        </QueryWrapperErrorBoundary>
      </QueryWrapper>
    )
  }

  return (
    <div>
      <Button
        onClick={onAddClick}
        variant="contained"
        startIcon={<GetAppTwoTone />}
      >
        Add to Download Cart
      </Button>
      {showConfirmation &&
        (entityType === 'org.sagebionetworks.repo.model.Folder'
          ? folderTsx()
          : tableTsx())}
    </div>
  )
}

export default AddToDownloadCart
