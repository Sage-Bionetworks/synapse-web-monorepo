import {
  CurationTaskProperties,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-client'

/**
 * Generates a CreateGridRequest for a metadata task based on its properties.
 * @param taskProperties The properties of the metadata task.
 * @returns A CreateGridRequest object.
 */
export function getCreateGridRequestForMetadataTask(
  taskProperties: CurationTaskProperties,
): CreateGridRequest {
  switch (taskProperties.concreteType) {
    case 'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties':
      return {
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
        initialQuery: { sql: `SELECT * FROM ${taskProperties.fileViewId!}` },
      }
    case 'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties':
      return {
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
        recordSetId: taskProperties.recordSetId!,
      }
    default:
      throw new Error(
        // @ts-expect-error - This will fail if a new concreteType is introduced until it is handled in the switch statement.
        `Unknown taskProperties concreteType: ${taskProperties.concreteType}`,
      )
  }
}
