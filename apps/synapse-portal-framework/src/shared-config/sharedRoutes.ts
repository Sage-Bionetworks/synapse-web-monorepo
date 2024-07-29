import { GenericRoute, NestedRoute } from '../types/portal-config'

const homeRoute: GenericRoute = {
  path: '',
  exact: true,
  hideRouteFromNavbar: true,
  synapseConfigArray: [
    {
      name: 'Header',
      props: undefined,
      isOutsideContainer: true,
    },
  ],
}

// Handles redirecting '/Home' to '/'
export const homeRedirectRoute: GenericRoute = {
  path: 'Home',
  exact: true,
  hideRouteFromNavbar: true,
  synapseConfigArray: [
    {
      name: 'RedirectWithQuery',
      props: {
        to: '/',
      },
    },
  ],
}

const routes: NestedRoute = {
  path: '/',
  routes: [
    homeRoute,
    homeRedirectRoute,
    {
      path: 'DownloadCart',
      exact: true,
      hideRouteFromNavbar: true,
      displayName: 'Download Cart',
      synapseConfigArray: [
        {
          name: 'DownloadCartPage',
          isOutsideContainer: true,
        },
      ],
    },
  ],
}
export default routes
