import { displayToast } from '@/components'
import { TASK_STATUS_CONFIG } from '@/features/entity/metadata-task/utils/constants'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE } from '@/features/entity/metadata-task/utils/constants'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import {
  Card,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import {
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
  TaskBundle,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import { useNavigate } from 'react-router'
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
    case FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties:
    case RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties:
      return {
        title: taskBundle.task.dataType,
        description: taskBundle.task.instructions ?? '',
        taskId: taskBundle.task.taskId,
        principalIds: taskBundle.task.assigneePrincipalId
          ? [taskBundle.task.assigneePrincipalId]
          : [],
        buttonText: 'Open Curator',
        taskType: 'Curate Data',
        statusState: taskBundle.status.state,
        onClickNextStep: onClick,
        isLoading,
        isPending,
        hasPermission,
      }
    case SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties:
    case RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties:
      return {
        title: taskBundle.task.dataType,
        description: taskBundle.task.instructions ?? '',
        taskId: taskBundle.task.taskId,
        principalIds: taskBundle.task.assigneePrincipalId
          ? [taskBundle.task.assigneePrincipalId]
          : [],
        buttonText: 'Start (Run Agent)',
        taskType: 'Compute',
        statusState: taskBundle.status.state,
        onClickNextStep: () => {
          displayToast('Coming soon!', 'info')
        },
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
    statusState: taskBundle.status.state,
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
 * A chip to display CurationTask status.
 *
 * See {@link https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style---Component-Library--SDS-?node-id=4942-1129&m=dev}
 */
function TaskStatusChip(props: { state: TaskStatusStateEnum | undefined }) {
  const { state } = props
  if (!state) return null
  const { label, backgroundColor } = TASK_STATUS_CONFIG[state]
  return (
    <Chip
      size="small"
      sx={{ fontWeight: 600, backgroundColor }}
      label={label}
    />
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
    statusState,
    onClickNextStep,
    hasPermission: hasPermissionToOpenGrid,
    isLoading,
    isPending,
  } = useUiForTask(taskBundle)

  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  const projectId = taskBundle.task?.projectId
  const { data: bundle } = useGetEntityBundle(projectId, undefined, {
    includeEntity: true,
    includePermissions: true,
  })
  const canEdit = bundle?.permissions?.canEdit ?? false

  function onClickAction() {
    if (hasPermissionToOpenGrid) {
      onClickNextStep()
    } else {
      displayToast(OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE, 'danger')
    }
  }

  return (
    <Card className={classNames(sharedStyles.card, styles.card)}>
      <div className={styles.cardContent}>
        <div className={styles.mainContent}>
          <div className={styles.titleChipContainer}>
            <Typography
              variant="headline3"
              className={styles.title}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {title}
            </Typography>
            {taskType && <TaskTypeChip label={taskType} />}
            {canEdit && (
              <IconButton
                onClick={() => void navigate(`edit/${taskId}`)}
                aria-label="Task settings"
              >
                <SettingsOutlinedIcon />
              </IconButton>
            )}
          </div>
          <div className={styles.entityInfo}>
            {bundle?.entity?.name ? (
              <Typography variant="body1">{bundle.entity.name}</Typography>
            ) : (
              <Skeleton width={100} />
            )}
            {taskId && (
              <Typography variant="body1">Task ID: {taskId}</Typography>
            )}
          </div>
          <div className={styles.userChipContainer}>
            {principalIds.map(principalId => (
              <UserOrTeamChip key={principalId} principalId={principalId} />
            ))}
          </div>
        </div>
        <div className={styles.statusContainer}>
          <TaskStatusChip state={statusState} />
        </div>
        {!isExpanded && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', md: 'block' } }}
            />
            <NextStepButton
              className={styles.cardButton}
              buttonText={buttonText}
              onClick={onClickAction}
              disabled={isLoading}
              loading={isPending}
              expanded={false}
            />
          </>
        )}
      </div>
      <Collapse in={isExpanded}>
        <div className={styles.expandedContent}>
          {description && (
            <Typography variant="body1">{description}</Typography>
          )}
          <NextStepButton
            className={styles.cardButton}
            buttonText={buttonText}
            onClick={onClickAction}
            disabled={isLoading}
            loading={isPending}
            expanded={true}
          />
        </div>
      </Collapse>
    </Card>
  )
}
