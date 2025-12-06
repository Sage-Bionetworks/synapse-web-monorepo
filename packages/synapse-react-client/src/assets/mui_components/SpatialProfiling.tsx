import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as SpatialProfilingSvg } from '../icons/spatialProfiling.svg'

const SpatialProfiling = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props}>
      <SpatialProfilingSvg />
    </SvgIcon>
  )
}

export default SpatialProfiling
