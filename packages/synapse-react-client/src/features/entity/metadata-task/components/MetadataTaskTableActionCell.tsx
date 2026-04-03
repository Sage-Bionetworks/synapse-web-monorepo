import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { UserOrTeamBadge } from '@/components/UserOrTeamBadge'
import {
  useGetCurrentUserProfile,
  useGetIsPrincipalIdUserOrMemberOfTeam,
} from '@/synapse-queries'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import {
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useState } from 'react'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import taskHasAssignee from '../utils/taskHasAssignee'

export const OPEN_CURATOR_ERROR_TITLE =
  'An error occurred while trying to open Curator'
export const OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE =
  "You don't have permission to view the existing Curator session for this task. It was likely created by another data contributor. A data manager should create a new task and assign it to you or your team."

export const NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE = 'Task Has No Assignee'

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
  const { taskBundle, canEdit } = props
  const curationTask = taskBundle.task!

  const [showOpenWithNoAssigneeWarning, setShowOpenWithNoAssigneeWarning] =
    useState(false)
  const [
    showGridSessionAssigneeMismatchDialog,
    setShowGridSessionAssigneeMismatchDialog,
  ] = useState(false)

  const { data: currentUser } = useGetCurrentUserProfile()

  const { data: isUserAssignedToTask } = useGetIsPrincipalIdUserOrMemberOfTeam(
    currentUser?.ownerId!,
    curationTask.assigneePrincipalId!,
    { enabled: !!currentUser?.ownerId && !!curationTask.assigneePrincipalId },
  )

  const {
    data: gridSessionInfoForCurationTask,
    mutateAsync: getGridSessionForTask,
    isPending: openGridIsPending,
  } = useGridSessionForCurationTask()

  const gridSourceEntityId = getGridSourceIdForTask(curationTask)
  const {
    data: sourceEntityPermissions,
    isLoading: isLoadingEntityPermissions,
  } = useGetEntityPermissions(gridSourceEntityId)

  const isLoading = isLoadingEntityPermissions
  const hasAssignee = taskHasAssignee(curationTask)
  const isAssignedToTask = canEdit || isUserAssignedToTask || !hasAssignee

  const hasPermission = sourceEntityPermissions?.canView && isAssignedToTask

  const isOpenDataGridDisabled =
    openGridIsPending || isLoading || !hasPermission
  const toolTipTitle = hasPermission
    ? 'Open Curator to edit metadata'
    : !isAssignedToTask
    ? 'You must be assigned to this task to open it'
    : sourceEntityPermissions?.canView
    ? 'You have READ access to ' +
      gridSourceEntityId +
      ' to view the Working Copy'
    : 'You do not have permission to view the Working Copy'

  const openNewOrExistingCuratorSession = useCallback(async () => {
    try {
      const { gridSession, gridSessionOwnerMatchesTaskAssignee } =
        await getGridSessionForTask(taskBundle)

      if (!gridSessionOwnerMatchesTaskAssignee) {
        // The user has access, but the assignee does not match the grid session owner.
        // Show a warning before allowing the user to proceed.
        setShowGridSessionAssigneeMismatchDialog(true)
      } else {
        openGridSessionInNewWindow(gridSession.sessionId!, curationTask.taskId!)
      }
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
  }, [curationTask.taskId, getGridSessionForTask, taskBundle])

  const handleClickOpenCurator = useCallback(() => {
    if (!hasAssignee) {
      setShowOpenWithNoAssigneeWarning(true)
    } else {
      void openNewOrExistingCuratorSession()
    }
  }, [openNewOrExistingCuratorSession, hasAssignee])

  // Dialog to warn a user before opening a curation task without an assignee. Intended to discourage creating
  // grid sessions for unassigned tasks without completely blocking data contributors from doing so
  const openWithNoAssigneeWarningDialog = (
    <ConfirmationDialog
      open={showOpenWithNoAssigneeWarning}
      title={NO_TASK_ASSIGNEE_WARNING_DIALOG_TITLE}
      content={
        <p>
          The task you selected has no assignee. A Curator session will only be
          accessible by you and no other collaborators. Do you want to proceed
          and open Curator?
        </p>
      }
      confirmButtonProps={{ children: 'Proceed' }}
      onConfirm={() => {
        void openNewOrExistingCuratorSession()
        setShowOpenWithNoAssigneeWarning(false)
      }}
      onCancel={() => {
        setShowOpenWithNoAssigneeWarning(false)
      }}
    />
  )

  const assigneeMismatchWarningDialog = (
    <ConfirmationDialog
      open={showGridSessionAssigneeMismatchDialog}
      title={'Task assignee changed'}
      content={
        <>
          <p>
            The existing Curator session for the task was created with a
            different owner{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              (
              {gridSessionInfoForCurationTask?.gridSession.ownerPrincipalId && (
                <UserOrTeamBadge
                  principalId={
                    gridSessionInfoForCurationTask.gridSession.ownerPrincipalId
                  }
                />
              )}
              )
            </span>{' '}
            than the current assignee{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              (
              {curationTask.assigneePrincipalId ? (
                <UserOrTeamBadge
                  principalId={curationTask.assigneePrincipalId}
                />
              ) : (
                'None'
              )}
              )
            </span>
            . Collaborators may not have access to this session.
          </p>
          <p>Are you sure you want to open Curator?</p>
        </>
      }
      confirmButtonProps={{ children: 'Open Curator' }}
      onConfirm={() => {
        if (gridSessionInfoForCurationTask?.gridSession) {
          openGridSessionInNewWindow(
            gridSessionInfoForCurationTask.gridSession.sessionId!,
            curationTask.taskId!,
          )

          setShowGridSessionAssigneeMismatchDialog(false)
        }
      }}
      onCancel={() => {
        setShowGridSessionAssigneeMismatchDialog(false)
      }}
    />
  )

  return (
    <>
      {openWithNoAssigneeWarningDialog}
      {assigneeMismatchWarningDialog}
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
