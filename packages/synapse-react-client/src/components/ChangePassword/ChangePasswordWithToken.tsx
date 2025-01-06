import { FormEvent, useState } from 'react'
import { Alert, Button, TextField } from '@mui/material'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage'
import useChangePasswordFormState from './useChangePasswordFormState'
import { validatePassword } from '../../utils/functions/StringUtils'

type ChangePasswordWithTokenProps = {
  passwordChangeToken: PasswordResetSignedToken
  onSuccess: () => void
}

export default function ChangePasswordWithToken(
  props: ChangePasswordWithTokenProps,
) {
  const { passwordChangeToken, onSuccess } = props
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [newPasswordError, setNewPasswordError] = useState<string | undefined>(
    undefined,
  )

  const {
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt,
    isPending: changePasswordIsPending,
    handleChangePasswordWithResetToken,
    error,
  } = useChangePasswordFormState({
    onChangePasswordSuccess: () => {
      setNewPassword('')
      setConfirmPassword('')
      displayToast('Password successfully changed.', 'success')
      onSuccess()
    },
  })

  const handleChangePassword = (clickEvent: FormEvent<HTMLElement>) => {
    clickEvent.preventDefault()
    if (newPassword !== confirmPassword) {
      displayToast('Passwords do not match.', 'danger')
    } else {
      handleChangePasswordWithResetToken(newPassword, passwordChangeToken)
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
          <TextField
            fullWidth
            required
            helperText={newPasswordError}
            type="password"
            id="newPassword"
            name="newPassword"
            label={'New password'}
            onChange={e => {
              const error = validatePassword(e.target.value)
              setNewPasswordError(error)
              setNewPassword(e.target.value)
            }}
            value={newPassword || ''}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label={'Confirm password'}
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword || ''}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={
              !newPassword || !confirmPassword || changePasswordIsPending
            }
            sx={{ mt: 3, py: 2 }}
          >
            Change Password
          </Button>
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
