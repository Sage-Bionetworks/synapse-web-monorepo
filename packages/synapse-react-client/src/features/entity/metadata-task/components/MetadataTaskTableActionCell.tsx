import { displayToast } from '@/components/ToastMessage/ToastMessage'
import useGridSessionForCurationTask_legacy from '@/features/entity/metadata-task/hooks/useGridSessionForCurationTask_legacy'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import {
  GridSession,
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'

export const OPEN_CURATOR_ERROR_TITLE =
  'An error occurred while trying to open Curator'
export const OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE =
  "You don't have permission to view the existing Curator session for this task. It was likely created by another data contributor. A data manager should create a new task and assign it to you or your team."

export const NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE = 'Task is Unassigned'

function openGridSessionInNewWindow(gridSessionId: string, taskId: number) {
  const gridUrl = getLinkToGridSession(gridSessionId, taskId)
  window.open(gridUrl, '_blank', 'noopener')
}

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

  const {
    mutateAsync: getOrCreateLegacyGridSessionForUnassignedTask,
    isPending: openGridIsPending,
  } = useGridSessionForCurationTask_legacy()

  const gridSourceEntityId = getGridSourceIdForTask(curationTask)
  const {
    data: sourceEntityPermissions,
    isLoading: isLoadingEntityPermissions,
  } = useGetEntityPermissions(gridSourceEntityId)

  const isLoading = isLoadingEntityPermissions

  const hasPermission = sourceEntityPermissions?.canView

  const isOpenDataGridDisabled =
    openGridIsPending || isLoading || !hasPermission
  const toolTipTitle = hasPermission
    ? 'Open Curator to edit metadata'
    : sourceEntityPermissions?.canView
    ? 'You must have READ access to ' +
      gridSourceEntityId +
      ' to view the Working Copy'
    : 'You do not have permission to view the Working Copy'

  const openNewOrExistingCuratorSession = useCallback(async () => {
    let gridSession: GridSession
    try {
      gridSession = await getOrCreateLegacyGridSessionForUnassignedTask({
        curationTask,
      })
      openGridSessionInNewWindow(gridSession.sessionId!, curationTask.taskId!)
    } catch (error) {
      if (error instanceof SynapseClientError && error.status === 403) {
        console.error(error)
        displayToast(OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE, 'danger', {
          title: OPEN_CURATOR_ERROR_TITLE,
        })
      } else {
        console.error('Error opening Curator for curation task', error)
        displayToast(error.message, 'danger', {
          title: OPEN_CURATOR_ERROR_TITLE,
        })
      }
    }
  }, [curationTask, getOrCreateLegacyGridSessionForUnassignedTask])

  const handleClickOpenCurator = useCallback(() => {
    void openNewOrExistingCuratorSession()
  }, [openNewOrExistingCuratorSession])

  return (
    <>
      <Tooltip title={toolTipTitle}>
        <span>
          <Button
            size={'small'}
            startIcon={<StickyNote2Outlined />}
            loading={openGridIsPending || isLoading}
            disabled={isOpenDataGridDisabled}
            onClick={handleClickOpenCurator}
          >
            Open Curator
          </Button>
        </span>
      </Tooltip>
    </>
  )
}
