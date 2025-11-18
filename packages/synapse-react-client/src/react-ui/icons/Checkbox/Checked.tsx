import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as CheckedIcon } from './Checked.svg'

function Checked(props: SvgIconProps) {
  return <SvgIcon {...props} component={CheckedIcon} inheritViewBox />
}

export default Checked
