import { Button, Stack, Typography } from '@mui/material'
import {
  BACK_TO_ALL_TASKS_LABEL,
  CREATE_TASK_CONFIRMATION_DESCRIPTION,
  CREATE_TASK_CONFIRMATION_TITLE,
} from '../utils/constants'

export type CreateTaskConfirmationProps = {
  taskId: number
  onDone: () => void
}

/**
 * Step 3 of the create-task flow: a simple confirmation shown after the task has been created (the task
 * is created on the step-2-to-step-3 transition, so by the time this renders it already exists).
 *
 * TODO: Link directly to the new task in the task list once it can be filtered by task ID
 * (see `ListCurationTaskRequest.taskIds`).
 */
export default function CreateTaskConfirmation(
  props: CreateTaskConfirmationProps,
) {
  const { taskId, onDone } = props

  return (
    <Stack gap={3} alignItems="flex-start">
      <Typography variant="headline3" component="h3">
        {CREATE_TASK_CONFIRMATION_TITLE}
      </Typography>
      <Typography variant="body1">
        {CREATE_TASK_CONFIRMATION_DESCRIPTION}
      </Typography>
      <Typography variant="body1">Task ID: {taskId}</Typography>
      <Button variant="contained" onClick={onDone}>
        {BACK_TO_ALL_TASKS_LABEL}
      </Button>
    </Stack>
  )
}
