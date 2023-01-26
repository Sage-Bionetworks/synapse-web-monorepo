import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const RefreshIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} height={40} viewBox="0 0 40 40">
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="9"
        y="12"
        width="22"
        height="16"
      >
        <path
          d="M27 16L23 20H26C26 21.5913 25.3679 23.1174 24.2426 24.2426C23.1174 25.3679 21.5913 26 20 26C19 26 18.03 25.75 17.2 25.3L15.74 26.76C16.97 27.54 18.43 28 20 28C22.1217 28 24.1566 27.1571 25.6569 25.6569C27.1571 24.1566 28 22.1217 28 20H31L27 16ZM14 20C14 18.4087 14.6321 16.8826 15.7574 15.7574C16.8826 14.6321 18.4087 14 20 14C21 14 21.97 14.25 22.8 14.7L24.26 13.24C23.03 12.46 21.57 12 20 12C17.8783 12 15.8434 12.8429 14.3431 14.3431C12.8429 15.8434 12 17.8783 12 20H9L13 24L17 20"
          fill="#9E9E9E"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width="40" height="40" fill="#282828" />
      </g>
    </SvgIcon>
  )
}
