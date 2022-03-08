import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

export type OnRouteChangeProps = RouteComponentProps

class OnRouteChange extends React.Component<
  OnRouteChangeProps
> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
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

  render() {
    return <></>
  }
}

export default withRouter(OnRouteChange)
