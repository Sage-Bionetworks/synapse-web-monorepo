import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { useUpdateDataAccessSubmissionState } from '../../synapse-queries/dataaccess/useDataAccessSubmission'

import { REJECT_SUBMISSION_CANNED_RESPONSES_TABLE } from '../../utils/SynapseConstants'
import { CannedRejectionDialog } from '../CannedRejectionDialog/CannedRejectionDialog'
import { displayToast } from '../ToastMessage/ToastMessage'

export const DEFAULT_MESSAGE_PREPEND =
  'Thank you for submitting your data access request.\n'
export const DEFAULT_MESSAGE_APPEND =
  '\nIf you have questions, do not respond to this email address. Instead, reply to:\nact@sagebionetworks.org'

export const REJECTION_FORM_PROMPT_COPY =
  "You may wish to reject the user's data access request for a specific reason. The list below contains some common rejection reasons. You will have a chance to edit the response before submitting it, including adding any rejection reason(s) not listed here."

export type RejectDataAccessRequestModalProps = {
  /* ID of the submission for which a rejection should be drafted/sent */
  submissionId: string | number
  /* SynID of the table which contains the email responses which should populate this modal. Defaults to syn50683097, which is in production Synapse */
  tableId?: string
  open: boolean
  onClose: () => void
}

/**
 * Modal component presented to a data access submission reviewer when they decide to reject a request.
 * The modal contains a form for selecting rejection reasons and a text field for editing the rejection message.
 * After crafting a message, the user can reject the submission and send the message to the requester.
 */
export default function RejectDataAccessRequestModal(
  props: RejectDataAccessRequestModalProps,
) {
  const {
    submissionId,
    tableId = REJECT_SUBMISSION_CANNED_RESPONSES_TABLE,
    open,
    onClose,
  } = props

  const { mutate, error } = useUpdateDataAccessSubmissionState()

  function rejectSubmission(reason: string) {
    mutate(
      {
        submissionId: submissionId.toString(),
        newState: SubmissionState.REJECTED,
        rejectedReason: reason,
      },
      {
        onSuccess: () => {
          displayToast(
            'Submission rejected and message sent to requester',
            'info',
          )
          onClose()
        },
      },
    )
  }

  // If fetching/processing the table fails, gracefully fall back to just show the email template
  return (
    <CannedRejectionDialog
      open={open}
      tableId={tableId}
      onConfirm={rejectSubmission}
      onClose={onClose}
      defaultMessagePrefix={DEFAULT_MESSAGE_PREPEND}
      defaultMessageAppend={DEFAULT_MESSAGE_APPEND}
      rejectionFormPromptCopy={REJECTION_FORM_PROMPT_COPY}
      error={error}
    />
  )
}
