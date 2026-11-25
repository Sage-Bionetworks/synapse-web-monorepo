import { Alert, AlertTitle, SxProps } from '@mui/material'

export type AnswersNeedReviewAlertProps = {
  title: string
  /** Whether the step offers Back, which returns the requester to their answers */
  canGoBack: boolean
  /** Shown after the instructions */
  note?: string
  sx?: SxProps
}

/**
 * Tells a requester at a step after the request wizard that the current form no longer accepts their answers, so the
 * request cannot be submitted until they review them.
 */
export function AnswersNeedReviewAlert(props: AnswersNeedReviewAlertProps) {
  const { title, canGoBack, note, sx } = props
  return (
    <Alert severity="warning" sx={sx}>
      <AlertTitle>{title}</AlertTitle>
      Some of your answers no longer fit.{' '}
      {canGoBack ? (
        <>
          Press <strong>Back</strong> to review them before you submit.
        </>
      ) : (
        'Review them from your data access request before you submit.'
      )}
      {note && ` ${note}`}
    </Alert>
  )
}
