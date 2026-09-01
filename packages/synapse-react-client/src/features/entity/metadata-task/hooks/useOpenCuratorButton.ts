import { displayToast } from '@/components'
import { useGetEntityPermissions } from '@/synapse-queries'
import {
  GridSession,
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import {
  OPEN_CURATOR_ERROR_TITLE,
  OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE,
} from '../utils/constants'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import useGridSessionForCurationTask from './useGridSessionForCurationTask'
import useGridSessionForCurationTask_legacy from './useGridSessionForCurationTask_legacy'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { instanceOfGridSupportedTaskProperties } from '../utils/types'

type UseOpenCuratorFromTaskButtonReturn = {
  isLoading: boolean
  isPending: boolean
  hasPermission?: boolean
  onClick: () => void
}

function openGridSessionInNewWindow(gridSessionId: string, taskId: number) {
  const gridUrl = getLinkToGridSession(gridSessionId, taskId)
  window.open(gridUrl, '_blank', 'noopener')
}

export default function useOpenCuratorFromTaskButton(
  taskBundle: TaskBundle,
): UseOpenCuratorFromTaskButtonReturn {
  const curationTask = taskBundle.task!

  const taskProperties = curationTask.taskProperties
  if (!instanceOfGridSupportedTaskProperties(taskProperties)) {
    throw new Error(
      `Task properties are not supported for GridSession creation: ${taskProperties?.concreteType}`,
    )
  }

  const suggestedAuthorizationMode =
    taskProperties != null && 'suggestedAuthorizationMode' in taskProperties
      ? taskProperties.suggestedAuthorizationMode
      : undefined

  const useTaskLinkedSession = suggestedAuthorizationMode != null

  const {
    mutateAsync: getOrCreateLegacyGridSessionForUnassignedTask,
    isPending: legacyOpenGridIsPending,
  } = useGridSessionForCurationTask_legacy()

  const {
    mutateAsync: getOrCreateTaskLinkedGridSession,
    isPending: taskLinkedOpenGridIsPending,
  } = useGridSessionForCurationTask()

  const gridSourceEntityId = getGridSourceIdForTask(taskProperties)
  const {
    data: sourceEntityPermissions,
    isLoading: isLoadingEntityPermissions,
  } = useGetEntityPermissions(gridSourceEntityId)

  const hasPermission = sourceEntityPermissions?.canView

  const openNewOrExistingCuratorSession = useCallback(async () => {
    let gridSession: GridSession
    try {
      if (useTaskLinkedSession) {
        const result = await getOrCreateTaskLinkedGridSession(taskBundle)
        gridSession = result.gridSession
      } else {
        gridSession = await getOrCreateLegacyGridSessionForUnassignedTask({
          curationTask,
        })
      }
      openGridSessionInNewWindow(gridSession.sessionId!, curationTask.taskId!)
    } catch (error) {
      if (error instanceof SynapseClientError && error.status === 403) {
        console.error(error)
        displayToast(OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE, 'danger', {
          title: OPEN_CURATOR_ERROR_TITLE,
        })
      } else {
        console.error('Error opening Curator for curation task', error)
        const errorMessage =
          error instanceof Error ? error.message : String(error)
        displayToast(errorMessage, 'danger', {
          title: OPEN_CURATOR_ERROR_TITLE,
        })
      }
    }
  }, [
    curationTask,
    taskBundle,
    useTaskLinkedSession,
    getOrCreateLegacyGridSessionForUnassignedTask,
    getOrCreateTaskLinkedGridSession,
  ])

  const handleClickOpenCurator = useCallback(() => {
    void openNewOrExistingCuratorSession()
  }, [openNewOrExistingCuratorSession])

  return {
    hasPermission,
    isLoading: isLoadingEntityPermissions,
    isPending: useTaskLinkedSession
      ? taskLinkedOpenGridIsPending
      : legacyOpenGridIsPending,
    onClick: handleClickOpenCurator,
  }
}
