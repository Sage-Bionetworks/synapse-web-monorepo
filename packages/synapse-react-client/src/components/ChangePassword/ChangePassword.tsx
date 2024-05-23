import React, { useState } from 'react'
import { Alert, Button, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useGetCurrentUserProfile } from '../../synapse-queries'
import { displayToast } from '../ToastMessage'
import useChangePasswordFormState from './useChangePasswordFormState'

export const PASSWORD_CHANGED_SUCCESS_MESSAGE =
  'Your password was successfully changed.'

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentUserProfile()

  const {
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt,
    successfullyChangedPassword,
    isPending: changePasswordIsPending,
    handleChangePasswordWithCurrentPassword,
    error,
  } = useChangePasswordFormState()

  const handleChangePassword = (clickEvent: React.FormEvent<HTMLElement>) => {
    clickEvent.preventDefault()
    if (newPassword !== confirmPassword) {
      displayToast('Passwords do not match.', 'danger')
    } else {
      handleChangePasswordWithCurrentPassword(
        userProfile?.userName!,
        oldPassword,
        newPassword,
      )
    }
  }

  if (successfullyChangedPassword) {
    return (
      <Alert severity={'success'}>{PASSWORD_CHANGED_SUCCESS_MESSAGE}</Alert>
    )
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
            margin={'normal'}
            type="password"
            id="newPassword"
            label={'New password'}
            onChange={e => setNewPassword(e.target.value)}
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
                isLoadingUserProfile ||
                changePasswordIsPending
              }
              variant="contained"
              type="submit"
            >
              Change Password
            </Button>
            <Link component={RouterLink} to="/resetPassword">
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
