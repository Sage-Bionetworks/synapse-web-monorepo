import AddToDownloadListConfirmationAlert from '@/components/download_list/AddToDownloadListConfirmationAlert/AddToDownloadListConfirmationAlert'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import {
  AddToDownloadListRequest,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import { useEffect, useMemo } from 'react'
import { useGetEntity } from '../../synapse-queries/'

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

const typesToAddToDownloadListWithParentId: EntityType[] = [
  EntityType.project,
  EntityType.folder,
  EntityType.dataset,
  EntityType.datasetcollection,
]
const typesToAddToDownloadListWithQuery: EntityType[] = [EntityType.entityview]

/**
 * A component that allows users to add an entity to the download cart. It displays a confirmation dialog that displays
 * statistics about the set of items that will be added to the download cart.
 *
 * @param props - The properties for the component.
 * @param props.entityId - The ID of the entity to be added to the download cart.
 *
 * @returns The rendered EntityDownloadConfirmation component.
 */
export function EntityDownloadConfirmation({
  entityId,
  versionNumber,
  handleClose,
  onIsLoadingChange,
}: EntityDownloadConfirmationProps) {
  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)
  const entityType = entity?.concreteType
    ? convertToEntityType(entity.concreteType)
    : undefined

  useEffect(() => {
    onIsLoadingChange(isLoadingEntity)
  }, [isLoadingEntity, onIsLoadingChange])

  const addToDownloadListRequest: AddToDownloadListRequest | null =
    useMemo(() => {
      if (!entityType) {
        return null
      }
      if (typesToAddToDownloadListWithQuery.includes(entityType)) {
        return {
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
          query: {
            sql: `select * from ${entityId}${
              versionNumber != undefined ? `.${versionNumber}` : ''
            }`,
          },
        }
      }
      if (typesToAddToDownloadListWithParentId.includes(entityType)) {
        const useVersionNumber = [
          EntityType.dataset,
          EntityType.datasetcollection,
        ].includes(entityType)
        return {
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
          parentId: entityId, // TODO: dataset version number here?
          useVersionNumber,
        }
      }

      return null
    }, [entityType, entityId, versionNumber])

  if (!addToDownloadListRequest) {
    return null
  }

  return (
    <div>
      <AddToDownloadListConfirmationAlert
        addToDownloadListRequest={addToDownloadListRequest}
        onClose={handleClose}
      />
    </div>
  )
}

export default EntityDownloadConfirmation
