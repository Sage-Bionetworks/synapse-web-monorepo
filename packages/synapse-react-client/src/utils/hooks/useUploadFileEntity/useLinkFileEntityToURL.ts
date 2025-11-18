import {
  useCreateEntity,
  useUpdateEntity,
} from '@/synapse-queries/entity/useEntity'
import { useCreateExternalFileHandle } from '@/synapse-queries/file/useFileHandle'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useSynapseContext } from '../../../stores/SynapseContext/SynapseContext'
import {
  convertToEntityType,
  isContainerType,
} from '../../functions/EntityTypeUtils'

export function getFileNameFromExternalUrl(path: string) {
  // grab the text between the last '/' and following '?'
  let fileName = ''
  if (path != null) {
    const lastSlash = path.lastIndexOf('/')
    if (lastSlash > -1) {
      const firstQuestionMark = path.indexOf('?', lastSlash)
      if (firstQuestionMark > -1) {
        fileName = path.substring(lastSlash + 1, firstQuestionMark)
      } else {
        fileName = path.substring(lastSlash + 1)
      }
    }
  }
  return fileName
}

type UseLinkFileEntityToURLArgs = {
  /** The FileEntity to update or container entity in which a new FileEntity should be created */
  entityId: string
  /** A URL pointing to the external file */
  url: string
  /** An optional name for the FileHandle and newly created FileEntity. If not provided, the name will be generated based
   * on the URL. An updated FileEntity will not receive the new name. */
  name?: string
}

export function useLinkFileEntityToURL(
  options?: UseMutationOptions<FileEntity, Error, UseLinkFileEntityToURLArgs>,
) {
  const { synapseClient } = useSynapseContext()

  const { mutateAsync: createExternalFileHandle } =
    useCreateExternalFileHandle()

  const { mutateAsync: createEntity } = useCreateEntity()

  const { mutateAsync: updateEntity } = useUpdateEntity()

  return useMutation<FileEntity, Error, UseLinkFileEntityToURLArgs>({
    ...options,
    mutationFn: async (args: UseLinkFileEntityToURLArgs) => {
      const { url, entityId } = args
      let name = args.name
      if (name == '' || name == null) {
        name = getFileNameFromExternalUrl(url)
      }

      // Fetch the entity to determine if we're updating or creating a new entity
      const entity = await synapseClient.entityServicesClient.getRepoV1EntityId(
        { id: entityId },
      )

      let isUpdating: boolean
      if (entity.concreteType === 'org.sagebionetworks.repo.model.FileEntity') {
        isUpdating = true
      } else if (isContainerType(convertToEntityType(entity.concreteType))) {
        isUpdating = false
      } else {
        throw new Error(
          `The ${entityId} is not a FileEntity or a container, got concreteType ${entity.concreteType}`,
        )
      }

      // Create the file handle
      const fileHandle = await createExternalFileHandle({
        externalFileHandleInterface: {
          concreteType:
            'org.sagebionetworks.repo.model.file.ExternalFileHandle',
          fileName: name,
          externalURL: url,
        },
      })
      if (isUpdating) {
        // Update the entity with the new file handle
        const fileEntity: FileEntity = {
          ...(entity as FileEntity),
          dataFileHandleId: fileHandle.id!,
        }
        return (await updateEntity(fileEntity)) as FileEntity
      } else {
        // Update the entity with the new file handle
        const fileEntity: FileEntity = {
          name: name,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          parentId: entityId,
          dataFileHandleId: fileHandle.id!,
        }
        return (await createEntity(fileEntity)) as FileEntity
      }
    },
  })
}
