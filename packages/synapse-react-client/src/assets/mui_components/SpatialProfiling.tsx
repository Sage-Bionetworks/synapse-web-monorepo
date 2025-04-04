import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as SpatialProfilingSvg } from '../icons/spatialProfiling.svg'

const SpatialProfiling = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      // viewBox="0 0 17 14"
      sx={spreadSx(sx, {
        '*': {
          fill: 'none !important',
          stroke: 'currentColor !important',
        },
      })}
    >
      <SpatialProfilingSvg />
    </SvgIcon>
  )
}

export default SpatialProfiling
