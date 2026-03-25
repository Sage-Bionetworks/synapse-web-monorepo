import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import WarningDialog from '../SynapseForm/WarningDialog'

type DeleteEvaluationQueueConfirmationDialogProps = {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteEvaluationQueueConfirmationDialog({
  open,
  onConfirm,
  onCancel,
}: DeleteEvaluationQueueConfirmationDialogProps) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (open) setIsChecked(false)
  }, [open])

  return (
    <WarningDialog
      title="Delete Evaluation Queue?"
      content={
        <>
          <Typography pb={2}>
            <strong>Warning</strong>: Deleting this evaluation queue will also
            permanently erase all associated submissions and scores. This action
            is irreversible.
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
              />
            }
            label="I understand and wish to proceed."
          />
        </>
      }
      open={open}
      confirmButtonText="Delete"
      confirmButtonColor="error"
      confirmButtonDisabled={!isChecked}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  )
}
