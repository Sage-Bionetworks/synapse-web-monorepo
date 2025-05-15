import { RouteObject } from 'react-router'
import { OrientationBannerProps } from 'synapse-react-client/components/OrientationBanner'

export type ExplorePageRoute = RouteObject & {
  displayName?: string
  OrientationBannerProps?: OrientationBannerProps
}

export type ExploreWrapperProps = {
  /**
   * A set of FLAT routes for explore page content. You can optionally provide
   *  - a display name for the tab, if it differs from the path
   *  - an OrientationBanner configuration, to be shown on that tab page
   *
   * Note that these routes will NOT be rendered by this component. The same routes should be
   * provided to react-router as child routes, which will be rendered in this component's Outlet
   * */
  explorePaths: ExplorePageRoute[]
}
