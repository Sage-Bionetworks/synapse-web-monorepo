import * as React from 'react'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import Login from 'synapse-react-client/dist/containers/Login'
import { TokenContext } from './AppInitializer'
import { UserProfile } from 'synapse-react-client/dist/utils/jsonResponses/UserProfile'
import { OIDCAuthorizationRequest } from 'synapse-react-client/dist/utils/jsonResponses/OIDCAuthorizationRequest'
import { OIDCAuthorizationRequestDescription } from 'synapse-react-client/dist/utils/jsonResponses/OIDCAuthorizationRequestDescription'
import { OAuthClientPublic } from 'synapse-react-client/dist/utils/jsonResponses/OAuthClientPublic'
import { AccessCodeResponse } from 'synapse-react-client/dist/utils/jsonResponses/AccessCodeResponse';
import UserCard from 'synapse-react-client/dist/containers/UserCard';

// NOTE: using http://3.84.30.72:8080/services-repository-develop-SNAPSHOT/ as the endpoint for dev testing
// should be https://repo-prod.prod.sagebase.org/
const ENDPOINT: string = 'https://repo-prod.prod.sagebase.org/'

type OAuth2FormState = {
    token?: string,
    profile?: UserProfile,
    oidcRequestDescription?: OIDCAuthorizationRequestDescription,
    oauthClientInfo?: OAuthClientPublic
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
        this.finishedProcessing = this.finishedProcessing.bind(this)
        this.onConsent = this.onConsent.bind(this)
        this.onDeny = this.onDeny.bind(this)
        this.getOAuth2RequestDescription = this.getOAuth2RequestDescription.bind(this)
        this.getOIDCAuthorizationRequestFromSearchParams = this.getOIDCAuthorizationRequestFromSearchParams.bind(this)
        this.getOauthClientInfo = this.getOauthClientInfo.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.getURLParam = this.getURLParam.bind(this)
    }

    finishedProcessing = () => {
        this.setState(
            {
                isLoading: false
            })
    }

    onError = (error: any) => {
        debugger
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
        let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
        SynapseClient.consentToOAuth2Request(request, this.state.token, ENDPOINT).then((accessCode: AccessCodeResponse) => {
            // done!  redirect with access code.
            const redirectUri = this.getURLParam('redirect_uri')
            const state = this.getURLParam('state')
            window.location.replace(`${redirectUri}?state=${state}&code=${accessCode.access_code}`)
        }).catch((_err) => {
            console.log('unable to consent to oauth request', _err)
            this.onError(_err)
        })
    }

    onDeny = () => {
        let redirect: string
        if (this.state.oauthClientInfo && this.state.oauthClientInfo.client_uri) {
            redirect = this.state.oauthClientInfo.client_uri
        } else {
            redirect = this.getURLParam('redirect_uri')
        }
        window.location.replace(redirect)
    }

    componentDidMount() {
        this.componentDidUpdate()
    }

    componentDidUpdate() {
        this.getUserProfile()
        this.getOAuth2RequestDescription()
        this.getOauthClientInfo()
    }

    getOAuth2RequestDescription() {
        if (!this.state.oidcRequestDescription && !this.state.error) {
            let request: OIDCAuthorizationRequest = this.getOIDCAuthorizationRequestFromSearchParams()
            SynapseClient.getOAuth2RequestDescription(request, this.state.token, ENDPOINT).then((oidcRequestDescription: OIDCAuthorizationRequestDescription) => {
                this.setState({
                    oidcRequestDescription,
                    isLoading: false
                })
            }).catch((_err) => {
                console.log('oauth request could not be verified ', _err)
                this.onError(_err)
            })
        }
    }

    getOIDCAuthorizationRequestFromSearchParams(): OIDCAuthorizationRequest {
        return {
            clientId: this.getURLParam('client_id'),
            scope: this.getURLParam('scope'),
            claims: this.getURLParam('claims'),
            responseType: 'code',
            redirectUri: this.getURLParam('redirect_uri')
        }
    }

    getOauthClientInfo() {
        if (!this.state.oauthClientInfo && !this.state.error) {
            const clientId = this.getURLParam('client_id')
            SynapseClient.getOAuth2Client(clientId, ENDPOINT).then((oauthClientInfo: OAuthClientPublic) => {
                this.setState({
                    oauthClientInfo
                })
            }).catch((_err) => {
                console.log('could not get oauth client info', _err)
                this.onError(_err)
            })
        }
    }

    getUserProfile() {
        const newToken = this.context
        if (newToken && (!this.state.profile || this.state.token !== newToken) && !this.state.error) {
            SynapseClient.getUserProfile(newToken, ENDPOINT).then((profile: UserProfile) => {
                if (profile.profilePicureFileHandleId) {
                    profile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
                }
                this.setState({
                    profile,
                    token: newToken,
                    isLoading: false
                })
            }).catch((_err) => {
                console.log('user profile could not be fetched ', _err)
                this.onError(_err)
            })
        }
    }
    getURLParam = (keyName: string): string => {
        let currentUrl: URL | null | string = new URL(window.location.href)
        // in test environment the searchParams isn't defined
        const { searchParams } = currentUrl
        let paramValue: string | null = null
        if (searchParams) {
            paramValue = searchParams.get(keyName)
        }
        return paramValue ? paramValue : ''
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
                    this.state.token &&
                    this.state.oauthClientInfo &&
                    this.state.oidcRequestDescription &&
                    !this.state.isLoading &&
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
                    <React.Fragment>
                        <span style={{ marginLeft: '2px' }} className={'spinner'} />
                    </React.Fragment>
                }
                {
                    !this.state.error &&
                    !this.state.token &&
                    <Login
                        token={this.state.token}
                        theme={'light'}
                        icon={true}
                    />
                }
                {
                    this.state.error &&
                    <div className="alert alert-danger">
                        Error: {this.state.error.name || this.state.error.reason}
                    </div>
                }
            </div>
        )
    }
}

OAuth2Form.contextType = TokenContext