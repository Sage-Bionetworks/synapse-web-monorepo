import {
  useCreateCurationTask,
  useDeleteCurationTask,
  useGetCurationTaskStatus,
  useUpdateCurationTask,
  useUpdateCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { displayToast } from '@/components/ToastMessage'
import { useSynapseContext } from '@/utils/index'
import {
  CurationTask,
  TaskExecutionDetails,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import { useState } from 'react'
import {
  CREATE_TASK_STATUS_NOT_SAVED_WARNING,
  DELETE_CURATION_TASK_ERROR_TOAST_PREFIX,
  DELETE_CURATION_TASK_SUCCESS_TOAST,
} from '../utils/constants'
import { dueDateInputToIso, isoToDueDateInput } from '../utils/dueDate'

export type UseCurationTaskFormStateArgs = {
  /**
   * Present when the host page already has a project context. Absent when creating from a context
   * without one, in which case the caller renders a project selector. Ignored in edit mode -- the
   * project is always derived from `task`.
   */
  projectId?: string
  /** The task being edited. Undefined when creating a new task. */
  task?: CurationTask
  /** Called after the task is successfully deleted (edit mode only). */
  onDeleted?: () => void
}

/**
 * The state and persistence logic shared by every curation-task create/edit form
 * (`ComputeTaskForm`, `CurateTaskForm`): common fields, project selection, task status (state +
 * due date), permissions, the create/update/delete mutations, and the submit-with-status flow.
 * The type-specific fields, validity, and payload construction remain the responsibility of each
 * form -- the caller passes a fully-built `CurationTask` payload to `submitTaskAndStatus`.
 */
export function useCurationTaskFormState(args: UseCurationTaskFormStateArgs) {
  const { projectId, task, onDeleted } = args
  const isEditMode = task !== undefined
  const { synapseClient } = useSynapseContext()

  const showProjectSelector = !isEditMode && !projectId
  const [selectedProjectId, setSelectedProjectId] = useState('')
  const effectiveProjectId = isEditMode
    ? (task?.projectId ?? '')
    : (projectId ?? selectedProjectId)

  const [dataType, setDataType] = useState(() => task?.dataType ?? '')
  const [instructions, setInstructions] = useState(
    () => task?.instructions ?? '',
  )
  const [assigneePrincipalId, setAssigneePrincipalId] = useState<
    string | undefined
  >(() => task?.assigneePrincipalId)

  // Task status (edit mode only). `dueDate` also lives on TaskStatus, so it's collected here even in
  // create mode (where there's no status to fetch yet -- it's applied to the auto-created status
  // immediately after the task itself is created, see `submitTaskAndStatus`).
  const { data: currentTaskStatus, isFetching: isStatusFetching } =
    useGetCurationTaskStatus(task?.taskId ?? 0, {
      enabled: isEditMode && task?.taskId != null,
    })
  const [pendingStatusState, setPendingStatusState] = useState<
    TaskStatusStateEnum | undefined
  >(undefined)
  const displayedStatusState = pendingStatusState ?? currentTaskStatus?.state
  // `pendingDueDate` and `displayedDueDate` are always the native date input's `YYYY-MM-DD` string.
  // The backend stores `TaskStatus.dueDate` as an ISO 8601 date-time string, so the fetched value is
  // converted for display and the entered value is converted back on write.
  const [pendingDueDate, setPendingDueDate] = useState<string | undefined>(
    undefined,
  )
  const displayedDueDate =
    pendingDueDate ??
    (isEditMode ? isoToDueDateInput(currentTaskStatus?.dueDate) : '')

  const { data: permissions } = useGetEntityPermissions(effectiveProjectId, {
    enabled: !!effectiveProjectId,
  })
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const canDelete = Boolean(
    permissions?.canDelete &&
    isEditMode &&
    task?.taskId != null &&
    onDeleted != null,
  )

  const {
    mutateAsync: createTask,
    isPending: isCreatePending,
    error: createError,
  } = useCreateCurationTask()
  const {
    mutateAsync: updateTask,
    isPending: isUpdatePending,
    error: updateError,
  } = useUpdateCurationTask()
  const {
    mutateAsync: updateTaskStatus,
    isPending: isStatusUpdatePending,
    error: statusUpdateError,
  } = useUpdateCurationTaskStatus()
  const { mutate: deleteTask, isPending: isDeletePending } =
    useDeleteCurationTask({
      onSuccess: () => {
        displayToast(DELETE_CURATION_TASK_SUCCESS_TOAST, 'success')
        setShowDeleteConfirmation(false)
        onDeleted?.()
      },
      onError: err => {
        displayToast(
          DELETE_CURATION_TASK_ERROR_TOAST_PREFIX + err.message,
          'danger',
        )
      },
    })

  const isPending =
    isCreatePending ||
    isUpdatePending ||
    isStatusUpdatePending ||
    isDeletePending
  const error = createError ?? updateError ?? statusUpdateError

  const isCommonFieldsValid = !!dataType.trim() && !!instructions.trim()
  const isProjectValid = !showProjectSelector || !!selectedProjectId.trim()

  /**
   * Persists `payload` as either a create or an update (based on edit mode), then reconciles the
   * task's `TaskStatus` (state + due date + `options.initialExecutionDetails`). Returns the persisted
   * task. On create, the status is fetched (it is created server-side automatically) and patched when
   * a due date was entered or `options.initialExecutionDetails` was supplied. On update, the status is
   * written only when the state or due date changed; clearing the due date (empty string) is a valid
   * change and persists as an absent due date. `initialExecutionDetails` is never backfilled on edit.
   */
  async function submitTaskAndStatus(
    payload: CurationTask,
    options?: { initialExecutionDetails?: TaskExecutionDetails },
  ): Promise<CurationTask> {
    const dueDateIso = dueDateInputToIso(displayedDueDate)

    if (isEditMode) {
      const latestTask = await updateTask(payload)

      const statusStateChanged =
        pendingStatusState !== undefined &&
        pendingStatusState !== currentTaskStatus?.state
      const dueDateChanged =
        pendingDueDate !== undefined &&
        dueDateIso !== (currentTaskStatus?.dueDate ?? undefined)
      if ((statusStateChanged || dueDateChanged) && currentTaskStatus != null) {
        // The task and its status share an etag, and the preceding `updateTask` bumped it; the
        // status update must use the etag returned by that update, not the stale fetched one. When
        // the user didn't touch the due date, preserve the stored value verbatim rather than the
        // re-encoded one, so a status-only edit can never blank out or rewrite an existing due date.
        await updateTaskStatus({
          ...currentTaskStatus,
          state: pendingStatusState ?? currentTaskStatus.state,
          dueDate:
            pendingDueDate !== undefined
              ? dueDateIso
              : currentTaskStatus.dueDate,
          etag: latestTask.etag,
        })
      }

      return latestTask
    }

    const created = await createTask(payload)

    if (
      (dueDateIso || options?.initialExecutionDetails) &&
      created.taskId != null
    ) {
      // TODO(PLFM-9839): replace this best-effort status write with a single service that creates
      // the task and its status atomically. Until then, the task is created first and the due date
      // is applied to the auto-created status in a separate call; a failure there must not strand a
      // created task or surface as a hard error (which would tempt the user to re-create the task).
      try {
        // A CurationTask's TaskStatus is created automatically server-side; fetch it so the due date
        // can be applied to it. The freshly-fetched status carries the current shared etag.
        const status =
          await synapseClient.curationTaskServicesClient.getRepoV1CurationTaskTaskIdStatus(
            { taskId: created.taskId },
          )
        await updateTaskStatus({
          ...status,
          taskId: created.taskId,
          dueDate: dueDateIso,
          executionDetails: options?.initialExecutionDetails,
        })
      } catch {
        displayToast(CREATE_TASK_STATUS_NOT_SAVED_WARNING, 'warning')
      }
    }

    return created
  }

  return {
    isEditMode,
    // project
    showProjectSelector,
    selectedProjectId,
    setSelectedProjectId,
    effectiveProjectId,
    // common fields
    dataType,
    setDataType,
    instructions,
    setInstructions,
    assigneePrincipalId,
    setAssigneePrincipalId,
    // status + due date
    currentTaskStatus,
    isStatusFetching,
    displayedStatusState,
    setPendingStatusState,
    displayedDueDate,
    setPendingDueDate,
    // permissions + delete
    canDelete,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    deleteTask,
    isDeletePending,
    // aggregate mutation state
    isPending,
    error,
    // validity (common portion; type-specific validity is the caller's responsibility)
    isCommonFieldsValid,
    isProjectValid,
    // submit
    submitTaskAndStatus,
  }
}
