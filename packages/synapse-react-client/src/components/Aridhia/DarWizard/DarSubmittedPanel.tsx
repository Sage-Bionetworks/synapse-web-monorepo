import { Alert, Link as MuiLink, Stack, Typography } from '@mui/material'

const RDCA_DAP_URL = 'https://portal.rdca.c-path.org/'
const C_PATH_ADMIN_EMAIL = 'vtheurercrider@c-path.org'

export type DarSubmittedPanelProps = {
  requestCode: string
  status?: string
}

/**
 * Confirmation panel shown after a successful `POST /fair/requests/`. Mirrors the guidance
 * RDCA-DAP's own post-submission screen gives — timeline, the DUA step, and where to check
 * status — since this wizard has no equivalent "My Requests" view of its own.
 */
export function DarSubmittedPanel(props: DarSubmittedPanelProps) {
  const { requestCode, status } = props
  return (
    <Stack spacing={2}>
      <Alert severity="success">Your data access request was submitted.</Alert>
      <Typography>
        Request code: <strong>{requestCode}</strong>
        {status && <> &mdash; status: {status}</>}
      </Typography>
      <Typography>
        Thank you for your request. The information you&apos;ve provided will be
        shared with the appropriate reviewing committee. The review process is
        usually completed within 2-3 business weeks.
      </Typography>
      <Typography>
        If approved, the signatory listed in your submission will receive a
        required Data Use Agreement (DUA) for review and execution. You will be
        notified via email when the DUA has been signed and the remaining
        processing is complete, or you can check the status of your request at
        any time by logging in to{' '}
        <MuiLink href={RDCA_DAP_URL} target="_blank" rel="noopener noreferrer">
          RDCA-DAP
        </MuiLink>{' '}
        and clicking Access &gt; My Requests.
      </Typography>
      <Typography>
        If you have any questions about your request, please contact
        C-Path&apos;s administrator at{' '}
        <MuiLink href={`mailto:${C_PATH_ADMIN_EMAIL}`}>
          {C_PATH_ADMIN_EMAIL}
        </MuiLink>
        .
      </Typography>
    </Stack>
  )
}
