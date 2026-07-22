import FieldDescription from '@/components/FieldDescription'
import { StyledFormControl } from '@/components/styled'
import { HelpTwoTone } from '@mui/icons-material'
import {
  Alert,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  CurationTask,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useState } from 'react'
import {
  AUTH_MODE_CHANGED_WARNING,
  AUTH_MODE_CONFIG,
  AUTH_MODE_INPUT_DESCRIPTION,
  AUTH_MODE_INPUT_LABEL,
  AUTH_MODE_OPTIONS,
  CURATE_TASK_TYPE_CONFIG,
  CURATE_TASK_TYPE_INPUT_LABEL,
  CURATE_TASK_TYPE_OPTIONS,
  DEFAULT_CURATE_TASK_TYPE,
  GENERIC_SAVE_ERROR_MESSAGE,
  TASK_STATUS_CONFIG,
  TASK_STATUS_INPUT_LABEL,
} from '../utils/constants'
import {
  CurateTaskConcreteType,
  getCurateTaskConcreteType,
  instanceOfGridSupportedTaskProperties,
} from '../utils/types'
import CommonTaskFields from './CommonTaskFields'
import FileBasedFields from './FileBasedFields'
import ProjectSelectorField from './ProjectSelectorField'
import RecordBasedFields from './RecordBasedFields'
import TaskFormActions from './TaskFormActions'
import TaskFormHeader from './TaskFormHeader'
import { useCurationTaskFormState } from './useCurationTaskFormState'
import {
  AuthorizationModeOption,
  buildCurateTaskPayload,
  FileBasedFieldsValue,
  RecordBasedFieldsValue,
} from './utils/buildCurateTaskPayload'

const EMPTY_FILE_BASED_VALUE: FileBasedFieldsValue = {
  uploadFolderId: '',
  fileViewId: '',
}
const EMPTY_RECORD_BASED_VALUE: RecordBasedFieldsValue = {
  recordSetId: '',
}

function toAuthorizationModeOption(
  value: string | undefined,
): AuthorizationModeOption {
  if (value === 'SESSION_OWNER' || value === 'SOURCE_BENEFACTOR') return value
  return 'NONE'
}

export type CurateTaskFormProps = {
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
   * When present, rendered as a centered page title above the form (e.g. "Create New Curate Task" or
   * "Edit Task"). The host page is responsible for supplying this rather than rendering its own
   * heading, so the title and the single-column form below it share one centered layout.
   */
  pageTitle?: string
  /** When present, rendered as a centered subtitle below `pageTitle`. */
  pageDescription?: string
}

/**
 * The create/edit form for a Curate Data curation task (File-Based / Records-Based). Used as the
 * `curate` step of the create wizard (`CreateCurationTaskFlow`) and directly by `EditCurationTaskPage`.
 */
export default function CurateTaskForm(props: CurateTaskFormProps) {
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

  const existingCurateConcreteType = getCurateTaskConcreteType(
    task?.taskProperties,
  )

  const [selectedConcreteType, setSelectedConcreteType] =
    useState<CurateTaskConcreteType>(
      () => existingCurateConcreteType ?? DEFAULT_CURATE_TASK_TYPE,
    )

  const [fileBasedValue, setFileBasedValue] = useState<FileBasedFieldsValue>(
    () => {
      const tp = task?.taskProperties
      if (tp?.concreteType === CURATE_TASK_TYPE_OPTIONS[0]) {
        return {
          uploadFolderId: tp.uploadFolderId ?? '',
          fileViewId: tp.fileViewId ?? '',
        }
      }
      return EMPTY_FILE_BASED_VALUE
    },
  )
  const [recordBasedValue, setRecordBasedValue] =
    useState<RecordBasedFieldsValue>(() => {
      const tp = task?.taskProperties
      if (tp?.concreteType === CURATE_TASK_TYPE_OPTIONS[1]) {
        return { recordSetId: tp.recordSetId ?? '' }
      }
      return EMPTY_RECORD_BASED_VALUE
    })

  const initialAuthorizationMode = toAuthorizationModeOption(
    instanceOfGridSupportedTaskProperties(task?.taskProperties)
      ? task.taskProperties.suggestedAuthorizationMode
      : undefined,
  )
  const [authorizationMode, setAuthorizationMode] = useState(
    initialAuthorizationMode,
  )

  const isTypeSpecificValid =
    selectedConcreteType === CURATE_TASK_TYPE_OPTIONS[0]
      ? !!fileBasedValue.uploadFolderId.trim() &&
        !!fileBasedValue.fileViewId.trim()
      : !!recordBasedValue.recordSetId.trim()
  const isValid =
    form.isCommonFieldsValid && form.isProjectValid && isTypeSpecificValid

  const authModeChanged =
    isEditMode && authorizationMode !== initialAuthorizationMode

  async function handleSubmit() {
    const payload = buildCurateTaskPayload({
      existingTask: isEditMode ? task : undefined,
      projectId: form.effectiveProjectId,
      dataType: form.dataType,
      instructions: form.instructions,
      assigneePrincipalId: form.assigneePrincipalId,
      curateTypeFields: {
        concreteType: selectedConcreteType,
        authorizationMode,
        fileBased: fileBasedValue,
        recordBased: recordBasedValue,
      },
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
        <StyledFormControl fullWidth>
          <InputLabel id="curate-task-type-label">
            {CURATE_TASK_TYPE_INPUT_LABEL}
          </InputLabel>
          <Select
            labelId="curate-task-type-label"
            label={CURATE_TASK_TYPE_INPUT_LABEL}
            value={selectedConcreteType}
            disabled={isEditMode}
            onChange={e => setSelectedConcreteType(e.target.value)}
          >
            {CURATE_TASK_TYPE_OPTIONS.map(concreteType => (
              <MenuItem key={concreteType} value={concreteType}>
                {CURATE_TASK_TYPE_CONFIG[concreteType].label}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>

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
            <InputLabel id="curate-task-status-label">
              {TASK_STATUS_INPUT_LABEL}
            </InputLabel>
            <Select
              labelId="curate-task-status-label"
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

        {selectedConcreteType ===
        FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties ? (
          <FileBasedFields
            value={fileBasedValue}
            onChange={setFileBasedValue}
            disabled={isEditMode}
          />
        ) : (
          <RecordBasedFields
            value={recordBasedValue}
            onChange={setRecordBasedValue}
            disabled={isEditMode}
          />
        )}

        <StyledFormControl fullWidth>
          <InputLabel id="curate-task-auth-mode-label">
            {AUTH_MODE_INPUT_LABEL}
          </InputLabel>
          <FieldDescription>{AUTH_MODE_INPUT_DESCRIPTION}</FieldDescription>
          <Select
            labelId="curate-task-auth-mode-label"
            label={AUTH_MODE_INPUT_LABEL}
            value={authorizationMode}
            onChange={e =>
              setAuthorizationMode(e.target.value as AuthorizationModeOption)
            }
          >
            {AUTH_MODE_OPTIONS.map(mode => (
              <MenuItem key={mode} value={mode}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography variant="body1">
                    {AUTH_MODE_CONFIG[mode].label}
                  </Typography>
                  <Tooltip title={AUTH_MODE_CONFIG[mode].tooltip}>
                    <HelpTwoTone sx={{ color: 'grey.700' }} />
                  </Tooltip>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>

        {authModeChanged && (
          <Alert severity="warning">{AUTH_MODE_CHANGED_WARNING}</Alert>
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
