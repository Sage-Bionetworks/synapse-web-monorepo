import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import useGridSourceSyncStatus from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import useMergeGridWithSource, {
  buildMergeGridVariables,
} from '@/components/DataGrid/useMergeGridWithSource'
import {
  displaySynchronizeResultToast,
  IMPORT_LATEST_CHANGES_TEXT,
} from '@/components/DataGrid/utils/gridSyncMessages'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { Alert, Snackbar, Stack, Typography } from '@mui/material'
import { GridSession } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'

export const SOURCE_UPDATED_TITLE = 'Changes Available'
export const SOURCE_UPDATED_BANNER_TEXT =
  'Import the latest schema changes before submitting.'

export type GridSourceUpdatedNotificationProps = {
  gridSession: GridSession
}

/**
 * Escalating prompt to import updates that were made to a grid session's source after the
 * session was created. Opens as a dialog, and falls back to a persistent banner in the lower
 * right of its container if the user declines.
 *
 * Renders nothing when the source is up to date, so this can be mounted unconditionally.
 * Mount with a `key` of the session ID so that the prompt is offered again for a new session.
 */
export default function GridSourceUpdatedNotification(
  props: GridSourceUpdatedNotificationProps,
) {
  const { gridSession } = props

  const [hasDeclinedDialog, setHasDeclinedDialog] = useState(false)
  const [hasImported, setHasImported] = useState(false)

  const { isSourceOutdated, sourceEntityName, sourceEntityType } =
    useGridSourceSyncStatus(gridSession)

  const { mutate: mergeGrid, isPending } = useMergeGridWithSource({
    onSuccess: (result, variables) => {
      if (result.type === 'synchronize') {
        displaySynchronizeResultToast(result.data, variables.syncType)
      }
      // Stop prompting for the remainder of this session once the user has imported, so that a
      // source entity version that has not yet caught up cannot re-open the dialog.
      setHasImported(true)
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  function importLatestChanges() {
    mergeGrid(buildMergeGridVariables(gridSession, sourceEntityType, true))
  }

  if (!isSourceOutdated || hasImported) {
    return null
  }

  if (!hasDeclinedDialog) {
    return (
      <ConfirmationDialog
        open
        maxWidth="xs"
        title={SOURCE_UPDATED_TITLE}
        content={
          <Typography variant="body1">
            The data model has changed, or data has been added. Click Import
            Changes to apply the latest changes. Importing will pull in the
            latest schema and data. Any unsaved edits you've made will be
            preserved, but columns and other content may change. Note: You won't
            be able to submit your changes or apply them to your files or
            records before importing changes.
          </Typography>
        }
        confirmButtonProps={{
          children: IMPORT_LATEST_CHANGES_TEXT,
          loading: isPending,
        }}
        onConfirm={importLatestChanges}
        onCancel={() => setHasDeclinedDialog(true)}
      />
    )
  }

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      // Positioned within the grid container rather than the viewport, so the reminder stays
      // attached to the grid it applies to.
      sx={{ position: 'absolute' }}
    >
      <Alert severity="warning">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}
        >
          <Typography variant="smallText1">
            {SOURCE_UPDATED_BANNER_TEXT}
          </Typography>
          <GridMenuButton
            variant="contained"
            loading={isPending}
            onClick={importLatestChanges}
          >
            {IMPORT_LATEST_CHANGES_TEXT}
          </GridMenuButton>
        </Stack>
      </Alert>
    </Snackbar>
  )
}
