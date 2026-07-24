import {
  CREATE_COMPUTE_TASK_PAGE_TITLE,
  CREATE_CURATE_TASK_PAGE_TITLE,
  FILL_IN_COMPUTE_TASK_DETAILS_DESCRIPTION,
  FILL_IN_CURATE_TASK_DETAILS_DESCRIPTION,
  BACK_TO_ALL_TASKS_LABEL,
} from '../utils/constants'
import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import {
  Navigate,
  Outlet,
  RouteObject,
  useNavigate,
  useParams,
} from 'react-router'
import ComputeTaskForm from './ComputeTaskForm'
import CreateTaskCategoryPicker from './CreateTaskCategoryPicker'
import CreateTaskConfirmation from './CreateTaskConfirmation'
import CurateTaskForm from './CurateTaskForm'

export type GetCurationTaskFlowRoutesOptions = {
  /**
   * Present when the host page already has a project context (e.g. a project's Metadata Tasks page).
   * Absent when creating from a context without one (e.g. the Curator Dashboard).
   */
  projectId?: string
  /**
   * Path (relative to the host router) to navigate to when the user exits the flow -- via "Back to
   * All Tasks" on the category picker/compute/curate forms, or "Back to All Tasks" on the
   * confirmation screen. Typically the host's own index route (`'/'`).
   */
  exitPath: string
}

/**
 * Layout for the steps that share the generic "Create New Task" header (the category picker and the
 * confirmation screen). The compute/curate form steps render their own more specific centered
 * title/subtitle instead (via their `pageTitle`/`pageDescription` props below), so they aren't nested
 * under this layout.
 *
 * When `onExit` is provided, a top-left "Back to All Tasks" button is shown above the title, matching
 * the one on the form steps.
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

function CategoryPickerLayoutRoute(props: { exitPath: string }) {
  const navigate = useNavigate()
  return <CreateTaskLayout onExit={() => void navigate(props.exitPath)} />
}

function CategoryPickerRoute() {
  const navigate = useNavigate()
  return (
    <CreateTaskCategoryPicker
      onSelectCompute={() => void navigate('compute')}
      onSelectCurate={() => void navigate('curate')}
    />
  )
}

function ComputeFormRoute(props: { projectId?: string; exitPath: string }) {
  const navigate = useNavigate()
  return (
    <ComputeTaskForm
      projectId={props.projectId}
      pageTitle={CREATE_COMPUTE_TASK_PAGE_TITLE}
      pageDescription={FILL_IN_COMPUTE_TASK_DETAILS_DESCRIPTION}
      onBack={() => void navigate(-1)}
      onExit={() => void navigate(props.exitPath)}
      onCreated={task => void navigate(`../confirmation/${task.taskId}`)}
    />
  )
}

function CurateFormRoute(props: { projectId?: string; exitPath: string }) {
  const navigate = useNavigate()
  return (
    <CurateTaskForm
      projectId={props.projectId}
      pageTitle={CREATE_CURATE_TASK_PAGE_TITLE}
      pageDescription={FILL_IN_CURATE_TASK_DETAILS_DESCRIPTION}
      onBack={() => void navigate(-1)}
      onExit={() => void navigate(props.exitPath)}
      onCreated={task => void navigate(`../confirmation/${task.taskId}`)}
    />
  )
}

function ConfirmationRoute(props: { exitPath: string }) {
  const { taskId } = useParams<{ taskId: string }>()
  const navigate = useNavigate()
  const parsedTaskId = taskId ? Number(taskId) : undefined
  if (!parsedTaskId) {
    return <Navigate to=".." replace />
  }
  return (
    <CreateTaskConfirmation
      taskId={parsedTaskId}
      onDone={() => void navigate(props.exitPath)}
    />
  )
}

/**
 * Builds the route objects for the 3-step "Create New Task" wizard: category picker -> compute/curate
 * form -> confirmation. The task itself is created on the step-2-to-step-3 transition (see
 * `ComputeTaskForm`/`CurateTaskForm`'s `onCreated`).
 */
export function getCurationTaskFlowRoutes(
  options: GetCurationTaskFlowRoutesOptions,
): RouteObject[] {
  const { projectId, exitPath } = options
  return [
    {
      element: <CategoryPickerLayoutRoute exitPath={exitPath} />,
      children: [{ index: true, element: <CategoryPickerRoute /> }],
    },
    {
      element: <CreateTaskLayout />,
      children: [
        {
          path: 'confirmation/:taskId',
          element: <ConfirmationRoute exitPath={exitPath} />,
        },
      ],
    },
    {
      path: 'compute',
      element: <ComputeFormRoute projectId={projectId} exitPath={exitPath} />,
    },
    {
      path: 'curate',
      element: <CurateFormRoute projectId={projectId} exitPath={exitPath} />,
    },
  ]
}
