import {
  CurationTask,
  CurationTaskProperties,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  FileBasedMetadataTaskPropertiesSuggestedAuthorizationModeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { instanceOfGridSupportedTaskProperties } from '../../utils/types'
import { FileBasedFieldsValue } from '../FileBasedFields'
import { RecordBasedFieldsValue } from '../RecordBasedFields'

/** Null represents the "Legacy" / unset option for suggestedAuthorizationMode. */
export type AuthorizationModeOption =
  | FileBasedMetadataTaskPropertiesSuggestedAuthorizationModeEnum
  | 'NONE'

/** A form's active Curate Data type-specific value, as a discriminated union keyed by `concreteType`. */
export type CurateTypeState =
  | {
      concreteType: FileBasedMetadataTaskPropertiesConcreteTypeEnum
      value: FileBasedFieldsValue
    }
  | {
      concreteType: RecordBasedMetadataTaskPropertiesConcreteTypeEnum
      value: RecordBasedFieldsValue
    }

export type CurateTypeFields = CurateTypeState & {
  authorizationMode: AuthorizationModeOption
}

export type BuildCurateTaskPayloadArgs = {
  /** The task being edited, if any. Server-managed fields (taskId, etag, etc.) are carried over. */
  existingTask?: CurationTask
  projectId: string
  dataType: string
  instructions: string
  assigneePrincipalId: string | undefined
  curateTypeFields: CurateTypeFields
}

/**
 * Builds the `CurationTask` payload for creating or updating a Curate Data task from the create/edit
 * task form's field state.
 */
export function buildCurateTaskPayload(
  args: BuildCurateTaskPayloadArgs,
): CurationTask {
  const {
    existingTask,
    projectId,
    dataType,
    instructions,
    assigneePrincipalId,
    curateTypeFields,
  } = args

  const existingTaskProperties = existingTask?.taskProperties
  const collaboratorPrincipalIds = instanceOfGridSupportedTaskProperties(
    existingTaskProperties,
  )
    ? existingTaskProperties.collaboratorPrincipalIds
    : undefined

  return {
    ...existingTask,
    projectId,
    dataType: dataType.trim() || undefined,
    instructions: instructions.trim() || undefined,
    assigneePrincipalId: assigneePrincipalId || undefined,
    taskProperties: buildCurateTaskProperties(
      curateTypeFields,
      collaboratorPrincipalIds,
    ),
  }
}

function buildCurateTaskProperties(
  fields: CurateTypeFields,
  collaboratorPrincipalIds: string[] | undefined,
): CurationTaskProperties {
  const { authorizationMode } = fields
  const suggestedAuthorizationMode =
    authorizationMode === 'NONE' ? undefined : authorizationMode

  if (
    fields.concreteType ===
    RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties
  ) {
    const { concreteType, value } = fields
    return {
      concreteType,
      recordSetId: value.recordSetId.trim() || undefined,
      suggestedAuthorizationMode,
      collaboratorPrincipalIds,
    }
  }

  const { concreteType, value } = fields
  return {
    concreteType,
    uploadFolderId: value.uploadFolderId.trim() || undefined,
    fileViewId: value.fileViewId.trim() || undefined,
    suggestedAuthorizationMode,
    collaboratorPrincipalIds,
  }
}
