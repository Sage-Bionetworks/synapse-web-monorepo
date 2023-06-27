import React from 'react'
import { Badge, Box, Button, Paper, Typography } from '@mui/material'

export type RowSelectionUIProps = {
  show?: boolean
  selectedRowCount: number
  onClearSelection: () => void
  customControls?: React.ReactNode
}

/**
 * UI-only component for displaying the number of table rows selected, along with actions that can be performed on those rows
 */
export function RowSelectionUI(props: RowSelectionUIProps) {
  const {
    show = true,
    selectedRowCount,
    onClearSelection,
    customControls = <></>,
  } = props
  if (!show) {
    return <></>
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '70px',
        zIndex: 1,
      }}
    >
      <Button
        variant="text"
        color="error"
        sx={{ ml: 1 }}
        onClick={() => {
          onClearSelection()
        }}
      >
        Clear Selection
      </Button>
      <Box sx={{ display: 'grid', gridTemplateColumns: '30px 140px' }}>
        <Badge
          badgeContent={selectedRowCount}
          color="primary"
          sx={{ right: '18px', top: '12px' }}
        />{' '}
        <Typography variant="body1">Rows Selected</Typography>
      </Box>
      <div>{customControls}</div>
    </Paper>
  )
}
