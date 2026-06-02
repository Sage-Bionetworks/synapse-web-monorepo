import { displayToast } from '@/components/ToastMessage'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Box, Button, Tooltip } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'
import {
  OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE,
  OPEN_CURATOR_TOOLTIP_TITLE,
} from '../utils/constants'
import CreateOrUpdateCurationTaskDialog from './CreateOrUpdateCurationTaskDialog'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'

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
  const { canEdit, taskBundle } = props

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { setIsEditing } = useGlobalIsEditingContext()

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
        <>
          <CreateOrUpdateCurationTaskDialog
            key={String(isDialogOpen)}
            projectId={taskBundle.task!.projectId!}
            open={isDialogOpen}
            task={taskBundle.task}
            onSuccess={() => {
              displayToast('Curation task updated successfully', 'success')
              setIsDialogOpen(false)
              setIsEditing(false)
            }}
            onCancel={() => {
              setIsDialogOpen(false)
              setIsEditing(false)
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              setIsDialogOpen(true)
              setIsEditing(true)
            }}
            size={'small'}
          >
            Edit
          </Button>
        </>
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
