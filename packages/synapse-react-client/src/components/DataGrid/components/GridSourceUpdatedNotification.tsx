import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import { GridSourceSync } from '@/components/DataGrid/hooks/useGridSourceSync'
import { IMPORT_LATEST_CHANGES_TEXT } from '@/components/DataGrid/utils/gridSyncMessages'
import { Alert, Snackbar, Stack, Typography } from '@mui/material'

export const SOURCE_UPDATED_TITLE = 'Changes Available'
export const SOURCE_UPDATED_BANNER_TEXT =
  'Import the latest schema changes before submitting.'

export type GridSourceUpdatedNotificationProps = {
  gridSourceSync: GridSourceSync
}

/**
 * Escalating prompt to import updates that were made to a grid session's source after the
 * session was created. Opens as a dialog, and falls back to a persistent banner in the lower
 * right of its container if the user declines.
 *
 * Renders nothing while there is nothing to prompt about, so this can be mounted
 * unconditionally alongside the grid.
 */
export default function GridSourceUpdatedNotification(
  props: GridSourceUpdatedNotificationProps,
) {
  const { gridSourceSync } = props
  const { prompt, isPending, importChanges, dismissDialog } = gridSourceSync

  if (prompt === 'hidden') {
    return null
  }

  if (prompt === 'dialog') {
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
        onConfirm={importChanges}
        onCancel={dismissDialog}
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
            onClick={importChanges}
          >
            {IMPORT_LATEST_CHANGES_TEXT}
          </GridMenuButton>
        </Stack>
      </Alert>
    </Snackbar>
  )
}
