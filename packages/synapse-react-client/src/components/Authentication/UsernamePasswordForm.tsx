import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import TextField from '../TextField/TextField'
import { UseLoginReturn } from '../../utils/hooks'
import { ONE_SAGE_PRODUCTION_URL } from '../../utils/SynapseConstants'

type UsernamePasswordFormProps = {
  onSubmit: (username: string, password: string) => void
  resetPasswordUrl?: string
  loginIsPending: UseLoginReturn['loginIsPending']
  hideForgotPasswordButton?: boolean
}

export default function UsernamePasswordForm(props: UsernamePasswordFormProps) {
  const {
    resetPasswordUrl = `${ONE_SAGE_PRODUCTION_URL}/resetPassword`,
    onSubmit,
    loginIsPending,
    hideForgotPasswordButton,
  } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e: React.SyntheticEvent) {
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
      <TextField
        required
        fullWidth
        autoComplete="current-password"
        label="Password"
        id="current-password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {!hideForgotPasswordButton && (
        <Link
          href={resetPasswordUrl}
          target={
            // If not on OneSage, open in new tab
            location.origin != new URL(resetPasswordUrl).origin
              ? '_blank'
              : undefined
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
