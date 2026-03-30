import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'

export type WarningDialogProps<T = any> = {
  title: string
  content: string | ReactNode
  confirmButtonText?: string
  className?: string
  open: boolean
  onConfirm: (...args: T[]) => unknown
  onConfirmCallbackArgs?: Parameters<WarningDialogProps['onConfirm']>
  confirmButtonColor?: ButtonProps['color']
  confirmButtonDisabled?: boolean
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
    confirmButtonDisabled,
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
        disabled: confirmButtonDisabled,
      }}
      onCancel={onCancel}
      onConfirm={() => onConfirm(...(onConfirmCallbackArgs ?? []))}
    />
  )
}

export default WarningDialog
