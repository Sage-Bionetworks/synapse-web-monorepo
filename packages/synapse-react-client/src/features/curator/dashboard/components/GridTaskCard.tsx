import { displayToast } from '@/components'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE } from '@/features/entity/metadata-task/utils/constants'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import CurationTaskCardLayout, {
  deriveCardFields,
} from './CurationTaskCardLayout'
import NextStepButton from './NextStepButton'
import styles from './CurationTaskCard.module.scss'

export type GridTaskCardProps = {
  taskBundle: TaskBundle
}

/**
 * Card for a grid-supported (Curate Data) curation task. The action button opens the task in
 * Curator, gated on read access to the task's source entity.
 */
export default function GridTaskCard(props: GridTaskCardProps) {
  const { taskBundle } = props

  const { onClick, isLoading, isPending, hasPermission } =
    useOpenCuratorFromTaskButton(taskBundle)

  function onClickAction() {
    if (hasPermission) {
      onClick()
    } else {
      displayToast(OPEN_CURATOR_NO_PERMISSION_ON_SOURCE_ERROR_MESSAGE, 'danger')
    }
  }

  const { title, description, principalIds } = deriveCardFields(taskBundle.task)

  return (
    <CurationTaskCardLayout
      taskBundle={taskBundle}
      title={title}
      description={description}
      taskType="Curate Data"
      principalIds={principalIds}
      renderActionButton={({ expanded }) => (
        <NextStepButton
          className={styles.cardButton}
          buttonText="Open Curator"
          onClick={onClickAction}
          disabled={isLoading}
          loading={isPending}
          expanded={expanded}
        />
      )}
    />
  )
}
