import { useGetCurrentUserProfile } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { validatePassword } from '@/utils/functions/StringUtils'
import { Alert, Button, Link, TextField } from '@mui/material'
import { FormEvent, useEffect, useState } from 'react'
import { Link as RouterLink, Navigate } from 'react-router'
import { displayToast } from '../ToastMessage'
import useChangePasswordFormState from './useChangePasswordFormState'

export const PASSWORD_CHANGED_SUCCESS_MESSAGE =
  'Your password was successfully changed.'

export type ChangePasswordProps = {
  redirectToRoute?: string //optional target to send user after successfully changing the password
  hideReset2FA?: boolean
}

export default function ChangePassword(props: ChangePasswordProps) {
  const { redirectToRoute, hideReset2FA = false } = props
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [newPasswordError, setNewPasswordError] = useState<string | undefined>(
    undefined,
  )
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentUserProfile({
      enabled: isSignedIn,
    })

  useEffect(() => {
    if (userProfile && userName == '') {
      setUserName(userProfile.userName ?? userProfile.emails![0]) // if username is not set, use the first email
    }
  }, [userName, userProfile, userProfile?.userName])

  const {
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt,
    successfullyChangedPassword,
    isPending: changePasswordIsPending,
    handleChangePasswordWithCurrentPassword,
    error,
  } = useChangePasswordFormState({
    hideReset2FA,
  })

  const handleChangePassword = (clickEvent: FormEvent<HTMLElement>) => {
    clickEvent.preventDefault()
    if (newPassword !== confirmPassword) {
      displayToast('Passwords do not match.', 'danger')
    } else {
      handleChangePasswordWithCurrentPassword(
        userName,
        oldPassword,
        newPassword,
      )
    }
  }

  if (successfullyChangedPassword) {
    if (redirectToRoute) {
      displayToast(PASSWORD_CHANGED_SUCCESS_MESSAGE, 'success')
      return <Navigate to={redirectToRoute} />
    } else {
      return (
        <Alert severity={'success'}>{PASSWORD_CHANGED_SUCCESS_MESSAGE}</Alert>
      )
    }
  }

  return (
    <div>
      {promptForTwoFactorAuth ? (
        <TwoFactorAuthPrompt />
      ) : (
        <form
          onSubmit={e => {
            handleChangePassword(e)
          }}
        >
          {!isSignedIn && (
            <TextField
              required
              fullWidth
              autoFocus
              autoComplete="username"
              label="Username or Email Address"
              id="username"
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          )}
          <TextField
            fullWidth
            required
            margin={'normal'}
            type="password"
            id="currentPassword"
            label={'Current password'}
            onChange={e => setOldPassword(e.target.value)}
            value={oldPassword}
          />
          <TextField
            fullWidth
            required
            helperText={newPasswordError}
            margin={'normal'}
            type="password"
            id="newPassword"
            label={'New password'}
            onChange={e => {
              const error = validatePassword(e.target.value)
              setNewPasswordError(error)
              setNewPassword(e.target.value)
            }}
            value={newPassword}
          />
          <TextField
            fullWidth
            required
            margin={'normal'}
            type="password"
            id="confirmPassword"
            label={'Confirm password'}
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <div style={{ marginTop: '30px' }}>
            <Button
              sx={{ marginRight: '26px' }}
              disabled={
                !oldPassword ||
                !newPassword ||
                !confirmPassword ||
                !userName ||
                isLoadingUserProfile ||
                changePasswordIsPending
              }
              variant="contained"
              type="submit"
            >
              Change Password
            </Button>
            <Link
              component={RouterLink}
              to="/resetPassword"
              sx={{ display: 'block', marginTop: '1em', marginLeft: '5px' }}
            >
              Forgot password?
            </Link>
          </div>
        </form>
      )}
      {error && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {error.reason}
        </Alert>
      )}
    </div>
  )
}
