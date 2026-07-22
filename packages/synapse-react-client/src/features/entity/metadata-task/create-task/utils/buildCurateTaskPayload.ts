import {
  CurationTask,
  CurationTaskProperties,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  FileBasedMetadataTaskPropertiesSuggestedAuthorizationModeEnum,
} from '@sage-bionetworks/synapse-client'
import {
  CurateTaskConcreteType,
  instanceOfGridSupportedTaskProperties,
} from '../../utils/types'

/** Null represents the "Legacy" / unset option for suggestedAuthorizationMode. */
export type AuthorizationModeOption =
  | FileBasedMetadataTaskPropertiesSuggestedAuthorizationModeEnum
  | 'NONE'

export type FileBasedFieldsValue = {
  uploadFolderId: string
  fileViewId: string
}

export type RecordBasedFieldsValue = {
  recordSetId: string
}

export type CurateTypeFields = {
  concreteType: CurateTaskConcreteType
  authorizationMode: AuthorizationModeOption
  fileBased: FileBasedFieldsValue
  recordBased: RecordBasedFieldsValue
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
  const { concreteType, authorizationMode, fileBased, recordBased } = fields
  const suggestedAuthorizationMode =
    authorizationMode === 'NONE' ? undefined : authorizationMode

  if (
    concreteType ===
    FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
  ) {
    return {
      concreteType,
      uploadFolderId: fileBased.uploadFolderId.trim() || undefined,
      fileViewId: fileBased.fileViewId.trim() || undefined,
      suggestedAuthorizationMode,
      collaboratorPrincipalIds,
    }
  }

  return {
    concreteType,
    recordSetId: recordBased.recordSetId.trim() || undefined,
    suggestedAuthorizationMode,
    collaboratorPrincipalIds,
  }
}
