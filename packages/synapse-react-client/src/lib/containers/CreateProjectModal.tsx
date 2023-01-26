import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import { SynapseClient } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'
import FullWidthAlert from './FullWidthAlert'
import { Form } from 'react-bootstrap'

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
  return (
    <>
      <Modal
        className="CreateProjectModal bootstrap-4-backport"
        show={isShowingModal}
        animation={false}
        onHide={hide}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor={'projectInput'}>Project Name</Form.Label>
            <Form.Control
              id="projectInput"
              data-testid="projectInput"
              value={projectName}
              onChange={event => {
                setProjectName(event.target.value)
              }}
              onKeyDown={(event: any) => {
                if (event.key === 'Enter') {
                  if (projectName !== '') {
                    onCreateProject()
                  }
                }
              }}
            />
          </Form.Group>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <div className="ButtonContainer">
            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onCreateProject}>
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
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
