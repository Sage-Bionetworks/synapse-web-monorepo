import Draggable from 'react-draggable'
import { Box, Paper } from '@mui/material'
import { useRef } from 'react'
import { SynapseChat } from '@/components/SynapseChat/index'

export default function DraggableDialog() {
  const draggableRef = useRef<HTMLDivElement>(null)

  const position = { x: 100, y: 100 }

  return (
    <div>
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
              maxHeight: '100%',
              maxWidth: '100%',
              overflow: 'auto',
              padding: '16px',
            }}
          >
            <SynapseChat />
          </Box>
        </Paper>
      </Draggable>
    </div>
  )
}
