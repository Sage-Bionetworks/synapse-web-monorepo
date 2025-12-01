import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'
import { useQuery } from '@tanstack/react-query'
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'

/**
 * Handles rendering the 'Actions' cell in the Metadata Task table, which provides buttons for the user
 * to accomplish the actions they can take on a Metadata Task, such as opening a data grid for the entity referenced
 * by the task.
 */
export default function MetadataTaskTableActionCell(props: {
  curationTask: CurationTask
  canEdit: boolean
}) {
  const {
    curationTask,
    // canEdit
  } = props

  const { mutateAsync: getGridSessionForTask, isPending: openGridIsPending } =
    useGridSessionForCurationTask()

  const { accessToken } = useSynapseContext()
  const gridSourceId = getGridSourceIdForTask(curationTask)
  const { data: hasReadAccess, fetchStatus: accessFetchStatus } = useQuery({
    queryKey: ['metadata-task', 'has-read-access', gridSourceId, accessToken],
    queryFn: async () => {
      const response = await SynapseClient.hasAccessToEntity(
        gridSourceId,
        ACCESS_TYPE.READ,
        accessToken,
      )
      return response.result
    },
  })
  const isCheckingAccess = accessFetchStatus === 'fetching'
  const canOpenDataGrid = hasReadAccess === true
  const isOpenDataGridDisabled =
    openGridIsPending || isCheckingAccess || !canOpenDataGrid

  const handleOpenDataGrid = useCallback(async () => {
    const gridSession = await getGridSessionForTask({ curationTask })
    const gridUrl = getLinkToGridSession(
      gridSession.sessionId!,
      curationTask.taskId,
    )

    // Open the Grid in a new tab
    window.open(gridUrl, '_blank', 'noopener')
  }, [curationTask, getGridSessionForTask])

  // TODO: SWC-7480
  // const editTaskButton = canEdit ? <></> : null

  // TODO: SWC-7484
  // const isFileBasedTask = instanceOfFileBasedMetadataTaskProperties(
  //   curationTask.taskProperties!,
  // )
  // const uploadButton = isFileBasedTask ? <></> : null

  const openDataGridButton = (
    <Tooltip title={'Open a Working Copy document to edit metadata'}>
      <Button
        size={'small'}
        startIcon={<StickyNote2Outlined />}
        loading={openGridIsPending || isCheckingAccess}
        disabled={isOpenDataGridDisabled}
        onClick={() => {
          void handleOpenDataGrid()
        }}
      >
        Working Copy
      </Button>
    </Tooltip>
  )

  return (
    <>
      {/*{editTaskButton}*/}
      {openDataGridButton}
      {/*{uploadButton}*/}
    </>
  )
}
