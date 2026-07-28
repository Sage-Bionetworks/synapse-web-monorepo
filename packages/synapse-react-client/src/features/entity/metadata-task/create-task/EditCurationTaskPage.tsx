import { ErrorBanner } from '@/components/error/ErrorBanner'
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { useGetCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { useNavigate, useParams } from 'react-router'
import {
  EDIT_CURATION_TASK_PAGE_DESCRIPTION,
  EDIT_CURATION_TASK_PAGE_TITLE,
} from '../utils/constants'
import { getCurateTaskConcreteType } from '../utils/types'
import ComputeTaskForm from './ComputeTaskForm'
import CurateTaskForm from './CurateTaskForm'

/**
 * Page for editing an existing curation task, reached via `edit/:taskId` on a host page's router (see
 * `MetadataTasksPageRouter`/`CuratorDashboardRouter`). Fetches the task and dispatches to either
 * `ComputeTaskForm` or `CurateTaskForm` based on the task's category (falling back to `ComputeTaskForm`,
 * which handles the "unrecognized category" case, for any task that is neither).
 */
export default function EditCurationTaskPage() {
  const { taskId } = useParams<{ taskId: string }>()
  const parsedTaskId = taskId ? Number(taskId) : undefined
  const navigate = useNavigate()

  const {
    data: task,
    isLoading,
    error,
  } = useGetCurationTask(parsedTaskId ?? 0, {
    enabled: parsedTaskId != null,
  })

  function exit() {
    navigate('..')
  }

  if (parsedTaskId == null || error) {
    return <ErrorBanner error={error ?? 'Invalid task ID'} />
  }

  if (isLoading || task == null) {
    return <SynapseSpinner size={50} />
  }

  const isCurateTask =
    getCurateTaskConcreteType(task.taskProperties) !== undefined
  const FormComponent = isCurateTask ? CurateTaskForm : ComputeTaskForm

  return (
    <FormComponent
      key={parsedTaskId}
      task={task}
      pageTitle={EDIT_CURATION_TASK_PAGE_TITLE}
      pageDescription={EDIT_CURATION_TASK_PAGE_DESCRIPTION}
      onSaved={exit}
      onDeleted={exit}
      onCancel={exit}
      onExit={exit}
    />
  )
}
