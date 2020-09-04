import * as React from 'react'
import { SynapseClient } from 'synapse-react-client'
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
      SynapseClient.setSessionTokenCookie(undefined, () => {
        urlSearchParams.set('prompt', '')
        // replace query params and refresh
        window.location.replace(`${window.location.href.slice(0, window.location.href.indexOf('?'))}?${urlSearchParams.toString()}`)
      })  
    } else {
      SynapseClient.getSessionTokenFromCookie().then(
        (sessionToken: string|null) => {
          if (sessionToken) {
            
            return SynapseClient.putRefreshSessionToken(sessionToken).then(
              // backend doesn't return a response for this call, its empty
              (_response) => {
                this.setState({ token: sessionToken })
              }
            )
          }
        }).catch((_err) => {
          console.log('no token from cookie could be fetched ', _err)
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
