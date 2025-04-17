import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as BioChemicalPhysical } from '../icons/bioChemicalPhysical.svg'

const ModelSystem = (props: SvgIconProps) => {
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
      <BioChemicalPhysical />
    </SvgIcon>
  )
}

export default ModelSystem
