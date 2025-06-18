import { spreadSx } from '@/theme/spreadSx'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/material/styles'
import { ReactNode } from 'react'
import { HelpPopover, HelpPopoverProps } from './HelpPopover/HelpPopover'

const EMPTY_OBJECT = {}

export type CloseButtonProps = {
  sx?: SxProps
  onClick?: () => void
}

export const CLOSE_BUTTON_LABEL = 'close'
const DEFAULT_CLOSEBUTTON_SX: SxProps = { color: 'grey.700' }

export function CloseButton({
  sx = DEFAULT_CLOSEBUTTON_SX,
  onClick,
}: CloseButtonProps) {
  return (
    <IconButton sx={sx} onClick={onClick} aria-label={CLOSE_BUTTON_LABEL}>
      <CloseIcon />
    </IconButton>
  )
}

export type DialogBaseTitleProps = {
  title: ReactNode
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
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          gap: '5px',
        }}
      >
        {title}
        <Box
          component={'span'}
          sx={{
            fontSize: '14px',
          }}
        >
          {titleHelpPopoverProps && <HelpPopover {...titleHelpPopoverProps} />}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {hasCloseButton && <CloseButton onClick={() => onCancel()} />}
      </Stack>
    </DialogTitle>
  )
}

export type DialogBaseProps = DialogBaseTitleProps & {
  open: boolean
  content: ReactNode
  actions?: ReactNode
  className?: string
  onCancel: () => void
  maxWidth?: DialogProps['maxWidth']
  fullWidth?: boolean
  sx?: DialogProps['sx']
  contentProps?: DialogContentProps
  DialogProps?: Partial<DialogProps>
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
  DialogProps,
}: DialogBaseProps) => {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      className={className}
      onClose={() => onCancel()}
      sx={spreadSx(sx, theme => ({
        [theme.breakpoints.down('sm')]: {
          width: '100vw',
          '.MuiDialog-container > .MuiPaper-root': {
            padding: '33px',
            margin: 0,
            width: '100%',
            height: '100%',
            maxHeight: 'unset',
          },
        },
      }))}
      {...DialogProps}
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
