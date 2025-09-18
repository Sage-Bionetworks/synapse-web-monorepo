import Draggable from 'react-draggable'
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRef, ReactNode } from 'react'

type DraggableDialogProps = {
  open?: boolean
  onClose?: () => void
  children: ReactNode
  title?: ReactNode
}

export default function DraggableDialog({
  open = false,
  onClose,
  title,
  children,
}: DraggableDialogProps) {
  const draggableRef = useRef<HTMLDivElement>(null)
  const position = { x: 100, y: 100 }

  if (!open) {
    return null
  }

  return (
    <Box sx={{ position: 'fixed', zIndex: 1000, top: 0 }}>
      <Draggable defaultPosition={position} nodeRef={draggableRef}>
        <Paper
          ref={draggableRef}
          elevation={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '500px',
            width: '600px',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap="5px"
            sx={{
              padding: '20px',
            }}
          >
            <Typography variant="headline1">{title}</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ mx: 2 }} />
          <Box
            sx={{
              height: '100%',
              maxWidth: '100%',
              padding: '16px',
            }}
          >
            {children}
          </Box>
        </Paper>
      </Draggable>
    </Box>
  )
}
