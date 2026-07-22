import type { GridSupportedTaskProperties } from '@sage-bionetworks/synapse-client'

/**
 * For a given task properties object that could be used to create a GridSession, return the ID of the source entity that would be
 * used to create the GridSession.
 * @param properties
 */
export function getGridSourceIdForTask(
  properties: GridSupportedTaskProperties,
): string {
  if (properties == null) {
    // This is required in the API, so it should never happen.
    throw new Error('taskProperties is required')
  }
  switch (properties.concreteType) {
    case 'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties':
      return properties.fileViewId!
    case 'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties':
      return properties.recordSetId!
    default:
      throw new Error(
        // @ts-expect-error - This will fail if a new concreteType is introduced until it is handled in the switch statement.
        `Unknown taskProperties concreteType: ${properties.concreteType}`,
      )
  }
}
