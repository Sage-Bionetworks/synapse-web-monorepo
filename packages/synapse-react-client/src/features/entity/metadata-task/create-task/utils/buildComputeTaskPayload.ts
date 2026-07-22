import {
  CurationTask,
  CurationTaskProperties,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { ComputeTaskConcreteType } from '../../utils/types'
import { parseTaskIdInput } from './taskIdValidation'

export type SampleSheetFieldsValue = {
  inputTaskId: string
  destinationTaskId: string
}

export type RecordSetFieldsValue = {
  folderId: string
  instructions: string
  destinationTaskId: string
}

export type ComputeTypeFields = {
  concreteType: ComputeTaskConcreteType
  sampleSheet: SampleSheetFieldsValue
  recordSet: RecordSetFieldsValue
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
  const { concreteType, sampleSheet, recordSet } = fields

  if (
    concreteType ===
    RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties
  ) {
    return {
      concreteType,
      folderId: recordSet.folderId.trim() || undefined,
      instructions: recordSet.instructions.trim() || undefined,
      destinationTaskId: parseTaskIdInput(recordSet.destinationTaskId),
    }
  }

  return {
    concreteType,
    inputTaskId: parseTaskIdInput(sampleSheet.inputTaskId),
    destinationTaskId: parseTaskIdInput(sampleSheet.destinationTaskId),
  }
}
