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
  TaskBundle,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { TASK_STATUS_CONFIG } from '@/features/entity/metadata-task/utils/constants'
import { parseDueDate } from '@/features/entity/metadata-task/utils/dueDate'
import styles from './CurationTaskCard.module.scss'
import sharedStyles from './shared.module.scss'
import UserOrTeamChip from './UserOrTeamChip'

dayjs.extend(utc)

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

function DueDateChip(props: { dueDate: string | undefined }) {
  const { dueDate } = props
  const dueDateObj = parseDueDate(dueDate)
  if (!dueDateObj) return null

  const daysUntilDue = dueDateObj.diff(dayjs.utc().startOf('day'), 'day')
  const formattedDate = dueDateObj.format('MM/DD/YY')

  let backgroundColor = '#E0E0E0'
  if (daysUntilDue < 0) {
    backgroundColor = '#FFCDD2'
  } else if (daysUntilDue < 30) {
    backgroundColor = '#FFF9C4'
  }

  return (
    <Chip
      size="small"
      sx={{ fontWeight: 600, backgroundColor }}
      label={`Due ${formattedDate}`}
    />
  )
}

export type CurationTaskCardLayoutProps = {
  taskBundle: TaskBundle
  title: string
  description: string
  taskType: string
  principalIds: string[]
  /** Renders the action button. `expanded` reflects whether the card is in its expanded layout. */
  renderActionButton: (props: { expanded: boolean }) => ReactNode
}

/** Derives the fields shared by every card variant from a task's common properties. */
export function deriveCardFields(task: TaskBundle['task']) {
  return {
    title: task?.dataType ?? '',
    description: task?.instructions ?? '',
    principalIds: task?.assigneePrincipalId ? [task.assigneePrincipalId] : [],
  }
}

/**
 * Shared presentational chrome for a curation task card: title, chips, entity info, assignees,
 * status/due date, and an action button slot. Both the grid and executable task cards compose this.
 */
export default function CurationTaskCardLayout(
  props: CurationTaskCardLayoutProps,
) {
  const {
    taskBundle,
    title,
    description,
    taskType,
    principalIds,
    renderActionButton,
  } = props

  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)

  const taskId = taskBundle.task?.taskId
  const projectId = taskBundle.task?.projectId
  const { data: bundle } = useGetEntityBundle(projectId, undefined, {
    includeEntity: true,
    includePermissions: true,
  })
  const canEdit = bundle?.permissions?.canEdit ?? false

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
          <TaskStatusChip state={taskBundle.status?.state} />
          <DueDateChip dueDate={taskBundle.status?.dueDate} />
        </div>
        {!isExpanded && (
          <>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', md: 'block' } }}
            />
            {renderActionButton({ expanded: false })}
          </>
        )}
      </div>
      <Collapse in={isExpanded}>
        <div className={styles.expandedContent}>
          {description && (
            <Typography variant="body1">{description}</Typography>
          )}
          {renderActionButton({ expanded: true })}
        </div>
      </Collapse>
    </Card>
  )
}
