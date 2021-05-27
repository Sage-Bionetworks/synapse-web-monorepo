import moment from 'moment'
import * as React from 'react'
import { SynapseClient } from 'synapse-react-client'
import { AuthenticatedOn } from 'synapse-react-client/dist/utils/synapseTypes/AuthenticatedOn'
import { handleErrorRedirect } from './URLUtils'
export type AppInitializerToken = {
  token: string
}
export const TokenContext = React.createContext('')


class AppInitializer extends React.Component<{},AppInitializerToken> {
  constructor(props: any) {
    super(props)
    this.state = {
      token: ''
    }    
  }

  componentDidMount() {
    // is prompt=login?  if so, then clear the cookie
    const urlSearchParams = new URLSearchParams(window.location.search)
    const prompt = urlSearchParams.get('prompt')
    if (prompt === 'login') {
      SynapseClient.setAccessTokenCookie(undefined, () => {
        urlSearchParams.set('prompt', '')
        // replace query params and refresh
        window.location.replace(`${window.location.href.slice(0, window.location.href.indexOf('?'))}?${urlSearchParams.toString()}`)
      })
    } else {
      SynapseClient.getAccessTokenFromCookie().then(
        (accessToken: string|null) => {
          if (accessToken) {
            // check max age when re-establishing the session, not to auto-consent.
            const maxAgeURLParam = urlSearchParams.get('max_age')
            // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
            if (maxAgeURLParam && parseInt(maxAgeURLParam)) {
                SynapseClient.getAuthenticatedOn(accessToken).then(
                  (authenticatedOnResponse:AuthenticatedOn) => {
                    const lastAuthenticatedOn = moment.utc(authenticatedOnResponse.authenticatedOn)
                    const now = moment.utc()
                    if (now.diff(lastAuthenticatedOn, 'seconds') <= parseInt(maxAgeURLParam))
                      this.setState({ token: accessToken })
                  }
                )
            } else {
              // no max age param, use the token
              this.setState({ token: accessToken })
            }
          }
        }).catch((_err) => {
          console.log('no token from cookie could be fetched ', _err)
          if (prompt === 'none') {
            // not logged in, and prompt is "none".
            handleErrorRedirect({error: 'login_required', error_description: 'User is not logged in, and prompt was set to none'})
          }
        })        
    }
    // on first time, also check for the SSO code
    SynapseClient.detectSSOCode()
  }

  render() {
    return (
      <TokenContext.Provider value={this.state.token}>
        {this.props.children}
      </TokenContext.Provider>
    )
  }
}

export default AppInitializer
