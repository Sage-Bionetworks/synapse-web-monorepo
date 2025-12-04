import React from 'react'
import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const Proteomics = (props: SvgIconProps): React.ReactNode => {
  const { sx } = props
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        fill: 'none',
        stroke: 'currentColor',
      })}
    >
      <path
        d="M3 9.53306C4.43051 8.75266 7.26172 7.97826 7.14251 11.1239C7.09929 12.2644 5.62399 16.1064 7.85777 16.1064C9.25848 16.1064 10.8141 15.5211 13.9672 13.7952C18.0799 11.5441 19.5701 13.465 19.7191 13.9753C20.037 14.7357 19.5879 16.4185 15.2487 17.0669C14.0268 17.2494 11.285 17.7272 11.7321 19.6482C11.9975 20.7888 14.3249 22.0794 15.2487 19.4981C15.4743 18.8678 14.1205 14.9903 13.8182 11.8442C13.7288 10.9138 14.9328 9.17287 17.2455 6.89171C18.1992 5.51101 17.2455 1.96917 13.2818 3.28988C12.5665 3.65002 11.4638 5.12076 10.7486 5.51101C10.1823 5.81996 8.71607 6.32743 6.30805 5.15083"
        strokeWidth="0.75"
      />
    </SvgIcon>
  )
}

export default Proteomics
