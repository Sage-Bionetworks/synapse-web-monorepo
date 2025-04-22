import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as BioChemicalPhysicalSvg } from '../icons/bioChemicalPhysical.svg'

const BioChemicalPhysical = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        path: {
          stroke: 'none !important',
        },
      })}
    >
      <BioChemicalPhysicalSvg />
    </SvgIcon>
  )
}

export default BioChemicalPhysical
