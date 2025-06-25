import { useUpdateVerificationSubmission } from '@/synapse-queries/verificationSubmission/useVerificationSubmission'
import { REJECT_VALIDATION_CANNED_RESPONSES_TABLE } from '@/utils/SynapseConstants'
import { TextField } from '@mui/material'
import { VerificationStateEnum } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import { useState } from 'react'
import { CannedRejectionDialog } from '../CannedRejectionDialog/CannedRejectionDialog'
import { displayToast } from '../ToastMessage/ToastMessage'

export const DEFAULT_MESSAGE_PREPEND =
  'Thank you for submitting your Synapse profile for validation. Before we can accept your request:'
export const DEFAULT_MESSAGE_APPEND =
  '\nIf you have questions, do not respond to this email address. Instead, reply to:\nact@sagebionetworks.org'

export const REJECTION_FORM_PROMPT_COPY =
  "You may wish to reject the user's profile validation request for a specific reason. The list below contains some common rejection reasons. You will have a chance to edit the response before submitting it, including adding any rejection reason(s) not listed here."

export type RejectProfileValidationRequestModalProps = {
  /* ID of the verificationSubmission for which a rejection should be drafted/sent */
  verificationSubmissionId: string
  /* SynID of the table which contains the email responses which should populate this modal. Defaults to syn63119445, which is in production Synapse */
  tableId?: string
  open: boolean
  onRejectionSubmittedSuccess?: () => void
  currentState: VerificationStateEnum
  onClose: () => void
}

/**
 * Modal component presented to an ACT profile validation reviewer when they decide to reject a validation request (a.k.a. a verificationSubmission).
 * The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
 * After crafting a message, the user can reject the request and send the message to the requester.
 */
export function RejectProfileValidationRequestModal(
  props: RejectProfileValidationRequestModalProps,
) {
  const {
    verificationSubmissionId: validationSubmissionId,
    tableId = REJECT_VALIDATION_CANNED_RESPONSES_TABLE,
    open,
    onRejectionSubmittedSuccess = noop,
    onClose,
    currentState,
  } = props

  const [actInternalNotes, setActInternalNotes] = useState<string>('')

  const { mutate, error } = useUpdateVerificationSubmission()

  function rejectVerificationSubmission(reason: string, notes: string) {
    let newState: VerificationStateEnum
    switch (currentState) {
      case VerificationStateEnum.SUBMITTED:
        newState = VerificationStateEnum.REJECTED
        break
      case VerificationStateEnum.APPROVED:
        newState = VerificationStateEnum.SUSPENDED
        break
      case VerificationStateEnum.REJECTED:
      case VerificationStateEnum.SUSPENDED:
        console.error(
          'Cannot reject a request where the current state is already rejected or suspended',
        )
        onClose()
        return
    }
    mutate(
      {
        id: validationSubmissionId,
        verificationState: {
          state: newState,
          reason,
          notes,
        },
      },
      {
        onSuccess: () => {
          onRejectionSubmittedSuccess()
          displayToast(
            `Submission ${
              newState === VerificationStateEnum.REJECTED
                ? 'rejected'
                : 'suspended'
            } and message sent to requester`,
            'info',
          )
          onClose()
        },
      },
    )
  }

  return (
    <CannedRejectionDialog
      open={open}
      tableId={tableId}
      onConfirm={reason =>
        rejectVerificationSubmission(reason, actInternalNotes)
      }
      onClose={onClose}
      defaultMessagePrefix={DEFAULT_MESSAGE_PREPEND}
      defaultMessageAppend={DEFAULT_MESSAGE_APPEND}
      rejectionFormPromptCopy={REJECTION_FORM_PROMPT_COPY}
      error={error}
    >
      <TextField
        label="ACT Internal Notes"
        fullWidth
        multiline
        rows={3}
        sx={{ mt: 2 }}
        value={actInternalNotes}
        onChange={event => setActInternalNotes(event.target.value)}
      />
    </CannedRejectionDialog>
  )
}

export default RejectProfileValidationRequestModal
