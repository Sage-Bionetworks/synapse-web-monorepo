import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SortDown = (props: SvgIconProps): React.ReactNode => (
  <SvgIcon
    data-icon="sort-down"
    viewBox="-3 0 27 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.5 9V7H16.5V9H8.5ZM8.5 15V13H12.5V15H8.5ZM8.5 3V1H20.5V3H8.5ZM4.5 13H7L3.5 16.5L0 13H2.5V0H4.5V13Z" />
  </SvgIcon>
)
