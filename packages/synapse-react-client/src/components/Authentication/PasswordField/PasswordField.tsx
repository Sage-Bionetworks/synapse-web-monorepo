import TextField from '../../TextField/index'
import { TextFieldProps } from '@mui/material'

export default function PasswordField(props: TextFieldProps) {
  return (
    <TextField
      required
      fullWidth
      autoComplete="current-password"
      label="Password"
      id="current-password"
      type="password"
      {...props}
    />
  )
}
