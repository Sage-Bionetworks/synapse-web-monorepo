import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './UnpackagableFile.svg'

const UnpackagableFile = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props}>
      <Svg />
    </SvgIcon>
  )
}

export default UnpackagableFile
