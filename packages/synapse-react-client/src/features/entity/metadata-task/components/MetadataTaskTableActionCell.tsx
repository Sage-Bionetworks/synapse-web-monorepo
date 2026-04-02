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
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useCallback, useState } from 'react'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import taskHasAssignee from '../utils/taskHasAssignee'

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
  const hasPermission =
    sourceEntityPermissions?.canView && (canEdit || isUserAssignedToTask)

  const isOpenDataGridDisabled =
    openGridIsPending || isLoading || !hasPermission
  const toolTipTitle = sourceEntityPermissions?.canView
    ? 'Open Curator to edit metadata'
    : 'You must be assigned to the task and have READ access to ' +
      gridSourceEntityId +
      ' to view the Working Copy'

  const hasAssignee = taskHasAssignee(curationTask)

  const openNewOrExistingCuratorSession = useCallback(async () => {
    try {
      const {
        gridSession,
        hasAccessToGridSession,
        gridSessionOwnerMatchesTaskAssignee,
      } = await getGridSessionForTask(taskBundle)

      if (!hasAccessToGridSession) {
        displayToast(
          "You don't have permission to view the existing Curator session for this task. A data manager should create a new task and assign it to you or your team.",
          'danger',
        )
      } else if (
        hasAccessToGridSession &&
        !gridSessionOwnerMatchesTaskAssignee
      ) {
        // The user has access, but the assignee does not match the grid session owner.
        // Show a warning before allowing the user to proceed.
        setShowGridSessionAssigneeMismatchDialog(true)
      } else {
        openGridSessionInNewWindow(gridSession.sessionId!, curationTask.taskId!)
      }
    } catch (error) {
      console.error('Error opening Curator for curation task', error)
      displayToast(error.message, 'danger', {
        title: 'An error occurred while trying to open Curator',
      })
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
      title={'No assignee'}
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
