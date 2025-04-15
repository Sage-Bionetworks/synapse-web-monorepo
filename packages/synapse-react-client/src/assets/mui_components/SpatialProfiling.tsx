import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as SpatialProfilingSvg } from '../icons/spatialProfiling.svg'

const SpatialProfiling = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <SpatialProfilingSvg />
    </SvgIcon>
  )
}

export default SpatialProfiling
