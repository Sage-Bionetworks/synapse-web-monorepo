import SynapseClient from '@/synapse-client'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  Alert,
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { KeyboardEvent, useState } from 'react'
import IconSvg from '../IconSvg'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import TextField from '../TextField/TextField'

type ProjectVisibility = 'PRIVATE' | 'DISCOVERABLE' | 'PUBLIC' | 'OPEN'

type VisibilityOption = {
  value: ProjectVisibility
  label: string
  chipText: string
  description: string
  disabled?: boolean
}

const VISIBILITY_OPTIONS: VisibilityOption[] = [
  {
    value: 'PRIVATE',
    label: 'Private',
    chipText: 'Invisible',
    description:
      'Only you and people you invite can see this project exists. Others with the link will see an error.',
  },
  {
    value: 'DISCOVERABLE',
    label: 'Discoverable',
    chipText: 'Visible metadata',
    description:
      'Anyone can find and view this project. Data download is not allowed.',
  },
  {
    value: 'PUBLIC',
    label: 'Public',
    chipText: 'Visible metadata, registered download',
    description:
      'Anyone can find and view this project. Registered Synapse users can download data.',
  },
  {
    value: 'OPEN',
    label: 'Open',
    chipText: 'Fully visible, anonymous download',
    description:
      'Anyone can find and view this project and download its data. Currently available upon request for non-sensitive data.',
    disabled: true,
  },
]

// Placeholder icons — replace with desired icons per option
const VISIBILITY_ICONS: Record<
  ProjectVisibility,
  React.ComponentProps<typeof IconSvg>['icon']
> = {
  PRIVATE: 'privateVisibility',
  DISCOVERABLE: 'visibility',
  PUBLIC: 'publicVisibility',
  OPEN: 'openVisibility',
}

export type CreateProjectModalProps = {
  isShowingModal?: boolean
  onClose: () => void
  gotoPlace?: (href: string) => void
}

export function CreateProjectModal({
  isShowingModal = false,
  onClose,
  gotoPlace,
}: CreateProjectModalProps) {
  const { accessToken } = useSynapseContext()
  const [projectName, setProjectName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [visibility, setVisibility] =
    useState<ProjectVisibility>('DISCOVERABLE')
  const [isShowingSuccessAlert, setIsShowingSuccessAlert] =
    useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [aclErrorMessage, setAclErrorMessage] = useState<string>()

  const { data: realmPrincipals } = useGetRealmPrincipals()
  const publicGroupId = realmPrincipals?.publicGroup
  const authenticatedUsersId = realmPrincipals?.authenticatedUsers

  const hide = () => {
    setProjectName('')
    setDescription('')
    setVisibility('DISCOVERABLE')
    setErrorMessage(undefined)
    setAclErrorMessage(undefined)
    onClose()
  }

  const applyVisibilityAcl = async (projectId: string) => {
    if (visibility === 'PRIVATE') {
      return
    }
    try {
      const currentAcl = await SynapseClient.getEntityACL(
        projectId,
        accessToken,
      )

      const newResourceAccess = [...currentAcl.resourceAccess]

      if (visibility === 'DISCOVERABLE') {
        if (publicGroupId) {
          newResourceAccess.push({
            principalId: Number(publicGroupId),
            accessType: [ACCESS_TYPE.READ],
          })
        }
        if (authenticatedUsersId) {
          newResourceAccess.push({
            principalId: Number(authenticatedUsersId),
            accessType: [ACCESS_TYPE.READ],
          })
        }
      } else if (visibility === 'PUBLIC') {
        if (publicGroupId) {
          newResourceAccess.push({
            principalId: Number(publicGroupId),
            accessType: [ACCESS_TYPE.READ],
          })
        }
        if (authenticatedUsersId) {
          newResourceAccess.push({
            principalId: Number(authenticatedUsersId),
            accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
          })
        }
      }

      await SynapseClient.updateEntityACL(
        { ...currentAcl, resourceAccess: newResourceAccess },
        accessToken,
      )
    } catch (e) {
      const err = e as SynapseClientError
      setAclErrorMessage(
        `Project was created, but visibility could not be set: ${
          err.reason ?? err.message
        }`,
      )
    }
  }

  const onCreateProject = async () => {
    try {
      const newProject = await SynapseClient.createProject(
        projectName,
        description,
        accessToken,
      )
      await applyVisibilityAcl(newProject.id!)
      setIsShowingSuccessAlert(true)
      hide()
      const href = `/Synapse:${newProject.id}`
      if (gotoPlace) {
        gotoPlace(href)
      } else {
        window.location.href = href
      }
    } catch (e) {
      const err = e as SynapseClientError
      setErrorMessage(err.reason ?? err.message)
    }
  }

  const dialogContent = (
    <Stack gap={2}>
      <TextField
        id="projectInput"
        label="Project Name"
        required
        helperText="Pick a unique title for your project"
        value={projectName}
        fullWidth
        onChange={event => {
          setProjectName(event.target.value)
        }}
        inputProps={{
          onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              if (projectName !== '') {
                void onCreateProject()
              }
            }
          },
        }}
      />
      <TextField
        id="descriptionInput"
        label="Description"
        helperText="(optional)"
        placeholder="Brief description of this project"
        multiline
        minRows={3}
        value={description}
        fullWidth
        maxCharacterCount={350}
        onChange={event => {
          setDescription(event.target.value)
        }}
      />
      <FormControl component="fieldset">
        <Typography variant="smallText2" component="legend" sx={{ mb: 1 }}>
          Visibility
        </Typography>
        <RadioGroup
          value={visibility}
          onChange={(_e, val) => setVisibility(val as ProjectVisibility)}
        >
          {VISIBILITY_OPTIONS.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              sx={{
                alignItems: 'flex-start',
                mb: 1,
                opacity: option.disabled ? 0.5 : 1,
              }}
              control={<Radio sx={{ pt: '2px' }} />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <IconSvg
                    icon={VISIBILITY_ICONS[option.value]}
                    wrap={false}
                    sx={{ mt: '2px', flexShrink: 0 }}
                  />
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flexWrap: 'wrap',
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="span"
                        fontWeight="bold"
                      >
                        {option.label}
                      </Typography>
                      <Chip
                        label={option.chipText}
                        size="small"
                        sx={{
                          bgcolor: 'grey.200',
                          color: 'text.secondary',
                          height: 20,
                          fontSize: '0.7rem',
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mt: 0.25 }}
                    >
                      {option.description}
                    </Typography>
                  </Box>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {aclErrorMessage && <Alert severity="error">{aclErrorMessage}</Alert>}
      <Alert severity="warning">
        You can change visibility later in Project Tools and also at a
        granular/file level
      </Alert>
    </Stack>
  )

  return (
    <>
      <ConfirmationDialog
        open={isShowingModal}
        title="Create a new Project"
        content={dialogContent}
        confirmButtonProps={{ children: 'Save' }}
        onConfirm={() => {
          void onCreateProject()
        }}
        onCancel={hide}
        maxWidth="sm"
        dense
      />
      <FullWidthAlert
        show={isShowingSuccessAlert}
        variant="info"
        title="Project created"
        description=""
        autoCloseAfterDelayInSeconds={10}
        onClose={() => {
          setIsShowingSuccessAlert(false)
        }}
      />
    </>
  )
}
