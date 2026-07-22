import { StickyNote2Outlined } from '@mui/icons-material'
import { Box, Button, Tooltip } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useNavigate } from 'react-router'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'
import {
  OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE,
  OPEN_CURATOR_TOOLTIP_TITLE,
} from '../utils/constants'

/**
 * Handles rendering the 'Actions' cell in the Metadata Task table, which provides buttons for the user
 * to accomplish the actions they can take on a Metadata Task, such as opening a data grid for the entity referenced
 * by the task.
 */
export default function MetadataTaskTableActionCell(props: {
  taskBundle: TaskBundle
  canEdit: boolean
}) {
  const { canEdit, taskBundle } = props
  const navigate = useNavigate()

  const { hasPermission, isLoading, isPending, onClick } =
    useOpenCuratorFromTaskButton(taskBundle)

  const disableButton = isPending || isLoading || !hasPermission
  let tooltipTitle: string | undefined = undefined
  if (hasPermission === true) {
    tooltipTitle = OPEN_CURATOR_TOOLTIP_TITLE
  } else if (hasPermission === false) {
    tooltipTitle = OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      {canEdit && (
        <Button
          variant="outlined"
          onClick={() => void navigate(`edit/${taskBundle.task!.taskId}`)}
          size={'small'}
        >
          Edit
        </Button>
      )}
      <Tooltip title={tooltipTitle}>
        <span>
          <Button
            variant="contained"
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
    </Box>
  )
}
