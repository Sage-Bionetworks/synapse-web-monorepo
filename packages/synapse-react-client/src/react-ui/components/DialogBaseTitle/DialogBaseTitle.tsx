import Box from '@mui/material/Box'
import DialogTitle from '@mui/material/DialogTitle'
import Stack from '@mui/material/Stack'
import { ReactNode } from 'react'
import DialogCloseButton from '../DialogBase/DialogCloseButton'

export type DialogBaseTitleProps = {
  title: ReactNode
  titleHelp?: ReactNode
  hasCloseButton?: boolean
  onCancel: () => void
}

export function DialogBaseTitle(props: DialogBaseTitleProps) {
  const { title, titleHelp, hasCloseButton = true, onCancel } = props
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
          {titleHelp}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {hasCloseButton && <DialogCloseButton onClick={() => onCancel()} />}
      </Stack>
    </DialogTitle>
  )
}
