import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  SxProps,
} from '@mui/material'
import React from 'react'
import { HelpPopover, HelpPopoverProps } from './HelpPopover/HelpPopover'

const EMPTY_OBJECT = {}

export type CloseButtonProps = {
  sx?: SxProps
  onClick?: () => void
}

export const CLOSE_BUTTON_LABEL = 'close'
const DEFAULT_CLOSEBUTTON_SX: SxProps = { color: 'grey.700' }

export const CloseButton: React.FC<CloseButtonProps> = ({
  sx = DEFAULT_CLOSEBUTTON_SX,
  onClick,
}) => {
  return (
    <IconButton sx={sx} onClick={onClick} aria-label={CLOSE_BUTTON_LABEL}>
      <CloseIcon />
    </IconButton>
  )
}

export type DialogBaseTitleProps = {
  title: React.ReactNode
  titleHelpPopoverProps?: HelpPopoverProps
  hasCloseButton?: boolean
  onCancel: () => void
}

export function DialogBaseTitle(props: DialogBaseTitleProps) {
  const {
    title,
    titleHelpPopoverProps,
    hasCloseButton = true,
    onCancel,
  } = props
  return (
    <DialogTitle>
      <Stack direction="row" alignItems={'center'} gap={'5px'}>
        {title}
        {titleHelpPopoverProps && <HelpPopover {...titleHelpPopoverProps} />}
        <Box sx={{ flexGrow: 1 }} />
        {hasCloseButton && <CloseButton onClick={() => onCancel()} />}
      </Stack>
    </DialogTitle>
  )
}

export type DialogBaseProps = DialogBaseTitleProps & {
  open: boolean
  content: React.ReactNode
  actions?: React.ReactNode
  className?: string
  onCancel: () => void
  maxWidth?: DialogProps['maxWidth']
  fullWidth?: boolean
  sx?: DialogProps['sx']
  contentProps?: DialogContentProps
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
  hasCloseButton,
  titleHelpPopoverProps,
  maxWidth = 'sm',
  fullWidth = true,
  sx,
  contentProps = EMPTY_OBJECT,
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
      <DialogBaseTitle
        title={title}
        titleHelpPopoverProps={titleHelpPopoverProps}
        hasCloseButton={hasCloseButton}
        onCancel={onCancel}
      />
      <DialogContent {...contentProps}>{content}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  )
}
