import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { DialogBase, DialogBaseProps } from '../DialogBase'

export type ConfirmationButtonsProps = {
  onConfirm: React.MouseEventHandler<HTMLButtonElement>
  onCancel: DialogBaseProps['onCancel']
  confirmButtonText?: string
  confirmButtonClassName?: string
  confirmButtonColor?: ButtonProps['color']
  confirmButtonVariant?: ButtonProps['variant']
  confirmButtonDisabled?: boolean
  hasCancelButton?: boolean
}

export const CANCEL_BUTTON_TEXT = 'Cancel'

export function CancelButton(props: { onCancel: () => void }) {
  return (
    <Button variant="outlined" onClick={() => props.onCancel()}>
      {CANCEL_BUTTON_TEXT}
    </Button>
  )
}

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
      {hasCancelButton && <CancelButton onCancel={onCancel} />}
      <Button
        variant={confirmButtonVariant}
        className={confirmButtonClassName}
        color={confirmButtonColor}
        onClick={onConfirm}
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
export function ConfirmationDialog(props: ConfirmationDialogProps) {
  const {
    confirmButtonText,
    confirmButtonClassName,
    confirmButtonColor,
    confirmButtonVariant,
    confirmButtonDisabled,
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
          confirmButtonDisabled={confirmButtonDisabled}
          onConfirm={onConfirm}
          onCancel={onCancel}
          hasCancelButton={hasCancelButton}
        />
      }
      {...rest}
    />
  )
}
