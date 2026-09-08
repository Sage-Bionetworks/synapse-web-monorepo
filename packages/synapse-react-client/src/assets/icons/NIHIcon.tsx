import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'
import { ReactComponent as NIHSvg } from './nih.svg'

export const NIHIcon = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} viewBox="0 0 68 42">
      <NIHSvg />
    </SvgIcon>
  )
}
