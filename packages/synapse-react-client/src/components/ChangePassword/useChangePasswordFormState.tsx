import React, { useCallback, useState } from 'react'
import {
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithToken as ChangePasswordWithTokenObject,
  ChangePasswordWithTwoFactorAuthToken,
  PasswordResetSignedToken,
  TwoFactorAuthErrorResponse,
  TwoFactorAuthOtpType,
} from '@sage-bionetworks/synapse-types'
import { useChangePassword } from '../../synapse-queries'
import { Alert, Typography } from '@mui/material'
import {
  RECOVERY_CODE_GUIDANCE_TEXT_SHORT,
  TOTP_GUIDANCE_TEXT,
} from '../Authentication/Constants'
import { ONE_TIME_PASSWORD_STEP, OneTimePasswordForm } from '../Authentication'

export type UseChangePasswordFormStateOptions = {
  onChangePasswordSuccess?: () => void
}

/**
 * Hook that handles submitting a change password request and prompting the user for 2FA if necessary.
 * @param options
 */
export default function useChangePasswordFormState(
  options: UseChangePasswordFormStateOptions,
) {
  // Store new password in state so that we can re-use it if 2FA is required
  const [newPassword, setNewPassword] = useState<string>('')
  const [twoFactorAuthErrorResponse, setTwoFactorAuthErrorResponse] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()
  const [otpStep, setOtpStep] =
    useState<ONE_TIME_PASSWORD_STEP>('VERIFICATION_CODE')
  const {
    mutate: changePassword,
    isPending,
    error,
  } = useChangePassword({
    onSuccess: maybeTwoFactorResponse => {
      if (maybeTwoFactorResponse) {
        // We store the 2FA Error Response in state because the `changePasswordResult` may change before we are done with the 2FA code,
        // e.g. if the user enters the wrong 2FA code
        setTwoFactorAuthErrorResponse(maybeTwoFactorResponse)
      } else {
        setTwoFactorAuthErrorResponse(undefined)
        if (options.onChangePasswordSuccess) {
          options.onChangePasswordSuccess()
        }
      }
    },
  })

  const handleChangePasswordWithCurrentPassword = useCallback(
    (username: string, currentPassword: string, newPassword: string) => {
      setNewPassword(newPassword)
      const changeRequest: ChangePasswordWithCurrentPassword = {
        username,
        currentPassword,
        newPassword,
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
      }
      changePassword(changeRequest)
    },
    [changePassword],
  )

  const handleChangePasswordWithResetToken = useCallback(
    (newPassword: string, passwordChangeToken: PasswordResetSignedToken) => {
      setNewPassword(newPassword)
      const changeRequest: ChangePasswordWithTokenObject = {
        newPassword,
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithToken',
        passwordChangeToken: passwordChangeToken,
      }
      changePassword(changeRequest)
    },
    [changePassword],
  )

  const handleChangePasswordWithOtp = useCallback(
    (newPassword: string, code: string, otpType: TwoFactorAuthOtpType) => {
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
    },
    [changePassword, twoFactorAuthErrorResponse],
  )
  const promptForTwoFactorAuth = Boolean(twoFactorAuthErrorResponse)

  const TwoFactorAuthPrompt = useCallback(() => {
    if (!promptForTwoFactorAuth) {
      return <></>
    }
    return (
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
          loginIsPending={isPending}
          onSubmit={(code, otpType) =>
            handleChangePasswordWithOtp(newPassword, code, otpType)
          }
          hideReset2FA={true}
          twoFactorAuthResetIsPending={false}
          twoFactorAuthResetIsSuccess={false}
        />
        <Alert severity={'info'} sx={{ my: 2 }}>
          Two-factor authentication is required to change your password.
        </Alert>
      </>
    )
  }, [
    handleChangePasswordWithOtp,
    isPending,
    newPassword,
    otpStep,
    promptForTwoFactorAuth,
  ])

  return {
    isPending,
    error,
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt: TwoFactorAuthPrompt,
    handleChangePasswordWithCurrentPassword,
    handleChangePasswordWithResetToken,
  }
}
