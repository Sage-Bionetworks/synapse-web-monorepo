import React, { useState } from 'react'
import { Button } from '@mui/material'
import { FolderDownloadConfirmation } from '../download_list/FolderDownloadConfirmation'
import { TableQueryDownloadConfirmation } from '../download_list/TableQueryDownloadConfirmation'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { SynapseConstants } from '../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'
import { GetAppTwoTone } from '@mui/icons-material'
import { useGetEntity } from '../../synapse-queries/'

export type AddToDownloadCartProps = {
  entityId: string
}

const FolderTsx: React.FC<{ entityId: string; fnClose: () => void }> = ({
  entityId,
  fnClose,
}) => {
  return <FolderDownloadConfirmation folderId={entityId} fnClose={fnClose} />
}

const TableTsx: React.FC<{
  initQueryRequest: QueryBundleRequest
  queryWrapperKey: string
}> = ({ initQueryRequest, queryWrapperKey }) => {
  return (
    <QueryWrapper initQueryRequest={initQueryRequest} key={queryWrapperKey}>
      <QueryWrapperErrorBoundary>
        <TableQueryDownloadConfirmation />
      </QueryWrapperErrorBoundary>
    </QueryWrapper>
  )
}

export const AddToDownloadCart: React.FC<AddToDownloadCartProps> = ({
  entityId,
}: AddToDownloadCartProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { data: entity, isLoading } = useGetEntity(entityId)
  const entityConcreteType = entity?.concreteType

  const handleClose = () => {
    setShowConfirmation(false)
  }

  const onAddClick = () => {
    setShowConfirmation(true)
  }
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId,
    query: {
      sql: `select * from ${entityId}`,
      limit: DEFAULT_PAGE_SIZE,
      sort: undefined,
      additionalFilters: undefined,
    },
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  }
  const queryWrapperKey = JSON.stringify(initQueryRequest)

  if (isLoading) {
    return null
  }

  return (
    <div>
      <div>
        <Button
          onClick={onAddClick}
          variant="contained"
          startIcon={<GetAppTwoTone />}
        >
          Add to Download Cart
        </Button>
      </div>
      <div>
        {showConfirmation &&
          (entityConcreteType === 'org.sagebionetworks.repo.model.Folder' ? (
            <FolderTsx entityId={entityId} fnClose={handleClose} />
          ) : (
            <TableTsx
              initQueryRequest={initQueryRequest}
              queryWrapperKey={queryWrapperKey}
            />
          ))}
      </div>
    </div>
  )
}

export default AddToDownloadCart
