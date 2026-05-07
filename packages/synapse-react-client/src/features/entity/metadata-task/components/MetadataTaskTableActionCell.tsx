import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { displayToast } from '@/index'
import { useDeleteCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { DeleteTwoTone, StickyNote2Outlined } from '@mui/icons-material'
import {
  Alert,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'
import {
  OPEN_CURATOR_TOOLTIP_TITLE,
  OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE,
} from '../utils/constants'

export const NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE = 'Task is Unassigned'

/**
 * Handles rendering the 'Actions' cell in the Metadata Task table, which provides buttons for the user
 * to accomplish the actions they can take on a Metadata Task, such as opening a data grid for the entity referenced
 * by the task.
 */
export default function MetadataTaskTableActionCell(props: {
  taskBundle: TaskBundle
  canEdit: boolean
}) {
  const { taskBundle, canEdit } = props
  const curationTask = taskBundle.task!
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const { hasPermission, isLoading, isPending, onClick } =
    useOpenCuratorFromTaskButton(curationTask)

  const { mutate: deleteCurationTask, isPending: deleteTaskIsPending } =
    useDeleteCurationTask({
      onSuccess: () => {
        displayToast('Task deleted successfully', 'success')
        setShowDeleteConfirmation(false)
      },
      onError: error => {
        displayToast('Error deleting task: ' + error.message, 'danger')
      },
    })

  const disableButton = isPending || isLoading || !hasPermission
  let tooltipTitle: string | undefined = undefined
  if (hasPermission === true) {
    tooltipTitle = OPEN_CURATOR_TOOLTIP_TITLE
  } else if (hasPermission === false) {
    tooltipTitle = OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE
  }

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Tooltip title={tooltipTitle}>
          <span>
            <Button
              size={'small'}
              startIcon={<StickyNote2Outlined />}
              loading={isPending}
              disabled={disableButton}
              onClick={onClick}
            >
              Open Curator
            </Button>
          </span>
        </Tooltip>
        {canEdit && (
          <IconButton
            aria-label="Delete task"
            size="small"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <DeleteTwoTone fontSize="inherit" />
          </IconButton>
        )}
      </Stack>
      <ConfirmationDialog
        title="Delete Task"
        open={showDeleteConfirmation}
        content={
          <Stack gap={2}>
            <Typography variant="body1">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </Typography>
            {taskBundle.status?.executionDetails?.activeSessionId && (
              <Alert severity="warning">
                This task has an active Curator session. Deleting this task will
                also delete the associated grid session and any unsaved changes
                will be lost.
              </Alert>
            )}
            {!taskBundle.status?.executionDetails?.activeSessionId && (
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
          loading: deleteTaskIsPending,
        }}
        onConfirm={() => deleteCurationTask(curationTask.taskId!)}
        onCancel={() => setShowDeleteConfirmation(false)}
      />
    </>
  )
}
