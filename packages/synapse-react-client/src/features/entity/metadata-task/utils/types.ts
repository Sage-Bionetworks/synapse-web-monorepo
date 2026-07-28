import {
  CurationTaskProperties,
  GridSupportedTaskProperties,
  instanceOfFileBasedMetadataTaskProperties,
  instanceOfRecordBasedMetadataTaskProperties,
  instanceOfRecordSetGenerationExecutionProperties,
  instanceOfSampleSheetGenerationExecutionProperties,
  RecordSetGenerationExecutionProperties,
  SampleSheetGenerationExecutionProperties,
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

/** Union of the two "Compute Data" task property types supported by the create/edit task pages. */
export type ComputeTaskProperties =
  | SampleSheetGenerationExecutionProperties
  | RecordSetGenerationExecutionProperties

export function instanceOfComputeTaskProperties(
  taskProperties: unknown,
): taskProperties is ComputeTaskProperties {
  if (!taskProperties) {
    return false
  }

  return (
    instanceOfSampleSheetGenerationExecutionProperties(taskProperties) ||
    instanceOfRecordSetGenerationExecutionProperties(taskProperties)
  )
}

/** Narrows a task's `concreteType` to one of the two Compute Data types, for use as a discriminated union key. */
export type ComputeTaskConcreteType = ComputeTaskProperties['concreteType']

export function getComputeTaskConcreteType(
  taskProperties: CurationTaskProperties | undefined,
): ComputeTaskConcreteType | undefined {
  return taskProperties && instanceOfComputeTaskProperties(taskProperties)
    ? taskProperties.concreteType
    : undefined
}

/** Narrows a task's `concreteType` to one of the two Curate Data types, for use as a discriminated union key. */
export type CurateTaskConcreteType = GridSupportedTaskProperties['concreteType']

export function getCurateTaskConcreteType(
  taskProperties: CurationTaskProperties | undefined,
): CurateTaskConcreteType | undefined {
  return taskProperties && instanceOfGridSupportedTaskProperties(taskProperties)
    ? taskProperties.concreteType
    : undefined
}
