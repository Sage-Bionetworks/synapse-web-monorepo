import React from 'react'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { Box, Link } from '@mui/material'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { UseLoginReturn } from '../../utils/hooks'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-types'
import UsernamePasswordForm from './UsernamePasswordForm'
import AuthenticationMethodSelection from './AuthenticationMethodSelection'
import OneTimePasswordForm from './OneTimePasswordForm'
import { OAuth2State } from '../../utils'

type Props = {
  ssoRedirectUrl?: string
  registerAccountUrl?: string
  resetPasswordUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  step: UseLoginReturn['step']
  onStepChange: (step: UseLoginReturn['step']) => void
  /* optionally pass the 2FA error response to directly start the 2FA challenge */
  twoFactorAuthenticationRequired?: TwoFactorAuthErrorResponse
  submitUsernameAndPassword: UseLoginReturn['submitUsernameAndPassword']
  submitOneTimePassword: UseLoginReturn['submitOneTimePassword']
  errorMessage: UseLoginReturn['errorMessage']
  isLoading: UseLoginReturn['isLoading']
  // Optional state passed to and returned by an identity provider on SSO
  ssoState?: OAuth2State
}

export default function LoginForm(props: Props) {
  const {
    ssoRedirectUrl,
    ssoState,
    registerAccountUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!RegisterAccount:0`,
    resetPasswordUrl,
    onBeginOAuthSignIn,
    onStepChange,
    step,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
    isLoading,
  } = props

  return (
    <>
      {step == 'CHOOSE_AUTH_METHOD' && (
        <AuthenticationMethodSelection
          onSelectUsernameAndPassword={() => onStepChange('USERNAME_PASSWORD')}
          onBeginOAuthSignIn={onBeginOAuthSignIn}
          ssoRedirectUrl={ssoRedirectUrl}
          state={ssoState}
        />
      )}
      {step === 'USERNAME_PASSWORD' && (
        <UsernamePasswordForm
          isLoading={isLoading}
          resetPasswordUrl={resetPasswordUrl}
          onSubmit={(username, password) => {
            submitUsernameAndPassword(username, password)
          }}
        />
      )}
      {(step === 'VERIFICATION_CODE' || step === 'RECOVERY_CODE') && (
        <OneTimePasswordForm
          step={step}
          isLoading={isLoading}
          onSubmit={(totp, otpType) => {
            submitOneTimePassword(totp, otpType)
          }}
          onClickUseTOTP={() => {
            onStepChange('VERIFICATION_CODE')
          }}
          onClickUseBackupCode={() => {
            onStepChange('RECOVERY_CODE')
          }}
        />
      )}
      {(step === 'CHOOSE_AUTH_METHOD' || step === 'USERNAME_PASSWORD') && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
          <Link href={registerAccountUrl} align={'center'}>
            Don&apos;t have an account? Create one now
          </Link>
        </Box>
      )}
      {errorMessage && (
        <FullWidthAlert
          variant={'warning'}
          isGlobal={false}
          description={errorMessage}
        />
      )}
    </>
  )
}
