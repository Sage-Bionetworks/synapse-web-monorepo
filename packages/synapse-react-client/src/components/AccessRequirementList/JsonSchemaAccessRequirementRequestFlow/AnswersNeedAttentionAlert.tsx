import { Alert, AlertTitle, Box, SxProps } from '@mui/material'
import pluralize from 'pluralize'

export type StepWithIssues = { title: string; issueCount: number }

/** When the answers were found to need attention */
export type AnswerIssuesReason =
  /** As the requester opened a request saved with an earlier form */
  | 'resumed'
  /** As the requester finished the request, which a newer form replaced */
  | 'formChanged'
  /** As the requester finished the request, by the checks the server runs on submit */
  | 'beforeSubmit'

const COPY: Record<AnswerIssuesReason, { title: string; body: string }> = {
  resumed: {
    title: 'This form was updated since you last worked on this request.',
    body: 'Some of your previous answers no longer fit and need your attention:',
  },
  formChanged: {
    title: 'This form was updated while you were filling it out.',
    body: 'Your answers are saved. Review the answers that need your attention before you continue:',
  },
  beforeSubmit: {
    title: 'Some of your answers need your attention.',
    body: 'Review these answers before you continue:',
  },
}

export type AnswersNeedAttentionAlertProps = {
  /** The steps holding answers that need attention, in order */
  steps: StepWithIssues[]
  reason: AnswerIssuesReason
  sx?: SxProps
}

/** Tells the requester which of their answers no longer fit the form, and on which steps. */
export function AnswersNeedAttentionAlert(
  props: AnswersNeedAttentionAlertProps,
) {
  const { steps, reason, sx } = props
  const { title, body } = COPY[reason]
  return (
    <Alert severity="warning" sx={sx}>
      <AlertTitle>{title}</AlertTitle>
      {body}
      <Box component="ul" sx={{ my: 0.5, pl: 2.5 }}>
        {steps.map(step => (
          <li key={step.title}>
            <strong>{step.title}</strong>:{' '}
            {pluralize('answer', step.issueCount, true)}
          </li>
        ))}
      </Box>
    </Alert>
  )
}
