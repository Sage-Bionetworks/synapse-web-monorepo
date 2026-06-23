import { displayToast } from '@/components'
import CreateOrUpdateCurationTaskDialog from '@/features/entity/metadata-task/components/CreateOrUpdateCurationTaskDialog'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE } from '@/features/entity/metadata-task/utils/constants'
import { Box, Button, Card, Chip, Divider, Typography } from '@mui/material'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import styles from './CurationTaskCard.module.scss'
import NextStepButton from './NextStepButton'
import sharedStyles from './shared.module.scss'
import UserOrTeamChip from './UserOrTeamChip'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useState } from 'react'

export type CurationTaskCardProps = {
  taskBundle: TaskBundle
}

function useUiForTask(taskBundle: TaskBundle) {
  const { onClick, isLoading, isPending, hasPermission } =
    useOpenCuratorFromTaskButton(taskBundle)

  if (!taskBundle.task || !taskBundle.status) {
    throw new Error('Task bundle is missing required properties')
  }

  switch (taskBundle.task?.taskProperties?.concreteType) {
    case 'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties':
    case 'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties':
      return {
        title: taskBundle.task.dataType,
        description: taskBundle.task.instructions ?? '',
        taskId: taskBundle.task.taskId,
        principalIds: taskBundle.task.assigneePrincipalId
          ? [taskBundle.task.assigneePrincipalId]
          : [],
        buttonText: 'Open Curator',
        taskType: 'Curate Data',
        onClickNextStep: onClick,
        isLoading,
        isPending,
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
    taskId: taskBundle.task.taskId!,
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
    taskId,
    taskType,
    principalIds,
    buttonText,
    onClickNextStep,
    hasPermission,
    isLoading,
    isPending,
  } = useUiForTask(taskBundle)

  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <Card className={classNames(sharedStyles.card, styles.card)}>
      <div className={styles.cardContent}>
        <div className={styles.mainContent}>
          <div className={styles.titleChipContainer}>
            <Typography variant="headline3">{title}</Typography>
            {taskType && <TaskTypeChip label={taskType} />}
            <Button
              sx={{ display: 'flex' }}
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Task settings"
            >
              <SettingsOutlinedIcon />
            </Button>
          </div>
          <Box sx={{ display: 'flex', gap: 6 }}>
            <Typography variant="body1">{description}</Typography>
            {taskId && (
              <Typography variant="body1">Task ID: {taskId}</Typography>
            )}
          </Box>
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
                    OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE,
                    'danger',
                  )
                }
          }
          disabled={isLoading}
          loading={isPending}
        />
      </div>
      <CreateOrUpdateCurationTaskDialog
        open={isSettingsOpen}
        onCancel={() => setIsSettingsOpen(false)}
        onSuccess={() => setIsSettingsOpen(false)}
        onDeleteSuccess={() => setIsSettingsOpen(false)}
        projectId={taskBundle.task?.projectId ?? ''}
        task={taskBundle.task}
      />
    </Card>
  )
}
