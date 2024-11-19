import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  useCreateEntity,
  useGetEntityLookupQueryOptions,
  useGetEntityQueryOptions,
} from '../../../synapse-queries/entity/useEntity'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../functions/EntityTypeUtils'

/**
 * Given the ID of a container entity and a path string array, create the folder structure as necessary and return the ID of the final folder in the path.
 * @returns The ID of the final folder in the path.
 */
export function useCreateFolderPath() {
  const { mutateAsync: createEntity } = useCreateEntity()

  const queryClient = useQueryClient()
  const getEntityLookupQueryOptions = useGetEntityLookupQueryOptions()
  const getEntityQueryOptions = useGetEntityQueryOptions()

  return useMutation({
    mutationFn: async (args: { rootContainerId: string; path: string[] }) => {
      const { rootContainerId: rootContainerId, path } = args
      let parentId = rootContainerId
      for (const pathElement of path) {
        const foundEntityId = await queryClient.fetchQuery(
          getEntityLookupQueryOptions({
            parentId: parentId,
            entityName: pathElement,
          }),
        )

        if (foundEntityId) {
          // Verify that this entity is a folder
          const entity = await queryClient.fetchQuery(
            getEntityQueryOptions(foundEntityId),
          )

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
