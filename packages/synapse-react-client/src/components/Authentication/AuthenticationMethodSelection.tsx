import { Box } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import SynapseClient from '../../synapse-client'
import {
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_ORCID,
  OAUTH2_PROVIDERS,
} from '../../utils/SynapseConstants'
import { OAuth2State } from '../../utils/types/OAuth2State'
import LoginMethodButton from './LoginMethodButton'
import { MouseEvent } from 'react'

type AuthenticationMethodSelectionProps = {
  ssoRedirectUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  onSelectUsernameAndPassword: () => void
  state?: OAuth2State
}

/**
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
 *  This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 */
export default function AuthenticationMethodSelection(
  props: AuthenticationMethodSelectionProps,
) {
  const {
    onBeginOAuthSignIn,
    ssoRedirectUrl,
    onSelectUsernameAndPassword,
    state,
  } = props

  function onSSOSignIn(event: MouseEvent<HTMLButtonElement>, provider: string) {
    if (onBeginOAuthSignIn) {
      onBeginOAuthSignIn()
    }

    event.preventDefault()
    const redirectUrl = ssoRedirectUrl
      ? `${ssoRedirectUrl}${provider}`
      : `${SynapseClient.getRootURL()}?provider=${provider}`
    SynapseClient.oAuthUrlRequest(provider, redirectUrl, state)
      .then(data => {
        // Send the user to the authorization URL
        window.location = data.authorizationUrl as unknown as Location
      })
      .catch((err: SynapseClientError) => {
        console.log('Error on oAuth url ', err)
      })
  }

  return (
    <Box>
      <LoginMethodButton
        loginMethod={LOGIN_METHOD_OAUTH2_GOOGLE}
        iconName="google24"
        onClick={event => {
          onSSOSignIn(event, OAUTH2_PROVIDERS.GOOGLE)
        }}
      />
      <LoginMethodButton
        loginMethod={LOGIN_METHOD_OAUTH2_ORCID}
        iconName="orcid"
        onClick={event => {
          onSSOSignIn(event, OAUTH2_PROVIDERS.ORCID)
        }}
      />
      <LoginMethodButton
        loginMethod={LOGIN_METHOD_EMAIL}
        iconName="email"
        onClick={onSelectUsernameAndPassword}
      />
    </Box>
  )
}
