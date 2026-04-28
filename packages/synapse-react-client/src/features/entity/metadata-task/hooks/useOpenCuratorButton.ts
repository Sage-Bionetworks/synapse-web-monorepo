import { displayToast } from '@/components'
import { useGetEntityPermissions } from '@/synapse-queries'
import {
  CurationTask,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import {
  OPEN_CURATOR_ERROR_TITLE,
  OPEN_CURATOR_UNAUTHORIZED_ERROR_MESSAGE,
} from '../utils/constants'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import useGridSessionForCurationTask_legacy from './useGridSessionForCurationTask_legacy'
import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'

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
  curationTask: CurationTask,
): UseOpenCuratorFromTaskButtonReturn {
  const {
    mutateAsync: getOrCreateLegacyGridSessionForUnassignedTask,
    isPending: openGridIsPending,
  } = useGridSessionForCurationTask_legacy()

  const gridSourceEntityId = getGridSourceIdForTask(curationTask)
  const {
    data: sourceEntityPermissions,
    isLoading: isLoadingEntityPermissions,
  } = useGetEntityPermissions(gridSourceEntityId)

  const hasPermission = sourceEntityPermissions?.canView

  const openNewOrExistingCuratorSession = useCallback(async () => {
    let gridSession: GridSession
    try {
      gridSession = await getOrCreateLegacyGridSessionForUnassignedTask({
        curationTask,
      })
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
  }, [curationTask, getOrCreateLegacyGridSessionForUnassignedTask])

  const handleClickOpenCurator = useCallback(() => {
    void openNewOrExistingCuratorSession()
  }, [openNewOrExistingCuratorSession])

  return {
    hasPermission,
    isLoading: isLoadingEntityPermissions,
    isPending: openGridIsPending,
    onClick: handleClickOpenCurator,
  }
}
