import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { StyledFormControl } from '@/components/styled'
import { displayToast } from '@/components/ToastMessage'
import {
  useCreateCurationTask,
  useDeleteCurationTask,
  useGetCurationTaskStatus,
  useUpdateCurationTask,
  useUpdateCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { useSynapseContext } from '@/utils/index'
import { ArrowBack } from '@mui/icons-material'
import {
  Alert,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import {
  CurationTask,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useState } from 'react'
import {
  BACK_TO_ALL_TASKS_LABEL,
  COMPUTE_TASK_TYPE_CONFIG,
  COMPUTE_TASK_TYPE_INPUT_LABEL,
  COMPUTE_TASK_TYPE_OPTIONS,
  DEFAULT_COMPUTE_TASK_TYPE,
  DELETE_CURATION_TASK_CONFIRMATION_PROMPT,
  DELETE_CURATION_TASK_DIALOG_TITLE,
  DELETE_CURATION_TASK_ERROR_TOAST_PREFIX,
  DELETE_CURATION_TASK_SUCCESS_TOAST,
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
  const isEditMode = task !== undefined
  const { synapseClient } = useSynapseContext()

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

  const showProjectSelector = !isEditMode && !projectId
  const [selectedProjectId, setSelectedProjectId] = useState('')
  const effectiveProjectId = isEditMode
    ? (task?.projectId ?? '')
    : (projectId ?? selectedProjectId)

  const [dataType, setDataType] = useState(() => task?.dataType ?? '')
  const [instructions, setInstructions] = useState(
    () => task?.instructions ?? '',
  )
  const [assigneePrincipalId, setAssigneePrincipalId] = useState<
    string | undefined
  >(() => task?.assigneePrincipalId)

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

  // Task status (edit mode only). `dueDate` also lives on TaskStatus, so it's collected here even in
  // create mode (where there's no status to fetch yet -- it's applied to the auto-created status
  // immediately after the task itself is created, see `handleSubmit`).
  const { data: currentTaskStatus, isFetching: isStatusFetching } =
    useGetCurationTaskStatus(task?.taskId ?? 0, {
      enabled: isEditMode && task?.taskId != null,
    })
  const [pendingStatusState, setPendingStatusState] = useState<
    TaskStatusStateEnum | undefined
  >(undefined)
  const displayedStatusState = pendingStatusState ?? currentTaskStatus?.state
  const [pendingDueDate, setPendingDueDate] = useState<string | undefined>(
    undefined,
  )
  const displayedDueDate =
    pendingDueDate ?? (isEditMode ? (currentTaskStatus?.dueDate ?? '') : '')

  const { data: permissions } = useGetEntityPermissions(effectiveProjectId, {
    enabled: !!effectiveProjectId,
  })
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const canDelete =
    permissions?.canDelete &&
    isEditMode &&
    task?.taskId != null &&
    onDeleted != null

  const {
    mutateAsync: createTask,
    isPending: isCreatePending,
    error: createError,
  } = useCreateCurationTask()
  const {
    mutateAsync: updateTask,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateCurationTask()
  const {
    mutateAsync: updateTaskStatus,
    isPending: isStatusUpdatePending,
    error: statusUpdateError,
  } = useUpdateCurationTaskStatus()
  const { mutate: deleteTask, isPending: isDeletePending } =
    useDeleteCurationTask({
      onSuccess: () => {
        displayToast(DELETE_CURATION_TASK_SUCCESS_TOAST, 'success')
        setShowDeleteConfirmation(false)
        onDeleted?.()
      },
      onError: err => {
        displayToast(
          DELETE_CURATION_TASK_ERROR_TOAST_PREFIX + err.message,
          'danger',
        )
      },
    })

  const isPending =
    isCreatePending ||
    isUpdatePending ||
    isStatusUpdatePending ||
    isDeletePending
  const error = createError ?? updateError ?? statusUpdateError

  const isCommonFieldsValid =
    !!dataType.trim() &&
    !!displayedDueDate.trim() &&
    !!instructions.trim() &&
    !!assigneePrincipalId
  const isProjectValid = !showProjectSelector || !!selectedProjectId.trim()
  const isTypeSpecificValid =
    !showTypeSection ||
    (selectedConcreteType === COMPUTE_TASK_TYPE_OPTIONS[0]
      ? isValidTaskIdInput(sampleSheetValue.inputTaskId) &&
        isValidTaskIdInput(sampleSheetValue.destinationTaskId)
      : !!recordSetValue.folderId.trim() &&
        !!recordSetValue.instructions.trim() &&
        isValidTaskIdInput(recordSetValue.destinationTaskId))
  const isValid = isCommonFieldsValid && isProjectValid && isTypeSpecificValid

  async function handleSubmit() {
    const payload = buildComputeTaskPayload({
      existingTask: isEditMode ? task : undefined,
      projectId: effectiveProjectId,
      dataType,
      instructions,
      assigneePrincipalId,
      computeTypeFields: showTypeSection
        ? {
            concreteType: selectedConcreteType,
            sampleSheet: sampleSheetValue,
            recordSet: recordSetValue,
          }
        : undefined,
    })

    if (isEditMode) {
      const latestTask = await updateTask(payload)

      const statusStateChanged =
        pendingStatusState !== undefined &&
        pendingStatusState !== currentTaskStatus?.state
      const dueDateChanged =
        pendingDueDate !== undefined &&
        pendingDueDate !== currentTaskStatus?.dueDate
      if ((statusStateChanged || dueDateChanged) && currentTaskStatus != null) {
        await updateTaskStatus({
          ...currentTaskStatus,
          state: pendingStatusState ?? currentTaskStatus.state,
          dueDate: displayedDueDate || undefined,
          etag: latestTask.etag,
        })
      }

      onSaved?.(latestTask)
    } else {
      const created = await createTask(payload)

      if (displayedDueDate && created.taskId != null) {
        // A CurationTask's TaskStatus is created automatically server-side; fetch it so the due date can
        // be applied to it.
        const status =
          await synapseClient.curationTaskServicesClient.getRepoV1CurationTaskTaskIdStatus(
            { taskId: created.taskId },
          )
        await updateTaskStatus({
          ...status,
          taskId: created.taskId,
          dueDate: displayedDueDate,
          etag: created.etag,
        })
      }

      onCreated?.(created)
    }
  }

  return (
    <Stack gap={3}>
      {onExit && (
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={onExit}
          sx={{ alignSelf: 'flex-start' }}
        >
          {BACK_TO_ALL_TASKS_LABEL}
        </Button>
      )}

      {pageTitle && (
        <Stack gap={1} alignItems="center" sx={{ textAlign: 'center' }}>
          <Typography variant="headline1" component="h1">
            {pageTitle}
          </Typography>
          {pageDescription && (
            <Typography
              variant="headline3"
              component="p"
              color="text.secondary"
            >
              {pageDescription}
            </Typography>
          )}
        </Stack>
      )}

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

        {showProjectSelector && (
          <ProjectSelectorField
            value={selectedProjectId}
            onChange={setSelectedProjectId}
          />
        )}

        <CommonTaskFields
          dataType={dataType}
          onDataTypeChange={setDataType}
          dueDate={displayedDueDate}
          onDueDateChange={setPendingDueDate}
          instructions={instructions}
          onInstructionsChange={setInstructions}
          assigneePrincipalId={assigneePrincipalId}
          onAssigneePrincipalIdChange={setAssigneePrincipalId}
        />

        {isEditMode && (
          <StyledFormControl fullWidth>
            <InputLabel id="compute-task-status-label">
              {TASK_STATUS_INPUT_LABEL}
            </InputLabel>
            <Select
              labelId="compute-task-status-label"
              value={displayedStatusState ?? ''}
              label={TASK_STATUS_INPUT_LABEL}
              disabled={isStatusFetching || currentTaskStatus == null}
              onChange={e =>
                setPendingStatusState(e.target.value as TaskStatusStateEnum)
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
        {error && (
          <Alert severity="error">
            {error.reason ?? GENERIC_SAVE_ERROR_MESSAGE}
          </Alert>
        )}
      </Stack>

      <Stack direction="row" gap={1} justifyContent="space-between">
        <Stack direction="row" gap={1}>
          {canDelete && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => setShowDeleteConfirmation(true)}
              disabled={isPending}
            >
              Delete
            </Button>
          )}
        </Stack>
        <Stack direction="row" gap={1}>
          {onBack && (
            <Button variant="outlined" onClick={onBack} disabled={isPending}>
              Back
            </Button>
          )}
          {onCancel && (
            <Button variant="outlined" onClick={onCancel} disabled={isPending}>
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            // errors surfaced via react-query error state
            onClick={() => void handleSubmit().catch(noop)}
            disabled={isPending || !isValid}
          >
            {isEditMode ? 'Save' : 'Create'}
          </Button>
        </Stack>
      </Stack>

      <ConfirmationDialog
        title={DELETE_CURATION_TASK_DIALOG_TITLE}
        open={showDeleteConfirmation}
        content={DELETE_CURATION_TASK_CONFIRMATION_PROMPT}
        confirmButtonProps={{
          children: 'Delete',
          color: 'error',
          loading: isDeletePending,
        }}
        onConfirm={() => {
          if (task?.taskId != null) deleteTask(task.taskId)
        }}
        onCancel={() => setShowDeleteConfirmation(false)}
      />
    </Stack>
  )
}
