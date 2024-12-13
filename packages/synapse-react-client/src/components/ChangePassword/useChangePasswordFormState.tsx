import { useCallback, useState } from 'react'
import {
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithToken as ChangePasswordWithTokenObject,
  ChangePasswordWithTwoFactorAuthToken,
  PasswordResetSignedToken,
  TwoFactorAuthOtpType,
  TwoFactorAuthResetRequest,
} from '@sage-bionetworks/synapse-types'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { Alert, Typography } from '@mui/material'
import { useChangePassword } from '../../synapse-queries/auth/useChangePassword'
import { useResetTwoFactorAuth } from '../../synapse-queries/auth/useTwoFactorEnrollment'
import {
  RECOVERY_CODE_GUIDANCE_TEXT_SHORT,
  TOTP_GUIDANCE_TEXT,
} from '../Authentication/Constants'
import OneTimePasswordForm, {
  ONE_TIME_PASSWORD_STEP,
} from '../Authentication/OneTimePasswordForm'
import { useOneSageURL } from '../../utils/hooks/useOneSageURL'
import appendFinalQueryParamKey from '../../utils/appendFinalQueryParamKey'

export const TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT =
  'Two-factor authentication is required to change your password. Your password has not yet been changed.'

export type UseChangePasswordFormStateOptions = {
  hideReset2FA?: boolean
  onChangePasswordSuccess?: () => void
}

/**
 * Hook that handles submitting a change password request and prompting the user for 2FA if necessary.
 * @param options
 */
export default function useChangePasswordFormState(
  options?: UseChangePasswordFormStateOptions,
) {
  const defaultTwoFactorAuthResetUrl = useOneSageURL('/reset2FA')
  const twoFactorAuthResetUri = appendFinalQueryParamKey(
    defaultTwoFactorAuthResetUrl,
    'twoFAResetToken',
  )

  // Store current and new password in state so that we can re-use it if 2FA is required
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [twoFactorAuthErrorResponse, setTwoFactorAuthErrorResponse] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()
  const [otpStep, setOtpStep] =
    useState<ONE_TIME_PASSWORD_STEP>('VERIFICATION_CODE')
  const [successfullyChangedPassword, setSuccessfullyChangedPassword] =
    useState(false)
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
        setSuccessfullyChangedPassword(true)
        setTwoFactorAuthErrorResponse(undefined)
        if (options?.onChangePasswordSuccess) {
          options.onChangePasswordSuccess()
        }
      }
    },
  })

  const handleChangePasswordWithCurrentPassword = useCallback(
    (username: string, currentPassword: string, newPassword: string) => {
      setCurrentPassword(currentPassword)
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
          userId: twoFactorAuthErrorResponse.userId!,
          twoFaToken: twoFactorAuthErrorResponse.twoFaToken!,
          otpType: otpType,
          otpCode: code,
        }
        changePassword(changeRequest)
      }
    },
    [changePassword, twoFactorAuthErrorResponse],
  )
  const promptForTwoFactorAuth = Boolean(twoFactorAuthErrorResponse)
  const {
    mutate: resetTwoFactorAuth,
    isSuccess: twoFactorAuthResetIsSuccess,
    isPending: twoFactorAuthResetIsPending,
  } = useResetTwoFactorAuth()

  const beginTwoFactorAuthReset = useCallback(
    (twoFaResetEndpoint: string) => {
      if (twoFactorAuthErrorResponse) {
        const request: TwoFactorAuthResetRequest = {
          userId: twoFactorAuthErrorResponse.userId!,
          twoFaResetEndpoint: twoFaResetEndpoint,
          // When attempting to reset 2FA while resetting a password, the current password must be used to request 2FA reset
          password: currentPassword,
        }
        resetTwoFactorAuth(request)
      }
    },
    [currentPassword, resetTwoFactorAuth, twoFactorAuthErrorResponse],
  )

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
          hideReset2FA={options?.hideReset2FA}
          onClickPromptReset2FA={() => {
            setOtpStep('DISABLE_2FA_PROMPT')
          }}
          onClickReset2FA={() => {
            beginTwoFactorAuthReset(twoFactorAuthResetUri)
          }}
          twoFactorAuthResetIsPending={twoFactorAuthResetIsPending}
          twoFactorAuthResetIsSuccess={twoFactorAuthResetIsSuccess}
        />
        {(otpStep === 'RECOVERY_CODE' || otpStep === 'VERIFICATION_CODE') && (
          <Alert severity={'info'} sx={{ my: 2 }}>
            {TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT}
          </Alert>
        )}
        {otpStep === 'DISABLE_2FA_PROMPT' && twoFactorAuthResetIsSuccess && (
          <Alert severity={'warning'} sx={{ my: 2 }}>
            <strong>Your password has not been changed.</strong> To disable
            two-factor authentication, you may be required to enter your current
            password after clicking the link sent to your email address.
          </Alert>
        )}
      </>
    )
  }, [
    beginTwoFactorAuthReset,
    handleChangePasswordWithOtp,
    isPending,
    newPassword,
    options?.hideReset2FA,
    otpStep,
    promptForTwoFactorAuth,
    twoFactorAuthResetIsPending,
    twoFactorAuthResetIsSuccess,
    twoFactorAuthResetUri,
  ])

  return {
    successfullyChangedPassword,
    isPending,
    error,
    promptForTwoFactorAuth,
    TwoFactorAuthPrompt: TwoFactorAuthPrompt,
    handleChangePasswordWithCurrentPassword,
    handleChangePasswordWithResetToken,
  }
}
