import DialogBase from '@/react-ui/components/DialogBase'
import { displayToast } from '@/components/ToastMessage'
import { useUpdateDataAccessSubmissionState } from '@/synapse-queries/index'
import { Alert, Button, Typography } from '@mui/material'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { useCallback } from 'react'

type ApproveSubmissionConfirmationModalProps = {
  open: boolean
  submissionId: string
  onClose: () => void
}

/**
 * Confirmation modal to approve a data access submission asa a reviewer/ACT member.
 */
export function ApproveSubmissionConfirmationModal(
  props: ApproveSubmissionConfirmationModalProps,
) {
  const { open, submissionId, onClose } = props

  const { mutate, isPending, error } = useUpdateDataAccessSubmissionState({
    onSuccess: () => {
      displayToast('Submission approved', 'success')
      onClose()
    },
  })

  const approveSubmission = useCallback(() => {
    mutate({
      submissionId: submissionId,
      newState: SubmissionState.APPROVED,
    })
  }, [submissionId, mutate])

  return (
    <DialogBase
      open={open}
      title="Approve Request?"
      onCancel={() => {
        onClose()
      }}
      content={
        <>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            Approving the request will grant access to controlled data.
          </Typography>
          <Typography variant="body1">
            In addition, the user will receive an email notification alerting
            them that the request has been granted.
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {error.message}
            </Alert>
          )}
        </>
      }
      actions={
        <>
          <Button
            variant={'outlined'}
            onClick={() => onClose()}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => approveSubmission()}
            disabled={isPending}
          >
            Approve Request
          </Button>
        </>
      }
    />
  )
}
