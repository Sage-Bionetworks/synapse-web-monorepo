import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { displayToast } from '@/index'
import { useDeleteCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { DeleteTwoTone } from '@mui/icons-material'
import { Alert, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'

export default function DeleteCurationTaskButton(props: {
  taskBundle: TaskBundle
}) {
  const { taskBundle } = props
  const curationTask = taskBundle.task!
  const [showConfirmation, setShowConfirmation] = useState(false)

  const { mutate: deleteCurationTask, isPending } = useDeleteCurationTask({
    onSuccess: () => {
      displayToast('Task deleted successfully', 'success')
      setShowConfirmation(false)
    },
    onError: error => {
      displayToast('Error deleting task: ' + error.message, 'danger')
    },
  })

  return (
    <>
      <Tooltip title="Delete this task">
        <IconButton
          aria-label="Delete task"
          size="small"
          onClick={() => setShowConfirmation(true)}
        >
          <DeleteTwoTone fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <ConfirmationDialog
        title="Delete Task"
        open={showConfirmation}
        content={
          <Stack gap={2}>
            <Typography variant="body1">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </Typography>
            {taskBundle.status?.executionDetails?.activeSessionId ? (
              <Alert severity="warning">
                This task has an active Curator session. Deleting this task will
                also delete the associated grid session and any unsaved changes
                will be lost.
              </Alert>
            ) : (
              <Alert severity="warning">
                Any grid sessions associated with this task will also be
                deleted.
              </Alert>
            )}
          </Stack>
        }
        confirmButtonProps={{
          children: 'Delete',
          color: 'error',
          loading: isPending,
        }}
        onConfirm={() => deleteCurationTask(curationTask.taskId!)}
        onCancel={() => setShowConfirmation(false)}
      />
    </>
  )
}
