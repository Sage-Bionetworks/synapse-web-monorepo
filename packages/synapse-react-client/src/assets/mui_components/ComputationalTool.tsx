import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ComputationalToolSvg } from '../icons/computationalTool.svg'

const ComputationalTool = (props: SvgIconProps) => {
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
      <ComputationalToolSvg />
    </SvgIcon>
  )
}

export default ComputationalTool
