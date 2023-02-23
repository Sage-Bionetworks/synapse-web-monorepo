import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import TextField from '../TextField'

type UsernamePasswordFormProps = {
  onSubmit: (username: string, password: string) => void
  resetPasswordUrl?: string
}

export default function UsernamePasswordForm(props: UsernamePasswordFormProps) {
  const {
    resetPasswordUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!PasswordReset:0`,
    onSubmit,
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
      <Link href={resetPasswordUrl}>Forgot password?</Link>
      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          height: '50px',
          mt: 4,
          mb: 2,
        }}
        onClick={e => {
          handleLogin(e)
        }}
      >
        Sign in
      </Button>
    </form>
  )
}
