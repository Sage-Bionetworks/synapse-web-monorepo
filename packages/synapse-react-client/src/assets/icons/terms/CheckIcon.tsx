import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CheckIcon = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon {...props} height={15} viewBox="0 0 19 15">
      <path
        d="M18.7184 1.81746L6.05903 14.6667L0.256836 8.77744L1.74431 7.26766L6.05903 11.6364L17.2309 0.307678L18.7184 1.81746Z"
        fill="white"
      />
    </SvgIcon>
  )
}
