import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as CurieAvatarHeadSvg } from '../illustrations/curie_avatar_head.svg'

const CurieAvatarHead = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon width="40" height="33" viewBox="0 0 40 33" {...props}>
      <CurieAvatarHeadSvg />
    </SvgIcon>
  )
}

export default CurieAvatarHead
