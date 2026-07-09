import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const NIHIcon = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon viewBox="4 8 36 19" {...props}>
      <rect x="0" y="0" width="44" height="35" fill="#20558A" rx="2" />
      {/* N */}
      <path
        d="M5.82422 9.72266V25.2783H8.41295V13.8708L15.5324 25.2783H18.1211V9.72266H15.5324V21.1301L8.41295 9.72266H5.82422Z"
        fill="white"
      />
      {/* I */}
      <path d="M20.709 9.72266V25.2783H23.2986V9.72266H20.709Z" fill="white" />
      {/* H */}
      <path
        d="M25.8873 9.72266V25.2783H28.4752V18.7968H35.5946V25.2783H38.1833V9.72266H35.5946V16.2042H28.4752V9.72266H25.8873Z"
        fill="white"
      />
    </SvgIcon>
  )
}
