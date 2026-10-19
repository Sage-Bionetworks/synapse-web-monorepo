import { Link } from '@mui/material'

export const SIGNATURE_QUOTA_EXHAUSTED_TITLE =
  "Sorry, you've used all of your electronic signature requests."

/** The ACT service desk form for requesting a signature quota reset. */
export const ACT_QUOTA_RESET_REQUEST_URL =
  'https://sagebionetworks.jira.com/servicedesk/customer/portal/8/group/15/create/491'

/**
 * Explains an exhausted eDUC signature quota and points at the form that can reset it. Shown both
 * as the tooltip on the disabled send action and as the body of the send error alert.
 */
export function SignatureQuotaExhaustedMessage(props: {
  /** Total routings allowed, when the quota request resolved. */
  quota: number | undefined
}) {
  const { quota } = props
  return (
    <>
      You have used {quota != null ? `all ${quota} of` : 'all of'} your
      electronic signature routings for this request. To request a quota reset,
      submit a request to the{' '}
      <Link
        href={ACT_QUOTA_RESET_REQUEST_URL}
        target={'_blank'}
        rel={'noopener'}
      >
        Synapse Access and Compliance Team
      </Link>
      .
    </>
  )
}
