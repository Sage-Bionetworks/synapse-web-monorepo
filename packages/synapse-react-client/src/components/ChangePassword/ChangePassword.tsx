import React, { useState } from 'react'
import { Alert, Button, Link, TextField, Typography } from '@mui/material'
import {
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithTwoFactorAuthToken,
  TwoFactorAuthErrorResponse,
  TwoFactorAuthOtpType,
} from '@sage-bionetworks/synapse-types'
import { Link as RouterLink } from 'react-router-dom'
import { ONE_TIME_PASSWORD_STEP, OneTimePasswordForm } from '../Authentication'
import {
  useChangePassword,
  useGetCurrentUserProfile,
} from '../../synapse-queries'
import { displayToast } from '../ToastMessage'
import {
  RECOVERY_CODE_GUIDANCE_TEXT_SHORT,
  TOTP_GUIDANCE_TEXT,
} from '../Authentication/Constants'

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [otpStep, setOtpStep] =
    useState<ONE_TIME_PASSWORD_STEP>('VERIFICATION_CODE')
  const [twoFactorAuthErrorResponse, setTwoFactorAuthErrorResponse] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()

  const { data: userProfile, isLoading: isLoadingUserProfile } =
    useGetCurrentUserProfile()
  const {
    mutate: changePassword,
    isPending: changePasswordIsPending,
    error,
  } = useChangePassword({
    onSuccess: maybeTwoFactorResponse => {
      if (maybeTwoFactorResponse) {
        // We store the 2FA Error Response in state because the `changePasswordResult` may change before we are done with the 2FA code,
        // e.g. if the user enters the wrong 2FA code
        setTwoFactorAuthErrorResponse(maybeTwoFactorResponse)
      } else {
        setTwoFactorAuthErrorResponse(undefined)
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
        displayToast('Password successfully changed.', 'success')
      }
    },
  })

  const handleChangePassword = (clickEvent: React.FormEvent<HTMLElement>) => {
    clickEvent.preventDefault()
    if (newPassword !== confirmPassword) {
      displayToast('Passwords do not match.', 'danger')
    } else {
      const changeRequest: ChangePasswordWithCurrentPassword = {
        newPassword,
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: userProfile?.userName!,
        currentPassword: oldPassword,
      }
      changePassword(changeRequest)
    }
  }

  function handleChangePasswordWithOtp(
    code: string,
    otpType: TwoFactorAuthOtpType,
  ) {
    if (twoFactorAuthErrorResponse) {
      const changeRequest: ChangePasswordWithTwoFactorAuthToken = {
        newPassword,
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpType: otpType,
        otpCode: code,
      }
      changePassword(changeRequest)
    }
  }

  return (
    <div>
      {twoFactorAuthErrorResponse ? (
        <>
          {otpStep === 'VERIFICATION_CODE' && (
            <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
              {TOTP_GUIDANCE_TEXT}
            </Typography>
          )}
          {otpStep === 'RECOVERY_CODE' && (
            <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
              {RECOVERY_CODE_GUIDANCE_TEXT_SHORT}
            </Typography>
          )}
          <OneTimePasswordForm
            step={otpStep}
            onClickUseTOTP={() => {
              setOtpStep('VERIFICATION_CODE')
            }}
            onClickUseBackupCode={() => {
              setOtpStep('RECOVERY_CODE')
            }}
            isLoading={isLoadingUserProfile || changePasswordIsPending}
            onSubmit={handleChangePasswordWithOtp}
          />
          <Alert severity={'info'} sx={{ my: 2 }}>
            Two-factor authentication is required to change your password.
          </Alert>
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
              onSubmit={e => {
                handleChangePassword(e)
              }}
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
