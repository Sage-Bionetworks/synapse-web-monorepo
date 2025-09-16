import Draggable from 'react-draggable'
import { Box, IconButton, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRef, ReactNode } from 'react'

type DraggableDialogProps = {
  open?: boolean
  onClose?: () => void
  children: ReactNode
}

export default function DraggableDialog({
  open = false,
  onClose,
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
          <Box
            sx={{
              alignSelf: 'flex-end',
              padding: '20px',
            }}
          >
            <IconButton
              onClick={onClose}
              sx={theme => ({
                position: 'absolute',
                top: theme.spacing(1.5),
                right: theme.spacing(1.5),
              })}
            >
              <CloseIcon />
            </IconButton>
          </Box>
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
