import React, { useState } from 'react'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { ArrowDropDown } from '@mui/icons-material'

export type AccessLevelMenuProps = {
  initAccessLevel: AgentAccessLevel
  onChange: (newAccessLevel: AgentAccessLevel) => void
}

const accessLevelOptions = [
  { value: AgentAccessLevel.PUBLICLY_ACCESSIBLE, label: 'Public Data Only' },
  {
    value: AgentAccessLevel.READ_YOUR_PRIVATE_DATA,
    label: 'Read Your Private Data',
  },
  {
    value: AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA,
    label: 'Read & Write Your Data',
  },
]

export const AccessLevelMenu: React.FunctionComponent<AccessLevelMenuProps> = ({
  onChange,
  initAccessLevel,
}) => {
  const initOption = accessLevelOptions.find(v => v.value == initAccessLevel)
  const [selectedAccessLevel, setSelectedAccessLevel] = useState(initOption)
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 65px 240px',
        mt: '20px',
      }}
    >
      <Typography variant="label" sx={{ gridColumn: '2', mt: '10px' }}>
        Access:
      </Typography>
      <Button
        sx={{ gridColumn: '3' }}
        aria-controls="access-level-menu"
        aria-haspopup="true"
        onClick={event => {
          setAnchorEl(event.currentTarget)
        }}
        variant="outlined"
        endIcon={<ArrowDropDown />}
      >
        {selectedAccessLevel!.label}
      </Button>
      <Menu
        id="access-level-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {accessLevelOptions.map(option => (
          <MenuItem
            key={option.value}
            selected={option.value === selectedAccessLevel!.value}
            onClick={() => {
              setSelectedAccessLevel(option)
              onChange(option.value)
              handleClose()
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
    // <Autocomplete
    //   disableClearable
    //   options={accessLevelOptions}
    //   getOptionLabel={(option) => option.label}
    //   value={selectedAccessLevel}
    //   onChange={(_event, newValue)=>{
    //     if (newValue) {
    //       setSelectedAccessLevel(newValue)
    //       onChange(newValue.value)
    //     }
    //   }}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Access Level" variant="outlined" />
    //   )}
    // />
  )
}

export default AccessLevelMenu
