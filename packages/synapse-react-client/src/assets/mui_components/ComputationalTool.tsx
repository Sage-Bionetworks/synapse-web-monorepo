import React from 'react'
import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as ComputationalToolSvg } from '../icons/computationalTool.svg'

const ComputationalTool = (props: SvgIconProps): React.ReactNode => {
  const { sx } = props
  return (
    <SvgIcon
      sx={spreadSx(sx, {
        'path[fill="white"]': {
          fill: 'white !important',
        },
      })}
    >
      <ComputationalToolSvg />
    </SvgIcon>
  )
}

export default ComputationalTool
