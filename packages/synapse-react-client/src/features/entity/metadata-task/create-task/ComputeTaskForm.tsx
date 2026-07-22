import { StyledFormControl } from '@/components/styled'
import { Alert, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import {
  CurationTask,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useState } from 'react'
import {
  COMPUTE_TASK_TYPE_CONFIG,
  COMPUTE_TASK_TYPE_INPUT_LABEL,
  COMPUTE_TASK_TYPE_OPTIONS,
  DEFAULT_COMPUTE_TASK_TYPE,
  EDIT_TASK_UNRECOGNIZED_TYPE_MESSAGE,
  GENERIC_SAVE_ERROR_MESSAGE,
  TASK_STATUS_CONFIG,
  TASK_STATUS_INPUT_LABEL,
} from '../utils/constants'
import {
  ComputeTaskConcreteType,
  getComputeTaskConcreteType,
  instanceOfGridSupportedTaskProperties,
} from '../utils/types'
import CommonTaskFields from './CommonTaskFields'
import ProjectSelectorField from './ProjectSelectorField'
import RecordSetFields from './RecordSetFields'
import SampleSheetFields from './SampleSheetFields'
import TaskFormActions from './TaskFormActions'
import TaskFormHeader from './TaskFormHeader'
import { useCurationTaskFormState } from './useCurationTaskFormState'
import {
  buildComputeTaskPayload,
  RecordSetFieldsValue,
  SampleSheetFieldsValue,
} from './utils/buildComputeTaskPayload'
import { isValidTaskIdInput } from './utils/taskIdValidation'

const EMPTY_SAMPLE_SHEET_VALUE: SampleSheetFieldsValue = {
  inputTaskId: '',
  destinationTaskId: '',
}
const EMPTY_RECORD_SET_VALUE: RecordSetFieldsValue = {
  folderId: '',
  instructions: '',
  destinationTaskId: '',
}

export type ComputeTaskFormProps = {
  /**
   * Present when the host page already has a project context (e.g. a project's Metadata Tasks page).
   * Absent when creating from a context without one (e.g. the Curator Dashboard), in which case the user
   * is prompted to choose a project. Ignored in edit mode -- the project is always derived from `task`.
   */
  projectId?: string
  /** The task being edited. Undefined when creating a new task. */
  task?: CurationTask
  /** Called after a new task is successfully created. */
  onCreated?: (task: CurationTask) => void
  /** Called after an existing task is successfully saved. */
  onSaved?: (task: CurationTask) => void
  /** Called after the task is successfully deleted (edit mode only). */
  onDeleted?: () => void
  /** Shows a "Back" button (create mode) that returns to the category picker. */
  onBack?: () => void
  /** Shows a "Cancel" button (edit mode) that exits the page without saving. */
  onCancel?: () => void
  /**
   * Shows a "Back to All Tasks" button in the top-left of the page, which exits the entire
   * create/edit flow back to the task list (as opposed to `onBack`/`onCancel`, which only move
   * between steps within the flow).
   */
  onExit?: () => void
  /**
   * When present, rendered as a centered page title above the form (e.g. "Create New Compute Task" or
   * "Edit Task"). The host page is responsible for supplying this rather than rendering its own
   * heading, so the title and the single-column form below it share one centered layout.
   */
  pageTitle?: string
  /** When present, rendered as a centered subtitle below `pageTitle`. */
  pageDescription?: string
}

/**
 * The create/edit form for a Compute Data curation task. Used as step 2 of the create wizard
 * (`CreateCurationTaskFlow`) and directly by `EditCurationTaskPage`.
 */
export default function ComputeTaskForm(props: ComputeTaskFormProps) {
  const {
    projectId,
    task,
    onCreated,
    onSaved,
    onDeleted,
    onBack,
    onCancel,
    onExit,
    pageTitle,
    pageDescription,
  } = props

  const form = useCurationTaskFormState({ projectId, task, onDeleted })
  const { isEditMode } = form

  const existingComputeConcreteType = getComputeTaskConcreteType(
    task?.taskProperties,
  )

  // Whether the type-specific fields (and type selector) should render at all. False when editing a task
  // whose category isn't one of the two Compute Data types (e.g. a legacy Curate Data task).
  const showTypeSection =
    !isEditMode || existingComputeConcreteType !== undefined
  const showUnrecognizedTypeWarning =
    isEditMode &&
    existingComputeConcreteType === undefined &&
    !instanceOfGridSupportedTaskProperties(task?.taskProperties)

  const [selectedConcreteType, setSelectedConcreteType] =
    useState<ComputeTaskConcreteType>(
      () => existingComputeConcreteType ?? DEFAULT_COMPUTE_TASK_TYPE,
    )

  const [sampleSheetValue, setSampleSheetValue] =
    useState<SampleSheetFieldsValue>(() => {
      const tp = task?.taskProperties
      if (tp?.concreteType === COMPUTE_TASK_TYPE_OPTIONS[0]) {
        return {
          inputTaskId: tp.inputTaskId?.toString() ?? '',
          destinationTaskId: tp.destinationTaskId?.toString() ?? '',
        }
      }
      return EMPTY_SAMPLE_SHEET_VALUE
    })
  const [recordSetValue, setRecordSetValue] = useState<RecordSetFieldsValue>(
    () => {
      const tp = task?.taskProperties
      if (tp?.concreteType === COMPUTE_TASK_TYPE_OPTIONS[1]) {
        return {
          folderId: tp.folderId ?? '',
          instructions: tp.instructions ?? '',
          destinationTaskId: tp.destinationTaskId?.toString() ?? '',
        }
      }
      return EMPTY_RECORD_SET_VALUE
    },
  )

  const isTypeSpecificValid =
    !showTypeSection ||
    (selectedConcreteType === COMPUTE_TASK_TYPE_OPTIONS[0]
      ? isValidTaskIdInput(sampleSheetValue.inputTaskId) &&
        isValidTaskIdInput(sampleSheetValue.destinationTaskId)
      : !!recordSetValue.folderId.trim() &&
        !!recordSetValue.instructions.trim() &&
        isValidTaskIdInput(recordSetValue.destinationTaskId))
  const isValid =
    form.isCommonFieldsValid && form.isProjectValid && isTypeSpecificValid

  async function handleSubmit() {
    const payload = buildComputeTaskPayload({
      existingTask: isEditMode ? task : undefined,
      projectId: form.effectiveProjectId,
      dataType: form.dataType,
      instructions: form.instructions,
      assigneePrincipalId: form.assigneePrincipalId,
      computeTypeFields: showTypeSection
        ? {
            concreteType: selectedConcreteType,
            sampleSheet: sampleSheetValue,
            recordSet: recordSetValue,
          }
        : undefined,
    })

    const result = await form.submitTaskAndStatus(payload)
    if (isEditMode) {
      onSaved?.(result)
    } else {
      onCreated?.(result)
    }
  }

  return (
    <Stack gap={3}>
      <TaskFormHeader
        onExit={onExit}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />

      <Stack gap={3} sx={{ width: '100%', maxWidth: 700, mx: 'auto' }}>
        {showTypeSection && (
          <StyledFormControl fullWidth>
            <InputLabel id="compute-task-type-label">
              {COMPUTE_TASK_TYPE_INPUT_LABEL}
            </InputLabel>
            <Select
              labelId="compute-task-type-label"
              label={COMPUTE_TASK_TYPE_INPUT_LABEL}
              value={selectedConcreteType}
              disabled={isEditMode}
              onChange={e => setSelectedConcreteType(e.target.value)}
            >
              {COMPUTE_TASK_TYPE_OPTIONS.map(concreteType => (
                <MenuItem key={concreteType} value={concreteType}>
                  {COMPUTE_TASK_TYPE_CONFIG[concreteType].label}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}

        {form.showProjectSelector && (
          <ProjectSelectorField
            value={form.selectedProjectId}
            onChange={form.setSelectedProjectId}
          />
        )}

        <CommonTaskFields
          dataType={form.dataType}
          onDataTypeChange={form.setDataType}
          dueDate={form.displayedDueDate}
          onDueDateChange={form.setPendingDueDate}
          instructions={form.instructions}
          onInstructionsChange={form.setInstructions}
          assigneePrincipalId={form.assigneePrincipalId}
          onAssigneePrincipalIdChange={form.setAssigneePrincipalId}
        />

        {isEditMode && (
          <StyledFormControl fullWidth>
            <InputLabel id="compute-task-status-label">
              {TASK_STATUS_INPUT_LABEL}
            </InputLabel>
            <Select
              labelId="compute-task-status-label"
              value={form.displayedStatusState ?? ''}
              label={TASK_STATUS_INPUT_LABEL}
              disabled={form.isStatusFetching || form.currentTaskStatus == null}
              onChange={e =>
                form.setPendingStatusState(
                  e.target.value as TaskStatusStateEnum,
                )
              }
            >
              {Object.values(TaskStatusStateEnum).map(state => (
                <MenuItem key={state} value={state}>
                  {TASK_STATUS_CONFIG[state].label}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}

        {showTypeSection &&
          (selectedConcreteType === COMPUTE_TASK_TYPE_OPTIONS[0] ? (
            <SampleSheetFields
              value={sampleSheetValue}
              onChange={setSampleSheetValue}
            />
          ) : (
            <RecordSetFields
              value={recordSetValue}
              onChange={setRecordSetValue}
            />
          ))}

        {showUnrecognizedTypeWarning && (
          <Alert severity="warning">
            {EDIT_TASK_UNRECOGNIZED_TYPE_MESSAGE}
          </Alert>
        )}
        {form.error && (
          <Alert severity="error">
            {form.error.reason ?? GENERIC_SAVE_ERROR_MESSAGE}
          </Alert>
        )}
      </Stack>

      <TaskFormActions
        isEditMode={isEditMode}
        isPending={form.isPending}
        isValid={isValid}
        onSubmit={() => void handleSubmit().catch(noop)}
        onBack={onBack}
        onCancel={onCancel}
        canDelete={form.canDelete}
        showDeleteConfirmation={form.showDeleteConfirmation}
        onRequestDelete={() => form.setShowDeleteConfirmation(true)}
        onConfirmDelete={() => {
          if (task?.taskId != null) form.deleteTask(task.taskId)
        }}
        onCancelDelete={() => form.setShowDeleteConfirmation(false)}
        isDeletePending={form.isDeletePending}
      />
    </Stack>
  )
}
