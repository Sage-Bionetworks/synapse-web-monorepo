import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const PackagableFile = (props: SvgIconProps): React.ReactNode => {
  return (
    <SvgIcon viewBox="-4 -1 30 20" {...props}>
      <path d="M20.25 2.25H11.25L9 0H2.25C1.0125 0 0 1.0125 0 2.25V15.75C0 16.9875 1.0125 18 2.25 18H20.25C21.4875 18 22.5 16.9875 22.5 15.75V4.5C22.5 3.2625 21.4875 2.25 20.25 2.25ZM18 9H15.75V11.25H18V13.5H15.75V15.75H13.5V13.5H15.75V11.25H13.5V9H15.75V6.75H13.5V4.5H15.75V6.75H18V9Z" />
    </SvgIcon>
  )
}

export default PackagableFile
