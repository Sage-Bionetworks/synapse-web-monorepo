import {
  Backdrop,
  Button,
  CircularProgress,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import {
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestResponseTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import {
  AppUtils,
  FullWidthAlert,
  storeRedirectURLForOneSageLoginAndGotoURL,
  StyledOuterContainer,
  SynapseClient,
  SynapseClientError,
  SynapseConstants,
  SynapseHookUtils,
  SynapseQueries,
  UserCard,
  useSynapseContext,
} from 'synapse-react-client'
import { sendAnalyticsEvent } from 'synapse-react-client/utils/analytics/sendAnalyticsEvent'
import UniversalCookies from 'universal-cookie'
import { OAuthClientError } from './OAuthClientError'
import { StyledInnerContainer } from './StyledInnerContainer'
import { handleErrorRedirect } from './URLUtils'

const cookies = new UniversalCookies()
const sendGTagEvent = (event: string) => {
  sendAnalyticsEvent(event, { event_category: 'SynapseOAUTH' })
}

export function OAuth2Form() {
  const { clearSession, hasInitializedSession } =
    AppUtils.useApplicationSessionContext()
  const { accessToken } = useSynapseContext()
  const isLoggedIn = Boolean(accessToken)

  const [searchParams] = useSearchParams()

  const [error, setError] = useState<
    Error | SynapseClientError | OAuthClientError
  >()
  // The target URL may take a while to respond, so we show a loader to inform the user that the delay is not our fault
  const [pendingRedirectURL, setPendingRedirectURL] = useState<string>()

  // If the URL contains a provider, then we are in the middle of authenticating after coming from an external IdP (e.g. Google, ORCID)
  const isHandlingSignInFromExternalIdP = Boolean(searchParams.get('provider'))

  const oneSageURL = SynapseHookUtils.useOneSageURL()
  // SWC-7287: Only call consent once (at most).  Do not attempt to auto-consent after the user consents the first time.
  const hasCalledOnConsent = useRef(false)

  const onError = useCallback(
    (error: Error | OAuthClientError | SynapseClientError) => {
      if (error instanceof SynapseClientError && error.status === 401) {
        // invalid token, so clear it
        clearSession()
      } else {
        handleErrorRedirect(searchParams, error)
        setError(error)
      }
    },
    [clearSession],
  )

  useEffect(() => {
    if (pendingRedirectURL !== undefined) {
      window.location.replace(pendingRedirectURL)
    }
  }, [pendingRedirectURL])

  const showPendingRedirectUi = pendingRedirectURL !== undefined
  const clientId = useMemo(() => {
    const clientId = searchParams.get('client_id')
    if (!clientId) {
      onError(new Error('Synapse OAuth client_id is required'))
      return
    }
    return clientId
  }, [onError, searchParams])

  const { data: oauthClientInfo, isLoading: isLoadingClientInfo } =
    SynapseQueries.useGetOAuth2Client(clientId!, {
      enabled: Boolean(clientId),
    })

  // In addition to fetching the current user profile, the success of this request will determine if the current access token is valid.
  const {
    data: profile,
    error: fetchProfileError,
    isLoading: isLoadingProfile,
  } = SynapseQueries.useGetCurrentUserProfile({
    enabled: isLoggedIn,
  })

  useEffect(() => {
    if (fetchProfileError) {
      onError(fetchProfileError)
    }
  }, [fetchProfileError, onError])

  if (profile?.profilePicureFileHandleId) {
    // Note: `getPortalFileHandleServletUrl` is not a web request.
    profile.clientPreSignedURL = SynapseClient.getPortalFileHandleServletUrl(
      profile.profilePicureFileHandleId,
      profile.ownerId,
      FileHandleAssociateType.UserProfileAttachment,
    )
  }

  /**
   * Parse the URL search params to construct an OIDC Authorization Request
   *
   * @returns OIDCAuthorizationRequest if the request is valid
   * @returns undefined if the request is invalid. `onError` will be called with an error message.
   */
  const oidcAuthorizationRequestFromSearchParams:
    | OIDCAuthorizationRequest
    | undefined = useMemo(() => {
    if (isHandlingSignInFromExternalIdP) {
      // The user is in the middle of signing in with an external IdP, so the URL will not yet have the required parameters
      // Don't make the OIDC authorization request, and don't show an error.
      return undefined
    }
    const missingParams: string[] = []

    const clientId = searchParams.get('client_id')
    if (clientId == null) {
      missingParams.push('client_id')
    }
    const scope = searchParams.get('scope')
    if (scope == null) {
      missingParams.push('scope')
    }
    const responseType = searchParams.get(
      'response_type',
    ) as OIDCAuthorizationRequestResponseTypeEnum
    if (responseType == null) {
      missingParams.push('response_type')
    }
    const redirectUri = searchParams.get('redirect_uri')
    if (redirectUri == null) {
      missingParams.push('redirect_uri')
    }

    if (missingParams.length > 0) {
      // We don't have the params required to construct the request
      onError(
        new Error(
          `Invalid request. Missing required parameter(s): ${missingParams.join(
            ', ',
          )}`,
        ),
      )
      return undefined
    }

    const authRequest: OIDCAuthorizationRequest = {
      clientId: clientId!,
      scope: scope!,
      responseType: responseType!,
      redirectUri: redirectUri!,
      nonce: searchParams.get('nonce') || undefined,
    }
    const claimsString = searchParams.get('claims')
    if (claimsString) {
      authRequest.claims = JSON.parse(claimsString)
    }
    return authRequest
  }, [isHandlingSignInFromExternalIdP, onError, searchParams])

  const { data: hasUserAuthorizedOAuthClient } =
    SynapseQueries.useGetHasUserAuthorizedOAuthClient(
      oidcAuthorizationRequestFromSearchParams!,
      {
        enabled: Boolean(oidcAuthorizationRequestFromSearchParams),
      },
    )

  const { mutate: consentToRequest } = SynapseQueries.useConsentToOAuth2Request(
    {
      onSuccess: accessCode => {
        if (!accessCode || !accessCode.access_code) {
          onError(
            new Error(
              'Something went wrong - the access code is missing from the Synapse call.',
            ),
          )
          return
        }
        // done!  redirect with access code.
        const redirectUri = searchParams.get('redirect_uri')!
        cookies.remove(
          SynapseConstants.ACCOUNT_SITE_PROMPTED_FOR_LOGIN_COOKIE_KEY,
          {
            path: '/',
            domain: AppUtils.getCookieDomain(),
          },
        )

        const redirectSearchParams = new URLSearchParams()
        redirectSearchParams.set('code', accessCode.access_code)

        let redirectUrl = `${redirectUri}?${redirectSearchParams.toString()}`

        const state = searchParams.get('state')
        if (state) {
          // SWC-7272 - append raw state to the end of the URL
          // We do not use URLSearchParams for state because it encodes the value, and it should be passed untouched.
          redirectUrl += `&state=${state}`
        }

        setPendingRedirectURL(redirectUrl)
      },
      onError: e => {
        onError(e)
      },
    },
  )

  const onConsent = useCallback(() => {
    if (
      oidcAuthorizationRequestFromSearchParams &&
      !hasCalledOnConsent.current
    ) {
      hasCalledOnConsent.current = true
      sendGTagEvent('UserConsented')
      consentToRequest(oidcAuthorizationRequestFromSearchParams)
    }
  }, [consentToRequest, oidcAuthorizationRequestFromSearchParams])

  // Handle auto-consent when the user has already consented
  useEffect(() => {
    if (hasUserAuthorizedOAuthClient) {
      const prompt = searchParams.get('prompt')
      if (hasUserAuthorizedOAuthClient.granted) {
        // SWC-5285: before auto-consenting, make sure we're allowed to auto-consent.
        // Only allow if prompt is undefined or set to none.
        if (!prompt || prompt !== 'consent') {
          // auto-consent!
          onConsent()
        } //else if prompt is defined and another value ('login', 'consent', or 'select_account') then always prompt!
      } else if (prompt && prompt === 'none') {
        // granted === false and prompt === none
        onError(
          new OAuthClientError(
            'consent_required',
            'Current user has not previously granted permission, and prompt was set to none',
          ),
        )
      }
    }
  }, [hasUserAuthorizedOAuthClient, onConsent, onError, searchParams])

  const onDeny = () => {
    sendGTagEvent('UserDeniedConsent')
    // Redirect with 'access_denied' per https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1
    onError(new OAuthClientError('access_denied'))
  }

  const { data: oidcRequestDescription, error: oidcRequestDescriptionError } =
    SynapseQueries.useGetOAuth2RequestDescription(
      oidcAuthorizationRequestFromSearchParams!,
      {
        enabled: Boolean(oidcAuthorizationRequestFromSearchParams),
      },
    )

  useEffect(() => {
    if (oidcRequestDescription) {
      sendGTagEvent('SynapseOAuthClientRequestDescriptionLoaded')

      // if we were able to get the oidc request description, also check for params that this web app does not support
      // sorry, we don't support JWT in the url query params today
      // https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
      const requestObject = searchParams.get('request')
      const requestUri = searchParams.get('request_uri')
      if (requestObject) {
        onError(new OAuthClientError('request_not_supported'))
      }
      if (requestUri) {
        onError(new OAuthClientError('request_uri_not_supported'))
      }
      // sorry, we don't support registration (yet?)
      // https://openid.net/specs/openid-connect-core-1_0.html#RegistrationParameter
      const registration = searchParams.get('registration')
      if (registration) {
        onError(new OAuthClientError('registration_not_supported'))
      }
    }
  }, [oidcRequestDescription, searchParams])

  useEffect(() => {
    if (oidcRequestDescriptionError) {
      onError(oidcRequestDescriptionError)
    }
  }, [oidcRequestDescriptionError, onError])

  const isLoading = isLoadingProfile || isLoadingClientInfo

  const loadingSpinner = (
    <Paper
      sx={{
        mx: 'auto',
        width: '500px',
        height: '250px',
        textAlign: 'center',
        p: 4,
      }}
    >
      <div style={{ marginTop: '50px' }}>
        {showPendingRedirectUi && (
          <p>Waiting for {oauthClientInfo?.client_name}...</p>
        )}
        <span
          style={{
            marginLeft: '10px',
            backgroundSize: '40px 40px',
            width: '40px',
            height: '40px',
          }}
          className={'spinner'}
        />
      </div>
    </Paper>
  )

  if (
    !isLoading &&
    !error &&
    !isLoggedIn &&
    oauthClientInfo &&
    oauthClientInfo.verified &&
    pendingRedirectURL === undefined &&
    oidcRequestDescription &&
    hasInitializedSession // wait for session to be initialized (may be anonymous) before jumping to One Sage
  ) {
    // Prompt for login
    storeRedirectURLForOneSageLoginAndGotoURL(oneSageURL.toString())
  }
  return (
    <StyledOuterContainer>
      <Backdrop open={!hasInitializedSession} sx={{ zIndex: 5 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!error && oauthClientInfo && !oauthClientInfo.verified && (
        <FullWidthAlert
          variant="warning"
          title="This app is not verified"
          description="This app has not been verified by Sage Bionetworks yet."
          primaryButtonConfig={{
            text: 'Back to Safety',
            onClick: () => {
              // The client verification warning appears before the user has a chance to sign in
              // So there is no risk of going 'back' to an external IdP to sign in to synapse
              window.history.back()
            },
          }}
          isGlobal={false}
        />
      )}
      {!error &&
        accessToken &&
        oauthClientInfo &&
        oauthClientInfo.verified &&
        !showPendingRedirectUi &&
        oidcRequestDescription && (
          <StyledInnerContainer>
            <UserCard
              userProfile={profile}
              size={SynapseConstants.SMALL_USER_CARD}
            />
            <Typography
              variant="headline3"
              sx={{ paddingTop: '25px', paddingBottom: '25px' }}
            >
              <strong>{oauthClientInfo.client_name}</strong> requests
              permission:
            </Typography>
            {oidcRequestDescription && (
              <ul>
                {oidcRequestDescription.scope?.map((scope, index) => {
                  return (
                    <li key={index}>
                      <Typography variant="body1">{scope}</Typography>
                    </li>
                  )
                })}
              </ul>
            )}
            <div className="margin-top-20">
              <Typography variant="body1">
                By clicking <strong>Allow</strong>, you allow this app to use
                your information in accordance with their{' '}
                <Link
                  href={oauthClientInfo.tos_uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  terms of service
                </Link>{' '}
                and{' '}
                <Link
                  href={oauthClientInfo.policy_uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </Link>
                .
              </Typography>
            </div>
            <div className="text-align-right margin-top-40">
              <Button
                variant="outlined"
                onClick={onDeny}
                sx={{ marginRight: '10px' }}
              >
                Deny
              </Button>
              <Button variant="contained" color="primary" onClick={onConsent}>
                Allow
              </Button>
            </div>
          </StyledInnerContainer>
        )}
      {(isLoading || showPendingRedirectUi) && loadingSpinner}
      {error && (
        <FullWidthAlert
          variant="danger"
          title={error.name || 'Error'}
          description={`${'reason' in error ? error.reason + ': ' : ''}${
            error.message
          }`}
          isGlobal={false}
        />
      )}
    </StyledOuterContainer>
  )
}
