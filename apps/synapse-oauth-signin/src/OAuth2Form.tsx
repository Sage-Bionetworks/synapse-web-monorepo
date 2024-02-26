import { Button, Link, Paper, Typography } from '@mui/material'
import {
  AccessCodeResponse,
  FileHandleAssociateType,
  OAuthClientPublic,
  OAuthConsentGrantedResponse,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
} from '@sage-bionetworks/synapse-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  AppUtils,
  FullWidthAlert,
  StandaloneLoginForm,
  StyledOuterContainer,
  SynapseClient,
  SynapseClientError,
  SynapseConstants,
  SynapseQueries,
  SystemUseNotification,
  UserCard,
  useSynapseContext,
} from 'synapse-react-client'
import { OAuthClientError } from './OAuthClientError'
import { StyledInnerContainer } from './StyledInnerContainer'
import { getStateParam, getURLParam, handleErrorRedirect } from './URLUtils'

export function OAuth2Form() {
  const isMounted = useRef(true)

  const { accessToken } = useSynapseContext()
  const { refreshSession, twoFactorAuthSSOErrorResponse, clearSession } =
    AppUtils.useApplicationSessionContext()
  const history = useHistory()

  const [error, setError] = useState<any>()

  const onError = useCallback(
    (error: Error | OAuthClientError | SynapseClientError) => {
      if (error instanceof SynapseClientError && error.status === 401) {
        // invalid token, so clear it
        clearSession()
      } else {
        handleErrorRedirect(error)
        setError(error)
      }
    },
    [clearSession],
  )

  // In addition to fetching the current user profile, the success of this request will determine if the current access token is valid.
  const { data: profile, error: fetchProfileError } =
    SynapseQueries.useGetCurrentUserProfile({
      enabled: !!accessToken,
    })

  useEffect(() => {
    if (fetchProfileError) {
      onError(fetchProfileError)
    }
  }, [fetchProfileError, onError])

  if (profile?.profilePicureFileHandleId) {
    profile.clientPreSignedURL = SynapseClient.getPortalFileHandleServletUrl(
      profile.profilePicureFileHandleId,
      profile.ownerId,
      FileHandleAssociateType.UserProfileAttachment,
    )
  }

  const [oidcRequestDescription, setOidcRequestDescription] =
    useState<OIDCAuthorizationRequestDescription>()
  const [oauthClientInfo, setOauthClientInfo] = useState<OAuthClientPublic>()
  const [redirectURL, setRedirectURL] = useState<string>()
  const [isPreviousAuthCheckComplete, setIsPreviousAuthCheckComplete] =
    useState<boolean>(false)
  const [isConsenting, setIsConsenting] = useState<boolean>(false)

  const sendGTagEvent = (event: string) => {
    // send event to Google Analytics
    // (casting to 'any' type to get compile-time access to gtag())
    const windowAny: any = window
    const gtag = windowAny.gtag
    if (gtag) {
      gtag('event', event, {
        event_category: 'SynapseOAUTH',
      })
    }
  }

  const onConsent = useCallback(() => {
    if (!isConsenting) {
      setIsConsenting(true)
    }
  }, [isConsenting])

  useEffect(() => {
    let isSubscribed = true
    if (isConsenting) {
      sendGTagEvent('UserConsented')
      const request: OIDCAuthorizationRequest =
        getOIDCAuthorizationRequestFromSearchParams()
      SynapseClient.consentToOAuth2Request(request, accessToken)
        .then((accessCode: AccessCodeResponse) => {
          if (isSubscribed) {
            if (!accessCode || !accessCode.access_code) {
              onError(
                new Error(
                  'Something went wrong - the access code is missing from the Synapse call.',
                ),
              )
              return
            }
            // done!  redirect with access code.
            const redirectUri = getURLParam('redirect_uri')
            setRedirectURL(
              `${redirectUri}?${getStateParam()}code=${encodeURIComponent(
                accessCode.access_code,
              )}`,
            )
          }
        })
        .catch(_err => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onError(_err)
        })
    }
    return () => {
      isSubscribed = false
    }
  }, [accessToken, isConsenting, onError])

  const onGoBack = () => {
    window.history.back()
  }

  const onDeny = () => {
    let redirect: string
    sendGTagEvent('UserDeniedConsent')
    if (oauthClientInfo && oauthClientInfo.client_uri) {
      redirect = oauthClientInfo.client_uri
    } else {
      redirect = getURLParam('redirect_uri')!
    }
    setRedirectURL(redirect)
  }

  // if user has already consented to this client request, no need to ask again
  useEffect(() => {
    const getHasAlreadyConsented = () => {
      const code = getURLParam('code')
      if (code) return // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet
      const request: OIDCAuthorizationRequest =
        getOIDCAuthorizationRequestFromSearchParams()
      SynapseClient.hasUserAuthorizedOAuthClient(request, accessToken!)
        .then((consentGrantedResponse: OAuthConsentGrantedResponse) => {
          const prompt = getURLParam('prompt')
          if (consentGrantedResponse.granted) {
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
        })
        .catch((_err: Error | OAuthClientError | SynapseClientError) => {
          onError(_err)
        })
        .finally(() => {
          setIsPreviousAuthCheckComplete(true)
        })
    }
    if (profile && !error) {
      getHasAlreadyConsented()
    }
  }, [profile, error, accessToken, onConsent, onError])

  const getOAuth2RequestDescription = () => {
    if (!oidcRequestDescription && !error) {
      const code = getURLParam('code')
      if (code) return // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet

      const request: OIDCAuthorizationRequest =
        getOIDCAuthorizationRequestFromSearchParams()
      SynapseClient.getOAuth2RequestDescription(request)
        .then((oidcRequestDescription: OIDCAuthorizationRequestDescription) => {
          if (isMounted.current) {
            sendGTagEvent('SynapseOAuthClientRequestDescriptionLoaded')
            setOidcRequestDescription(oidcRequestDescription)

            // if we were able to get the oidc request description, also check for params that this web app does not support
            // sorry, we don't support JWT in the url query params today
            // https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
            const requestObject = getURLParam('request')
            const requestUri = getURLParam('request_uri')
            if (requestObject) {
              handleErrorRedirect(new OAuthClientError('request_not_supported'))
            }
            if (requestUri) {
              handleErrorRedirect(
                new OAuthClientError('request_uri_not_supported'),
              )
            }
            // sorry, we don't support registration (yet?)
            // https://openid.net/specs/openid-connect-core-1_0.html#RegistrationParameter
            const registration = getURLParam('registration')
            if (registration) {
              handleErrorRedirect(
                new OAuthClientError('registration_not_supported'),
              )
            }
          }
        })
        .catch(_err => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onError(_err)
        })
    }
  }

  const getOIDCAuthorizationRequestFromSearchParams = () => {
    const claimsString: string = getURLParam('claims')!
    const authRequest: OIDCAuthorizationRequest = {
      clientId: getURLParam('client_id')!,
      scope: getURLParam('scope')!,
      responseType: getURLParam('response_type')!,
      redirectUri: getURLParam('redirect_uri')!,
      nonce: getURLParam('nonce'),
    }
    if (claimsString) {
      authRequest.claims = JSON.parse(claimsString)
    }
    return authRequest
  }

  //init
  useEffect(() => {
    const getOauthClientInfo = () => {
      if (!oauthClientInfo && !error) {
        const code = getURLParam('code')
        if (code) return // we're in the middle of a SSO, do not attempt to get OAuthClient info yet

        const clientId = getURLParam('client_id')
        if (!clientId) {
          onError(new Error('Synapse OAuth client_id is required'))
          return
        }
        SynapseClient.getOAuth2Client(clientId)
          .then((oauthClientInfo: OAuthClientPublic) => {
            if (oauthClientInfo.verified) {
              getOAuth2RequestDescription()
            }
            setOauthClientInfo(oauthClientInfo)
          })
          .catch(_err => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            onError(_err)
          })
      }
    }

    getOauthClientInfo()
  }, [])

  useEffect(() => {
    if (redirectURL) {
      window.location.replace(redirectURL)
    }
  }, [redirectURL])

  const isLoadingProfile =
    !twoFactorAuthSSOErrorResponse &&
    !error &&
    profile &&
    !isPreviousAuthCheckComplete
  const isLoadingClientInfo =
    !error && !oauthClientInfo && !oidcRequestDescription
  const isRedirecting = redirectURL && oauthClientInfo
  const promptForTwoFactorAuth = !!twoFactorAuthSSOErrorResponse

  const isLoading =
    !promptForTwoFactorAuth &&
    (isLoadingProfile || isLoadingClientInfo || isRedirecting)

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
        {isRedirecting && <p>Waiting for {oauthClientInfo?.client_name}...</p>}
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

  return (
    <StyledOuterContainer>
      {!error && oauthClientInfo && !oauthClientInfo.verified && (
        <FullWidthAlert
          variant="warning"
          title="This app is not verified"
          description="This app has not been verified by Sage Bionetworks yet."
          primaryButtonConfig={{
            text: 'Back to Safety',
            onClick: onGoBack,
          }}
          isGlobal={false}
        />
      )}
      {!redirectURL &&
        !error &&
        isPreviousAuthCheckComplete &&
        accessToken &&
        !isConsenting &&
        oauthClientInfo &&
        oauthClientInfo.verified &&
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
                {oidcRequestDescription.scope.map((scope, index) => {
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
      {isLoading && loadingSpinner}
      {(!!twoFactorAuthSSOErrorResponse ||
        (!redirectURL &&
          !error &&
          !accessToken &&
          oauthClientInfo &&
          oauthClientInfo.verified &&
          oidcRequestDescription)) && (
        <Paper sx={{ width: '400px', py: 8, px: 4, margin: '0 auto' }}>
          <StandaloneLoginForm
            onBeginOAuthSignIn={() => {
              // save current route (so that we can go back here after SSO)
              AppUtils.preparePostSSORedirect()
            }}
            sessionCallback={() => {
              refreshSession().then(() => {
                AppUtils.redirectAfterSSO(history)
              })
            }}
            twoFactorAuthenticationRequired={twoFactorAuthSSOErrorResponse}
          />
          <SystemUseNotification maxWidth={'325px'} />
        </Paper>
      )}
      {error && (
        <FullWidthAlert
          variant="danger"
          title={error.name || 'Error'}
          description={`${error.reason} : ${error.message}`}
          isGlobal={false}
        />
      )}
    </StyledOuterContainer>
  )
}
