import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SynapseClient } from 'synapse-react-client'
import { withCookies, ReactCookieProps } from 'react-cookie'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'

export type AppInitializerState = {
  token: string
  showLoginDialog: boolean
  userProfile: UserProfile | undefined
  // delay render until get session is called, o.w. theres an uneccessary refresh right
  // after page load
  hasCalledGetSession: boolean
}

type Props = RouteComponentProps & ReactCookieProps

class AppInitializer extends React.Component<Props, AppInitializerState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      token: '',
      hasCalledGetSession: false,
      userProfile: undefined,
      showLoginDialog: false,
    }
  }

  initAnonymousUserState = () => {
    SynapseClient.signOut(() => {
      // reset token and user profile
      this.setState({
        token: '',
        userProfile: undefined,
        hasCalledGetSession: true,
      })
    })
  }

  getSession = async () => {
    try {
      const token = await SynapseClient.getAccessTokenFromCookie()
      if (!token) {
        this.initAnonymousUserState()
        return
      }
      this.setState({ token, hasCalledGetSession: true })
      // get user profile
      const userProfile = await SynapseClient.getUserProfile(token)
      if (userProfile.profilePicureFileHandleId) {
        userProfile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${userProfile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${userProfile.profilePicureFileHandleId}`
      }
      this.setState({
        userProfile,
      })
    } catch (e) {
      console.error('Error on getSession: ', e)
      // intentionally calling sign out because there token could be stale so we want
      // the stored session to be cleared out.
      this.initAnonymousUserState()
    }
  }

  componentDidMount() {
    this.getSession()
    SynapseClient.detectSSOCode()
  }

  render() {
    if (!this.state.hasCalledGetSession) {
      // prevent componentDidUpdate all over the page by waiting for get session call
      return <></>
    }
    return (
      <>
        <SynapseContextProvider
          synapseContext={{
            accessToken: this.state.token,
            isInExperimentalMode:
              SynapseClient.isInSynapseExperimentalMode(),
            utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          }}
        >
          {React.Children.map(this.props.children, (child: any) => {
            return child
          })}
        </SynapseContextProvider>
      </>
    )
  }
}

export default withRouter(withCookies(AppInitializer))
