import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { withCookies, ReactCookieProps } from 'react-cookie'
import { SynapseComponents } from 'synapse-react-client'

export type CookiesNotificationToken = {
  hasAgreedToCookies: boolean
}

type Props = RouteComponentProps & ReactCookieProps

const hasAgreedToCookiesKey =
  'org.sagebionetworks.security.cookies.portal.notification.okclicked'

class CookiesNotification extends React.Component<
  Props,
  CookiesNotificationToken
> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasAgreedToCookies: true,
    }
    this.setHasAgreedToCookies = this.setHasAgreedToCookies.bind(this)
  }

  componentDidMount() {
    const okClicked = this.props.cookies!.get(hasAgreedToCookiesKey)
    if (!okClicked) {
      this.setState({
        hasAgreedToCookies: false,
      })
    }
  }

  setHasAgreedToCookies() {
    this.setState({
      hasAgreedToCookies: true,
    })
    this.props.cookies!.set(hasAgreedToCookiesKey, true)
  }

  render() {
    // show banner if they haven't clicked okay, otherwise show nothing
    return this.state.hasAgreedToCookies ? (
      false
    ) : (
      <SynapseComponents.FullWidthAlert 
        variant="info" 
        title="Our site uses cookies."
        description="This website uses cookies to enhance your experience and to analyze our traffic. Using this website means that you agree with our cookie policy." 
        primaryButtonConfig={{
          text: "ACCEPT AND CONTINUE",
          onClick: this.setHasAgreedToCookies
        }}
        secondaryButtonConfig={{
          text: "LEARN MORE",
          href: 'https://s3.amazonaws.com/static.synapse.org/governance/SynapsePrivacyPolicy.pdf'
        }}
        isGlobal={true}
        />
    )
  }
}

export default withRouter(withCookies(CookiesNotification))
