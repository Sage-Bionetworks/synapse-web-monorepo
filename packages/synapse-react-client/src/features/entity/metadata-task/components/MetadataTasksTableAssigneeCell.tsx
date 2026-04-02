import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import { displayToast } from '@/index'
import { useUpdateCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { EditTwoTone } from '@mui/icons-material'
import { Alert, Box, IconButton, Stack, Typography } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types/src/UserGroupHeader'
import { useCallback, useState } from 'react'
import taskHasAssignee from '../utils/taskHasAssignee'

export type MetadataTasksTableAssigneeCellProps = {
  taskBundle: TaskBundle
  canEdit: boolean
}

export default function MetadataTasksTableAssigneeCell(
  props: MetadataTasksTableAssigneeCellProps,
) {
  const { taskBundle, canEdit } = props
  const curationTask = taskBundle.task!
  const { assigneePrincipalId } = curationTask
  const [showUserPicker, setShowUserPicker] = useState(false)
  const [selectedPrincipalId, setSelectedPrincipalId] = useState<string | null>(
    assigneePrincipalId ?? null,
  )
  const [isHoveringOnCell, setIsHoveringOnCell] = useState(false)

  const { mutateAsync: updateCurationTask, isPending: updateTaskIsPending } =
    useUpdateCurationTask({
      onError: error => {
        displayToast('Error updating task assignee: ' + error.message, 'danger')
      },
    })

  let assigneeDisplay = (
    <Box
      component="span"
      sx={{ flexGrow: 1, fontStyle: 'italic', color: 'grey.700' }}
    >
      Unassigned
    </Box>
  )

  const hasAssignee = taskHasAssignee(curationTask)
  if (hasAssignee) {
    assigneeDisplay = <UserOrTeamBadge principalId={assigneePrincipalId} />
  }

  const onConfirmUpdateAssignee = useCallback(
    async (assigneeId: string | undefined) => {
      await updateCurationTask({
        ...curationTask,
        assigneePrincipalId: assigneeId,
      })
      setShowUserPicker(false)
    },
    [curationTask, updateCurationTask],
  )

  let editButton = null
  if (canEdit) {
    editButton = (
      <>
        <ConfirmationDialog
          title="Set Assignee"
          open={showUserPicker}
          content={
            <Stack>
              <Typography variant="body1" gutterBottom>
                Select a user or team to assign this task to:
              </Typography>
              <UserSearchBox
                key={showUserPicker.toString()}
                defaultValue={assigneePrincipalId}
                onChange={principalId => setSelectedPrincipalId(principalId)}
                typeFilter={TYPE_FILTER.ALL}
              />
              {taskBundle.status?.executionDetails?.activeSessionId && (
                <Alert severity="warning" sx={{ mt: 2 }}>
                  This task has an active Curator session. If you change the
                  assignee, these effects could happen:
                  <ul>
                    <li>
                      Current assignee(s) may lose access to the session,
                      unsaved changes will be lost, and they may not be able to
                      complete their work.
                    </li>
                    <li>
                      New assignee(s) may not have permission to access the
                      current session
                    </li>
                  </ul>
                  To avoid these issues, a data manager should create a new
                  task.
                </Alert>
              )}
            </Stack>
          }
          confirmButtonProps={{
            children: 'Save',
            loading: updateTaskIsPending,
          }}
          onConfirm={() => {
            onConfirmUpdateAssignee(selectedPrincipalId ?? undefined)
          }}
          onCancel={() => setShowUserPicker(false)}
        />
        <div>
          <IconButton
            aria-label="Edit assignee"
            size="small"
            onClick={() => setShowUserPicker(true)}
          >
            <EditTwoTone fontSize="inherit" />
          </IconButton>
        </div>
      </>
    )
  }

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      spacing={1}
      onMouseOver={() => {
        setIsHoveringOnCell(true)
      }}
      onMouseLeave={() => {
        setIsHoveringOnCell(false)
      }}
    >
      <span style={{ overflow: 'hidden' }}>{assigneeDisplay}</span>
      {isHoveringOnCell && editButton}
    </Stack>
  )
}
