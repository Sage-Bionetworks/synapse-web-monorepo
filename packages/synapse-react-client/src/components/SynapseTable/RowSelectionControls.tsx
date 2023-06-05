import React from 'react'
import { CustomControl } from './TopLevelControls'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { Badge, Box, Button, Paper, Typography } from '@mui/material'

export type RowSelectionControlsProps = {
  customControls: CustomControl[]
  data?: QueryResultBundle
  selectedRows: Row[]
  setSelectedRows: (newState: Row[]) => void
  refresh: () => void
}

export const RowSelectionControls: React.FunctionComponent<
  RowSelectionControlsProps
> = ({ customControls, data, selectedRows, setSelectedRows, refresh }) => {
  if (selectedRows.length == 0) {
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
        sx={{ marginLeft: '10px' }}
        onClick={() => {
          setSelectedRows([])
        }}
      >
        Clear Selection
      </Button>
      <Box sx={{ display: 'grid', gridTemplateColumns: '30px 140px' }}>
        <Badge
          badgeContent={selectedRows.length}
          color="primary"
          sx={{ right: '18px', top: '12px' }}
        />{' '}
        <Typography variant="body1">Rows Selected</Typography>
      </Box>
      <div>
        {customControls.map(customControl => {
          return (
            <Button
              key={customControl.buttonText}
              variant="contained"
              style={{ marginRight: '10px' }}
              onClick={() =>
                customControl.onClick({ data, selectedRows, refresh })
              }
              startIcon={customControl.icon}
            >
              {customControl.buttonText}
            </Button>
          )
        })}
      </div>
    </Paper>
  )
}
