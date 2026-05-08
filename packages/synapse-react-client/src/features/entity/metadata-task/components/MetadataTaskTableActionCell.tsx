import { Button, Stack, Tooltip } from '@mui/material'
import { StickyNote2Outlined } from '@mui/icons-material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'
import {
  OPEN_CURATOR_TOOLTIP_TITLE,
  OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE,
} from '../utils/constants'
import DeleteCurationTaskButton from './DeleteCurationTaskButton'

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

  const { hasPermission, isLoading, isPending, onClick } =
    useOpenCuratorFromTaskButton(curationTask)

  const disableButton = isPending || isLoading || !hasPermission
  let tooltipTitle: string | undefined = undefined
  if (hasPermission === true) {
    tooltipTitle = OPEN_CURATOR_TOOLTIP_TITLE
  } else if (hasPermission === false) {
    tooltipTitle = OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE
  }

  return (
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
      {canEdit && <DeleteCurationTaskButton taskBundle={taskBundle} />}
    </Stack>
  )
}
