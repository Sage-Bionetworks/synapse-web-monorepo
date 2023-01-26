import React from 'react'
import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material'
import { HelpPopover } from '../../../lib/containers/HelpPopover'
import IconSvg from '../../../lib/containers/IconSvg'

export interface DialogProps extends MuiDialogProps {
  title: string
  content: React.ReactNode
  helpText?: string
}

export const Dialog = (props: DialogProps) => {
  const { title, content, helpText, ...rest } = props
  return (
    <MuiDialog {...rest}>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {title}
          <HelpPopover markdownText={helpText} />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={props.onClose}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={props.onClose}>
          OK
        </Button>
      </DialogActions>
    </MuiDialog>
  )
}
