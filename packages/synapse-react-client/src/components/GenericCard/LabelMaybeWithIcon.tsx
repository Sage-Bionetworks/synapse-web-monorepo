import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { ColumnIconConfigs } from '../CardContainerLogic'
import IconSVG from '../IconSvg/IconSvg'

type LabelMaybeWithIconProps = {
  children: ReactNode
  value: string
  iconConfig: ColumnIconConfigs['columns'][string] | undefined
}

export function LabelMaybeWithIcon({
  children,
  value,
  iconConfig,
}: LabelMaybeWithIconProps) {
  const iconProps = iconConfig?.[value]
  if (!iconProps) return <>{children}</>
  const { containerSx, ...svgProps } = iconProps
  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'middle',
          marginRight: '0.2rem',
          ...containerSx,
        }}
      >
        <IconSVG wrap={false} {...svgProps} />
      </Box>
      {children}
    </>
  )
}
