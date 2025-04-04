import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as DataReuseSvg } from '../icons/dataReuse.svg'

const DataReuse = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      viewBox="0 0 18 20"
      sx={{
        path: {
          fill: 'none !important',
        },
        ...sx,
      }}
    >
      <DataReuseSvg />
    </SvgIcon>
  )
}

export default DataReuse
