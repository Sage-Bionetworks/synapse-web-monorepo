import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SortUp = (props: SvgIconProps): React.ReactNode => (
  <SvgIcon
    data-icon="sort-up"
    viewBox="-3 0 27 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 7.5V9.5H16.5V7.5H8.5ZM8.5 1.5V3.5H12.5V1.5H8.5ZM8.5 13.5V15.5H20.5V13.5H8.5ZM4.5 3.5H7L3.5 0L0 3.5H2.5V16.5H4.5V3.5Z" />
  </SvgIcon>
)
