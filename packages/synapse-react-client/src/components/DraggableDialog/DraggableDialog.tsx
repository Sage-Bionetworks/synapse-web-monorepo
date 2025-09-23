import Draggable, { DraggableBounds } from 'react-draggable'
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  DialogContent,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRef, ReactNode, useEffect, useState } from 'react'

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const draggableRef = useRef<HTMLDivElement>(null)
  const [bounds, setBounds] = useState<DraggableBounds>()
  const position = { x: 100, y: 100 }

  useEffect(() => {
    function updateBounds() {
      if (draggableRef.current) {
        const { offsetWidth } = draggableRef.current
        const margin = 100

        setBounds({
          left: -(offsetWidth - margin),
          top: 0,
          right: window.innerWidth - margin,
          bottom: window.innerHeight - margin,
        })
      }
    }
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [])

  if (!open) {
    return null
  }

  const paperContent = (
    <Paper
      ref={draggableRef}
      elevation={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        width: '600px',
        ...(isMobile && {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          height: '80vh',
          maxWidth: '600px',
          maxHeight: '500px',
        }),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap="5px"
        className="drag-handle"
        sx={{
          padding: '20px',
          cursor: 'move',
        }}
      >
        <Typography variant="headline1">{title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ mx: 2 }} />
      <DialogContent
        sx={{
          height: '100%',
          maxWidth: '100%',
          padding: '16px',
        }}
      >
        {children}
      </DialogContent>
    </Paper>
  )

  return (
    <Box sx={{ position: 'fixed', zIndex: 1000, top: 0 }}>
      {isMobile ? (
        paperContent
      ) : (
        <Draggable
          defaultPosition={position}
          nodeRef={draggableRef}
          bounds={bounds}
          handle=".drag-handle"
        >
          {paperContent}
        </Draggable>
      )}
    </Box>
  )
}
