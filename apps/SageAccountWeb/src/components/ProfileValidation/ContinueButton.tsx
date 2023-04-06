import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button, ButtonProps, useTheme } from '@mui/material'
import React from 'react'

export const ContinueButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const theme = useTheme()
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ marginTop: theme.spacing(5) }}
      {...props}
      endIcon={<ArrowRightAltIcon />}
    >
      {props.children || 'Continue'}
    </Button>
  )
}
