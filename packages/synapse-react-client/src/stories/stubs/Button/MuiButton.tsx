import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export interface ButtonProps extends MuiButtonProps {
  label: string
}

export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
)
