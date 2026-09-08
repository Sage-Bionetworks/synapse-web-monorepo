import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'

export const RUN_AGENT_BUTTON_TEXT = 'Start (Run Agent)'
export const RUNNING_BUTTON_TEXT = 'Running'
export const VIEW_RESULT_BUTTON_TEXT = 'View Result'

export const EXECUTABLE_TASK_NO_PERMISSION_MESSAGE =
  'You do not have permission to run this task. Only the assignee or a data manager can run it.'
export const DESTINATION_TASK_MISSING_MESSAGE = 'Destination task is missing'

/** The action that clicking the button should perform. */
export type ExecutableTaskButtonAction = 'start' | 'viewResult' | 'none'

export type ExecutableTaskButtonState = {
  buttonText: string
  action: ExecutableTaskButtonAction
  disabled: boolean
  loading: boolean
  tooltip: string | undefined
}

export type GetExecutableTaskButtonStateArgs = {
  state: TaskStatusStateEnum | undefined
  canExecute: boolean
  isExecutePending: boolean
  destinationTaskId: number | undefined
}

/**
 * Pure state machine mapping a task's status, the user's execute permission, and the local
 * mutation state to the props the action button should render with.
 *
 * "Running" is derived from the server state (`EXECUTING`) OR the in-flight local mutation, so it
 * survives reloads and reflects a run started by another user. Any state past `NOT_STARTED`/
 * `EXECUTING` is treated leniently as "finished" and offers to view the result.
 */
export function getExecutableTaskButtonState(
  args: GetExecutableTaskButtonStateArgs,
): ExecutableTaskButtonState {
  const { state, canExecute, isExecutePending, destinationTaskId } = args

  const isRunning = state === TaskStatusStateEnum.EXECUTING || isExecutePending
  if (isRunning) {
    return {
      buttonText: RUNNING_BUTTON_TEXT,
      action: 'none',
      disabled: true,
      loading: true,
      tooltip: undefined,
    }
  }

  if (state === undefined || state === TaskStatusStateEnum.NOT_STARTED) {
    return {
      buttonText: RUN_AGENT_BUTTON_TEXT,
      action: canExecute ? 'start' : 'none',
      disabled: !canExecute,
      loading: false,
      tooltip: canExecute ? undefined : EXECUTABLE_TASK_NO_PERMISSION_MESSAGE,
    }
  }

  const hasDestination = destinationTaskId !== undefined
  return {
    buttonText: VIEW_RESULT_BUTTON_TEXT,
    action: hasDestination ? 'viewResult' : 'none',
    disabled: !hasDestination,
    loading: false,
    tooltip: hasDestination ? undefined : DESTINATION_TASK_MISSING_MESSAGE,
  }
}
