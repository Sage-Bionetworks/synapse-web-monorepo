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
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import {
  AUTH_MODE_CHANGED_WARNING,
  AUTH_MODE_CONFIG,
  AUTH_MODE_INPUT_DESCRIPTION,
  AUTH_MODE_INPUT_LABEL,
  AUTH_MODE_OPTIONS,
  CURATE_TASK_DISABLED_STATUS_STATES,
  CURATE_TASK_TYPE_CONFIG,
  CURATE_TASK_TYPE_INPUT_LABEL,
  CURATE_TASK_TYPE_OPTIONS,
  GENERIC_SAVE_ERROR_MESSAGE,
} from '../utils/constants'
import CommonTaskFields from './CommonTaskFields'
import FileBasedFields from './FileBasedFields'
import ProjectSelectorField from './ProjectSelectorField'
import RecordBasedFields from './RecordBasedFields'
import TaskFormActions from './TaskFormActions'
import TaskFormHeader from './TaskFormHeader'
import TaskStatusField from './TaskStatusField'
import { useCurateTypeFields } from './useCurateTypeFields'
import { useCurationTaskFormState } from './useCurationTaskFormState'
import {
  AuthorizationModeOption,
  buildCurateTaskPayload,
} from './utils/buildCurateTaskPayload'

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

  const typeFields = useCurateTypeFields({
    taskProperties: task?.taskProperties,
    isEditMode,
  })

  const isValid =
    form.isCommonFieldsValid && form.isProjectValid && typeFields.isValid

  async function handleSubmit() {
    const payload = buildCurateTaskPayload({
      existingTask: isEditMode ? task : undefined,
      projectId: form.effectiveProjectId,
      dataType: form.dataType,
      instructions: form.instructions,
      assigneePrincipalId: form.assigneePrincipalId,
      curateTypeFields: {
        ...typeFields.state,
        authorizationMode: typeFields.authorizationMode,
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
            value={typeFields.state.concreteType}
            disabled={isEditMode}
            onChange={e => typeFields.setConcreteType(e.target.value)}
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
          <TaskStatusField
            labelId="curate-task-status-label"
            value={form.displayedStatusState}
            onChange={form.setPendingStatusState}
            disabled={form.isStatusFetching || form.currentTaskStatus == null}
            disabledStates={CURATE_TASK_DISABLED_STATUS_STATES}
          />
        )}

        {typeFields.state.concreteType ===
        FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties ? (
          <FileBasedFields
            value={typeFields.state.value}
            onChange={typeFields.setValue}
            disabled={isEditMode}
          />
        ) : (
          <RecordBasedFields
            value={typeFields.state.value}
            onChange={typeFields.setValue}
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
            value={typeFields.authorizationMode}
            onChange={e =>
              typeFields.setAuthorizationMode(
                e.target.value as AuthorizationModeOption,
              )
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

        {typeFields.authModeChanged && (
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
