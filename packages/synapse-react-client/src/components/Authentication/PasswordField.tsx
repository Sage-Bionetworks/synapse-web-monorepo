import TextField from '../TextField'
import { TextFieldProps } from '@mui/material/TextField'

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
