import React from 'react'
import { Box, Typography } from '@mui/material'
import useLogin from '../../utils/hooks/useLogin'
import { TwoFactorAuthErrorResponse } from '../../utils/synapseTypes/ErrorResponse'
import LoginForm from './LoginForm'
import LoginFlowBackButton from './LoginFlowBackButton'

type Props = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
  registerAccountUrl?: string
  resetPasswordUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  showUsernameOrPassword?: boolean | undefined
  /* optionally pass the 2FA error response to directly start the 2FA challenge */
  twoFactorAuthenticationRequired?: TwoFactorAuthErrorResponse
}

export default function StandaloneLoginForm(props: Props) {
  const {
    ssoRedirectUrl,
    sessionCallback,
    registerAccountUrl,
    resetPasswordUrl,
    onBeginOAuthSignIn,
  } = props

  const {
    step,
    onStepChange,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
  } = useLogin(sessionCallback, props.twoFactorAuthenticationRequired)

  return (
    <Box
      id="loginPage"
      className="LoginComponent"
      sx={{
        width: '325px',
        p: 0,
        mx: 'auto',
        my: 4,
        bgColor: 'transparent',
      }}
    >
      <LoginFlowBackButton
        step={step}
        onStepChange={onStepChange}
        sx={{ p: 0, mb: 1 }}
      />
      {step === 'VERIFICATION_CODE' && (
        <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
          Enter the 6-digit, time-based verification code provided by your
          authenticator app.
        </Typography>
      )}
      <LoginForm
        step={step}
        onStepChange={onStepChange}
        submitUsernameAndPassword={submitUsernameAndPassword}
        submitOneTimePassword={submitOneTimePassword}
        errorMessage={errorMessage}
        ssoRedirectUrl={ssoRedirectUrl}
        registerAccountUrl={registerAccountUrl}
        resetPasswordUrl={resetPasswordUrl}
        onBeginOAuthSignIn={onBeginOAuthSignIn}
      />
    </Box>
  )
}
