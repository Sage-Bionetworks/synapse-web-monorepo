import Draggable from 'react-draggable'
import { Button, Typography, Paper } from '@mui/material'
import { useState, useEffect } from 'react'

export default function DraggableDialogue() {
  const [open, setOpen] = useState(false)
  const position = { x: 100, y: 100 }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(old => !old)}
      >
        Toggle Popper
      </Button>
      {open && (
        <Draggable defaultPosition={position}>
          <Paper elevation={5}>
            <Typography variant={'h3'}>Try to drag me</Typography>
          </Paper>
        </Draggable>
      )}
    </div>
  )
}
