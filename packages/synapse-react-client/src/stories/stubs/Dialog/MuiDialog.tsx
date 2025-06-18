import { HelpPopover } from '@/components/HelpPopover/HelpPopover'
import IconSvg from '@/components/IconSvg/IconSvg'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { ReactNode } from 'react'

export interface DialogProps extends Omit<MuiDialogProps, 'content'> {
  title: string
  content: ReactNode
  helpText?: string
}

export const Dialog = (props: DialogProps) => {
  const { title, content, helpText, ...rest } = props

  return (
    <MuiDialog {...rest}>
      <DialogTitle>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: '5px',
          }}
        >
          {title}
          {helpText && <HelpPopover markdownText={helpText} />}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">OK</Button>
      </DialogActions>
    </MuiDialog>
  )
}
