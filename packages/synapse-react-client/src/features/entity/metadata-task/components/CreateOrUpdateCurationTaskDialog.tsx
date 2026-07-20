import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { DialogBase } from '@/components/DialogBase'
import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { TextField } from '@/components/TextField'
import { displayToast } from '@/components/ToastMessage'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import WizardChoiceButton from '@/components/WizardChoiceButton/WizardChoiceButton'
import WizardChoiceButtonGroup from '@/components/WizardChoiceButton/WizardChoiceButtonGroup'
import {
  useCreateCurationTask,
  useDeleteCurationTask,
  useGetCurationTaskStatus,
  useUpdateCurationTask,
  useUpdateCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { EntityTypeGroup } from '@/utils/functions/EntityTypeUtils'
import { HelpTwoTone } from '@mui/icons-material'
import Close from '@mui/icons-material/Close'
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  CurationTask,
  CurationTaskProperties,
  EntityType,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import {
  ASSIGNEE_TOOLTIP,
  AUTH_MODE_CHANGED_WARNING,
  AUTH_MODE_NONE_TITLE,
  AUTH_MODE_NONE_TOOLTIP,
  AUTH_MODE_SESSION_OWNER_TITLE,
  AUTH_MODE_SESSION_OWNER_TOOLTIP,
  AUTH_MODE_SOURCE_BENEFACTOR_TITLE,
  AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP,
  COLLABORATORS_TOOLTIP,
  CREATE_CURATION_TASK_DIALOG_TITLE,
  TASK_STATUS_CONFIG,
  TASK_STATUS_INPUT_LABEL,
  DELETE_CURATION_TASK_CONFIRMATION_PROMPT,
  DELETE_CURATION_TASK_DIALOG_TITLE,
  DELETE_CURATION_TASK_ERROR_TOAST_PREFIX,
  DELETE_CURATION_TASK_GRID_SESSION_WARNING,
  DELETE_CURATION_TASK_SUCCESS_TOAST,
  EDIT_CURATION_TASK_DIALOG_TITLE,
  FILE_BASED_FILE_VIEW_INPUT_DESCRIPTION,
  FILE_BASED_TASK_DESCRIPTION,
  FILE_BASED_TASK_TITLE,
  FILE_BASED_UPLOAD_FOLDER_INPUT_DESCRIPTION,
  FILE_VIEW_FINDER_PROMPT,
  FILE_VIEW_FINDER_TITLE,
  GENERIC_SAVE_ERROR_MESSAGE,
  RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION,
  RECORD_BASED_TASK_DESCRIPTION,
  RECORD_BASED_TASK_TITLE,
  RECORD_SET_FINDER_PROMPT,
  RECORD_SET_FINDER_TITLE,
  SELECT_TASK_TYPE_DESCRIPTION,
  TASK_INSTRUCTIONS_INPUT_DESCRIPTION,
  TASK_NAME_INPUT_DESCRIPTION,
  UNRECOGNIZED_TASK_TYPE_ERROR,
  UPLOAD_FOLDER_FINDER_PROMPT,
  UPLOAD_FOLDER_FINDER_TITLE,
} from '../utils/constants'
import noop from 'lodash-es/noop'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { StyledFormControl } from '@/components/styled'
import { instanceOfGridSupportedTaskProperties } from '../utils/types'

export type CreateOrUpdateCurationTaskDialogProps = {
  open: boolean
  onCancel: () => void
  onSuccess: (task: CurationTask) => void
  /**
   * Called after the task has been deleted from the dialog (edit mode only).
   * Parent is responsible for closing the dialog and any related cleanup.
   */
  onDeleteSuccess?: () => void
  projectId: string
  task?: CurationTask
}

const FILE_BASED_CONCRETE_TYPE =
  FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
const RECORD_BASED_CONCRETE_TYPE =
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties

/** Null represents the "Legacy" / unset option for suggestedAuthorizationMode */
type AuthorizationModeOption = 'SESSION_OWNER' | 'SOURCE_BENEFACTOR' | 'NONE'

function toAuthorizationModeOption(
  value: string | undefined,
): AuthorizationModeOption {
  if (value === 'SESSION_OWNER' || value === 'SOURCE_BENEFACTOR') return value
  return 'NONE'
}

type CreateOrUpdateCurationTaskDialogStep =
  | 'SELECT_TYPE'
  | 'TYPE_SPECIFIC_FIELDS'
  | 'COMMON_MUTABLE_FIELDS'

/**
 * Dialog component that guides a user through creating a new CurationTask or editing an existing one.
 */
export default function CreateOrUpdateCurationTaskDialog(
  props: CreateOrUpdateCurationTaskDialogProps,
) {
  const {
    open,
    onCancel,
    onSuccess,
    onDeleteSuccess = noop,
    projectId,
    task,
  } = props
  const isEditMode = task !== undefined
  const { data: permissions } = useGetEntityPermissions(projectId)
  const canDelete =
    permissions?.canDelete &&
    isEditMode &&
    task?.taskId != null &&
    props.onDeleteSuccess != null

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  // In create mode: track which step we're on (1 = type selection, 2 = type-specific fields, 3 = common mutable fields)
  const [step, setStep] = useState<CreateOrUpdateCurationTaskDialogStep>(() =>
    task ? 'COMMON_MUTABLE_FIELDS' : 'SELECT_TYPE',
  )

  // Derive initial concrete type from the existing task (null in create mode
  // until the user picks a type in step 1)
  const [selectedConcreteType, setSelectedConcreteType] = useState<
    CurationTaskProperties['concreteType'] | null
  >(() => {
    const ct = task?.taskProperties?.concreteType
    if (ct === FILE_BASED_CONCRETE_TYPE || ct === RECORD_BASED_CONCRETE_TYPE)
      return ct
    return null
  })

  // Common task fields — lazily initialized from the existing task
  const [dataType, setDataType] = useState(() => task?.dataType ?? '')
  const [instructions, setInstructions] = useState(
    () => task?.instructions ?? '',
  )
  const [assigneePrincipalId, setAssigneePrincipalId] = useState<
    string | undefined
  >(() => task?.assigneePrincipalId)

  const initialAuthMode =
    task?.taskProperties &&
    instanceOfGridSupportedTaskProperties(task?.taskProperties)
      ? toAuthorizationModeOption(
          task?.taskProperties?.suggestedAuthorizationMode,
        )
      : 'NONE'

  const [authorizationMode, setAuthorizationMode] =
    useState<AuthorizationModeOption>(initialAuthMode)
  // Track the original value to detect unsaved changes
  const [originalAuthorizationMode] =
    useState<AuthorizationModeOption>(initialAuthMode)

  // FileBasedMetadataTaskProperties fields
  const [uploadFolderId, setUploadFolderId] = useState(() => {
    const tp = task?.taskProperties
    return tp?.concreteType === FILE_BASED_CONCRETE_TYPE
      ? (tp.uploadFolderId ?? '')
      : ''
  })
  const [fileViewId, setFileViewId] = useState(() => {
    const tp = task?.taskProperties
    return tp?.concreteType === FILE_BASED_CONCRETE_TYPE
      ? (tp.fileViewId ?? '')
      : ''
  })

  // RecordBasedMetadataTaskProperties fields
  const [recordSetId, setRecordSetId] = useState(() => {
    const tp = task?.taskProperties
    return tp?.concreteType === RECORD_BASED_CONCRETE_TYPE
      ? (tp.recordSetId ?? '')
      : ''
  })

  // Shared taskProperties fields
  const [collaboratorPrincipalIds, setCollaboratorPrincipalIds] = useState<
    string[]
  >(() => {
    const ids =
      task &&
      task.taskProperties &&
      instanceOfGridSupportedTaskProperties(task.taskProperties)
        ? task.taskProperties.collaboratorPrincipalIds
        : undefined
    return ids ?? []
  })
  const [pendingCollaboratorId, setPendingCollaboratorId] = useState<
    string | null
  >(null)

  // Task status (edit mode only)
  const { data: currentTaskStatus, isFetching: isStatusFetching } =
    useGetCurationTaskStatus(task?.taskId ?? 0, {
      enabled: isEditMode && task?.taskId != null,
    })
  // undefined = user hasn't changed the status yet
  const [pendingStatusState, setPendingStatusState] = useState<
    TaskStatusStateEnum | undefined
  >(undefined)
  const displayedStatusState = pendingStatusState ?? currentTaskStatus?.state

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
        onDeleteSuccess()
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
    isDeletePending ||
    isStatusUpdatePending
  const error = createError ?? updateError ?? statusUpdateError

  const isTaskPropertiesValid =
    (selectedConcreteType === FILE_BASED_CONCRETE_TYPE &&
      uploadFolderId &&
      fileViewId) ||
    (selectedConcreteType === RECORD_BASED_CONCRETE_TYPE && recordSetId)

  function buildTaskPayload(): CurationTask {
    const suggestedAuthorizationMode =
      authorizationMode === 'NONE' ? undefined : authorizationMode

    const concreteType = selectedConcreteType!
    let taskProperties: CurationTask['taskProperties']
    const collaborators =
      collaboratorPrincipalIds.length > 0 ? collaboratorPrincipalIds : undefined

    if (concreteType === FILE_BASED_CONCRETE_TYPE) {
      taskProperties = {
        concreteType: FILE_BASED_CONCRETE_TYPE,
        uploadFolderId: uploadFolderId || undefined,
        fileViewId: fileViewId || undefined,
        suggestedAuthorizationMode,
        collaboratorPrincipalIds: collaborators,
      }
    } else {
      taskProperties = {
        concreteType: RECORD_BASED_CONCRETE_TYPE,
        recordSetId: recordSetId || undefined,
        suggestedAuthorizationMode,
        collaboratorPrincipalIds: collaborators,
      }
    }

    return {
      // Spread the existing task to carry over server-managed fields (taskId, etc.)
      ...(isEditMode ? task : {}),
      projectId,
      dataType: dataType || undefined,
      instructions: instructions || undefined,
      assigneePrincipalId: assigneePrincipalId || undefined,
      taskProperties,
    }
  }

  async function handleSave() {
    const payload = buildTaskPayload()
    if (isEditMode) {
      const latestTask = await updateTask(payload)

      if (
        pendingStatusState !== undefined &&
        pendingStatusState !== currentTaskStatus?.state &&
        currentTaskStatus != null
      ) {
        await updateTaskStatus({
          ...currentTaskStatus,
          state: pendingStatusState,
          etag: latestTask.etag,
        })
      }

      onSuccess(latestTask)
    } else {
      const created = await createTask(payload)
      onSuccess(created)
    }
  }

  const authModeChanged =
    isEditMode && authorizationMode !== originalAuthorizationMode

  // ── Authorization Mode radio group (shared between columns) ────────────
  const authModeField = (
    <FormControl>
      <FormLabel>Authorization Mode</FormLabel>
      <RadioGroup
        value={authorizationMode}
        onChange={(_e, v) => setAuthorizationMode(v as AuthorizationModeOption)}
      >
        <FormControlLabel
          value="NONE"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body1">{AUTH_MODE_NONE_TITLE}</Typography>
              <Tooltip title={AUTH_MODE_NONE_TOOLTIP}>
                <HelpTwoTone sx={{ color: 'grey.700' }} />
              </Tooltip>
            </Box>
          }
        />
        <FormControlLabel
          value="SESSION_OWNER"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body1">
                {AUTH_MODE_SESSION_OWNER_TITLE}
              </Typography>
              <Tooltip title={AUTH_MODE_SESSION_OWNER_TOOLTIP}>
                <HelpTwoTone sx={{ color: 'grey.700' }} />
              </Tooltip>
            </Box>
          }
        />
        <FormControlLabel
          value="SOURCE_BENEFACTOR"
          control={<Radio />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body1">
                {AUTH_MODE_SOURCE_BENEFACTOR_TITLE}
              </Typography>
              <Tooltip title={AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP}>
                <HelpTwoTone sx={{ color: 'grey.700' }} />
              </Tooltip>
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  )

  const assigneeField = (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <InputLabel htmlFor="dlg-set-task-assignee">Assignee</InputLabel>
        <Tooltip title={ASSIGNEE_TOOLTIP}>
          <div>
            <HelpTwoTone sx={{ color: 'grey.700' }} />
          </div>
        </Tooltip>
      </Box>
      <UserSearchBox
        inputId="dlg-set-task-assignee"
        key={open.toString()}
        defaultValue={assigneePrincipalId}
        onChange={id => setAssigneePrincipalId(id ?? undefined)}
        typeFilter={TYPE_FILTER.ALL}
      />
    </Box>
  )

  // ── Form fields (used in both step 3 create and edit mode) ──────────────
  const commonFields = (
    <Stack gap={2}>
      <TextField
        label="Task Name"
        fullWidth
        value={dataType}
        onChange={e => setDataType(e.target.value)}
        required
        description={TASK_NAME_INPUT_DESCRIPTION}
      />
      <TextField
        label="Instructions"
        fullWidth
        multiline
        minRows={3}
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        description={TASK_INSTRUCTIONS_INPUT_DESCRIPTION}
      />
      {/* TODO: Display the below 'collaborators' once multiple owners are supported */}
      <Box display="none">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <InputLabel>Collaborators</InputLabel>
          <Tooltip title={COLLABORATORS_TOOLTIP}>
            <div>
              <HelpTwoTone sx={{ color: 'grey.700' }} />
            </div>
          </Tooltip>
        </Box>
        <Stack gap={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <Box flex={1}>
              <UserSearchBox
                value={pendingCollaboratorId}
                onChange={id => setPendingCollaboratorId(id)}
                typeFilter={TYPE_FILTER.ALL}
                placeholder="Search for a user or team"
              />
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  pendingCollaboratorId &&
                  !collaboratorPrincipalIds.includes(pendingCollaboratorId)
                ) {
                  setCollaboratorPrincipalIds(prev => [
                    ...prev,
                    pendingCollaboratorId,
                  ])
                }
                setPendingCollaboratorId(null)
              }}
              disabled={!pendingCollaboratorId}
            >
              Add
            </Button>
          </Stack>
          {collaboratorPrincipalIds.map(id => (
            <Stack
              key={id}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <UserOrTeamBadge principalId={id} />
              <IconButton
                size="small"
                onClick={() =>
                  setCollaboratorPrincipalIds(prev =>
                    prev.filter(x => x !== id),
                  )
                }
              >
                <Close fontSize="small" />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  )

  // ── TaskProperties fields ────────────────────────────────────────────────
  const fileBasedFields = (
    <Stack gap={2}>
      <EntityIdTextField
        label="Upload Folder ID"
        value={uploadFolderId}
        description={FILE_BASED_UPLOAD_FOLDER_INPUT_DESCRIPTION}
        onChange={setUploadFolderId}
        disabled={isEditMode}
        entityFinderModalProps={{
          title: UPLOAD_FOLDER_FINDER_TITLE,
          promptCopy: UPLOAD_FOLDER_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: EntityTypeGroup.CONTAINER,
          },
        }}
      />
      <EntityIdTextField
        label="File View ID"
        value={fileViewId}
        description={FILE_BASED_FILE_VIEW_INPUT_DESCRIPTION}
        onChange={setFileViewId}
        disabled={isEditMode}
        entityFinderModalProps={{
          title: FILE_VIEW_FINDER_TITLE,
          promptCopy: FILE_VIEW_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: [EntityType.entityview],
          },
        }}
      />
    </Stack>
  )

  const recordBasedFields = (
    <EntityIdTextField
      label="Record Set ID"
      value={recordSetId}
      description={RECORD_BASED_RECORD_SET_INPUT_DESCRIPTION}
      onChange={setRecordSetId}
      disabled={isEditMode}
      entityFinderModalProps={{
        title: RECORD_SET_FINDER_TITLE,
        promptCopy: RECORD_SET_FINDER_PROMPT,
        confirmButtonCopy: 'Select',
        configuration: {
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectMultiple: false,
          treeOnly: false,
          versionSelection: VersionSelectionType.DISALLOWED,
          selectableTypes: [EntityType.recordset],
        },
      }}
    />
  )

  // ── Step 1: Type selection ───────────────────────────────────────────────
  const step1Content = (
    <Stack gap={2}>
      <Typography variant="body1">{SELECT_TASK_TYPE_DESCRIPTION}</Typography>
      <WizardChoiceButtonGroup>
        <WizardChoiceButton
          title={FILE_BASED_TASK_TITLE}
          description={FILE_BASED_TASK_DESCRIPTION}
          onClick={() => {
            setSelectedConcreteType(FILE_BASED_CONCRETE_TYPE)
            setStep('TYPE_SPECIFIC_FIELDS')
          }}
        />
        <WizardChoiceButton
          title={RECORD_BASED_TASK_TITLE}
          description={RECORD_BASED_TASK_DESCRIPTION}
          onClick={() => {
            setSelectedConcreteType(RECORD_BASED_CONCRETE_TYPE)
            setStep('TYPE_SPECIFIC_FIELDS')
          }}
        />
      </WizardChoiceButtonGroup>
    </Stack>
  )

  // ── Step 2: Type-specific fields ───────────────────────────────────────────────
  const step2Content = (
    <Stack gap={2}>
      {selectedConcreteType === FILE_BASED_CONCRETE_TYPE && fileBasedFields}
      {selectedConcreteType === RECORD_BASED_CONCRETE_TYPE && recordBasedFields}
    </Stack>
  )

  // ── Step 3 / edit form content ───────────────────────────────────────────
  const step3Content = (
    <Stack gap={3}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={2}>{commonFields}</Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={3}>
            {isEditMode && (
              <StyledFormControl fullWidth>
                <InputLabel id="dlg-task-status-label">
                  {TASK_STATUS_INPUT_LABEL}
                </InputLabel>
                <Select
                  labelId="dlg-task-status-label"
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
            {assigneeField}
            {authModeField}
          </Stack>
        </Grid>
      </Grid>

      {isEditMode && selectedConcreteType === null && (
        <Alert severity="error">{UNRECOGNIZED_TASK_TYPE_ERROR}</Alert>
      )}
      {authModeChanged && (
        <Alert severity="warning">{AUTH_MODE_CHANGED_WARNING}</Alert>
      )}
      {error && (
        <Alert severity="error">
          {error.reason ?? GENERIC_SAVE_ERROR_MESSAGE}
        </Alert>
      )}
    </Stack>
  )

  const title = isEditMode
    ? EDIT_CURATION_TASK_DIALOG_TITLE
    : CREATE_CURATION_TASK_DIALOG_TITLE

  let dialogContent = null
  switch (step) {
    case 'SELECT_TYPE':
      dialogContent = step1Content
      break
    case 'TYPE_SPECIFIC_FIELDS':
      dialogContent = step2Content
      break
    case 'COMMON_MUTABLE_FIELDS':
      dialogContent = step3Content
      break
  }

  let dialogActions = null
  switch (step) {
    case 'SELECT_TYPE':
      dialogActions = null
      break
    case 'TYPE_SPECIFIC_FIELDS': {
      dialogActions = (
        <>
          <Button
            variant="outlined"
            onClick={() => setStep('SELECT_TYPE')}
            disabled={isPending}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => setStep('COMMON_MUTABLE_FIELDS')}
            disabled={isPending || !isTaskPropertiesValid}
          >
            Next
          </Button>
        </>
      )
      break
    }
    case 'COMMON_MUTABLE_FIELDS': {
      dialogActions = (
        <>
          {!isEditMode && (
            <Button
              variant="outlined"
              onClick={() => setStep('TYPE_SPECIFIC_FIELDS')}
              disabled={isPending}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            // errors surfaced via react-query error state
            onClick={() => void handleSave().catch(noop)}
            disabled={isPending || selectedConcreteType === null}
          >
            Save
          </Button>
        </>
      )
      break
    }
  }

  return (
    <>
      <DialogBase
        open={open}
        title={title}
        maxWidth="md"
        fullWidth
        onCancel={onCancel}
        content={dialogContent}
        actions={
          <Stack
            direction="row"
            gap={1}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
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
            </Box>
            <Stack direction="row" gap={1}>
              {dialogActions}
            </Stack>
          </Stack>
        }
      />
      <ConfirmationDialog
        title={DELETE_CURATION_TASK_DIALOG_TITLE}
        open={showDeleteConfirmation}
        content={
          <Stack gap={2}>
            <Typography variant="body1">
              {DELETE_CURATION_TASK_CONFIRMATION_PROMPT}
            </Typography>
            <Alert severity="warning">
              {DELETE_CURATION_TASK_GRID_SESSION_WARNING}
            </Alert>
          </Stack>
        }
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
    </>
  )
}
