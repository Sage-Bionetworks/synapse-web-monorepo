import * as React from 'react'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import Login from 'synapse-react-client/dist/containers/Login'
import { TokenContext } from './AppInitializer'
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

// can override endpoints as https://repo-staging.prod.sagebase.org/ and https://staging.synapse.org for staging
(window as any).SRC = {
    OVERRIDE_ENDPOINT_CONFIG: {
        REPO: 'https://repo-prod.prod.sagebase.org/',
        PORTAL: 'https://www.synapse.org/',
    }
}

library.add(faExclamationTriangle)

type OAuth2FormState = {
    token?: string,
    profile?: UserProfile,
    oidcRequestDescription?: OIDCAuthorizationRequestDescription,
    oauthClientInfo?: OAuthClientPublic,
    hasCheckedPreviousConsent?: boolean,
    error?: any,
    isLoading?: boolean,
}

export type OAuth2FormProps = {
}

export default class OAuth2Form
    extends React.Component<OAuth2FormProps, OAuth2FormState> {

    constructor(props: OAuth2FormProps) {
        super(props)
        this.state = {
            isLoading: true
        }
        this.onError = this.onError.bind(this)
        this.onConsent = this.onConsent.bind(this)
        this.onGoBack = this.onGoBack.bind(this)
        this.onDeny = this.onDeny.bind(this)
        this.getOAuth2RequestDescription = this.getOAuth2RequestDescription.bind(this)
        this.getHasAlreadyConsented = this.getHasAlreadyConsented.bind(this)
        this.getOIDCAuthorizationRequestFromSearchParams = this.getOIDCAuthorizationRequestFromSearchParams.bind(this)
        this.getOauthClientInfo = this.getOauthClientInfo.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.getURLParam = this.getURLParam.bind(this)
        this.getSession = this.getSession.bind(this)
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
        console.error(error)
        this.setState({
            error,
            isLoading: false
        })
    }

    onConsent = () => {
        this.setState(
            {
                isLoading: true
            })
        this.sendGTagEvent('UserConsented')
        let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
        SynapseClient.consentToOAuth2Request(request, this.state.token).then((accessCode: AccessCodeResponse) => {
            // done!  redirect with access code.
            const redirectUri = this.getURLParam('redirect_uri')
            const state = this.getURLParam('state')
            window.location.replace(`${redirectUri}?state=${state}&code=${accessCode.access_code}`)
        }).catch((_err) => {
            this.onError(_err)
        })
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
            redirect = this.getURLParam('redirect_uri')!
        }
        window.location.replace(redirect)
    }

    componentDidMount() {
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        this.getUserProfile()
        this.getOauthClientInfo()
        this.getHasAlreadyConsented()
    }
    
    // if user has already consented to this client request, no need to ask again
    getHasAlreadyConsented() {
        if (!this.state.hasCheckedPreviousConsent && this.state.token && !this.state.error) {
            const code = this.getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet
            
            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.hasUserAuthorizedOAuthClient(request, this.state.token).then((consentGrantedResponse: OAuthConsentGrantedResponse) => {
                if (consentGrantedResponse.granted) {
                    // auto-consent!
                    this.onConsent()
                }
                this.setState({
                    hasCheckedPreviousConsent: true
                })
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getOAuth2RequestDescription() {
        if (!this.state.oidcRequestDescription && !this.state.error) {
            const code = this.getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuth2RequestDescription yet

            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.getOAuth2RequestDescription(request, undefined).then((oidcRequestDescription: OIDCAuthorizationRequestDescription) => {
                this.sendGTagEvent('SynapseOAuthClientRequestDescriptionLoaded')
                this.setState({
                    oidcRequestDescription,
                    isLoading: false
                })
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getOIDCAuthorizationRequestFromSearchParams(): OIDCAuthorizationRequest {
        let authRequest:OIDCAuthorizationRequest = {
            clientId: this.getURLParam('client_id')!,
            scope: this.getURLParam('scope')!,
            claims: this.getURLParam('claims')!,
            responseType: 'code',
            redirectUri: this.getURLParam('redirect_uri')!,
            nonce: this.getURLParam('nonce')
        }
        return authRequest
    }

    getOauthClientInfo() {
        if (!this.state.oauthClientInfo && !this.state.error) {
            const code = this.getURLParam('code')
            if (code) return; // we're in the middle of a SSO, do not attempt to get OAuthClient info yet

            const clientId = this.getURLParam('client_id')
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
                    isLoading: false
                })
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }

    getSession = async () => {
        try {
            const token = await SynapseClient.getSessionTokenFromCookie()
            this.setState({ token })
        } catch (e) {
            console.error('Error on getSession: ', e)
            // intentionally calling sign out because there token could be stale so we want
            // the stored session to be cleared out.
            SynapseClient.signOut(() => {})
        }
    }

    getUserProfile() {
        const newToken = this.context
        if (newToken && (!this.state.profile || this.state.token !== newToken) && !this.state.error) {
            SynapseClient.getUserProfile(newToken).then((profile: UserProfile) => {
                if (profile.profilePicureFileHandleId) {
                    profile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
                }
                this.setState({
                    profile,
                    token: newToken,
                })
            }).catch((_err) => {
                this.onError(_err)
            })
        }
    }
    getURLParam = (keyName: string): string | undefined => {
        let currentUrl: URL | undefined | string = new URL(window.location.href)
        // in test environment the searchParams isn't defined
        const { searchParams } = currentUrl
        let paramValue: string | undefined = undefined
        if (searchParams && searchParams.get(keyName)) {
            paramValue = searchParams.get(keyName)!
        }
        return paramValue
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
        const scopes = this.renderScopes()
        return (
            <div>
                {
                    !this.state.error &&
                    this.state.oauthClientInfo &&
                    !this.state.oauthClientInfo.verified &&
                    !this.state.isLoading &&
                    <React.Fragment>
                        <div className="margin-top-30">
                            <div className="max-width-460 center-in-div light-border padding-30">
                                <FontAwesomeIcon
                                    className='text-danger'
                                    style={{ marginLeft: '5px', marginBottom: '15px', fontSize: '40px' }}
                                    icon='exclamation-triangle'
                                />
                                <h3>This app isn't verified</h3>
                                <p>This app has not been verified by Sage Bionetworks yet.</p>
                                <div className="text-align-right margin-top-20">
                                    <button onClick={this.onGoBack} className="btn btn-primary">Back to Safety</button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                {
                    !this.state.error &&
                    this.state.token &&
                    this.state.oauthClientInfo &&
                    this.state.oauthClientInfo.verified &&
                    this.state.oidcRequestDescription &&
                    !this.state.isLoading &&
                    this.state.profile &&
                    <React.Fragment>
                        <div className="margin-top-30">
                            <div className="max-width-460 center-in-div light-border padding-30">
                                <UserCard
                                    userProfile={this.state.profile}
                                    size={SynapseConstants.SMALL_USER_CARD}
                                    />
                                <h4><strong>{this.state.oauthClientInfo.client_name}</strong> would like to access the following items in your Synapse account:</h4>
                                {scopes}
                                <div className="margin-top-20">
                                    <p>By clicking "Allow", you allow this app to use your information in accordance with their <a href={this.state.oauthClientInfo.tos_uri} target="_blank" rel="noopener noreferrer">terms of service</a> and <a href={this.state.oauthClientInfo.policy_uri} target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                    </p>
                                </div>
                                <div className="text-align-right margin-top-20">
                                    <button onClick={this.onDeny} className="btn btn-default margin-right-5">Deny</button>
                                    <button onClick={this.onConsent} className="btn btn-success">Allow</button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
                {
                    !this.state.error &&
                    this.state.isLoading &&
                    <div className="center">
                        <span style={{ marginTop: '20px', marginLeft: '2px', backgroundSize: '40px 40px', width: '40px', height: '40px' }} className={'spinner'} />
                    </div>
                }
                {
                    !this.state.error &&
                    !this.state.token &&
                    this.state.oauthClientInfo &&
                    this.state.oauthClientInfo.verified &&
                    this.state.oidcRequestDescription &&
                    !this.state.isLoading &&
                    <div className="margin-top-30">
                        <div className="max-width-460 center-in-div light-border padding-30">
                            <Login
                                theme={'light'}
                                icon={true}
                                sessionCallback={this.getSession}
                            />
                        </div>
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

OAuth2Form.contextType = TokenContext