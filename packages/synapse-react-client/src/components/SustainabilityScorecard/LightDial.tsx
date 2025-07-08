import { Box, Stack, Tooltip, Typography } from '@mui/material'
import { InfoTwoTone } from '@mui/icons-material'
import { ReactElement } from 'react'
import { ScoreDescriptor } from './Dial'

export type LightDialProps = {
  dial: ReactElement
  label: ScoreDescriptor
  toolTipText?: string
}

// Displayed on entity header of details page
const LightDial = ({ dial, label, toolTipText }: LightDialProps) => {
  return (
    <Stack sx={{ alignItems: 'center', gap: '10px' }}>
      {dial}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography variant="body2" sx={{ margin: '0 !important' }}>
          {label}
        </Typography>
        <Tooltip title={toolTipText}>
          <InfoTwoTone sx={{ width: '18px', height: '18px' }} />
        </Tooltip>
      </Box>
    </Stack>
  )
}

export default LightDial
