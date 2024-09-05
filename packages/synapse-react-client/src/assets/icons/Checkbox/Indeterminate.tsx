import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'
import { ReactComponent as IndeterminateIcon } from './Indeterminate.svg'

function Indeterminate(props: SvgIconProps) {
  return <SvgIcon {...props} component={IndeterminateIcon} inheritViewBox />
}
export default Indeterminate
