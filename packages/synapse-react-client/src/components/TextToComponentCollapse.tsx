import { SxProps, Typography, TypographyOwnProps } from '@mui/material'
import { PropsWithChildren } from 'react'
import ComponentToComponentCollapse from './ComponentToComponentCollapse'

export type TextToComponentCollapseProps = PropsWithChildren<{
  text: string
  defaultVisible?: boolean // default to false (collapsed)
  textVariant?: TypographyOwnProps['variant']
  textSx?: SxProps
  textContainerSx?: SxProps
  collapseBoxSx?: SxProps
  iconSx?: SxProps
}>

/**
 * Wrap any child components in a collapse, using a Typography as the trigger
 */
export default function TextToComponentCollapse({
  text,
  defaultVisible,
  textVariant = 'smallLink',
  textSx,
  textContainerSx,
  collapseBoxSx,
  iconSx,
  children,
}: TextToComponentCollapseProps) {
  return (
    <ComponentToComponentCollapse
      component={
        <Typography variant={textVariant} sx={textSx}>
          {text}
        </Typography>
      }
      componentContainerSx={textContainerSx}
      defaultVisible={defaultVisible}
      collapseBoxSx={collapseBoxSx}
      iconSx={iconSx}
    >
      {children}
    </ComponentToComponentCollapse>
  )
}
