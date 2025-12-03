import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './FileWithShield.svg'

const FileWithShield = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} viewBox={'0 0 18 18'}>
      <Svg />
    </SvgIcon>
  )
}

export default FileWithShield
