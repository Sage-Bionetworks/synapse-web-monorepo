import { Alert, AlertTitle, Box, SxProps } from '@mui/material'
import pluralize from 'pluralize'

export type StepWithIssues = { title: string; issueCount: number }

export type AnswersNeedAttentionAlertProps = {
  /** The steps holding answers that need attention, in order */
  steps: StepWithIssues[]
  /**
   * Whether the form changed while the requester was filling it out, so the answers were found to need attention as
   * they tried to finish, rather than when they opened the request.
   */
  formChangedDuringSession: boolean
  sx?: SxProps
}

/** Tells the requester that the form changed, and which of their answers no longer fit it. */
export function AnswersNeedAttentionAlert(
  props: AnswersNeedAttentionAlertProps,
) {
  const { steps, formChangedDuringSession, sx } = props
  return (
    <Alert severity="warning" sx={sx}>
      <AlertTitle>
        {formChangedDuringSession
          ? 'This form was updated while you were filling it out.'
          : 'This form was updated since you last worked on this request.'}
      </AlertTitle>
      {formChangedDuringSession
        ? 'Your answers are saved. Review the answers that need your attention before you continue:'
        : 'Some of your previous answers no longer fit and need your attention:'}
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
