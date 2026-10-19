import {
  Alert,
  Link as MuiLink,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import {
  DAR_MESSAGE_VOCABULARY_CODE,
  useGetAridhiaVocabularyTerm,
} from '@/aridhia-queries/useGetAridhiaVocabularyTerm'
import MarkdownSynapse from '@/components/Markdown/MarkdownSynapse'
import { RDCA_DAP_URL } from '@/components/Aridhia/rdcaDapConstants'

export type DarSubmittedPanelProps = {
  requestCode: string
  status?: string
}

/**
 * Confirmation panel shown after a successful `POST /fair/requests/`. The guidance beneath the
 * request code (review timeline, DUA step, where to check status) is maintained by C-Path as
 * a FAIR vocabulary term, so it is fetched rather than bundled with the portal.
 */
export function DarSubmittedPanel(props: DarSubmittedPanelProps) {
  const { requestCode, status } = props
  const {
    data: messageTerm,
    isLoading,
    isError,
  } = useGetAridhiaVocabularyTerm(DAR_MESSAGE_VOCABULARY_CODE)

  return (
    <Stack spacing={2}>
      <Alert severity="success">Your data access request was submitted.</Alert>
      <Typography>
        Request code: <strong>{requestCode}</strong>
        {status && <> &mdash; status: {status}</>}
      </Typography>
      {isLoading && <Skeleton variant="rounded" height={160} />}
      {messageTerm && <MarkdownSynapse markdown={messageTerm.value} />}
      {isError && (
        <Alert severity="warning">
          We could not load the details about what happens next. You can check
          the status of your request at any time by logging in to{' '}
          <MuiLink
            href={RDCA_DAP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            RDCA-DAP
          </MuiLink>{' '}
          and clicking Access &gt; My Requests.
        </Alert>
      )}
    </Stack>
  )
}
