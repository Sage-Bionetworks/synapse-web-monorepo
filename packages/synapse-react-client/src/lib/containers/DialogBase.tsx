import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
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

export const CLOSE_BUTTON_LABEL = 'close'

export const CloseButton: React.FC<CloseButtonProps> = ({
  sx = { color: 'grey.700' },
  onClick,
}) => {
  return (
    <IconButton sx={sx} onClick={onClick} aria-label={CLOSE_BUTTON_LABEL}>
      <CloseIcon />
    </IconButton>
  )
}

export type DialogBaseProps = {
  open: boolean
  title: React.ReactNode
  content: React.ReactNode
  actions?: React.ReactNode
  className?: string
  onCancel: () => void
  hasCloseButton?: boolean
  helpMarkdown?: string
  helpUrl?: string
  maxWidth?: DialogProps['maxWidth']
  fullWidth?: boolean
  sx?: DialogProps['sx']
}

/**
 * A dialog built using MUI components.
 */
export const DialogBase = ({
  open,
  title,
  content,
  actions,
  className,
  onCancel,
  hasCloseButton = true,
  helpMarkdown,
  helpUrl,
  maxWidth = 'sm',
  fullWidth = true,
  sx,
}: DialogBaseProps) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      className={className}
      onClose={() => onCancel()}
      sx={sx}
    >
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {title}
          {helpMarkdown && (
            <HelpPopover markdownText={helpMarkdown} helpUrl={helpUrl} />
          )}
          <Box sx={{ flexGrow: 1 }} />
          {hasCloseButton && <CloseButton onClick={() => onCancel()} />}
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  )
}
