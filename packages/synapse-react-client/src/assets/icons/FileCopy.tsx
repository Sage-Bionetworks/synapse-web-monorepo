import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './fileCopy.svg'

const FileCopy = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props}>
      <Svg />
    </SvgIcon>
  )
}

export default FileCopy
