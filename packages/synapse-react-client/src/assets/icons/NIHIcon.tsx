import { Box } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'
import { ReactComponent as NIHSvg } from './nih.svg'

export const NIHIcon = ({ sx }: SvgIconProps): React.ReactNode => {
  return (
    <Box
      sx={[
        {
          display: 'inline-flex',
          verticalAlign: 'middle',
          height: '1em',
          lineHeight: 0,
          width: 'auto',
        },
        sx ?? {},
        // Always keep width auto to preserve the landscape aspect ratio
        { width: 'auto' },
      ]}
    >
      <NIHSvg height="100%" />
    </Box>
  )
}
