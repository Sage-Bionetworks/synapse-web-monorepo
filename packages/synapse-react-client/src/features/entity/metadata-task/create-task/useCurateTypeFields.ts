import {
  CurationTaskProperties,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { DEFAULT_CURATE_TASK_TYPE } from '../utils/constants'
import {
  CurateTaskConcreteType,
  instanceOfGridSupportedTaskProperties,
} from '../utils/types'
import {
  EMPTY_FILE_BASED_VALUE,
  FileBasedFieldsValue,
  isFileBasedFieldsValueValid,
} from './FileBasedFields'
import {
  EMPTY_RECORD_BASED_VALUE,
  isRecordBasedFieldsValueValid,
  RecordBasedFieldsValue,
} from './RecordBasedFields'
import {
  AuthorizationModeOption,
  CurateTypeState,
} from './utils/buildCurateTaskPayload'

function toAuthorizationModeOption(
  value: string | undefined,
): AuthorizationModeOption {
  if (value === 'SESSION_OWNER' || value === 'SOURCE_BENEFACTOR') return value
  return 'NONE'
}

function emptyValueForConcreteType(
  concreteType: CurateTaskConcreteType,
): CurateTypeState {
  if (
    concreteType ===
    RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties
  ) {
    return { concreteType, value: EMPTY_RECORD_BASED_VALUE }
  }
  return { concreteType, value: EMPTY_FILE_BASED_VALUE }
}

function initialStateFor(
  taskProperties: CurationTaskProperties | undefined,
): CurateTypeState {
  if (
    taskProperties?.concreteType ===
    FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
  ) {
    return {
      concreteType: taskProperties.concreteType,
      value: {
        uploadFolderId: taskProperties.uploadFolderId ?? '',
        fileViewId: taskProperties.fileViewId ?? '',
      },
    }
  }
  if (
    taskProperties?.concreteType ===
    RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties
  ) {
    return {
      concreteType: taskProperties.concreteType,
      value: { recordSetId: taskProperties.recordSetId ?? '' },
    }
  }
  return emptyValueForConcreteType(DEFAULT_CURATE_TASK_TYPE)
}

export type UseCurateTypeFieldsArgs = {
  /** The existing task's `taskProperties`, for edit-mode initialization. Undefined when creating. */
  taskProperties: CurationTaskProperties | undefined
  isEditMode: boolean
}

/**
 * Owns the single active Curate Data type-specific value (`CurateTypeState`) for `CurateTaskForm` --
 * which concrete type is selected, its field values, and whether that value is currently valid -- plus
 * the Authorization Mode selection and whether it has changed from the task's existing value.
 * Switching the concrete type resets the value to that type's empty default.
 */
export function useCurateTypeFields(args: UseCurateTypeFieldsArgs) {
  const { taskProperties, isEditMode } = args

  const [state, setState] = useState<CurateTypeState>(() =>
    initialStateFor(taskProperties),
  )

  function setConcreteType(concreteType: CurateTaskConcreteType) {
    setState(emptyValueForConcreteType(concreteType))
  }

  function setValue(value: FileBasedFieldsValue | RecordBasedFieldsValue) {
    setState(prev => ({ ...prev, value }) as CurateTypeState)
  }

  const isValid =
    state.concreteType ===
    FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
      ? isFileBasedFieldsValueValid(state.value)
      : isRecordBasedFieldsValueValid(state.value)

  const initialAuthorizationMode = toAuthorizationModeOption(
    instanceOfGridSupportedTaskProperties(taskProperties)
      ? taskProperties.suggestedAuthorizationMode
      : undefined,
  )
  const [authorizationMode, setAuthorizationMode] = useState(
    initialAuthorizationMode,
  )
  const authModeChanged =
    isEditMode && authorizationMode !== initialAuthorizationMode

  return {
    state,
    setConcreteType,
    setValue,
    isValid,
    authorizationMode,
    setAuthorizationMode,
    authModeChanged,
  }
}
