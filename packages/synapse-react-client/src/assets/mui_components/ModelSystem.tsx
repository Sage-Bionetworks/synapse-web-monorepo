import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ModelSystemSvg } from '../icons/modelSystem.svg'

const ModelSystem = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props}>
      <ModelSystemSvg />
    </SvgIcon>
  )
}

export default ModelSystem
