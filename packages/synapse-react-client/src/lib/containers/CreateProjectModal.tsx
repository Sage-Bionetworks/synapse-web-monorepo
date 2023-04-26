import { Alert } from '@mui/material'
import React, { useState } from 'react'
import { SynapseClient } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'
import { ConfirmationDialog } from './ConfirmationDialog'
import FullWidthAlert from './FullWidthAlert'
import TextField from './TextField'

export type CreateProjectModalProps = {
  isShowingModal?: boolean
  onClose: () => void
}

export const CreateProjectModal: React.FunctionComponent<
  CreateProjectModalProps
> = ({ isShowingModal = false, onClose }) => {
  const { accessToken } = useSynapseContext()
  const [projectName, setProjectName] = useState<string>('')
  const [isShowingSuccessAlert, setIsShowingSuccessAlert] =
    useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const hide = () => {
    setProjectName('')
    setErrorMessage(undefined)
    onClose()
  }
  const onCreateProject = async () => {
    try {
      const newProject = await SynapseClient.createProject(
        projectName,
        accessToken,
      )
      setIsShowingSuccessAlert(true)
      hide()
      window.location.href = `/#!Synapse:${newProject.id}`
    } catch (err) {
      if (err.reason) {
        setErrorMessage(err.reason)
      } else {
        setErrorMessage(err.toString())
      }
    }
  }

  const dialogContent = (
    <>
      <TextField
        id="projectInput"
        label="Project Name"
        value={projectName}
        fullWidth
        onChange={event => {
          setProjectName(event.target.value)
        }}
        inputProps={{
          onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              if (projectName !== '') {
                onCreateProject()
              }
            }
          },
        }}
      />
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </>
  )

  return (
    <>
      <ConfirmationDialog
        open={isShowingModal}
        title="Create a new Project"
        content={dialogContent}
        confirmButtonText="Save"
        onConfirm={() => {
          void onCreateProject()
        }}
        onCancel={hide}
        maxWidth="md"
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
