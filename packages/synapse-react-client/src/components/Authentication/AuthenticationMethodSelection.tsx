import SynapseClient from '@/synapse-client'
import { OAuth2State, SynapseClientError } from '@/utils'
import { generateCsrfToken } from '@/utils/functions/generateCsrfToken'
import {
  ARCUS_SOURCE_APP_ID,
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_ARCUS,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  LOGIN_METHOD_OAUTH2_ORCID,
  LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS,
  OAUTH2_PROVIDERS,
} from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import { MouseEvent } from 'react'
import LoginMethodButton from './LoginMethodButton'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'

type AuthenticationMethodSelectionProps = {
  ssoRedirectUrl?: string
  /* Invoked before redirecting to OAuth provider. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  onSelectUsernameAndPassword: () => void
  state?: OAuth2State
  sourceAppId?: string
}

const csrfToken = generateCsrfToken()

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
    sourceAppId,
  } = props

  const showArcusSSOButtonOnly = sourceAppId === ARCUS_SOURCE_APP_ID
  const showSageBionetworksIdp = useGetFeatureFlag(
    FeatureFlagEnum.SAGE_BIONETWORKS_IDP,
  )
  const stateWithCSRF: OAuth2State = { ...state, csrfToken }

  function onSSOSignIn(event: MouseEvent<HTMLButtonElement>, provider: string) {
    if (onBeginOAuthSignIn) {
      onBeginOAuthSignIn()
    }

    event.preventDefault()
    const redirectUrl = ssoRedirectUrl
      ? `${ssoRedirectUrl}${provider}`
      : `${SynapseClient.getRootURL()}?provider=${provider}`
    SynapseClient.oAuthUrlRequest(provider, redirectUrl, stateWithCSRF)
      .then(data => {
        // Send the user to the authorization URL
        window.location.href = data.authorizationUrl
      })
      .catch((err: SynapseClientError) => {
        console.log('Error on oAuth url ', err)
      })
  }

  return (
    <Box>
      {!showArcusSSOButtonOnly && (
        <>
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
          {showSageBionetworksIdp && (
            <LoginMethodButton
              loginMethod={LOGIN_METHOD_OAUTH2_SAGE_BIONETWORKS}
              onClick={event => {
                onSSOSignIn(event, OAUTH2_PROVIDERS.SAGE_BIONETWORKS)
              }}
            />
          )}
        </>
      )}
      {showArcusSSOButtonOnly && (
        <LoginMethodButton
          loginMethod={LOGIN_METHOD_OAUTH2_ARCUS}
          // iconName="arcusbio"
          onClick={event => {
            onSSOSignIn(event, OAUTH2_PROVIDERS.ARCUS)
          }}
        />
      )}
    </Box>
  )
}
