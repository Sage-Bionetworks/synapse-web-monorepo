import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ComputationalToolSvg } from '../icons/computationalTool.svg'

const ComputationalTool = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      viewBox="-4 -5 24 24"
      sx={spreadSx(sx, {
        path: {
          fill: 'none !important',
        },
      })}
    >
      <ComputationalToolSvg />
    </SvgIcon>
  )
}

export default ComputationalTool
