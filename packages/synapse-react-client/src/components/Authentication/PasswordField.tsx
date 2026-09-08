import TextField, { TextFieldProps } from '../TextField'

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
