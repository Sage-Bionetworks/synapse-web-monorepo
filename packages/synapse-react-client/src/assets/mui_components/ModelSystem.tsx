import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ModelSystemSvg } from '../icons/modelSystem.svg'

const ModelSystem = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <ModelSystemSvg />
    </SvgIcon>
  )
}

export default ModelSystem
