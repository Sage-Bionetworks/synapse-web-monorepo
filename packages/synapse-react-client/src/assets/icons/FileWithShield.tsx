import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as Svg } from './FileWithShield.svg'

const FileWithShield = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 18 18'}>
      <Svg />
    </SvgIcon>
  )
}

export default FileWithShield
