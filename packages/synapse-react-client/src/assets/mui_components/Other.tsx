import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const Other = (props: SvgIconProps) => {
  const { fill, style, ...rest } = props
  return (
    <SvgIcon style={style} {...rest}>
      <circle cx="4.71456" cy="12.7146" r="1.71456" fill={fill} />
      <circle cx="11.5728" cy="12.7146" r="1.71456" fill={fill} />
      <circle cx="18.431" cy="12.7146" r="1.71456" fill={fill} />
    </SvgIcon>
  )
}

export default Other
