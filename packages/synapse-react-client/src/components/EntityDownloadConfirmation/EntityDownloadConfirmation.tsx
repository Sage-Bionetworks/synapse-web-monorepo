import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React, { Suspense, useEffect } from 'react'
import { useGetEntity } from '../../synapse-queries/'
import { SynapseConstants } from '../../utils'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { FolderDownloadConfirmation } from '../download_list/FolderDownloadConfirmation'
import { TableQueryDownloadConfirmation } from '../download_list/TableQueryDownloadConfirmation'
import { QueryWrapper } from '../QueryWrapper'
import { QueryWrapperErrorBoundary } from '../QueryWrapperErrorBoundary'

/**
 * Props for the EntityDownloadConfirmation component.
 *
 * @property entityId - The ID of the entity to be added to the download cart.
 */
export type EntityDownloadConfirmationProps = {
  entityId: string
  versionNumber?: number
  onIsLoadingChange: (isLoading: boolean) => void
  handleClose: () => void
}

const QueryWrapperTableDownloadConfirmation: React.FC<{
  entityId: string
  versionNumber?: number
  onHide: () => void
}> = ({ entityId, versionNumber, onHide }) => {
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: entityId,
    query: {
      sql: `select * from ${entityId}${
        versionNumber != undefined ? `.${versionNumber}` : ''
      }`,
      limit: DEFAULT_PAGE_SIZE,
      sort: undefined,
      additionalFilters: undefined,
    },
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  }

  return (
    <Suspense fallback={<></>}>
      <QueryWrapper initQueryRequest={initQueryRequest}>
        <QueryWrapperErrorBoundary>
          <TableQueryDownloadConfirmation onClose={onHide} />
        </QueryWrapperErrorBoundary>
      </QueryWrapper>
    </Suspense>
  )
}

/**
 * A component that allows users to add an entity to the download cart.
 * Depending on the type of entity, it displays a confirmation dialog for either
 * downloading a folder or downloading a table/query.
 *
 * @param {EntityDownloadConfirmationProps} props - The properties for the component.
 * @param {string} props.entityId - The ID of the entity to be added to the download cart.
 *
 * @returns {ReactNode} The rendered EntityDownloadConfirmation component.
 */
export function EntityDownloadConfirmation({
  entityId,
  versionNumber,
  handleClose,
  onIsLoadingChange,
}: EntityDownloadConfirmationProps) {
  const { data: entity, isLoading } = useGetEntity(entityId)
  const entityConcreteType = entity?.concreteType

  useEffect(() => {
    onIsLoadingChange(isLoading)
  }, [isLoading, onIsLoadingChange])

  if (isLoading) {
    if (
      entityConcreteType &&
      entityConcreteType !== 'org.sagebionetworks.repo.model.Folder' &&
      entityConcreteType !==
        'org.sagebionetworks.repo.model.table.TableEntity' &&
      entityConcreteType !== 'org.sagebionetworks.repo.model.table.Dataset'
    ) {
      return <></>
    }
  }

  return (
    <div>
      {entityConcreteType === 'org.sagebionetworks.repo.model.Folder' ? (
        <FolderDownloadConfirmation folderId={entityId} fnClose={handleClose} />
      ) : (
        <QueryWrapperTableDownloadConfirmation
          entityId={entityId}
          versionNumber={versionNumber}
          onHide={handleClose}
        />
      )}
    </div>
  )
}

export default EntityDownloadConfirmation
