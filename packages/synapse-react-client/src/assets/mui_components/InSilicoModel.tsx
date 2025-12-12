import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as InSilicoModelSvg } from '../icons/inSilicoModel.svg'
import spreadSx from '@/react-ui/theme/utils/mergeSx'
import { useTheme } from '@mui/material'

const InSilicoModel = (props: SvgIconProps): React.ReactNode => {
  const { sx } = props
  const theme = useTheme()
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        rect: {
          fill: theme.palette.primary.main,
        },
        'path[fill="white"]': {
          fill: 'white !important',
        },
      })}
    >
      <InSilicoModelSvg />
    </SvgIcon>
  )
}

export default InSilicoModel
