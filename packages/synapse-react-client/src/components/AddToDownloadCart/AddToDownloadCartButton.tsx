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

export type AddToDownloadCartButtonProps = {
  entityId: string
}

const TableTsx: React.FC<{
  entityId: string
}> = ({ entityId }) => {
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

  return (
    <QueryWrapper initQueryRequest={initQueryRequest}>
      <QueryWrapperErrorBoundary>
        <TableQueryDownloadConfirmation />
      </QueryWrapperErrorBoundary>
    </QueryWrapper>
  )
}

export function AddToDownloadCartButton({
  entityId,
}: AddToDownloadCartButtonProps) {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { data: entity, isLoading } = useGetEntity(entityId)
  const entityConcreteType = entity?.concreteType

  const handleClose = () => {
    setShowConfirmation(false)
  }

  const onAddClick = () => {
    setShowConfirmation(true)
  }

  return (
    <div>
      <div>
        <Button
          onClick={onAddClick}
          variant="contained"
          startIcon={<GetAppTwoTone />}
          disabled={isLoading}
        >
          Add to Download Cart
        </Button>
      </div>
      <div>
        {showConfirmation &&
          (entityConcreteType === 'org.sagebionetworks.repo.model.Folder' ? (
            <FolderDownloadConfirmation
              folderId={entityId}
              fnClose={handleClose}
            />
          ) : (
            <TableTsx entityId={entityId} />
          ))}
      </div>
    </div>
  )
}

export default AddToDownloadCartButton
