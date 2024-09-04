import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'

const Checked = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} inheritViewBox>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="11"
          height="11"
          fill="white"
          stroke="currentColor"
        />
      </svg>
    </SvgIcon>
  )
}

export default Checked
