import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import useGridSessionForCurationTask from '../hooks/useGridSessionForCurationTask'

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
        loading={openGridIsPending}
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
