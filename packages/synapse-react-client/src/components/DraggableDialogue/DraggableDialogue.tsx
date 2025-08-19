import Draggable from 'react-draggable'
import { Button, Typography, Paper } from '@mui/material'
import { useState, useRef } from 'react'

export default function DraggableDialogue() {
  const [open, setOpen] = useState(false)
  const draggableRef = useRef<HTMLDivElement>(null)

  const position = { x: 100, y: 100 }

  return (
    <div>
      <Draggable defaultPosition={position} nodeRef={draggableRef}>
        <Paper
          ref={draggableRef}
          elevation={5}
          sx={{
            height: '350px',
            width: '350px',
          }}
        >
          <Typography
            variant={'h3'}
            sx={{
              backgroundColor: 'primary.main',
              fontSize: '14px',
              color: 'white',
              padding: '20px',
            }}
          >
            Draggable component header
          </Typography>
          <Typography
            variant={'body1'}
            sx={{
              padding: '20px',
            }}
          >
            This is a draggable dialogue component body.
          </Typography>
        </Paper>
      </Draggable>
    </div>
  )
}
