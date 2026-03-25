import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './PackagableFile.svg'

const PackagableFile = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} viewBox="0 0 20 16">
      <Svg />
    </SvgIcon>
  )
}

export default PackagableFile
