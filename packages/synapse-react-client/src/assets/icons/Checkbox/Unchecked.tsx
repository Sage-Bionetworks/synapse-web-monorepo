import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'
import { ReactComponent as UncheckedIcon } from './Unchecked.svg'

function Unchecked(props: SvgIconProps) {
  return <SvgIcon {...props} component={UncheckedIcon} inheritViewBox />
}
export default Unchecked
