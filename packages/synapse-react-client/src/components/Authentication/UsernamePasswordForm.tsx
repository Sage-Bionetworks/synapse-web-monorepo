import { UseLoginReturn } from '@/utils/hooks'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import { Button, Link } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import TextField from '../TextField/TextField'
import PasswordField from './PasswordField/PasswordField'

type UsernamePasswordFormProps = {
  onSubmit: (username: string, password: string) => void
  resetPasswordUrl?: string
  loginIsPending: UseLoginReturn['loginIsPending']
  hideForgotPasswordButton?: boolean
}

export default function UsernamePasswordForm(props: UsernamePasswordFormProps) {
  const defaultResetPasswordUrl = useOneSageURL('/resetPassword')
  const {
    resetPasswordUrl = defaultResetPasswordUrl.toString(),
    onSubmit,
    loginIsPending,
    hideForgotPasswordButton,
  } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e: SyntheticEvent) {
    e.preventDefault()
    onSubmit(username, password)
  }
  return (
    <form
      onSubmit={e => {
        handleLogin(e)
      }}
    >
      <TextField
        required
        fullWidth
        autoFocus
        autoComplete="username"
        label="Username or Email Address"
        id="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <PasswordField
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {!hideForgotPasswordButton && (
        <Link
          href={resetPasswordUrl}
          target={
            // If not on OneSage, open in new tab
            resetPasswordUrl.startsWith('/') ? undefined : '_blank'
          }
        >
          Forgot password?
        </Link>
      )}
      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        disabled={loginIsPending}
        sx={{
          height: '50px',
          mt: 4,
          mb: 2,
        }}
      >
        {loginIsPending ? 'Logging you in...' : 'Sign in'}
      </Button>
    </form>
  )
}
