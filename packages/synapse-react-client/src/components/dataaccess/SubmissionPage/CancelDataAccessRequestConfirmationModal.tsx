import DialogBase from '@/react-ui/components/DialogBase'
import { displayToast } from '@/components/ToastMessage'
import { useCancelDataAccessRequest } from '@/synapse-queries/index'
import { Alert, Button, Typography } from '@mui/material'
import noop from 'lodash-es/noop'
import { useCallback } from 'react'

export type CancelDataAccessRequestConfirmationModalProps = {
  open: boolean
  submissionId: string
  accessRequirementId: string
  onClose?: () => void
}

/**
 * Confirmation modal that allows a requestor to cancel a submitted data access request.
 */
export function CancelDataAccessRequestConfirmationModal(
  props: CancelDataAccessRequestConfirmationModalProps,
) {
  const { open, onClose = noop, submissionId, accessRequirementId } = props
  const {
    mutate: cancelRequest,
    isPending: cancelRequestIsPending,
    error: cancelRequestError,
  } = useCancelDataAccessRequest({
    onSuccess: () => {
      displayToast('Access request cancelled', 'success')
      onClose()
    },
  })
  const onCancelRequest = useCallback(() => {
    cancelRequest({
      submissionId: submissionId,
      accessRequirementId: accessRequirementId,
    })
  }, [accessRequirementId, cancelRequest, submissionId])

  return (
    <DialogBase
      title={'Cancel Access Request?'}
      onCancel={() => {
        onClose()
      }}
      open={open}
      content={
        <>
          <Typography variant="body1">
            Are you sure you want to cancel your request for access? If you want
            to make changes to the information included in your request, you can
            modify and resubmit your request after cancelling it.
          </Typography>
          {cancelRequestError && (
            <Alert severity={'error'} sx={{ mt: 2 }}>
              <Typography variant="body1">
                {cancelRequestError.reason}
              </Typography>
            </Alert>
          )}
        </>
      }
      actions={
        <>
          <Button
            variant={'outlined'}
            onClick={() => onClose()}
            disabled={cancelRequestIsPending}
          >
            Back
          </Button>
          <Button
            variant={'contained'}
            color="error"
            onClick={() => onCancelRequest()}
            disabled={cancelRequestIsPending}
          >
            Cancel Request
          </Button>
        </>
      }
    />
  )
}
