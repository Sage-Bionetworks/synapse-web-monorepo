import React from 'react'
import { Box } from '@mui/material'

export type WizardChoiceButtonGroupProps = React.PropsWithChildren<{}>

export default function WizardChoiceButtonGroup(
  props: WizardChoiceButtonGroupProps,
) {
  const { children } = props
  return (
    <Box
      role={'menu'}
      sx={{
        '& > button': {
          '&:first-of-type': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          '&:not(:first-of-type):not(:last-child)': {
            borderRadius: 0,
            borderTop: 'none',
          },
          '&:last-child': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTop: 'none',
          },
        },
      }}
    >
      {children}
    </Box>
  )
}
