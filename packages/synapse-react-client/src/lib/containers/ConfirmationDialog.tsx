import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { DialogBase, DialogBaseProps } from './DialogBase'

export type ConfirmationButtonsProps = {
  onConfirm: () => void
  onCancel: DialogBaseProps['onCancel']
  confirmButtonText?: string
  confirmButtonClassName?: string
  confirmButtonColor?: ButtonProps['color']
  confirmButtonVariant?: ButtonProps['variant']
  confirmButtonDisabled?: boolean
  hasCancelButton?: boolean
}

export const CANCEL_BUTTON_TEXT = 'Cancel'

export const ConfirmationButtons = (props: ConfirmationButtonsProps) => {
  const {
    confirmButtonText = 'OK',
    confirmButtonClassName,
    confirmButtonColor = 'primary',
    confirmButtonVariant = 'contained',
    confirmButtonDisabled = false,
    onConfirm,
    onCancel,
    hasCancelButton = true,
  } = props
  return (
    <>
      {hasCancelButton && (
        <Button variant="outlined" onClick={() => onCancel()}>
          {CANCEL_BUTTON_TEXT}
        </Button>
      )}
      <Button
        variant={confirmButtonVariant}
        className={confirmButtonClassName}
        color={confirmButtonColor}
        onClick={() => onConfirm()}
        disabled={confirmButtonDisabled}
      >
        {confirmButtonText}
      </Button>
    </>
  )
}

export type ConfirmationDialogProps = DialogBaseProps & ConfirmationButtonsProps

/**
 * A confirmation dialog built using MUI components.
 */
export const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    confirmButtonText,
    confirmButtonClassName,
    confirmButtonColor,
    confirmButtonVariant,
    onConfirm,
    onCancel,
    hasCancelButton,
    ...rest
  } = props
  return (
    <DialogBase
      onCancel={onCancel}
      actions={
        <ConfirmationButtons
          confirmButtonText={confirmButtonText}
          confirmButtonClassName={confirmButtonClassName}
          confirmButtonColor={confirmButtonColor}
          confirmButtonVariant={confirmButtonVariant}
          onConfirm={onConfirm}
          onCancel={onCancel}
          hasCancelButton={hasCancelButton}
        />
      }
      {...rest}
    />
  )
}
