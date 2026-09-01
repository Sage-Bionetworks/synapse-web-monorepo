import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { Button, Divider, Stack } from '@mui/material'
import {
  DELETE_CURATION_TASK_CONFIRMATION_PROMPT,
  DELETE_CURATION_TASK_DIALOG_TITLE,
} from '../utils/constants'

export type TaskFormActionsProps = {
  isEditMode: boolean
  isPending: boolean
  isValid: boolean
  onSubmit: () => void
  /** Shows a "Back" button (create mode) that returns to the category picker. */
  onBack?: () => void
  /** Shows a "Cancel" button (edit mode) that exits the page without saving. */
  onCancel?: () => void
  /** When true, a Delete button + confirmation dialog is rendered (edit mode, with permission). */
  canDelete: boolean
  showDeleteConfirmation: boolean
  onRequestDelete: () => void
  onConfirmDelete: () => void
  onCancelDelete: () => void
  isDeletePending: boolean
}

/**
 * The action-button row (Delete / Back / Cancel / Create|Save) plus the delete confirmation dialog
 * shared by every curation-task create/edit form.
 */
export default function TaskFormActions(props: TaskFormActionsProps) {
  const {
    isEditMode,
    isPending,
    isValid,
    onSubmit,
    onBack,
    onCancel,
    canDelete,
    showDeleteConfirmation,
    onRequestDelete,
    onConfirmDelete,
    onCancelDelete,
    isDeletePending,
  } = props

  return (
    <>
      <Divider />
      <Stack
        direction="row"
        gap={1}
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" gap={1}>
          {canDelete && (
            <Button
              variant="outlined"
              color="error"
              onClick={onRequestDelete}
              disabled={isPending}
            >
              Delete
            </Button>
          )}
        </Stack>
        <Stack direction="row" gap={1}>
          {onBack && (
            <Button variant="outlined" onClick={onBack} disabled={isPending}>
              Back
            </Button>
          )}
          {onCancel && (
            <Button variant="outlined" onClick={onCancel} disabled={isPending}>
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            // errors surfaced via react-query error state
            onClick={onSubmit}
            disabled={isPending || !isValid}
          >
            {isEditMode ? 'Save' : 'Create'}
          </Button>
        </Stack>
      </Stack>

      <ConfirmationDialog
        title={DELETE_CURATION_TASK_DIALOG_TITLE}
        open={showDeleteConfirmation}
        content={DELETE_CURATION_TASK_CONFIRMATION_PROMPT}
        confirmButtonProps={{
          children: 'Delete',
          color: 'error',
          loading: isDeletePending,
        }}
        onConfirm={onConfirmDelete}
        onCancel={onCancelDelete}
      />
    </>
  )
}
