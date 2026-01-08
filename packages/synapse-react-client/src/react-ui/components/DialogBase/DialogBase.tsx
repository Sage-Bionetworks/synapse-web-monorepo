import mergeSx from '@/react-ui/theme/utils/mergeSx'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'
import { ComponentType, ReactNode } from 'react'
import DialogBaseTitle, {
  DialogBaseTitleProps,
} from '@/react-ui/components/DialogBaseTitle'

const EMPTY_OBJECT = {}

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
const DialogBase: ComponentType<DialogBaseProps> = ({
  open,
  title,
  content,
  actions,
  className,
  onCancel,
  hasCloseButton,
  titleHelp,
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
      sx={mergeSx(sx, theme => ({
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
        titleHelp={titleHelp}
        hasCloseButton={hasCloseButton}
        onCancel={onCancel}
      />
      <DialogContent {...contentProps}>{content}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  )
}

export default DialogBase
