import React from 'react'
import { Box, BoxProps } from '@mui/material'

export default function WizardChoiceButtonGroup(props: BoxProps) {
  const { sx } = props
  return (
    <Box
      role={'menu'}
      {...props}
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
        ...(Array.isArray(sx) ? sx : [sx]),
      }}
    />
  )
}
