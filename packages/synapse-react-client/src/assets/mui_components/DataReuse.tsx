import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as DataReuseSvg } from '../icons/dataReuse.svg'
import { spreadSx } from '@/theme/spreadSx'
import { useTheme } from '@mui/material'

const DataReuse = (props: SvgIconProps) => {
  const { sx } = props
  const theme = useTheme()
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        path: {
          fill: 'none !important',
          stroke: theme.palette.primary.main,
        },
      })}
    >
      <DataReuseSvg />
    </SvgIcon>
  )
}

export default DataReuse
