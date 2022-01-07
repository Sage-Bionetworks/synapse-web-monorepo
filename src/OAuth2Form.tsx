import * as React from 'react'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import Login from 'synapse-react-client/dist/containers/Login'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes/UserProfile'
import { OIDCAuthorizationRequest } from 'synapse-react-client/dist/utils/synapseTypes/OIDCAuthorizationRequest'
import { OIDCAuthorizationRequestDescription } from 'synapse-react-client/dist/utils/synapseTypes/OIDCAuthorizationRequestDescription'
import { OAuthClientPublic } from 'synapse-react-client/dist/utils/synapseTypes/OAuthClientPublic'
import { AccessCodeResponse } from 'synapse-react-client/dist/utils/synapseTypes/AccessCodeResponse'
import UserCard from 'synapse-react-client/dist/containers/UserCard'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OAuthConsentGrantedResponse } from 'synapse-react-client/dist/utils/synapseTypes'
import { getURLParam, getStateParam, handleErrorRedirect } from './URLUtils'
import { SynapseContextType } from 'synapse-react-client/dist/utils/SynapseContext'

// can override endpoints as https://repo-staging.prod.sagebase.org/ and https://staging.synapse.org for staging

const isStaging:boolean = window.location.hostname.includes('staging');

(window as any).SRC = {
    OVERRIDE_ENDPOINT_CONFIG: {
        REPO: isStaging ? 'https://repo-staging.prod.sagebase.org/' : 'https://repo-prod.prod.sagebase.org/',
        PORTAL: isStaging ? 'https://staging.synapse.org/' : 'https://www.synapse.org/',
    }
}

library.add(faExclamationTriangle)

type OAuth2FormState = {
    token?: string,
    profile?: UserProfile,
    oidcRequestDescription?: OIDCAuthorizationRequestDescription,
    oauthClientInfo?: OAuthClientPublic,
    isRedirecting?: boolean,
    error?: any
}

export type OAuth2FormProps = {
    context?:SynapseContextType
}

