import { CurationTask } from '@sage-bionetworks/synapse-client'

/**
 * For a given CurationTask that could be used to create a GridSession, return the ID of the source entity that would be
 * used to create the GridSession.
 * @param curationTask
 */
export function getGridSourceIdForTask(curationTask: CurationTask): string {
  const properties = curationTask.taskProperties
  if (properties == null) {
    // This is required in the API, so it should never happen.
    throw new Error('CurationTask is missing taskProperties')
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
