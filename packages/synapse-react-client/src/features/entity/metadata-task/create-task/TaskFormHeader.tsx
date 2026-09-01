import { ArrowBack } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import { BACK_TO_ALL_TASKS_LABEL } from '../utils/constants'

export type TaskFormHeaderProps = {
  /**
   * Shows a "Back to All Tasks" button in the top-left, which exits the entire create/edit flow
   * back to the task list.
   */
  onExit?: () => void
  /** When present, rendered as a centered page title above the form. */
  pageTitle?: string
  /** When present, rendered as a centered subtitle below `pageTitle`. */
  pageDescription?: string
}

/**
 * The optional top-left "Back to All Tasks" button and the centered page title/description block
 * shared by every curation-task create/edit form.
 */
export default function TaskFormHeader(props: TaskFormHeaderProps) {
  const { onExit, pageTitle, pageDescription } = props
  return (
    <>
      {onExit && (
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={onExit}
          sx={{ alignSelf: 'flex-start' }}
        >
          {BACK_TO_ALL_TASKS_LABEL}
        </Button>
      )}

      {pageTitle && (
        <Stack gap={1} alignItems="center" sx={{ textAlign: 'center' }}>
          <Typography variant="headline1" component="h1">
            {pageTitle}
          </Typography>
          {pageDescription && (
            <Typography
              variant="headline3"
              component="p"
              color="text.secondary"
            >
              {pageDescription}
            </Typography>
          )}
        </Stack>
      )}
    </>
  )
}
