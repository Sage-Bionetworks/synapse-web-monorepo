import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  SxProps,
} from '@mui/material'
import React from 'react'
import { HelpPopover } from './HelpPopover'

export type CloseButtonProps = {
  sx?: SxProps
  onClick?: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  sx = { color: 'grey.700' },
  onClick,
}) => {
  return (
    <IconButton sx={sx} onClick={onClick} aria-label="close">
      <CloseIcon />
    </IconButton>
  )
}

export type ConfirmationDialogProps = {
  open: boolean
  title: string
  content: string | JSX.Element
  confirmButtonText?: string
  confirmButtonColor?: ButtonProps['color']
  className?: string
  onConfirm: () => unknown | Promise<void>
  onCancel: () => void
  hasCloseButton?: boolean
  helpMarkdown?: string
  helpUrl?: string
  maxWidth?: DialogProps['maxWidth']
}

/**
 * A confirmation dialog built using MUI components.
 */
export const ConfirmationDialog = ({
  open,
  title,
  content,
  confirmButtonText = 'OK',
  confirmButtonColor = 'primary',
  className,
  onConfirm,
  onCancel,
  hasCloseButton = true,
  helpMarkdown,
  helpUrl,
  maxWidth = 'sm',
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      open={open}
      className={className}
      onClose={() => onCancel()}
    >
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {title}
          {helpMarkdown && (
            <HelpPopover markdownText={helpMarkdown!} helpUrl={helpUrl} />
          )}
          <Box sx={{ flexGrow: 1 }} />
          {hasCloseButton && <CloseButton onClick={() => onCancel()} />}
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
          onClick={() => onConfirm()}
        >
          {confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
