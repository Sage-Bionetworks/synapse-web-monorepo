import { Box, Button } from '@mui/material'
import { GoogleIcon24 } from '../../assets/GoogleIcon24'
import IconSvg from '../IconSvg'
import React from 'react'
import { SynapseClient } from '../../utils'
import { SynapseClientError } from '../../utils/SynapseClientError'

type AuthenticationMethodSelectionProps = {
  ssoRedirectUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  onSelectUsernameAndPassword: () => void
}

export const PROVIDERS = {
  GOOGLE: 'GOOGLE_OAUTH_2_0',
  ORCID: 'ORCID',
}
/**
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
 *  This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 */
export default function AuthenticationMethodSelection(
  props: AuthenticationMethodSelectionProps,
) {
  const { onBeginOAuthSignIn, ssoRedirectUrl, onSelectUsernameAndPassword } =
    props
  function onGoogleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    if (onBeginOAuthSignIn) {
      onBeginOAuthSignIn()
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
    <Box>
      <Button
        fullWidth
        variant="outlined"
        onClick={onGoogleSignIn}
        sx={{
          color: 'grey.800',
          height: '50px',
          mb: '10px',
        }}
        startIcon={<GoogleIcon24 sx={{ width: '28px', height: '28px' }} />}
      >
        Sign in with Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={
          <IconSvg icon="email" sx={{ width: '28px', height: '28px' }} />
        }
        sx={{
          color: 'grey.800',
          height: '50px',
          mb: '10px',
        }}
        onClick={onSelectUsernameAndPassword}
      >
        Sign in with your email
      </Button>
    </Box>
  )
}
