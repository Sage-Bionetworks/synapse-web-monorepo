import { ButtonProps } from '@mui/material'
import React from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'

export type WarningDialogProps<T = any> = {
  title: string
  content: string | JSX.Element
  confirmButtonText?: string
  className?: string
  open: boolean
  onConfirm: (...args: T[]) => unknown
  onConfirmCallbackArgs?: Parameters<WarningDialogProps['onConfirm']>
  confirmButtonColor?: ButtonProps['color']
  onCancel: () => void
}

export function WarningDialog(props: WarningDialogProps) {
  const {
    title,
    content,
    confirmButtonText = 'OK',
    className,
    open,
    onConfirm,
    confirmButtonColor = 'primary',
    onCancel,
    onConfirmCallbackArgs,
  } = props
  return (
    <ConfirmationDialog
      open={open}
      title={title}
      content={content}
      className={className}
      confirmButtonProps={{
        children: confirmButtonText,
        color: confirmButtonColor,
      }}
      onCancel={onCancel}
      onConfirm={() => onConfirm(...(onConfirmCallbackArgs ?? []))}
    />
  )
}

export default WarningDialog
