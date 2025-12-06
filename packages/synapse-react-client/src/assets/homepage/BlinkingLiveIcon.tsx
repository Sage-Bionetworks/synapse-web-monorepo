import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { styled } from '@mui/material'
import { Color } from '@mui/material/styles'

export const LiveIcon = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={props.className}
      >
        <circle cx="50" cy="50" r="40" />
      </svg>
    </SvgIcon>
  )
}

export const BlinkingLiveIcon = styled(LiveIcon)(({ theme }) => ({
  animation: 'blink 2s infinite',
  '@keyframes blink': {
    '0%, 100%': {
      fill: (theme.palette.primary as unknown as Color)[800],
    },
    '50%': {
      fill: (theme.palette.secondary as unknown as Color)[700],
    },
  },
  width: '16px',
  transition: 'fill 1s ease-in-out',
}))

export default BlinkingLiveIcon
