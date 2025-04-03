import { spreadSx } from '@/theme/spreadSx'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const InSilicoModel = (props: SvgIconProps) => {
  const { sx } = props
  return (
    <SvgIcon
      {...props}
      sx={spreadSx(sx, {
        fill: 'none',
      })}
    >
      <rect
        x="6.906"
        y="8.812"
        width="10.063"
        height="5.781"
        fill="#314C83"
        fillOpacity="0.25"
      />
      <path d="M8.738 19.104h6.467" stroke="#314C83" strokeLinecap="round" />
      <path d="M10.545 18.771v-1.712" stroke="#314C83" strokeLinecap="square" />
      <path d="M13.304 18.771v-1.712" stroke="#314C83" strokeLinecap="square" />
      <mask id="path-6-inside-1" fill="white">
        <rect x="4.649" y="6.646" width="14.55" height="10.08" rx="0.856" />
      </mask>
      <rect
        x="4.649"
        y="6.646"
        width="14.55"
        height="10.08"
        rx="0.856"
        stroke="#314C83"
        strokeWidth="2"
        mask="url(#path-6-inside-1)"
      />
      <path
        d="M9.975 14.421v-0.083c0-0.259 0.052-0.515 0.154-0.753 0.086-0.202 0.207-0.387 0.356-0.548l0.125-0.134c0.178-0.191 0.38-0.358 0.601-0.497l0.427-0.267 0.761-0.571 0.697-0.592c0.169-0.144 0.314-0.313 0.431-0.501 0.196-0.313 0.308-0.671 0.326-1.04l0.02-0.436"
        stroke="#314C83"
        strokeLinecap="round"
      />
      <path
        d="M13.874 14.421v-0.083c0-0.259-0.052-0.515-0.154-0.753-0.086-0.202-0.207-0.387-0.356-0.548l-0.125-0.134c-0.178-0.191-0.38-0.358-0.601-0.497l-0.427-0.267-0.761-0.571-0.697-0.592c-0.169-0.144-0.314-0.313-0.431-0.501-0.196-0.313-0.308-0.671-0.326-1.04l-0.02-0.436"
        stroke="#314C83"
        strokeLinecap="round"
      />
      <rect x="10.125" y="13.225" width="3.599" height="0.72" fill="#314C83" />
      <rect x="9.868" y="9.571" width="4.113" height="0.823" fill="#314C83" />
    </SvgIcon>
  )
}

export default InSilicoModel
