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
import { LoginResponse } from '../../utils/synapseTypes'

export const PROVIDERS = {
  GOOGLE: 'GOOGLE_OAUTH_2_0',
  ORCID: 'ORCID',
}

type Props = {
  ssoRedirectUrl?: string
  sessionCallback: () => void // Callback is invoked after login
  registerAccountUrl?: string
  resetPasswordUrl?: string
  handleIsOnUsernameOrPasswordScreen?: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >
  showUsernameOrPassword?: boolean | undefined
  renderBackButton?: boolean
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
  const [errorMessage, setErrorMessage] = useState('')
  const [hasLoginFailed, setHasLoginFailed] = useState(false)
  /* Only used if props.showUsernameOrPassword is undefined */
  const [
    showUsernameOrPasswordLocalState,
    setShowUsernameOrPasswordLocalState,
  ] = useState(false)

  const {
    ssoRedirectUrl,
    sessionCallback,
    registerAccountUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!RegisterAccount:0`,
    resetPasswordUrl = `${getEndpoint(
      BackendDestinationEnum.PORTAL_ENDPOINT,
    )}#!PasswordReset:0`,
    handleIsOnUsernameOrPasswordScreen,
    showUsernameOrPassword = showUsernameOrPasswordLocalState,
    renderBackButton,
  } = props

  const authenticationReceiptKey = 'last_user_authentication_receipt'

  /**
   * Handle user login on click
   *
   * @param {*} clickEvent Userclick event
   */
  async function handleLogin(clickEvent: React.FormEvent<HTMLElement>) {
    clickEvent.preventDefault() // avoid page refresh
    try {
      // get last valid receipt
      const authenticationReceipt = localStorage.getItem(
        authenticationReceiptKey,
      )
      const data = (await SynapseClient.login(
        username,
        password,
        authenticationReceipt,
      )) as LoginResponse
      // now get access token from cookie has to be called in the portals repo
      await SynapseClient.setAccessTokenCookie(data.accessToken)
      // Set the new receipt
      localStorage.setItem(authenticationReceiptKey, data.authenticationReceipt)
      sessionCallback()
    } catch (err) {
      console.log('Error on login: ', err.reason)
      setErrorMessage(err.reason)
      setHasLoginFailed(true)
    }
  }

  function handleShowEmailLogin(showEmailLogin: boolean) {
    if (handleIsOnUsernameOrPasswordScreen) {
      handleIsOnUsernameOrPasswordScreen(showEmailLogin)
    } else {
      setShowUsernameOrPasswordLocalState(showEmailLogin)
    }
  }

  function onGoogleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    // save current route (so that we can go back here after SSO)
    localStorage.setItem('after-sso-login-url', window.location.href)
    event.preventDefault()
    const redirectUrl = ssoRedirectUrl
      ? `${ssoRedirectUrl}${PROVIDERS.GOOGLE}`
      : `${SynapseClient.getRootURL()}?provider=${PROVIDERS.GOOGLE}`
    SynapseClient.oAuthUrlRequest(PROVIDERS.GOOGLE, redirectUrl)
      .then((data: any) => {
        const authUrl = data.authorizationUrl
        window.location = authUrl // ping the url
      })
      .catch((err: any) => {
        console.log('Error on oAuth url ', err)
      })
  }

  return (
    <div
      id="loginPage"
      className="container LoginComponent SRC-syn-border-spacing bootstrap-4-backport"
    >
      <div className={!showUsernameOrPassword ? '' : 'hide-component'}>
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
          onClick={() => handleShowEmailLogin(true)}
        >
          Sign in with your email
        </ButtonWithIcon>
      </div>
      <Form
        className={showUsernameOrPassword ? '' : 'hide-component'}
        onSubmit={e => {
          handleLogin(e)
        }}
      >
        {renderBackButton && (
          <IconButton type="button" onClick={() => handleShowEmailLogin(false)}>
            <IconSvg icon="arrowBack" />
          </IconButton>
        )}
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
      <div className={'SRC-center-text'}>
        <Link href={registerAccountUrl}>
          Don&apos;t have an account? Create one now
        </Link>
      </div>
      {hasLoginFailed && (
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
