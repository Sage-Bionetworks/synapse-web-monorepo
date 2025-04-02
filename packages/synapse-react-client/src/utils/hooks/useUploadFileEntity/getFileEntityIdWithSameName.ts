import { allowNotFoundError } from '@/synapse-client/SynapseClientUtils'
import { SynapseClient } from '@sage-bionetworks/synapse-client'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../functions/EntityTypeUtils'

/**
 * Gets the ID of the file entity with the given name whose parent has the given ID.
 *
 * @param name The name of the entity to find.
 * @param parentId The ID of the parent that the found entity must have.
 * @return The ID of the file entity with the given name and parent ID, or null if the entity does not exist
 * @throws Error If an entity with given name and parent ID was found, but that entity
 *         was not a File Entity.
 */
export async function getFileEntityIdWithSameName(
  name: string,
  parentId: string,
  synapseClient: SynapseClient,
  errorContext?: string,
) {
  const result =
    (
      await allowNotFoundError(() =>
        synapseClient.entityServicesClient.postRepoV1EntityChild({
          entityLookupRequest: {
            parentId: parentId,
            entityName: name,
          },
        }),
      )
    )?.id ?? null

  if (result == null) {
    return result
  }

  const entity = await synapseClient.entityServicesClient.getRepoV1EntityId({
    id: result,
  })

  if (entity.concreteType != 'org.sagebionetworks.repo.model.FileEntity') {
    const typeOfExistingEntity = convertToEntityType(entity.concreteType)
    throw new Error(
      `A(n) ${entityTypeToFriendlyName(
        typeOfExistingEntity,
      )} named "${name}" already exists in this location (${parentId}).${
        errorContext ? ` ${errorContext}` : ''
      }`,
    )
  }
  return entity.id!
}
