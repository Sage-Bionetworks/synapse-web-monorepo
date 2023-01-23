import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import theme from 'style/theme'

export const ContinueButton: React.FC<ButtonProps> = (props: ButtonProps) => (
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
