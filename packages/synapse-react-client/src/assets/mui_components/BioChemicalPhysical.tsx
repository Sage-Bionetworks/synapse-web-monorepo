import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as BioChemicalPhysical } from '../icons/bioChemicalPhysical.svg'

const ModelSystem = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      sx={spreadSx(sx, {
        fill: 'none',
        // stroke: 'currentColor',
      })}
    >
      <BioChemicalPhysical />
    </SvgIcon>
  )
}

export default ModelSystem
