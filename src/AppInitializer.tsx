import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SynapseClient } from 'synapse-react-client'
import { withCookies, ReactCookieProps } from 'react-cookie'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import { getSearchParam } from 'URLUtils'
import { HiddenIFrame } from 'components/HiddenIFrame'

export type AppInitializerState = {
  token: string
  showLoginDialog: boolean
  // delay render until get session is called, o.w. theres an uneccessary refresh right
  // after page load
  hasCalledGetSession: boolean
  userProfile?: UserProfile
}

type Props = RouteComponentProps & ReactCookieProps

class AppInitializer extends React.Component<Props, AppInitializerState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      token: '',
      hasCalledGetSession: false,
      showLoginDialog: false,
    }
  }

  initAnonymousUserState = () => {
    SynapseClient.signOut(() => {
      // reset token and user profile
      this.setState({
        token: '',
        hasCalledGetSession: true,
      })
    })
  }

  initSourceAppId = () => {
    const appId = getSearchParam('appId')
    if (appId) {
      localStorage.setItem('sourceAppId', appId)
    }
  }

  getSession = async () => {
    try {
      const token = await SynapseClient.getAccessTokenFromCookie()
      if (!token) {
        this.initAnonymousUserState()
        return
      }
      // verify we can get the current user profile
      let userProfile = undefined
      try {
        userProfile = await SynapseClient.getUserProfile(token)
      } catch (error:any) {
        if ((error.reason as string).toLowerCase().includes('terms of use') && window.location.pathname !== '/authenticated/signTermsOfUse' ) {
          window.location.assign('/authenticated/signTermsOfUse')
        } else {
          // invalid access token detected, clear it
          this.initAnonymousUserState()
        }
      }
      this.setState({ token, userProfile, hasCalledGetSession: true })
    } catch (e) {
      console.error('Error on getSession: ', e)
      // intentionally calling sign out because there token could be stale so we want
      // the stored session to be cleared out.
      this.initAnonymousUserState()
    }
  }

  componentDidUpdate(prevProps: Props) {
    // send page view event to Google Analytics
    // (casting to 'any' type to get compile-time access to gtag())
    const windowAny: any = window
    const gtag = windowAny.gtag
    if (gtag) {
      gtag('config', 'UA-29804340-1', {
        page_location: window.location.href,
        page_path: `/${this.props.location.pathname}`,
      })
    }
  }

  componentDidMount() {
    this.initSourceAppId()
    this.getSession()
    SynapseClient.detectSSOCode('/register1',
      (err) => {
        displayToast(err, 'danger')
      })
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
          {/* This is only rendered after hasCalledGetSession is set to true */}
          {this.state.token && <HiddenIFrame url={`https://signin.synapse.org/login?code=${this.state.token}`} />}
          {!this.state.token && <HiddenIFrame url="https://signin.synapse.org/logout" />}
        </SynapseContextProvider>
      </>
    )
  }
}

export default withRouter(withCookies(AppInitializer))
