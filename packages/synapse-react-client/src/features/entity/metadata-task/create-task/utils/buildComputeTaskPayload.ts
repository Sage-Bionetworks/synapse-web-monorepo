import {
  CurationTask,
  CurationTaskProperties,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { RecordSetFieldsValue } from '../RecordSetFields'
import { SampleSheetFieldsValue } from '../SampleSheetFields'
import { parseTaskIdInput } from './taskIdValidation'

/** A form's active Compute Data type-specific value, as a discriminated union keyed by `concreteType`. */
export type ComputeTypeFields =
  | {
      concreteType: SampleSheetGenerationExecutionPropertiesConcreteTypeEnum
      value: SampleSheetFieldsValue
    }
  | {
      concreteType: RecordSetGenerationExecutionPropertiesConcreteTypeEnum
      value: RecordSetFieldsValue
    }

export type BuildComputeTaskPayloadArgs = {
  /** The task being edited, if any. Server-managed fields (taskId, etag, etc.) are carried over. */
  existingTask?: CurationTask
  projectId: string
  dataType: string
  instructions: string
  assigneePrincipalId: string | undefined
  /**
   * The Compute Data type-specific fields to write into `taskProperties`. Omit this when editing a task
   * whose category is not one of the two Compute Data types (e.g. a legacy Curate Data task) -- in that
   * case the existing `taskProperties` are carried over unchanged.
   */
  computeTypeFields?: ComputeTypeFields
}

/**
 * Builds the `CurationTask` payload for creating or updating a Compute Data task from the create/edit
 * task form's field state.
 */
export function buildComputeTaskPayload(
  args: BuildComputeTaskPayloadArgs,
): CurationTask {
  const {
    existingTask,
    projectId,
    dataType,
    instructions,
    assigneePrincipalId,
    computeTypeFields,
  } = args

  const taskProperties = computeTypeFields
    ? buildComputeTaskProperties(computeTypeFields)
    : existingTask?.taskProperties

  return {
    ...existingTask,
    projectId,
    dataType: dataType.trim() || undefined,
    instructions: instructions.trim() || undefined,
    assigneePrincipalId: assigneePrincipalId || undefined,
    taskProperties,
  }
}

function buildComputeTaskProperties(
  fields: ComputeTypeFields,
): CurationTaskProperties {
  if (
    fields.concreteType ===
    RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties
  ) {
    const { concreteType, value } = fields
    return {
      concreteType,
      folderId: value.folderId.trim() || undefined,
      instructions: value.instructions.trim() || undefined,
      destinationTaskId: parseTaskIdInput(value.destinationTaskId),
    }
  }

  const { concreteType, value } = fields
  return {
    concreteType,
    inputTaskId: parseTaskIdInput(value.inputTaskId),
    destinationTaskId: parseTaskIdInput(value.destinationTaskId),
  }
}
