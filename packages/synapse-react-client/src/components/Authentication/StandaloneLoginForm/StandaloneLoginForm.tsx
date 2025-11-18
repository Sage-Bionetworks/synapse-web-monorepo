import { OAuth2State } from '@/utils/index'
import useLogin from '@/utils/hooks/useLogin'
import { Box, Typography } from '@mui/material'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import {
  RECOVERY_CODE_GUIDANCE_TEXT_SHORT,
  TOTP_GUIDANCE_TEXT,
} from '../Constants'
import LoginFlowBackButton from '../LoginFlowBackButton'
import LoginForm from '../LoginForm'

export type StandaloneLoginFormProps = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
  registerAccountUrl?: string
  resetPasswordUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  /* optionally pass the 2FA error response to directly start the 2FA challenge */
  twoFactorAuthenticationRequired?: TwoFactorAuthErrorResponse
  /* If a twoFactorAuthError is encountered (including passed in the twoFactorAuthenticationRequired prop), this callback will be invoked */
  onTwoFactorAuthRequired?: (
    twoFaErrorResponse: Pick<
      TwoFactorAuthErrorResponse,
      'twoFaToken' | 'userId'
    >,
  ) => void
  hideRegisterButton?: boolean
  hideForgotPasswordButton?: boolean
  ssoState?: OAuth2State
  /* The URI where the user should be directed in an email when attempting to reset 2FA */
  twoFactorAuthResetUri?: string
  /* Invoked when password login is selected */
  onPasswordLoginSelected?: () => void
  showArcusSSOButtonOnly?: boolean
}

export default function StandaloneLoginForm(props: StandaloneLoginFormProps) {
  const {
    ssoRedirectUrl,
    sessionCallback,
    registerAccountUrl,
    resetPasswordUrl,
    onBeginOAuthSignIn,
    onTwoFactorAuthRequired,
    hideRegisterButton,
    hideForgotPasswordButton,
    ssoState,
    twoFactorAuthResetUri,
    onPasswordLoginSelected,
    showArcusSSOButtonOnly,
  } = props

  const {
    step,
    onStepChange,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
    loginIsPending,
    beginTwoFactorAuthReset,
    twoFactorAuthResetIsPending,
    twoFactorAuthResetIsSuccess,
  } = useLogin({
    sessionCallback,
    twoFaErrorResponse: props.twoFactorAuthenticationRequired,
    onTwoFactorAuthRequired,
  })

  return (
    <Box
      sx={theme => ({
        [theme.breakpoints.up('sm')]: {
          width: '330px',
        },
        p: 0,
        mx: 'auto',
        bgColor: 'transparent',
      })}
    >
      <LoginFlowBackButton
        step={step}
        onStepChange={onStepChange}
        sx={{ p: 0, mb: 1 }}
      />
      {step === 'VERIFICATION_CODE' && (
        <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
          {TOTP_GUIDANCE_TEXT}
        </Typography>
      )}
      {step === 'RECOVERY_CODE' && (
        <Typography variant={'body1'} sx={{ my: 2 }} align={'center'}>
          {RECOVERY_CODE_GUIDANCE_TEXT_SHORT}
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
        loginIsPending={loginIsPending}
        beginTwoFactorAuthReset={beginTwoFactorAuthReset}
        hideRegisterButton={hideRegisterButton}
        hideForgotPasswordButton={hideForgotPasswordButton}
        twoFactorAuthResetIsPending={twoFactorAuthResetIsPending}
        twoFactorAuthResetIsSuccess={twoFactorAuthResetIsSuccess}
        ssoState={ssoState}
        twoFactorAuthResetUri={twoFactorAuthResetUri}
        onPasswordLoginSelected={onPasswordLoginSelected}
        showArcusSSOButtonOnly={showArcusSSOButtonOnly}
      />
    </Box>
  )
}
