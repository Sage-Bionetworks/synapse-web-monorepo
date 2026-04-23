import { Card, Chip, Divider, Typography } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import styles from './CurationTaskCard.module.scss'
import sharedStyles from './shared.module.scss'
import UserOrTeamChip from './UserOrTeamChip'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { displayToast } from '@/components'
import NextStepButton from './NextStepButton'

export type CurationTaskCardProps = {
  taskBundle: TaskBundle
}

function useUiForTask(taskBundle: TaskBundle) {
  const { onClick, isLoading, isPending, noPermissionMessage, hasPermission } =
    useOpenCuratorFromTaskButton(taskBundle.task!)

  if (!taskBundle.task || !taskBundle.status) {
    throw new Error('Task bundle is missing required properties')
  }

  switch (taskBundle.task?.taskProperties?.concreteType) {
    case 'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties':
    case 'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties':
      return {
        title: taskBundle.task.dataType,
        description: taskBundle.task.instructions ?? '',
        principalIds: taskBundle.task.assigneePrincipalId
          ? [taskBundle.task.assigneePrincipalId]
          : [],
        buttonText: 'Open Curator',
        taskType: 'Curate Data',
        onClickNextStep: onClick,
        isLoading,
        isPending,
        noPermissionMessage,
        hasPermission,
      }
    default: {
      console.error(
        'No UI implemented for task type: ' +
          // @ts-expect-error - the switch should be exhaustive for known types
          taskBundle.task?.taskProperties?.concreteType,
      )
    }
  }

  return {
    title: taskBundle.task.dataType,
    description: taskBundle.task.instructions ?? '',
    principalIds: taskBundle.task.assigneePrincipalId
      ? [taskBundle.task.assigneePrincipalId]
      : [],
    buttonText: 'Continue',
    taskType: '',
    onClickNextStep: () => {
      displayToast('No action defined for this task type', 'danger', {
        title: 'Unexpected Error',
      })
    },
    isLoading: false,
    isPending: false,
    noPermissionMessage: undefined,
    hasPermission: undefined,
  }
}

function TaskTypeChip(props: { label: string }) {
  const { label } = props
  return (
    <Chip sx={{ fontWeight: 600, backgroundColor: '#BFD3ED' }} label={label} />
  )
}

/**
 * Card component for displaying a curation task on the curator dashboard. Shows relevant information about the task and includes a button to proceed to the next step in the workflow.
 */
export default function CurationTaskCard(props: CurationTaskCardProps) {
  const { taskBundle } = props
  const {
    title,
    description,
    taskType,
    principalIds,
    buttonText,
    onClickNextStep,
    noPermissionMessage,
    hasPermission,
    isLoading,
    isPending,
  } = useUiForTask(taskBundle)

  return (
    <Card className={classNames(sharedStyles.card, styles.card)}>
      <div className={styles.cardContent}>
        <div className={styles.mainContent}>
          <div className={styles.titleChipContainer}>
            <Typography variant="headline3">{title}</Typography>
            {taskType && <TaskTypeChip label={taskType} />}
          </div>
          <Typography variant="body1">{description}</Typography>
          <div className={styles.userChipContainer}>
            {principalIds.map(principalId => (
              <UserOrTeamChip key={principalId} principalId={principalId} />
            ))}
          </div>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: 'none', md: 'block' } }}
        />
        <NextStepButton
          className={styles.cardButton}
          buttonText={buttonText}
          onClick={
            hasPermission
              ? onClickNextStep
              : () => {
                  displayToast(
                    noPermissionMessage ??
                      'You do not have permission to perform this action',
                    'danger',
                  )
                }
          }
          disabled={isLoading}
          loading={isPending}
        />
      </div>
    </Card>
  )
}
