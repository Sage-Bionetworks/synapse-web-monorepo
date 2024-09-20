import { Alert, Button } from '@mui/material'
import { Col, Dropdown, Form, Row } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ErrorBanner } from '../error/ErrorBanner'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'
import WarningDialog from '../SynapseForm/WarningDialog'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import IconSvg from '../IconSvg/IconSvg'

export type EvaluationEditorProps = {
  /** Use if UPDATING an existing Evaluation. Id of the evaluation to edit */
  readonly evaluationId?: string
  /** Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation */
  readonly entityId?: string
  /** Callback after successful deletion of the Evaluation */
  readonly onDeleteSuccess: () => void
  /** Callback after successful save of the Evaluation */
  readonly onSaveSuccess?: (evaluationId: string) => void
}

/**
 * Edits basic properties of an Evaluation
 */
export const EvaluationEditor: React.FunctionComponent<
  EvaluationEditorProps
> = ({
  evaluationId,
  entityId,
  onDeleteSuccess,
  onSaveSuccess,
}: EvaluationEditorProps) => {
  if (evaluationId && entityId) {
    throw new Error('please use either evaluationId or entityId but not both')
  }
  const { accessToken } = useSynapseContext()
  const [error, setError] = useState<SynapseClientError>()
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      setShowSaveSuccess(false)
    }
  }, [error])

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [submissionInstructionsMessage, setSubmissionInstructionsMessage] =
    useState<string>('')
  const [submissionReceiptMessage, setSubmissionReceiptMessage] =
    useState<string>('')

  const [evaluation, setEvaluation] = useState<Evaluation>({
    contentSource: entityId,
  })

  useEffect(() => {
    setName(evaluation.name ?? '')
    setDescription(evaluation.description ?? '')
    setSubmissionInstructionsMessage(
      evaluation.submissionInstructionsMessage ?? '',
    )
    setSubmissionReceiptMessage(evaluation.submissionReceiptMessage ?? '')
  }, [evaluation])

  useEffect(() => {
    // if we initially passed in a update the we retrieve a new Evaluation
    if (evaluationId) {
      //clear error
      setError(undefined)
      SynapseClient.getEvaluation(evaluationId, accessToken)
        .then(retrievedEvaluation => {
          setEvaluation(retrievedEvaluation)
        })
        .catch(error => setError(error))
    }
  }, [evaluationId, accessToken])

  const onSave = () => {
    // clear out error
    setError(undefined)
    setShowSaveSuccess(false)
    const newOrUpdatedEvaluation: Evaluation = {
      ...evaluation,
      name,
      description,
      submissionInstructionsMessage,
      submissionReceiptMessage,
    }

    const promise = newOrUpdatedEvaluation.id
      ? SynapseClient.updateEvaluation(newOrUpdatedEvaluation, accessToken)
      : SynapseClient.createEvaluation(newOrUpdatedEvaluation, accessToken)

    promise
      .then(evaluation => {
        setEvaluation(evaluation)
        setShowSaveSuccess(true)
        if (onSaveSuccess) {
          onSaveSuccess(evaluation.id!)
        }
      })
      .catch(error => setError(error))
  }

  // create delete callback if the evaluation has id
  const onDelete = evaluation?.id
    ? () => {
        setError(undefined)
        SynapseClient.deleteEvaluation(evaluation.id!, accessToken)
          .then(onDeleteSuccess)
          .catch(error => setError(error))
      }
    : undefined

  return (
    <div className="bootstrap-4-backport">
      <div className="evaluation-editor">
        <Row>
          <Col>
            <h4>{evaluation.id ? 'Edit' : 'Create'} Evaluation Queue</h4>
          </Col>
          <Col>
            <EvaluationEditorDropdown onClick={onSave} onDelete={onDelete} />
          </Col>
        </Row>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="evaluation-name">Name</Form.Label>
            <Form.Control
              id="evaluation-name"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="evaluation-description">
              Description
            </Form.Label>
            <Form.Control
              id="evaluation-description"
              as="textarea"
              value={description}
              rows={2}
              onChange={event => setDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="evaluation-submissioninstructions">
              Submission Instructions
            </Form.Label>
            <Form.Control
              as="textarea"
              id="evaluation-submissioninstructions"
              value={submissionInstructionsMessage}
              rows={2}
              onChange={event =>
                setSubmissionInstructionsMessage(event.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="evaluation-receiptmessage">
              Submission Receipt Message
            </Form.Label>
            <Form.Control
              id="evaluation-receiptmessage"
              type="text"
              value={submissionReceiptMessage}
              onChange={event =>
                setSubmissionReceiptMessage(event.target.value)
              }
            />
          </Form.Group>
          {evaluation?.createdOn && (
            <CreatedOnByUserDiv
              userId={evaluation.ownerId!}
              date={new Date(evaluation.createdOn)}
            />
          )}
          {error && <ErrorBanner error={error} />}
          {showSaveSuccess && (
            <Alert
              className="save-success-alert"
              severity="success"
              onClose={() => setShowSaveSuccess(false)}
              sx={{ marginBottom: '20px' }}
            >
              Successfully saved.
            </Alert>
          )}
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="primary"
              className="save-button"
              onClick={onSave}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

type EvaluationEditorDropdownProps = {
  onClick: () => void
  onDelete?: () => void
}

const EvaluationEditorDropdown: React.FunctionComponent<
  EvaluationEditorDropdownProps
> = ({ onClick, onDelete }) => {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

  return (
    <>
      {onDelete && (
        <WarningDialog
          title="Delete Evaluation Queue"
          content="Are you sure you want to delete this Evaluation Queue?"
          open={deleteWarningShow}
          confirmButtonText="Delete"
          onConfirm={() => {
            onDelete()
            setDeleteWarningShow(false)
          }}
          onConfirmCallbackArgs={[]}
          onCancel={() => {
            setDeleteWarningShow(false)
          }}
          confirmButtonColor="error"
        />
      )}
      <Dropdown className="float-right">
        <Dropdown.Toggle variant="link" className="dropdown-no-caret">
          <IconSvg icon="verticalEllipsis" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          <Dropdown.Item role="menuitem" onClick={onClick}>
            Save
          </Dropdown.Item>
          {onDelete && (
            <>
              <Dropdown.Divider />
              <Dropdown.Item
                role="menuitem"
                onClick={() => setDeleteWarningShow(true)}
              >
                Delete
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
