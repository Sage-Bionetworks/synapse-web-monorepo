import { OAuth2State } from '@/utils'
import appendFinalQueryParamKey from '@/utils/appendFinalQueryParamKey'
import { UseLoginReturn, useOneSageURL } from '@/utils/hooks'
import { Box, Link } from '@mui/material'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import AuthenticationMethodSelection from './AuthenticationMethodSelection'
import OneTimePasswordForm from './OneTimePasswordForm'
import UsernamePasswordForm from './UsernamePasswordForm'

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
  loginIsPending: UseLoginReturn['loginIsPending']
  beginTwoFactorAuthReset: UseLoginReturn['beginTwoFactorAuthReset']
  twoFactorAuthResetIsSuccess: UseLoginReturn['twoFactorAuthResetIsSuccess']
  twoFactorAuthResetIsPending: UseLoginReturn['twoFactorAuthResetIsPending']
  hideRegisterButton?: boolean
  hideForgotPasswordButton?: boolean
  // Optional state passed to and returned by an identity provider on SSO
  ssoState?: OAuth2State
  /* The URI where the user should be directed in an email when attempting to reset 2FA */
  twoFactorAuthResetUri?: string
  /* Invoked when password login is selected */
  onPasswordLoginSelected?: () => void
  sourceAppId?: string
}

export default function LoginForm(props: Props) {
  const defaultRegistrationUrl = useOneSageURL('/register1')
  const defaultTwoFactorAuthResetUrl = useOneSageURL('/reset2FA')

  const {
    ssoRedirectUrl,
    ssoState,
    registerAccountUrl = defaultRegistrationUrl.toString(),
    resetPasswordUrl,
    onBeginOAuthSignIn,
    onStepChange,
    step,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
    loginIsPending,
    beginTwoFactorAuthReset,
    hideRegisterButton,
    hideForgotPasswordButton,
    twoFactorAuthResetIsSuccess,
    twoFactorAuthResetIsPending,
    twoFactorAuthResetUri = appendFinalQueryParamKey(
      defaultTwoFactorAuthResetUrl,
      'twoFAResetToken',
    ),
    onPasswordLoginSelected = noop,
    sourceAppId,
  } = props

  return (
    <>
      {step == 'CHOOSE_AUTH_METHOD' && (
        <AuthenticationMethodSelection
          onSelectUsernameAndPassword={() => {
            onPasswordLoginSelected()
            onStepChange('USERNAME_PASSWORD')
          }}
          onBeginOAuthSignIn={onBeginOAuthSignIn}
          ssoRedirectUrl={ssoRedirectUrl}
          state={ssoState}
          sourceAppId={sourceAppId}
        />
      )}
      {step === 'USERNAME_PASSWORD' && (
        <UsernamePasswordForm
          loginIsPending={loginIsPending}
          resetPasswordUrl={resetPasswordUrl}
          onSubmit={(username, password) => {
            submitUsernameAndPassword(username, password)
          }}
          hideForgotPasswordButton={hideForgotPasswordButton}
        />
      )}
      {(step === 'VERIFICATION_CODE' ||
        step === 'RECOVERY_CODE' ||
        step === 'DISABLE_2FA_PROMPT') && (
        <OneTimePasswordForm
          step={step}
          loginIsPending={loginIsPending}
          onSubmit={(totp, otpType) => {
            submitOneTimePassword(totp, otpType)
          }}
          onClickUseTOTP={() => {
            onStepChange('VERIFICATION_CODE')
          }}
          onClickUseBackupCode={() => {
            onStepChange('RECOVERY_CODE')
          }}
          onClickPromptReset2FA={() => {
            onStepChange('DISABLE_2FA_PROMPT')
          }}
          onClickReset2FA={() => {
            beginTwoFactorAuthReset(twoFactorAuthResetUri)
          }}
          twoFactorAuthResetIsPending={twoFactorAuthResetIsPending}
          twoFactorAuthResetIsSuccess={twoFactorAuthResetIsSuccess}
        />
      )}
      {!hideRegisterButton &&
        (step === 'CHOOSE_AUTH_METHOD' || step === 'USERNAME_PASSWORD') && (
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
