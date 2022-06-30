import * as React from 'react'
import { useState, useEffect } from 'react'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import Login from 'synapse-react-client/dist/containers/Login'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes/UserProfile'
import { OIDCAuthorizationRequest } from 'synapse-react-client/dist/utils/synapseTypes/OIDCAuthorizationRequest'
import { OIDCAuthorizationRequestDescription } from 'synapse-react-client/dist/utils/synapseTypes/OIDCAuthorizationRequestDescription'
import { OAuthClientPublic } from 'synapse-react-client/dist/utils/synapseTypes/OAuthClientPublic'
import { AccessCodeResponse } from 'synapse-react-client/dist/utils/synapseTypes/AccessCodeResponse'
import UserCard from 'synapse-react-client/dist/containers/UserCard'
import { OAuthConsentGrantedResponse } from 'synapse-react-client/dist/utils/synapseTypes'
import { getURLParam, getStateParam, handleErrorRedirect } from './URLUtils'
import { SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext'
import { WarningTwoTone } from '@material-ui/icons'

// can override endpoints as https://repo-staging.prod.sagebase.org/ and https://staging.synapse.org for staging

const isStaging: boolean = window.location.hostname.includes('staging');
const isDev: boolean = window.location.hostname.includes('dev');

const prodConfig = {
    REPO: 'https://repo-prod.prod.sagebase.org/',
    PORTAL: 'https://www.synapse.org/',
};

const stagingConfig = {
    REPO: 'https://repo-staging.prod.sagebase.org/',
    PORTAL: 'https://staging.synapse.org/',
};

const devConfig = {
    REPO: 'https://repo-dev.dev.sagebase.org/',
    PORTAL: 'https://portal-dev.dev.sagebase.org/',
};

(window as any).SRC = {
    OVERRIDE_ENDPOINT_CONFIG: isStaging ? stagingConfig : isDev ? devConfig : prodConfig
}

export type OAuth2FormProps = {
    context?: SynapseContextType
}

export const OAuth2Form = (props: OAuth2FormProps) => {
    const [token, setToken] = useState<string>()
    const [profile, setProfile] = useState<UserProfile>()
    const [oidcRequestDescription, setOidcRequestDescription] = useState<OIDCAuthorizationRequestDescription>()
    const [oauthClientInfo, setOauthClientInfo] = useState<OAuthClientPublic>()
    const [redirectURL, setRedirectURL] = useState<string>()

    const [isConsenting, setIsConsenting] = useState<boolean>(false)
    const [isGettingUserProfile, setIsGettingUserProfile] = useState<boolean>(false)

    const [error, setError] = useState<any>()

    const sendGTagEvent = (event: string) => {
        // send event to Google Analytics
        // (casting to 'any' type to get compile-time access to gtag())
        const windowAny: any = window
        const gtag = windowAny.gtag
        if (gtag) {
            gtag('event', event, {
                'event_category': 'SynapseOAUTH',
            })
        }
    }

    const onError = (error: any) => {
        debugger
        handleErrorRedirect(error)
        setError(error)
    }

    const onConsent = () => {
        if (!isConsenting) {
            setIsConsenting(true)
        }
    }

    useEffect(() => {
        let isSubscribed = true
        if (isConsenting) {
            sendGTagEvent('UserConsented')
            let request: OIDCAuthorizationRequest = getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.consentToOAuth2Request(request, token).then((accessCode: AccessCodeResponse) => {
                if (isSubscribed) {
                    if (!accessCode || !accessCode.access_code) {
                        onError('Something went wrong - the access code is missing from the Synapse call.')
                        return
                    }
                    // done!  redirect with access code.
                    const redirectUri = getURLParam('redirect_uri')
                    setRedirectURL(`${redirectUri}?${getStateParam()}code=${encodeURIComponent(accessCode.access_code)}`)
                }
            }).catch((_err) => {
                onError(_err)
            })
        }
        return () => {
            isSubscribed = false
        }
    }, [isConsenting])

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
    const getHasAlreadyConsented = (token: string) => {
        if (token && !error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet            
            let request: OIDCAuthorizationRequest = getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.hasUserAuthorizedOAuthClient(request, token).then((consentGrantedResponse: OAuthConsentGrantedResponse) => {
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
                    onError({ error: 'consent_required', error_description: 'Current user has not previously granted permission, and prompt was set to none' })
                }
            }).catch((_err) => {
                onError(_err)
            })
        }
    }

    const getOAuth2RequestDescription = () => {
        if (!oidcRequestDescription && !error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet

            let request: OIDCAuthorizationRequest = getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.getOAuth2RequestDescription(request).then((oidcRequestDescription: OIDCAuthorizationRequestDescription) => {
                sendGTagEvent('SynapseOAuthClientRequestDescriptionLoaded')
                setOidcRequestDescription(oidcRequestDescription)

                // if we were able to get the oidc request description, also check for params that this web app does not support
                // sorry, we don't support JWT in the url query params today
                // https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
                const requestObject = getURLParam('request')
                const requestUri = getURLParam('request_uri')
                if (requestObject) {
                    handleErrorRedirect({ error: 'request_not_supported' })
                }
                if (requestUri) {
                    handleErrorRedirect({ error: 'request_uri_not_supported' })
                }
                // sorry, we don't support registration (yet?)
                // https://openid.net/specs/openid-connect-core-1_0.html#RegistrationParameter
                const registration = getURLParam('registration')
                if (registration) {
                    handleErrorRedirect({ error: 'registration_not_supported' })
                }

            }).catch((_err) => {
                onError(_err)
            })
        }
    }

    const getOIDCAuthorizationRequestFromSearchParams = () => {
        const claimsString: string = getURLParam('claims')!
        let authRequest: OIDCAuthorizationRequest = {
            clientId: getURLParam('client_id')!,
            scope: getURLParam('scope')!,
            responseType: getURLParam('response_type')!,
            redirectUri: getURLParam('redirect_uri')!,
            nonce: getURLParam('nonce')
        }
        if (claimsString) {
            authRequest.claims = JSON.parse(claimsString);
        }
        return authRequest;
    }

    const getOauthClientInfo = () => {
        if (!oauthClientInfo && !error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuthClient info yet

            const clientId = getURLParam('client_id')
            if (!clientId) {
                onError(new Error('Synapse OAuth client_id is required'))
                return
            }
            SynapseClient.getOAuth2Client(clientId).then((oauthClientInfo: OAuthClientPublic) => {
                if (oauthClientInfo.verified) {
                    getOAuth2RequestDescription()
                }
                setOauthClientInfo(oauthClientInfo)
            }).catch((_err) => {
                onError(_err)
            })
        }
    }

    const getSession = async () => {
        try {
            let token = await SynapseClient.getAccessTokenFromCookie()
            setToken(token)
        } catch (e) {
            console.error('Error on getSession: ', e)
            // intentionally calling sign out because there token could be stale so we want
            // the stored session to be cleared out.
            SynapseClient.signOut(() => { })
        }
    }

    const getUserProfile = () => {
        if (props.context) {
            const { accessToken: newToken } = props.context!
            if (newToken && (!profile || token !== newToken) && !error) {
                if (!isGettingUserProfile) {
                    setIsGettingUserProfile(true)
                }
            }
        }
    }

    useEffect(() => {
        let isSubscribed = true
        if (isGettingUserProfile) {
            const { accessToken: newToken } = props.context!
            getHasAlreadyConsented(newToken!)
            setToken(newToken)
            SynapseClient.getUserProfile(newToken).then((profile: UserProfile) => {
                if (isSubscribed) {
                    if (profile.profilePicureFileHandleId) {
                        profile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
                    }
                    setProfile(profile)
                }
            }).catch((_err) => {
                onError(_err)
            })
        }
        return () => {
            isSubscribed = false
        }
    }, [isGettingUserProfile])

    /**
       * Returns scopes UI.  All the links formatted accordingly
       */
    const Scopes = () => {
        return <>
            {oidcRequestDescription && <ul>
                {
                    oidcRequestDescription.scope.map(
                        (scope, index) => {
                            return (
                                <li key={index}>
                                    {scope}
                                </li>
                            )
                        })
                }
            </ul>}
        </>
    }

    //init
    useEffect(() => {
        getUserProfile()
        getOauthClientInfo()
    }, [])

    useEffect(() => {
        if (props.context?.accessToken !== token) {
            getUserProfile()
            getOauthClientInfo()
        }
    }, [token])

    useEffect(() => {
        if (redirectURL) {
            window.location.replace(redirectURL)
        }
    }, [redirectURL])

    const loadingSpinner = <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '50px' }}>
                {redirectURL && oauthClientInfo && <p>Waiting for {oauthClientInfo.client_name}...</p>}
                <span style={{ marginLeft: '10px', backgroundSize: '40px 40px', width: '40px', height: '40px' }} className={'spinner'} />
            </div>
        </div>

    return (
        <div>
            {
                !error &&
                oauthClientInfo &&
                !oauthClientInfo.verified &&
                <>
                    <div className="BlueBackground">
                        <div className="ComponentWrapper">
                            <WarningTwoTone
                                className='text-danger'
                                style={{ marginLeft: '5px', marginBottom: '15px', fontSize: '40px' }}
                            />
                            <h3>This app isn't verified</h3>
                            <p>This app has not been verified by Sage Bionetworks yet.</p>
                            <div className="text-align-right margin-top-40">
                                <button onClick={onGoBack} className="btn btn-primary">Back to Safety</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                !redirectURL &&
                !error &&
                token &&
                oauthClientInfo &&
                oauthClientInfo.verified &&
                oidcRequestDescription &&
                <>
                    <div className="BlueBackground">
                        <div className="ComponentWrapper">
                            <UserCard
                                userProfile={profile}
                                size={SynapseConstants.SMALL_USER_CARD}
                            />
                            <h4><strong>{oauthClientInfo.client_name}</strong> requests permission:</h4>
                            <Scopes />
                            <div className="margin-top-20">
                                <p>By clicking "Allow", you allow this app to use your information in accordance with their <a href={oauthClientInfo.tos_uri} target="_blank" rel="noopener noreferrer">terms of service</a> and <a href={oauthClientInfo.policy_uri} target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                </p>
                            </div>
                            <div className="text-align-right margin-top-40">
                                <button onClick={onDeny} className="btn btn-default margin-right-5">Deny</button>
                                <button onClick={onConsent} className="btn btn-primary">Allow</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                !error && !oauthClientInfo && !oidcRequestDescription &&
                loadingSpinner
            }
            {
                redirectURL && oauthClientInfo &&
                loadingSpinner
            }
            {
                !redirectURL &&
                !error &&
                !token &&
                oauthClientInfo &&
                oauthClientInfo.verified &&
                oidcRequestDescription &&
                <div className="BlueBackground">
                    <Login
                        sessionCallback={getSession}
                    />
                </div>
            }
            {
                error &&
                <div className="alert alert-danger">
                    {error.name || 'Error'} : {error.reason}{error.message}
                </div>
            }
        </div>
    )
}
