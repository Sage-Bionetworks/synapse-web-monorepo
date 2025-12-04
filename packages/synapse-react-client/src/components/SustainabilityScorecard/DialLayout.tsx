import React from 'react'
import { Box, Stack, Tooltip, Typography } from '@mui/material'
import { InfoTwoTone } from '@mui/icons-material'
import { ReactElement } from 'react'
import { ScoreDescriptor } from './Dial'

export type DialLayoutProps = {
  dial: ReactElement
  label: ScoreDescriptor
  toolTipText?: string
}

// Displayed on entity header of details page
const DialLayout = ({
  dial,
  label,
  toolTipText,
}: DialLayoutProps): React.ReactNode => {
  return (
    <Stack sx={{ alignItems: 'center', gap: '10px' }}>
      {dial}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography variant="smallText1" sx={{ margin: '0 !important' }}>
          {label}
        </Typography>
        {toolTipText && (
          <Tooltip title={toolTipText}>
            <InfoTwoTone sx={{ width: '18px', height: '18px' }} />
          </Tooltip>
        )}
      </Box>
    </Stack>
  )
}

export default DialLayout
