import { DialogBase } from '@/components/DialogBase'
import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { TextField } from '@/components/TextField'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import WizardChoiceButton from '@/components/WizardChoiceButton/WizardChoiceButton'
import WizardChoiceButtonGroup from '@/components/WizardChoiceButton/WizardChoiceButtonGroup'
import {
  useCreateCurationTask,
  useUpdateCurationTask,
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
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  CurationTask,
  EntityType,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import {
  ASSIGNEE_TOOLTIP,
  AUTH_MODE_CHANGED_WARNING,
  AUTH_MODE_NONE_TOOLTIP,
  AUTH_MODE_SESSION_OWNER_TOOLTIP,
  AUTH_MODE_SOURCE_BENEFACTOR_TOOLTIP,
  COLLABORATORS_TOOLTIP,
  CREATE_CURATION_TASK_DIALOG_TITLE,
  EDIT_CURATION_TASK_DIALOG_TITLE,
  FILE_BASED_TASK_DESCRIPTION,
  FILE_BASED_TASK_TITLE,
  FILE_VIEW_FINDER_PROMPT,
  FILE_VIEW_FINDER_TITLE,
  GENERIC_SAVE_ERROR_MESSAGE,
  RECORD_BASED_TASK_DESCRIPTION,
  RECORD_BASED_TASK_TITLE,
  RECORD_SET_FINDER_PROMPT,
  RECORD_SET_FINDER_TITLE,
  SELECT_TASK_TYPE_DESCRIPTION,
  UNRECOGNIZED_TASK_TYPE_ERROR,
  UPLOAD_FOLDER_FINDER_PROMPT,
  UPLOAD_FOLDER_FINDER_TITLE,
} from '../utils/constants'

export type CreateOrUpdateCurationTaskDialogProps = {
  open: boolean
  onCancel: () => void
  onSuccess: (task: CurationTask) => void
  projectId: string
  task?: CurationTask
}

type TaskPropertiesConcreteType =
  | typeof FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
  | typeof RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties

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

export default function CreateOrUpdateCurationTaskDialog(
  props: CreateOrUpdateCurationTaskDialogProps,
) {
  const { open, onCancel, onSuccess, projectId, task } = props
  const isEditMode = task !== undefined

  // In create mode: track which step we're on (1 = type selection, 2 = type-specific fields, 3 = common mutable fields)
  const [step, setStep] = useState<CreateOrUpdateCurationTaskDialogStep>(() =>
    task ? 'COMMON_MUTABLE_FIELDS' : 'SELECT_TYPE',
  )

  // Derive initial concrete type from the existing task (null in create mode
  // until the user picks a type in step 1)
  const [selectedConcreteType, setSelectedConcreteType] =
    useState<TaskPropertiesConcreteType | null>(() => {
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

  const initialAuthMode = toAuthorizationModeOption(
    task?.taskProperties?.suggestedAuthorizationMode,
  )
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
    const ids = task?.taskProperties?.collaboratorPrincipalIds
    return ids ?? []
  })
  const [pendingCollaboratorId, setPendingCollaboratorId] = useState<
    string | null
  >(null)

  const {
    mutate: createTask,
    isPending: isCreatePending,
    error: createError,
  } = useCreateCurationTask({
    onSuccess: created => {
      onSuccess(created)
    },
  })

  const {
    mutate: updateTask,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateCurationTask({
    onSuccess: updated => {
      onSuccess(updated)
    },
  })

  const isPending = isCreatePending || isUpdatePending
  const error = createError ?? updateError

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

  function handleSave() {
    const payload = buildTaskPayload()
    if (isEditMode) {
      updateTask(payload)
    } else {
      createTask(payload)
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
              <Typography variant="body1">None (Legacy)</Typography>
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
              <Typography variant="body1">Session Owner</Typography>
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
              <Typography variant="body1">Source Benefactor</Typography>
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
        description="Specify the task name so that contributors know which task they should work on."
      />
      <TextField
        label="Instructions"
        fullWidth
        multiline
        minRows={3}
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        description="(Optional) Provide instructions on how to complete the task."
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
        description="Select the Synapse folder where files will be uploaded for this task."
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
        description="Select the Synapse file view that includes all files that should have curated metadata. If this task is used in Curator, this file view will determine which files are included."
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
      description="Select the Synapse record set that should be used for this task."
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
            onClick={handleSave}
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
    <DialogBase
      open={open}
      title={title}
      maxWidth="md"
      fullWidth
      onCancel={onCancel}
      content={dialogContent}
      actions={
        <Stack direction="row" gap={1} justifyContent="flex-end" width="100%">
          {dialogActions}
        </Stack>
      }
    />
  )
}
