import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router'
import {
  BACK_TO_ALL_TASKS_LABEL,
  CREATE_COMPUTE_TASK_PAGE_TITLE,
  CREATE_CURATE_TASK_PAGE_TITLE,
  FILL_IN_COMPUTE_TASK_DETAILS_DESCRIPTION,
  FILL_IN_CURATE_TASK_DETAILS_DESCRIPTION,
} from '../utils/constants'
import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import ComputeTaskForm from './ComputeTaskForm'
import CreateTaskCategoryPicker from './CreateTaskCategoryPicker'
import CreateTaskConfirmation from './CreateTaskConfirmation'
import CurateTaskForm from './CurateTaskForm'

export type CreateCurationTaskFlowProps = {
  /**
   * Present when the host page already has a project context (e.g. a project's Metadata Tasks page).
   * Absent when creating from a context without one (e.g. the Curator Dashboard).
   */
  projectId?: string
  /** Called when the user exits the flow, whether by canceling or finishing. */
  onExit: () => void
}

function ConfirmationRouteRenderer(props: { onExit: () => void }) {
  const { taskId } = useParams<{ taskId: string }>()
  const parsedTaskId = taskId ? Number(taskId) : undefined
  if (!parsedTaskId) {
    return <Navigate to=".." replace />
  }
  return <CreateTaskConfirmation taskId={parsedTaskId} onDone={props.onExit} />
}

/**
 * Layout for the steps that share the generic "Create New Task" header (the category picker and the
 * confirmation screen). The compute form step renders its own more specific centered title/subtitle
 * instead (see `ComputeTaskForm`'s `pageTitle`/`pageDescription` props below), so it isn't nested here.
 *
 * When `onExit` is provided, a top-left "Back to All Tasks" button is shown above the title, matching
 * the one on the form steps (see `TaskFormHeader`).
 */
function CreateTaskLayout(props: { onExit?: () => void }) {
  const { onExit } = props
  return (
    <>
      {onExit && (
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={onExit}
          sx={{ alignSelf: 'flex-start' }}
        >
          {BACK_TO_ALL_TASKS_LABEL}
        </Button>
      )}
      <Outlet />
    </>
  )
}

/**
 * Hosts the 3-step "Create New Task" wizard: category picker -> compute form -> confirmation. The task
 * itself is created on the step-2-to-step-3 transition (see `ComputeTaskForm`'s `onCreated`).
 *
 * Mounted at a wildcard path (e.g. `create/*`) inside a host page's own router (see
 * `MetadataTasksPageRouter`), so the relative paths below are resolved against that mount point.
 */
export default function CreateCurationTaskFlow(
  props: CreateCurationTaskFlowProps,
) {
  const { projectId, onExit } = props
  const navigate = useNavigate()

  return (
    <Routes>
      <Route element={<CreateTaskLayout onExit={onExit} />}>
        <Route
          index
          element={
            <CreateTaskCategoryPicker
              onSelectCompute={() => void navigate('compute')}
              onSelectCurate={() => void navigate('curate')}
            />
          }
        />
      </Route>
      <Route element={<CreateTaskLayout />}>
        <Route
          path="confirmation/:taskId"
          element={<ConfirmationRouteRenderer onExit={onExit} />}
        />
      </Route>
      <Route
        path="compute"
        element={
          <ComputeTaskForm
            projectId={projectId}
            pageTitle={CREATE_COMPUTE_TASK_PAGE_TITLE}
            pageDescription={FILL_IN_COMPUTE_TASK_DETAILS_DESCRIPTION}
            onBack={() => void navigate(-1)}
            onExit={onExit}
            onCreated={task => void navigate(`../confirmation/${task.taskId}`)}
          />
        }
      />
      <Route
        path="curate"
        element={
          <CurateTaskForm
            projectId={projectId}
            pageTitle={CREATE_CURATE_TASK_PAGE_TITLE}
            pageDescription={FILL_IN_CURATE_TASK_DETAILS_DESCRIPTION}
            onBack={() => void navigate(-1)}
            onExit={onExit}
            onCreated={task => void navigate(`../confirmation/${task.taskId}`)}
          />
        }
      />
    </Routes>
  )
}
