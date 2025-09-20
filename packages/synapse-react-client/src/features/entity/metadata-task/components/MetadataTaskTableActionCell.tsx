import { getLinkToGridSession } from '@/utils/functions/getSynapseWebClientLink'
import { StickyNote2Outlined } from '@mui/icons-material'
import { Tooltip, Button } from '@mui/material'
import {
  CurationTask,
  instanceOfFileBasedMetadataTaskProperties,
} from '@sage-bionetworks/synapse-client'
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
  const { curationTask, canEdit } = props

  const { mutateAsync: getGridSessionForTask, isPending: openGridIsPending } =
    useGridSessionForCurationTask()

  const handleOpenDataGrid = useCallback(async () => {
    const gridSession = await getGridSessionForTask({ curationTask })
    const gridUrl = getLinkToGridSession(gridSession.sessionId!)

    // Open the Grid in a new tab
    window.open(gridUrl, '_blank', 'noopener')
  }, [])

  const isFileBasedTask = instanceOfFileBasedMetadataTaskProperties(
    curationTask.taskProperties!,
  )
  const editTaskButton = canEdit ? (
    <>{/* TODO: SWC-7480: Open an editor */}</>
  ) : null

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

  const uploadButton = isFileBasedTask ? (
    <>
      {/* TODO: Create a Jira for this b/c I think this needs design thought */}
    </>
  ) : null

  return (
    <>
      {editTaskButton}
      {openDataGridButton}
      {uploadButton}
    </>
  )
}
