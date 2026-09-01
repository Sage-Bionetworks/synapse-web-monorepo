import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as CurieAvatarHeadSvg } from '../illustrations/curie_avatar_head.svg'

const CurieAvatarHead = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon
      height="32"
      width="40"
      viewBox="0 0 40 32"
      overflow="visible"
      {...props}
    >
      <CurieAvatarHeadSvg />
    </SvgIcon>
  )
}

export default CurieAvatarHead
