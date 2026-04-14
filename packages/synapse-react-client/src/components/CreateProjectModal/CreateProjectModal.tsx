import SynapseClient from '@/synapse-client'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Alert, Stack } from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { KeyboardEvent, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import TextField from '../TextField/TextField'
import {
  ProjectVisibility,
  ProjectVisibilityRadioGroup,
} from './ProjectVisibilityRadioGroup'

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

  const applyVisibilityAcl = async (projectId: string): Promise<boolean> => {
    if (visibility === 'PRIVATE') {
      return true
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
      return true
    } catch (e) {
      const err = e as SynapseClientError
      setAclErrorMessage(
        `Project was created, but visibility could not be set: ${
          err.reason ?? err.message
        }`,
      )
      return false
    }
  }

  const onCreateProject = async () => {
    try {
      const newProject = await SynapseClient.createProject(
        projectName,
        description,
        accessToken,
      )
      const aclSuccess = await applyVisibilityAcl(newProject.id!)
      if (!aclSuccess) {
        return
      }
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
      <ProjectVisibilityRadioGroup
        value={visibility}
        onChange={setVisibility}
      />
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
