import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

export default function WizardChoiceButtonDescription(
  props: Omit<TypographyProps, 'variant'>,
) {
  return (
    <Typography
      variant={'body1'}
      color={'grey.700'}
      {...props}
      sx={{
        my: 1.25,
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      }}
    />
  )
}
