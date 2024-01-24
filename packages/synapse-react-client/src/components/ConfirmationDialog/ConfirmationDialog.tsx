import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { DialogBase, DialogBaseProps } from '../DialogBase'
import { defaults } from 'lodash-es'

export type ConfirmationButtonsProps = {
  onConfirm: React.MouseEventHandler<HTMLButtonElement>
  onCancel: DialogBaseProps['onCancel']
  confirmButtonProps?: Omit<ButtonProps, 'onClick'>
  cancelButtonProps?: Omit<ButtonProps, 'onClick'>
  hasCancelButton?: boolean
}

export const CANCEL_BUTTON_TEXT = 'Cancel'

const DEFAULT_CONFIRM_BUTTON_PROPS: Omit<ButtonProps, 'onClick'> = {
  children: 'OK',
  color: 'primary',
  variant: 'contained',
}

const DEFAULT_CANCEL_BUTTON_PROPS: Omit<ButtonProps, 'onClick'> = {
  children: CANCEL_BUTTON_TEXT,
  variant: 'outlined',
}

export const ConfirmationButtons = (props: ConfirmationButtonsProps) => {
  const { onConfirm, onCancel, hasCancelButton = true } = props

  const confirmButtonProps: Omit<ButtonProps, 'onClick'> = defaults(
    {},
    props.confirmButtonProps,
    DEFAULT_CONFIRM_BUTTON_PROPS,
  )

  const cancelButtonProps: Omit<ButtonProps, 'onClick'> = defaults(
    {},
    props.cancelButtonProps,
    DEFAULT_CANCEL_BUTTON_PROPS,
  )

  return (
    <>
      {hasCancelButton && <Button {...cancelButtonProps} onClick={onCancel} />}
      <Button {...confirmButtonProps} onClick={onConfirm} />
    </>
  )
}

export type ConfirmationDialogProps = DialogBaseProps & ConfirmationButtonsProps

/**
 * A confirmation dialog built using MUI components.
 */
export function ConfirmationDialog(props: ConfirmationDialogProps) {
  const {
    onConfirm,
    onCancel,
    hasCancelButton,
    confirmButtonProps,
    cancelButtonProps,
    ...rest
  } = props
  return (
    <DialogBase
      onCancel={onCancel}
      actions={
        <ConfirmationButtons
          confirmButtonProps={confirmButtonProps}
          cancelButtonProps={cancelButtonProps}
          onConfirm={onConfirm}
          onCancel={onCancel}
          hasCancelButton={hasCancelButton}
        />
      }
      {...rest}
    />
  )
}
