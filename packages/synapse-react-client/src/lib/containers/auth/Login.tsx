import * as React from 'react'
import { Form } from 'react-bootstrap'
import ButtonWithIcon from '../../assets/ButtonWithIcon'
import { SynapseClient } from '../../utils'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../../utils/functions/getEndpoint'
import { GoogleIcon24 } from '../../assets/GoogleIcon24'
import { Button, IconButton, Link } from '@mui/material'
import IconSvg from '../IconSvg'
import FullWidthAlert from '../FullWidthAlert'
import { useState } from 'react'
import { SynapseClientError } from '../../utils/SynapseClientError'
import useLogin from '../../utils/hooks/useLogin'
import { TwoFactorAuthErrorResponse } from '../../utils/synapseTypes/ErrorResponse'
import TOTPForm from './TOTPForm'

export const PROVIDERS = {
  GOOGLE: 'GOOGLE_OAUTH_2_0',
  ORCID: 'ORCID',
}

type Props = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
  registerAccountUrl?: string
  resetPasswordUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  handleIsOnUsernameOrPasswordScreen?: React.Dispatch<
    React.SetStateAction<boolean>
  >
  showUsernameOrPassword?: boolean | undefined
  renderBackButton?: boolean
  /* optionally pass the 2FA error response to directly start the 2FA challenge */
  twoFactorAuthenticationRequired?: TwoFactorAuthErrorResponse
}

/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs
 *  for Synapse authentication.
 *  This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 */
function Login(props: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {
    ssoRedirectUrl,
    sessionCallback,
    registerAccountUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!RegisterAccount:0`,
    resetPasswordUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!PasswordReset:0`,
  } = props

  const {
    step,
    setStep,
    submitUsernameAndPassword,
    submitOneTimePassword,
    errorMessage,
  } = useLogin(sessionCallback, props.twoFactorAuthenticationRequired)

  const renderBackButton =
    props.renderBackButton &&
    (step === 'USERNAME_PASSWORD' || step === 'VERIFICATION_CODE')

  /**
   * Handle user login on click
   */
  async function handleLogin(clickEvent: React.FormEvent<HTMLElement>) {
    clickEvent.preventDefault() // avoid page refresh
    await submitUsernameAndPassword(username, password)
  }

  function onGoogleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    if (props.onBeginOAuthSignIn) {
      props.onBeginOAuthSignIn()
    }

    event.preventDefault()
    const redirectUrl = ssoRedirectUrl
      ? `${ssoRedirectUrl}${PROVIDERS.GOOGLE}`
      : `${SynapseClient.getRootURL()}?provider=${PROVIDERS.GOOGLE}`
    SynapseClient.oAuthUrlRequest(PROVIDERS.GOOGLE, redirectUrl)
      .then(data => {
        // Send the user to the authorization URL
        window.location = data.authorizationUrl as unknown as Location
      })
      .catch((err: SynapseClientError) => {
        console.log('Error on oAuth url ', err)
      })
  }

  return (
    <div
      id="loginPage"
      className="container LoginComponent SRC-syn-border-spacing bootstrap-4-backport"
    >
      {renderBackButton && (
        <IconButton type="button" onClick={() => setStep('CHOOSE_AUTH_METHOD')}>
          <IconSvg icon="arrowBack" />
        </IconButton>
      )}
      <div className={step === 'CHOOSE_AUTH_METHOD' ? '' : 'hide-component'}>
        <form>
          <ButtonWithIcon
            variant="white"
            onClick={onGoogleSignIn}
            className={`SRC-signin-button`}
            icon={<GoogleIcon24 />}
          >
            Sign in with Google
          </ButtonWithIcon>
        </form>
        <ButtonWithIcon
          variant="white"
          className={`SRC-signin-button`}
          icon={<IconSvg icon="email" />}
          onClick={() => setStep('USERNAME_PASSWORD')}
        >
          Sign in with your email
        </ButtonWithIcon>
      </div>
      <Form
        className={step === 'USERNAME_PASSWORD' ? '' : 'hide-component'}
        onSubmit={e => {
          handleLogin(e)
        }}
      >
        <label htmlFor={'username'}>Username or Email Address</label>
        <Form.Control
          required
          autoComplete="username"
          placeholder="Username or Email Address"
          className="LoginComponent__Input"
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor={'current-password'}>Password</label>
        <Form.Control
          required
          autoComplete="current-password"
          placeholder="Password"
          className="LoginComponent__Input"
          id="current-password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Link href={resetPasswordUrl}>Forgot password?</Link>
        <Button
          onClick={e => {
            handleLogin(e)
          }}
          type="submit"
          color="primary"
          variant="contained"
          className="SRC-login-button SRC-marginBottomTen"
        >
          Sign in
        </Button>
      </Form>
      {step === 'VERIFICATION_CODE' && (
        <TOTPForm
          onSubmit={totp => {
            submitOneTimePassword(totp)
          }}
        />
      )}
      {(step === 'CHOOSE_AUTH_METHOD' || step === 'USERNAME_PASSWORD') && (
        <div className={'SRC-center-text'}>
          <Link href={registerAccountUrl}>
            Don&apos;t have an account? Create one now
          </Link>
        </div>
      )}
      {errorMessage && (
        <FullWidthAlert
          variant={'warning'}
          isGlobal={false}
          description={errorMessage}
        />
      )}
    </div>
  )
}
export default Login
