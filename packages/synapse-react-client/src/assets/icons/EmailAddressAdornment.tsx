import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { ReactComponent as EmailAddressAdornmentSvg } from './emailAddressAdornment.svg'

const EmailAddressAdornment = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} inheritViewBox>
      <EmailAddressAdornmentSvg />
    </SvgIcon>
  )
}

export default EmailAddressAdornment