export default class OAuth2Form
    extends React.Component<OAuth2FormProps, OAuth2FormState> {

    constructor(props: OAuth2FormProps) {
        super(props)
        this.state = {}
        this.onError = this.onError.bind(this)
        this.onConsent = this.onConsent.bind(this)
        this.onGoBack = this.onGoBack.bind(this)
        this.onDeny = this.onDeny.bind(this)
        this.getOAuth2RequestDescription = this.getOAuth2RequestDescription.bind(this)
        this.getHasAlreadyConsented = this.getHasAlreadyConsented.bind(this)
        this.getOIDCAuthorizationRequestFromSearchParams = this.getOIDCAuthorizationRequestFromSearchParams.bind(this)
        this.getOauthClientInfo = this.getOauthClientInfo.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.getSession = this.getSession.bind(this)
        this.init = this.init.bind(this)

        this.init()
    }
    
    isConsenting:boolean = false
    isGettingUserProfile:boolean = false

    init = () => {
        this.getUserProfile()
        this.getOauthClientInfo()
    }

    sendGTagEvent = (event: string) => {
      // send event to Google Analytics
      // (casting to 'any' type to get compile-time access to gtag())
      const windowAny:any = window
      const gtag = windowAny.gtag
      if (gtag) {
        gtag('event', event, {
            'event_category': 'SynapseOAUTH',
          })
      }
    }
    
    onError = (error: any) => {
        debugger
        handleErrorRedirect(error)
        this.setState({
            error,
        })
    }
    onConsent = () => {
        if (!this.isConsenting) {
            this.isConsenting = true
            this.sendGTagEvent('UserConsented')
            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.consentToOAuth2Request(request, this.state.token).then((accessCode: AccessCodeResponse) => {
                if (!accessCode || !accessCode.access_code) {
                    this.onError('Something went wrong - the access code is missing from the Synapse call.')
                    return
                }
                // done!  redirect with access code.
                const redirectUri = getURLParam('redirect_uri')
                this.setState({
                    isRedirecting: true
                })
                window.location.replace(`${redirectUri}?${getStateParam()}code=${encodeURIComponent(accessCode.access_code)}`)
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    onGoBack = () => {
        window.history.back()
    }

    onDeny = () => {
        let redirect: string
        this.sendGTagEvent('UserDeniedConsent')
        if (this.state.oauthClientInfo && this.state.oauthClientInfo.client_uri) {
            redirect = this.state.oauthClientInfo.client_uri
        } else {
            redirect = getURLParam('redirect_uri')!
        }
        this.setState({
            isRedirecting: true
        })
        window.location.replace(redirect)
    }
    
    // if user has already consented to this client request, no need to ask again
    async getHasAlreadyConsented(token:string) {
        if (token && !this.state.error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet            
            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.hasUserAuthorizedOAuthClient(request, token).then((consentGrantedResponse: OAuthConsentGrantedResponse) => {
                const prompt = getURLParam('prompt')
                if (consentGrantedResponse.granted) {
                    // SWC-5285: before auto-consenting, make sure we're allowed to auto-consent.  
                    // Only allow if prompt is undefined or set to none.
                    if (!prompt || prompt !== 'consent') {
                        // auto-consent!
                        this.onConsent()
                    } //else if prompt is defined and another value ('login', 'consent', or 'select_account') then always prompt!
                } else if (prompt && prompt === 'none') {
                    // granted === false and prompt === none
                    this.onError({error: 'consent_required', error_description: 'Current user has not previously granted permission, and prompt was set to none'})
                }
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getOAuth2RequestDescription() {
        if (!this.state.oidcRequestDescription && !this.state.error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet

            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.getOAuth2RequestDescription(request).then((oidcRequestDescription: OIDCAuthorizationRequestDescription) => {
                this.sendGTagEvent('SynapseOAuthClientRequestDescriptionLoaded')
                this.setState({
                    oidcRequestDescription,
                })

                // if we were able to get the oidc request description, also check for params that this web app does not support
                // sorry, we don't support JWT in the url query params today
                // https://openid.net/specs/openid-connect-core-1_0.html#JWTRequests
                const requestObject = getURLParam('request')
                const requestUri = getURLParam('request_uri')
                if (requestObject) {
                handleErrorRedirect({error: 'request_not_supported'})
                }
                if (requestUri) {
                handleErrorRedirect({error: 'request_uri_not_supported'})
                }
                // sorry, we don't support registration (yet?)
                // https://openid.net/specs/openid-connect-core-1_0.html#RegistrationParameter
                const registration = getURLParam('registration')
                if (registration) {
                handleErrorRedirect({error: 'registration_not_supported'})
                }

            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getOIDCAuthorizationRequestFromSearchParams(): OIDCAuthorizationRequest {
        const claimsString: string = getURLParam('claims')!
        let authRequest:OIDCAuthorizationRequest = {
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

    getOauthClientInfo() {
        if (!this.state.oauthClientInfo && !this.state.error) {
            const code = getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuthClient info yet

            const clientId = getURLParam('client_id')
            if (!clientId) {
                this.onError(new Error('Synapse OAuth client_id is required'))
                return
            }
            SynapseClient.getOAuth2Client(clientId).then((oauthClientInfo: OAuthClientPublic) => {
                if (oauthClientInfo.verified) {
                    this.getOAuth2RequestDescription()
                }
                this.setState({
                    oauthClientInfo,
                })
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getSession = async () => {
        try {
            let token = await SynapseClient.getAccessTokenFromCookie()
            this.setState({ token })
        } catch (e) {
            console.error('Error on getSession: ', e)
            // intentionally calling sign out because there token could be stale so we want
            // the stored session to be cleared out.
            SynapseClient.signOut(() => {})
        }
    }

    getUserProfile() {
        const newToken = this.props.context?.accessToken
        if (newToken && (!this.state.profile || this.state.token !== newToken) && !this.state.error) {
            if (!this.isGettingUserProfile) {
                this.isGettingUserProfile = true
                this.getHasAlreadyConsented(newToken)
                this.setState({
                    token: newToken,
                })
                SynapseClient.getUserProfile(newToken).then((profile: UserProfile) => {
                    if (profile.profilePicureFileHandleId) {
                        profile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
                    }
                    this.setState({
                        profile,
                    })
                }).catch((_err) => {
                    this.onError(_err)
                }).finally(() => this.isGettingUserProfile = false)
            }
        }
    }

    /**
       * Returns scopes UI
       *
       * @returns JSX for the requested scopes
       */
    public renderScopes() {
        // return all the links formatted accordingly
        if (this.state.oidcRequestDescription) {
            return <ul>
                {
                    this.state.oidcRequestDescription.scope.map(
                        (scope, index) => {
                            return (
                                <li key={index}>
                                    {scope}
                                </li>
                            )
                        })
                }
            </ul>
        }
    }
    render() {
        if (this.props.context?.accessToken !== this.state.token) {
            // re-initialize!
            this.init()
        }
        const scopes = this.renderScopes()
        const loadingSpinner = <div style={{ textAlign: 'center'}}>
            <div style={{ marginTop: '50px'}}>
                {this.state.isRedirecting &&  this.state.oauthClientInfo && <p>Waiting for {this.state.oauthClientInfo.client_name}...</p>}
                <span style={{marginLeft: '10px', backgroundSize: '40px 40px', width: '40px', height: '40px' }} className={'spinner'} />
            </div>
        </div>
        return (
            <div>
                {
                    !this.state.error &&
                    this.state.oauthClientInfo &&
                    !this.state.oauthClientInfo.verified &&
                    <>
                        <div className="BlueBackground">
                            <div className="ComponentWrapper">
                                <FontAwesomeIcon
                                    className='text-danger'
                                    style={{ marginLeft: '5px', marginBottom: '15px', fontSize: '40px' }}
                                    icon='exclamation-triangle'
                                />
                                <h3>This app isn't verified</h3>
                                <p>This app has not been verified by Sage Bionetworks yet.</p>
                                <div className="text-align-right margin-top-40">
                                    <button onClick={this.onGoBack} className="btn btn-primary">Back to Safety</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    !this.state.isRedirecting &&
                    !this.state.error &&
                    this.state.token &&
                    this.state.oauthClientInfo &&
                    this.state.oauthClientInfo.verified &&
                    this.state.oidcRequestDescription &&
                    <>
                        <div className="BlueBackground">
                            <div className="ComponentWrapper">
                                <UserCard
                                    userProfile={this.state.profile}
                                    size={SynapseConstants.SMALL_USER_CARD}
                                    />
                                <h4><strong>{this.state.oauthClientInfo.client_name}</strong> requests permission:</h4>
                                {scopes}
                                <div className="margin-top-20">
                                    <p>By clicking "Allow", you allow this app to use your information in accordance with their <a href={this.state.oauthClientInfo.tos_uri} target="_blank" rel="noopener noreferrer">terms of service</a> and <a href={this.state.oauthClientInfo.policy_uri} target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                    </p>
                                </div>
                                <div className="text-align-right margin-top-40">
                                    <button onClick={this.onDeny} className="btn btn-default margin-right-5">Deny</button>
                                    <button onClick={this.onConsent} className="btn btn-primary">Allow</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    !this.state.error && !this.state.oauthClientInfo && !this.state.oidcRequestDescription &&
                        loadingSpinner
                }
                {
                    this.state.isRedirecting && this.state.oauthClientInfo &&
                        loadingSpinner
                }
                {
                    !this.state.isRedirecting &&
                    !this.state.error &&
                    !this.state.token &&
                    this.state.oauthClientInfo &&
                    this.state.oauthClientInfo.verified &&
                    this.state.oidcRequestDescription &&
                    <div className="BlueBackground">
                        <Login
                            sessionCallback={this.getSession}
                        />
                    </div>
                }
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        {this.state.error.name || 'Error'} : {this.state.error.reason}{this.state.error.message}
                    </div>
                }
            </div>
        )
    }
}
