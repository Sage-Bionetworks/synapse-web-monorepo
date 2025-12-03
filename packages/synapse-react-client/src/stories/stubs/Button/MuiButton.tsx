import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

export interface ButtonProps extends MuiButtonProps {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps): React.ReactNode => (
  <MuiButton {...rest}>{label}</MuiButton>
)
