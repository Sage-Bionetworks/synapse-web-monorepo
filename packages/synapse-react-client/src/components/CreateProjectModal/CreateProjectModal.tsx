import SynapseClient from '@/synapse-client'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Alert, Stack } from '@mui/material'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { KeyboardEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
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

  const { data: realmPrincipals } = useGetRealmPrincipals()
  const publicGroupId = realmPrincipals?.publicGroup
  const authenticatedUsersId = realmPrincipals?.authenticatedUsers

  const applyVisibilityAcl = async (projectId: string): Promise<void> => {
    if (visibility === 'PRIVATE') {
      return
    }
    try {
      const currentAcl = await SynapseClient.getEntityACL(
        projectId,
        accessToken,
      )

      const upsertAccessTypes = (
        entries: typeof currentAcl.resourceAccess,
        principalId: number,
        accessTypes: ACCESS_TYPE[],
      ): typeof currentAcl.resourceAccess => {
        const existing = entries.find(e => e.principalId === principalId)
        if (existing) {
          return entries.map(e =>
            e.principalId === principalId
              ? {
                  ...e,
                  accessType: [...new Set([...e.accessType, ...accessTypes])],
                }
              : e,
          )
        }
        return [...entries, { principalId, accessType: accessTypes }]
      }

      let newResourceAccess = [...currentAcl.resourceAccess]

      if (visibility === 'DISCOVERABLE') {
        if (publicGroupId) {
          newResourceAccess = upsertAccessTypes(
            newResourceAccess,
            Number(publicGroupId),
            [ACCESS_TYPE.READ],
          )
        }
        if (authenticatedUsersId) {
          newResourceAccess = upsertAccessTypes(
            newResourceAccess,
            Number(authenticatedUsersId),
            [ACCESS_TYPE.READ],
          )
        }
      } else if (visibility === 'PUBLIC') {
        if (publicGroupId) {
          newResourceAccess = upsertAccessTypes(
            newResourceAccess,
            Number(publicGroupId),
            [ACCESS_TYPE.READ],
          )
        }
        if (authenticatedUsersId) {
          newResourceAccess = upsertAccessTypes(
            newResourceAccess,
            Number(authenticatedUsersId),
            [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
          )
        }
      }

      await SynapseClient.updateEntityACL(
        { ...currentAcl, resourceAccess: newResourceAccess },
        accessToken,
      )
    } catch (e) {
      const err = e as SynapseClientError
      throw new Error(
        `Project was created, but visibility could not be set: ${
          err.reason ?? err.message
        }`,
      )
    }
  }

  const createProjectMutation = useMutation({
    mutationFn: async () => {
      const newProject = await SynapseClient.createProject(
        projectName,
        description,
        accessToken,
      )
      await applyVisibilityAcl(newProject.id!)
      return newProject
    },
    onSuccess: newProject => {
      setIsShowingSuccessAlert(true)
      hide()
      const href = `/Synapse:${newProject.id}`
      if (gotoPlace) {
        gotoPlace(href)
      } else {
        window.location.href = href
      }
    },
  })

  const hide = () => {
    setProjectName('')
    setDescription('')
    setVisibility('DISCOVERABLE')
    createProjectMutation.reset()
    onClose()
  }

  const errorMessage = createProjectMutation.error
    ? (createProjectMutation.error as SynapseClientError).reason ??
      createProjectMutation.error.message
    : undefined

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
                createProjectMutation.mutate()
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
      <Alert severity="warning">
        You can update project visibility at any time in Project Tools, or
        manage access at a more granular level for individual files and folders.
      </Alert>
    </Stack>
  )

  return (
    <>
      <ConfirmationDialog
        open={isShowingModal}
        title="Create a new Project"
        content={dialogContent}
        confirmButtonProps={{
          children: 'Save',
          disabled: createProjectMutation.isPending,
          loading: createProjectMutation.isPending,
        }}
        onConfirm={() => {
          createProjectMutation.mutate()
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
