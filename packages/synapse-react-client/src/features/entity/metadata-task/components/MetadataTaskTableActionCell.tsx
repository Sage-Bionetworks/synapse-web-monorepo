import { StickyNote2Outlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'

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
  const { taskBundle } = props
  const curationTask = taskBundle.task!

  const { hasPermission, noPermissionMessage, isLoading, isPending, onClick } =
    useOpenCuratorFromTaskButton(curationTask)

  const disableButton = isPending || isLoading || !hasPermission
  const tooltipTitle = hasPermission
    ? 'Open Curator to edit metadata'
    : noPermissionMessage!

  return (
    <>
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
    </>
  )
}
