import { displayToast } from '@/components'
import { getComputeTaskConcreteType } from '@/features/entity/metadata-task/utils/types'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import CurationTaskCardLayout, {
  deriveCardFields,
} from './CurationTaskCardLayout'
import ExecutableTaskCard from './ExecutableTaskCard'
import GridTaskCard from './GridTaskCard'
import NextStepButton from './NextStepButton'
import styles from './CurationTaskCard.module.scss'

export type CurationTaskCardProps = {
  taskBundle: TaskBundle
}

/**
 * Card component for displaying a curation task on the curator dashboard. Dispatches to the card
 * variant appropriate for the task's type: an executable (Compute Data) task, a grid-supported
 * (Curate Data) task, or a fallback for unrecognized types.
 */
export default function CurationTaskCard(props: CurationTaskCardProps) {
  const { taskBundle } = props

  if (!taskBundle.task || !taskBundle.status) {
    throw new Error('Task bundle is missing required properties')
  }

  const concreteType = taskBundle.task.taskProperties?.concreteType

  if (getComputeTaskConcreteType(taskBundle.task.taskProperties)) {
    return <ExecutableTaskCard taskBundle={taskBundle} />
  }

  switch (concreteType) {
    case 'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties':
    case 'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties':
      return <GridTaskCard taskBundle={taskBundle} />
    default:
      console.error('No UI implemented for task type: ' + concreteType)
      return (
        <CurationTaskCardLayout
          taskBundle={taskBundle}
          {...deriveCardFields(taskBundle.task)}
          taskType=""
          renderActionButton={({ expanded }) => (
            <NextStepButton
              className={styles.cardButton}
              buttonText="Continue"
              onClick={() =>
                displayToast('No action defined for this task type', 'danger', {
                  title: 'Unexpected Error',
                })
              }
              expanded={expanded}
            />
          )}
        />
      )
  }
}
