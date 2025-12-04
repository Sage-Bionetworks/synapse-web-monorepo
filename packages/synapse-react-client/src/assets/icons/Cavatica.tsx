import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as CavaticaSvg } from '../logos/other/cavatica-logo.svg'

export const Cavatica = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} viewBox="0 0 72 69">
      <CavaticaSvg />
    </SvgIcon>
  )
}
