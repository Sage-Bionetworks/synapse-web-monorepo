import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as DataReuseSvg } from '../icons/dataReuse.svg'

const DataReuse = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <DataReuseSvg />
    </SvgIcon>
  )
}

export default DataReuse
