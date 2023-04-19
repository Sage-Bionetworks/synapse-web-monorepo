import React from 'react'
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  SxProps,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

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

export type CloseButtonProps = {
  sx?: SxProps
  onClick?: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  sx = { color: 'grey.700' },
  onClick,
}) => {
  return (
    <IconButton sx={sx} onClick={onClick}>
      <CloseIcon />
    </IconButton>
  )
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
    <Dialog
      fullWidth
      open={open}
      className={className}
      onClose={() => onCancel()}
    >
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {title}
          <Box sx={{ flexGrow: 1 }} />
          <CloseButton onClick={() => onCancel()} />
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color={confirmButtonColor}
          onClick={() => onConfirm(...(onConfirmCallbackArgs ?? []))}
        >
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WarningDialog
