import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import DropdownSelect from '../DropdownSelect'

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

export function AccessLevelMenu({
  onChange,
  initAccessLevel,
}: AccessLevelMenuProps) {
  const initOption = accessLevelOptions.findIndex(
    v => v.value == initAccessLevel,
  )
  const options = accessLevelOptions.map(v => v.label)
  const [selectedIndex, setSelectedIndex] = useState(initOption)
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '20px',
      }}
    >
      <Typography
        variant="label"
        sx={{ gridColumn: '2', mt: '10px', mr: '15px' }}
      >
        Access:
      </Typography>
      <DropdownSelect
        variant={'outlined'}
        options={options}
        selectedIndex={selectedIndex}
        setSelectedIndex={index => {
          if (selectedIndex !== index) {
            setSelectedIndex(index)
            onChange(accessLevelOptions[index].value)
          }
        }}
      />
    </Box>
  )
}

export default AccessLevelMenu
