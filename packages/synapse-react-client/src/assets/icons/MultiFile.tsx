import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './MultiFile.svg'

const MultiFile = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props}>
      <Svg />
    </SvgIcon>
  )
}

export default MultiFile
