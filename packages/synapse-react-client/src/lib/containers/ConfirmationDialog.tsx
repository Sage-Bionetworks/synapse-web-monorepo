import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { DialogBase, DialogBaseProps } from './DialogBase'

export type ConfirmationDialogProps = DialogBaseProps & {
  confirmButtonText?: string
  confirmButtonColor?: ButtonProps['color']
  confirmButtonVariant?: ButtonProps['variant']
  onConfirm: () => void
  hasCancelButton?: boolean
}

/**
 * A confirmation dialog built using MUI components.
 */
export const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    confirmButtonText = 'OK',
    confirmButtonColor = 'primary',
    confirmButtonVariant = 'contained',
    onConfirm,
    onCancel,
    hasCancelButton = true,
    ...rest
  } = props
  return (
    <DialogBase
      onCancel={onCancel}
      actions={
        <>
          {hasCancelButton && (
            <Button variant="outlined" onClick={() => onCancel()}>
              Cancel
            </Button>
          )}
          <Button
            variant={confirmButtonVariant}
            color={confirmButtonColor}
            onClick={() => onConfirm()}
          >
            {confirmButtonText}
          </Button>
        </>
      }
      {...rest}
    />
  )
}
