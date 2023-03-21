import React from 'react'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { Box, Link } from '@mui/material'
import FullWidthAlert from '../FullWidthAlert'
import { UseLoginReturn } from '../../utils/hooks'
import { TwoFactorAuthErrorResponse } from '../../utils/synapseTypes/ErrorResponse'
import TOTPForm from './TOTPForm'
import UsernamePasswordForm from './UsernamePasswordForm'
import AuthenticationMethodSelection from './AuthenticationMethodSelection'
import RecoveryCodeForm from './RecoveryCodeForm'

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
}

export default function LoginForm(props: Props) {
  const {
    ssoRedirectUrl,
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
      {step === 'VERIFICATION_CODE' && (
        <>
          <TOTPForm
            isLoading={isLoading}
            onSubmit={totp => {
              submitOneTimePassword(totp, 'TOTP')
            }}
          />
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto' }}
            onClick={() => onStepChange('RECOVERY_CODE')}
          >
            Use a backup code instead
          </Link>
        </>
      )}
      {step === 'RECOVERY_CODE' && (
        <RecoveryCodeForm
          isLoading={isLoading}
          onSubmit={recoveryCode => {
            submitOneTimePassword(recoveryCode, 'RECOVERY_CODE')
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
