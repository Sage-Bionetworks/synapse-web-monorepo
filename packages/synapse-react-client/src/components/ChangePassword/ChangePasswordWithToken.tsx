import { validatePassword } from '@/utils/functions/StringUtils'
import { Alert, Button, Link, TextField, Typography } from '@mui/material'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { FormEvent, useState } from 'react'
import { BEGIN_RESET_2FA_BUTTON_TEXT } from '../Authentication/OneTimePasswordForm'
import { displayToast } from '../ToastMessage'
import useChangePasswordFormState from './useChangePasswordFormState'

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
  const [
    showTwoFactorAuthRecoveryGuidance,
    setShowTwoFactorAuthRecoveryGuidance,
  ] = useState(false)

  const {
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt,
    isPending: changePasswordIsPending,
    handleChangePasswordWithResetToken,
    error,
  } = useChangePasswordFormState({
    // This flow authenticates via an emailed password-reset token: the user has no current
    // password, and their 2FA challenge token is scoped to PASSWORD_CHANGE, which the 2fa/reset
    // endpoint rejects (it only accepts a token from an AUTHENTICATION/login challenge, e.g. one
    // obtained by signing in with a linked SSO provider). There is no credential this flow can
    // offer to self-service reset 2FA, so we hide the interactive reset option (it would only
    // fail) and instead show guidance below.
    hideReset2FA: true,
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
        <>
          <TwoFactorAuthPrompt />
          {!showTwoFactorAuthRecoveryGuidance ? (
            <Link
              align={'center'}
              color={'grey.700'}
              sx={{ display: 'block', mx: 'auto', my: 2 }}
              onClick={() => setShowTwoFactorAuthRecoveryGuidance(true)}
            >
              {BEGIN_RESET_2FA_BUTTON_TEXT}
            </Link>
          ) : (
            <>
              <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
                Because you're resetting your password by email, we can't verify
                your identity strongly enough to reset two-factor authentication
                here. Please contact the{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sagebionetworks.jira.com/servicedesk/customer/portal/9"
                >
                  Synapse Service Desk
                </Link>{' '}
                for help recovering your account.
              </Typography>
              <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
                If you have a Google or ORCID account linked to your Synapse
                account, you may also be able to regain access by signing in
                with that account instead.
              </Typography>
            </>
          )}
        </>
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
