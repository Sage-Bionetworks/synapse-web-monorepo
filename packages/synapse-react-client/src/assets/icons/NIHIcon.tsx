import React from 'react'
import { Box } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import NIHSvg from './nih.svg?react'

export const NIHIcon = ({ sx }: SvgIconProps): React.ReactNode => {
  return (
    <Box
      component={NIHSvg as React.ElementType}
      sx={[
        { display: 'inline-block', verticalAlign: 'middle', height: '1em' },
        sx ?? {},
        { width: 'auto' },
      ]}
    />
  )
}
