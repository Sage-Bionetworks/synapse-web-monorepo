import { DialogBase } from '@/components/DialogBase'
import { EntityFinderModal } from '@/components/EntityFinder/EntityFinderModal'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import WizardChoiceButton from '@/components/WizardChoiceButton/WizardChoiceButton'
import WizardChoiceButtonGroup from '@/components/WizardChoiceButton/WizardChoiceButtonGroup'
import {
  useCreateCurationTask,
  useUpdateCurationTask,
} from '@/synapse-queries/curation/task/useCurationTask'
import Close from '@mui/icons-material/Close'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
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
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import {
  CurationTask,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import { HelpTwoTone } from '@mui/icons-material'

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

function EntityIdTextField(props: {
  label: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  finderTitle: string
  finderPromptCopy: string
}) {
  const { label, value, onChange, disabled, finderTitle, finderPromptCopy } =
    props
  const [showEntityFinder, setShowEntityFinder] = useState(false)
  return (
    <>
      <EntityFinderModal
        configuration={{
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectMultiple: false,
          treeOnly: false,
          versionSelection: VersionSelectionType.DISALLOWED,
        }}
        show={showEntityFinder}
        onCancel={() => setShowEntityFinder(false)}
        title={finderTitle}
        promptCopy={finderPromptCopy}
        onConfirm={selected => {
          onChange(selected[0].targetId)
          setShowEntityFinder(false)
        }}
        confirmButtonCopy="Select"
      />
      <TextField
        label={label}
        type="text"
        fullWidth
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        slotProps={{
          input: {
            endAdornment: !disabled && (
              <IconButton onClick={() => setShowEntityFinder(true)}>
                <SearchOutlined />
              </IconButton>
            ),
          },
        }}
      />
    </>
  )
}

type CreateOrUpdateCurationTaskDialogStep = 'SELECT_TYPE' | 'FIELD_ENTRY'

export default function CreateOrUpdateCurationTaskDialog(
  props: CreateOrUpdateCurationTaskDialogProps,
) {
  const { open, onCancel, onSuccess, projectId, task } = props
  const isEditMode = task !== undefined

  // In create mode: track which step we're on (1 = type selection, 2 = fields)
  const [step, setStep] =
    useState<CreateOrUpdateCurationTaskDialogStep>('SELECT_TYPE')

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
      ? tp.uploadFolderId ?? ''
      : ''
  })
  const [fileViewId, setFileViewId] = useState(() => {
    const tp = task?.taskProperties
    return tp?.concreteType === FILE_BASED_CONCRETE_TYPE
      ? tp.fileViewId ?? ''
      : ''
  })

  // RecordBasedMetadataTaskProperties fields
  const [recordSetId, setRecordSetId] = useState(() => {
    const tp = task?.taskProperties
    return tp?.concreteType === RECORD_BASED_CONCRETE_TYPE
      ? tp.recordSetId ?? ''
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
              <Tooltip title="Sessions are not linked to this task — each user starts their own independent grid session. Without coordination, users may overwrite each other's annotations. Use this only to maintain existing tasks that predate session management, or if your workflow does not require collaboration.">
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
              <Tooltip title="The grid session is owned by the task assignee (or assignee team). Only the assignee or their team members can join, and the session includes only rows that the assignee has edit access to. Best suited for File Views that span entities with varied access permissions.">
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
              <Tooltip title="The grid session is accessible to any user with edit access to all benefactors of the source entities. The session includes all rows that the creating user has edit access to. Best suited for tasks that manage metadata across many entities with consistent permissions, such as a project-level File View.">
                <HelpTwoTone sx={{ color: 'grey.700' }} />
              </Tooltip>
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  )

  // ── Form fields (used in both step 2 create and edit mode) ──────────────
  const commonFields = (
    <Stack gap={2}>
      <TextField
        label="Task Name"
        fullWidth
        value={dataType}
        onChange={e => setDataType(e.target.value)}
      />
      <TextField
        label="Instructions"
        fullWidth
        multiline
        minRows={3}
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
      />
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <InputLabel>Assignee</InputLabel>
          <Tooltip title="The user or team assigned to this task. If using 'Session Owner' authorization mode, the assignee is the default owner of the grid session. For team assignees in 'Session Owner' mode, any team member can access the session.">
            <div>
              <HelpTwoTone sx={{ color: 'grey.700' }} />
            </div>
          </Tooltip>
        </Box>
        <UserSearchBox
          key={open.toString()}
          defaultValue={assigneePrincipalId}
          onChange={id => setAssigneePrincipalId(id ?? undefined)}
          typeFilter={TYPE_FILTER.ALL}
        />
      </Box>
      {/* TODO: Display the below 'collaborators' once multiple owners are supported */}
      <Box display="none">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <InputLabel>Collaborators</InputLabel>
          <Tooltip title='Collaborators can contribute to the grid session alongside the assignee. For "Session Owner" authorization mode, collaborators are added as additional owners of the session.'>
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
        onChange={setUploadFolderId}
        disabled={isEditMode}
        finderTitle="Select Upload Folder"
        finderPromptCopy="Select the folder where data files will be uploaded."
      />
      <EntityIdTextField
        label="File View ID"
        value={fileViewId}
        onChange={setFileViewId}
        disabled={isEditMode}
        finderTitle="Select File View"
        finderPromptCopy="Select the FileView used to create grid sessions for this task."
      />
    </Stack>
  )

  const recordBasedFields = (
    <EntityIdTextField
      label="Record Set ID"
      value={recordSetId}
      onChange={setRecordSetId}
      disabled={isEditMode}
      finderTitle="Select Record Set"
      finderPromptCopy="Select the RecordSet used to start grid sessions for this task."
    />
  )

  // ── Step 1: Type selection ───────────────────────────────────────────────
  const step1Content = (
    <Stack gap={2}>
      <Typography variant="body1">
        Choose the type of data this curation task will manage. This cannot be
        changed after the task is created.
      </Typography>
      <WizardChoiceButtonGroup>
        <WizardChoiceButton
          title="File-Based Metadata"
          description="Contributors upload files to a designated folder. A FileView provides a grid session for curating metadata across those files."
          onClick={() => {
            setSelectedConcreteType(FILE_BASED_CONCRETE_TYPE)
            setStep('FIELD_ENTRY')
          }}
        />
        <WizardChoiceButton
          title="Record-Based Metadata"
          description="Contributors work directly with a RecordSet (CSV) to curate structured record-based metadata."
          onClick={() => {
            setSelectedConcreteType(RECORD_BASED_CONCRETE_TYPE)
            setStep('FIELD_ENTRY')
          }}
        />
      </WizardChoiceButtonGroup>
    </Stack>
  )

  // ── Step 2 / edit form content ───────────────────────────────────────────
  const formContent = (
    <Stack gap={3}>
      {/* Two-column responsive layout: left = entity + common fields, right = auth mode */}
      <Grid container spacing={3} alignItems="flex-start">
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={2}>{commonFields}</Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={2}>
            {selectedConcreteType === FILE_BASED_CONCRETE_TYPE &&
              fileBasedFields}
            {selectedConcreteType === RECORD_BASED_CONCRETE_TYPE &&
              recordBasedFields}
            {authModeField}
          </Stack>
        </Grid>
      </Grid>

      {isEditMode && selectedConcreteType === null && (
        <Alert severity="error">
          This task has an unrecognized task type and cannot be edited here.
        </Alert>
      )}
      {authModeChanged && (
        <Alert severity="warning">
          Changing the Authorization Mode will clear the active session ID on
          this task. Any in-progress grid session linked to this task will no
          longer be associated with it.
        </Alert>
      )}
      {error && (
        <Alert severity="error">
          {error.reason ?? 'An error occurred. Please try again.'}
        </Alert>
      )}
    </Stack>
  )

  const isStep1 = !isEditMode && step === 'SELECT_TYPE'

  const title = isEditMode ? 'Edit Curation Task' : 'Create Curation Task'

  const dialogContent = isStep1 ? step1Content : formContent

  const dialogActions = isStep1 ? undefined : (
    <Stack direction="row" gap={1} justifyContent="flex-end" width="100%">
      {!isEditMode && (
        <Button
          variant="outlined"
          onClick={() => setStep('SELECT_TYPE')}
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
    </Stack>
  )

  return (
    <DialogBase
      open={open}
      title={title}
      maxWidth="md"
      fullWidth
      onCancel={onCancel}
      content={dialogContent}
      actions={dialogActions}
    />
  )
}
