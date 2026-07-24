import {
  CurationTaskProperties,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import { DEFAULT_COMPUTE_TASK_TYPE } from '../utils/constants'
import {
  ComputeTaskConcreteType,
  getComputeTaskConcreteType,
  instanceOfGridSupportedTaskProperties,
} from '../utils/types'
import {
  EMPTY_RECORD_SET_VALUE,
  isRecordSetFieldsValueValid,
  RecordSetFieldsValue,
} from './RecordSetFields'
import {
  EMPTY_SAMPLE_SHEET_VALUE,
  isSampleSheetFieldsValueValid,
  SampleSheetFieldsValue,
} from './SampleSheetFields'
import { ComputeTypeFields } from './utils/buildComputeTaskPayload'

function emptyValueForConcreteType(
  concreteType: ComputeTaskConcreteType,
): ComputeTypeFields {
  if (
    concreteType ===
    RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties
  ) {
    return { concreteType, value: EMPTY_RECORD_SET_VALUE }
  }
  return { concreteType, value: EMPTY_SAMPLE_SHEET_VALUE }
}

function initialStateFor(
  taskProperties: CurationTaskProperties | undefined,
): ComputeTypeFields {
  if (
    taskProperties?.concreteType ===
    SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties
  ) {
    return {
      concreteType: taskProperties.concreteType,
      value: {
        inputTaskId: taskProperties.inputTaskId?.toString() ?? '',
        destinationTaskId: taskProperties.destinationTaskId?.toString() ?? '',
      },
    }
  }
  if (
    taskProperties?.concreteType ===
    RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties
  ) {
    return {
      concreteType: taskProperties.concreteType,
      value: {
        folderId: taskProperties.folderId ?? '',
        instructions: taskProperties.instructions ?? '',
        destinationTaskId: taskProperties.destinationTaskId?.toString() ?? '',
      },
    }
  }
  return emptyValueForConcreteType(DEFAULT_COMPUTE_TASK_TYPE)
}

export type UseComputeTypeFieldsArgs = {
  /** The existing task's `taskProperties`, for edit-mode initialization. Undefined when creating. */
  taskProperties: CurationTaskProperties | undefined
  isEditMode: boolean
}

/**
 * Owns the single active Compute Data type-specific value (`ComputeTypeFields`) for `ComputeTaskForm`:
 * which concrete type is selected, its field values, and whether that value is currently valid.
 * Switching the concrete type resets the value to that type's empty default.
 */
export function useComputeTypeFields(args: UseComputeTypeFieldsArgs) {
  const { taskProperties, isEditMode } = args

  const existingComputeConcreteType = getComputeTaskConcreteType(taskProperties)
  // Whether the type-specific fields (and type selector) should render at all. False when editing a
  // task whose category isn't one of the two Compute Data types (e.g. a legacy Curate Data task).
  const showTypeSection =
    !isEditMode || existingComputeConcreteType !== undefined
  const showUnrecognizedTypeWarning =
    isEditMode &&
    existingComputeConcreteType === undefined &&
    !instanceOfGridSupportedTaskProperties(taskProperties)

  const [state, setState] = useState<ComputeTypeFields>(() =>
    initialStateFor(taskProperties),
  )

  function setConcreteType(concreteType: ComputeTaskConcreteType) {
    setState(emptyValueForConcreteType(concreteType))
  }

  function setValue(value: SampleSheetFieldsValue | RecordSetFieldsValue) {
    setState(prev => ({ ...prev, value }) as ComputeTypeFields)
  }

  const isValid =
    !showTypeSection ||
    (state.concreteType ===
    SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties
      ? isSampleSheetFieldsValueValid(state.value)
      : isRecordSetFieldsValueValid(state.value))

  return {
    state,
    setConcreteType,
    setValue,
    isValid,
    showTypeSection,
    showUnrecognizedTypeWarning,
  }
}
