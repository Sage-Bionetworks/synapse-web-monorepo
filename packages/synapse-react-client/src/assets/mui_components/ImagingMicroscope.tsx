import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ImagingMicroscopeSvg } from '../icons/imagingMicroscope.svg'

const ImagingMicroscope = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        path: {
          fill: 'none !important',
          stroke: 'currentColor !important',
        },
      })}
    >
      <ImagingMicroscopeSvg />
    </SvgIcon>
  )
}

export default ImagingMicroscope
