import { SynapseClient } from '@sage-bionetworks/synapse-client'
import { useMutation } from '@tanstack/react-query'
import { allowNotFoundError } from '../../../synapse-client/SynapseClientUtils'
import { useCreateEntity } from '../../../synapse-queries/index'
import { useSynapseContext } from '../../context/index'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../functions/EntityTypeUtils'

/**
 * Given the ID of a container entity and a path string array, create the folder structure as necessary and return the ID of the final folder in the path.
 * @returns The ID of the final folder in the path.
 */
export function useCreateFolderPath() {
  const { synapseClient } = useSynapseContext()

  const { mutateAsync: createEntity } = useCreateEntity()

  return useMutation({
    mutationFn: async (args: { parentId: string; path: string[] }) => {
      const { parentId: initialParentId, path } = args
      let parentId = initialParentId
      for (const pathElement of path) {
        const foundEntityIdResult = await allowNotFoundError(() =>
          synapseClient.entityServicesClient.postRepoV1EntityChild({
            entityLookupRequest: {
              parentId: parentId,
              entityName: pathElement,
            },
          }),
        )

        const foundEntityId = foundEntityIdResult?.id ?? null

        if (foundEntityId) {
          // Verify that this entity is a folder
          const entity =
            await synapseClient.entityServicesClient.getRepoV1EntityId({
              id: foundEntityId,
            })

          if (entity.concreteType != 'org.sagebionetworks.repo.model.Folder') {
            const typeOfExistingEntity = convertToEntityType(
              entity.concreteType,
            )
            throw new Error(
              `A(n) ${entityTypeToFriendlyName(
                typeOfExistingEntity,
              )} named "${pathElement}" already exists in this location (${parentId}). A folder could not be created.`,
            )
          }

          parentId = foundEntityId
        } else {
          // Create a new folder
          const { id } = await createEntity({
            concreteType: 'org.sagebionetworks.repo.model.Folder',
            name: pathElement,
            parentId: parentId,
          })
          parentId = id!
        }
      }

      return parentId
    },
  })
}
