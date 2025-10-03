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
import { useResizable } from '../ResizableContainer/hooks/useResizable'
import { ResizableContainer } from '../ResizableContainer/ResizableContainer'

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
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const { width, height, handleResizeStart } = useResizable({
    initialWidth: 600,
    initialHeight: 500,
    minWidth: 300,
    minHeight: 200,
    maxWidth: 1200,
    maxHeight: 800,
  })

  useEffect(() => {
    // Calculate draggable bounds to keep dialog within viewport with margin
    function updateBounds() {
      const margin = 100
      const dialogWidth = width

      const newBounds = {
        left: -(dialogWidth - margin),
        top: 0,
        right: window.innerWidth - margin,
        bottom: window.innerHeight - margin,
      }

      setBounds(newBounds)

      // Clamp dialog position to new bounds to keep it visible after window resize
      setPosition(prevPosition => ({
        x: Math.max(newBounds.left, Math.min(prevPosition.x, newBounds.right)),
        y: Math.max(newBounds.top, Math.min(prevPosition.y, newBounds.bottom)),
      }))
    }
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [width, height])

  if (!open) {
    return null
  }

  const paperContent = (
    <Paper
      elevation={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: isMobile ? '95vh' : `${height}px`,
        width: isMobile ? '95vw' : `${width}px`,
        ...(isMobile && {
          position: 'fixed',
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
    <Box sx={{ position: 'fixed', zIndex: 1000, top: 0, left: 0 }}>
      {isMobile ? (
        paperContent
      ) : (
        <Draggable
          position={position}
          onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
          nodeRef={draggableRef}
          bounds={bounds}
          handle=".drag-handle"
        >
          <div ref={draggableRef}>
            <ResizableContainer
              width={width}
              height={height}
              onResizeStart={handleResizeStart}
            >
              {paperContent}
            </ResizableContainer>
          </div>
        </Draggable>
      )}
    </Box>
  )
}
