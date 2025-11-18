import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { MouseEvent, useEffect, useState } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import IconSvg from '../IconSvg/IconSvg'
import WarningDialog from '../SynapseForm/WarningDialog'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'

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
export function EvaluationEditor({
  evaluationId,
  entityId,
  onDeleteSuccess,
  onSaveSuccess,
}: EvaluationEditorProps) {
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
    <div className="evaluation-editor">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{evaluation.id ? 'Edit' : 'Create'} Evaluation Queue</h4>
        <EvaluationEditorDropdown onClick={onSave} onDelete={onDelete} />
      </Box>
      <Stack
        sx={{
          gap: 2,
        }}
      >
        <TextField
          label={'Name'}
          fullWidth
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          label={'Description'}
          fullWidth
          multiline
          value={description}
          rows={2}
          onChange={event => setDescription(event.target.value)}
        />
        <TextField
          fullWidth
          label={'Submission Instructions'}
          value={submissionInstructionsMessage}
          multiline
          rows={2}
          onChange={event =>
            setSubmissionInstructionsMessage(event.target.value)
          }
        />
        <TextField
          label={'Submission Receipt Message'}
          fullWidth
          value={submissionReceiptMessage}
          onChange={event => setSubmissionReceiptMessage(event.target.value)}
        />
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
        <Box sx={{ mb: 3, alignSelf: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            className="save-button"
            onClick={onSave}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </div>
  )
}

type EvaluationEditorDropdownProps = {
  onClick: () => void
  onDelete?: () => void
}

function EvaluationEditorDropdown({
  onClick,
  onDelete,
}: EvaluationEditorDropdownProps) {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const isContextMenuOpen = Boolean(menuAnchorEl)
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }

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

      <IconButton onClick={handleMenuClick}>
        <IconSvg icon="verticalEllipsis" wrap={false} />
      </IconButton>
      <Menu
        anchorEl={menuAnchorEl}
        open={isContextMenuOpen}
        onClose={handleMenuClose}
        slotProps={{ paper: { sx: { minWidth: '120px' } } }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose()
            onClick()
          }}
        >
          Save
        </MenuItem>
        {onDelete && <Divider />}
        {onDelete && (
          <MenuItem
            onClick={() => {
              handleMenuClose()
              setDeleteWarningShow(true)
            }}
          >
            Delete
          </MenuItem>
        )}
      </Menu>
    </>
  )
}
