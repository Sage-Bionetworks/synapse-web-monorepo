import { displayToast } from '@/components'
import { useExecuteCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { useGetIsPrincipalIdUserOrMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { GRID_PAGE_TASK_ID_QUERY_PARAM } from '@/utils/SynapseConstants'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { useSearchParams } from 'react-router'
import CurationTaskCardLayout, {
  deriveCardFields,
} from './CurationTaskCardLayout'
import { getExecutableTaskButtonState } from './getExecutableTaskButtonState'
import NextStepButton from './NextStepButton'
import styles from './CurationTaskCard.module.scss'

export type ExecutableTaskCardProps = {
  taskBundle: TaskBundle
}

/**
 * Card for an executable (Compute Data) curation task. Lets an authorized user run the task's agent
 * and, once finished, navigate to the destination task where the generated output was written.
 */
export default function ExecutableTaskCard(props: ExecutableTaskCardProps) {
  const { taskBundle } = props
  const task = taskBundle.task!
  const taskProperties = task.taskProperties
  const destinationTaskId =
    taskProperties && 'destinationTaskId' in taskProperties
      ? taskProperties.destinationTaskId
      : undefined

  const [, setSearchParams] = useSearchParams()

  const { data: bundle } = useGetEntityBundle(task.projectId, undefined, {
    includeEntity: true,
    includePermissions: true,
  })
  const canEdit = bundle?.permissions?.canEdit ?? false

  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: isAssigneeOrTeamMember } =
    useGetIsPrincipalIdUserOrMemberOfTeam(
      currentUserProfile?.ownerId ?? '',
      task.assigneePrincipalId ?? '',
      { enabled: !!currentUserProfile?.ownerId && !!task.assigneePrincipalId },
    )

  const canExecute = canEdit || Boolean(isAssigneeOrTeamMember)

  const { mutate: executeTask, isPending } = useExecuteCurationTask({
    onError: error => displayToast(error.message, 'danger'),
  })

  const buttonState = getExecutableTaskButtonState({
    state: taskBundle.status?.state,
    canExecute,
    isExecutePending: isPending,
    destinationTaskId,
  })

  const { title, description, principalIds } = deriveCardFields(task)

  function onClickAction() {
    if (buttonState.action === 'start') {
      executeTask(task.taskId!)
    } else if (buttonState.action === 'viewResult' && destinationTaskId) {
      setSearchParams(prev => {
        const next = new URLSearchParams(prev)
        next.set(GRID_PAGE_TASK_ID_QUERY_PARAM, String(destinationTaskId))
        return next
      })
    }
  }

  return (
    <CurationTaskCardLayout
      taskBundle={taskBundle}
      title={title}
      description={description}
      taskType="Compute"
      principalIds={principalIds}
      renderActionButton={({ expanded }) => (
        <NextStepButton
          className={styles.cardButton}
          buttonText={buttonState.buttonText}
          onClick={onClickAction}
          disabled={buttonState.disabled}
          loading={buttonState.loading}
          tooltip={buttonState.tooltip}
          expanded={expanded}
        />
      )}
    />
  )
}
