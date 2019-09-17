import * as React from 'react'
import { SynapseClient } from 'synapse-react-client'
import { ENDPOINT, SWC_ENDPOINT } from './OAuth2Form'
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
    SynapseClient.getSessionTokenFromCookie(SWC_ENDPOINT).then(
      (sessionToken: string|null) => {
        if (sessionToken) {
          return SynapseClient.putRefreshSessionToken(sessionToken, ENDPOINT).then(
            // backend doesn't return a response for this call, its empty
            (_response) => {
              this.setState({ token: sessionToken })
            }
          )
        }
      }).catch((_err) => {
        console.log('no token from cookie could be fetched ', _err)
      })
    // on first time, also check for the SSO code
    SynapseClient.detectSSOCode(ENDPOINT, SWC_ENDPOINT)
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
