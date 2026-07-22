import {
  GridSupportedTaskProperties,
  instanceOfFileBasedMetadataTaskProperties,
  instanceOfRecordBasedMetadataTaskProperties,
} from '@sage-bionetworks/synapse-client'

export function instanceOfGridSupportedTaskProperties(
  taskProperties: unknown,
): taskProperties is GridSupportedTaskProperties {
  if (!taskProperties) {
    return false
  }

  return (
    instanceOfFileBasedMetadataTaskProperties(taskProperties) ||
    instanceOfRecordBasedMetadataTaskProperties(taskProperties)
  )
}
