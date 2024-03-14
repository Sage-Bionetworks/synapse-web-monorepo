import { GenericRoute } from 'types/portal-config'
import routeControlWrapperProps from './routeControlWrapperProps'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'GenieHomePageHeader',
        props: undefined,
        isOutsideContainer: true,
      },
      {
        name: 'Goals',
        title: 'Our Data',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn23516796',
        },
      },
      {
        name: 'Goals',
        title: 'What Else Is In The Portal',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn23516796',
        },
      },
    ],
  },
  {
    path: 'Explore',
    routes: [
      {
        path: ':slug/',
        hideRouteFromNavbar: true,
        exact: true,
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: routeControlWrapperProps,
          },
        ],
      },
      {
        exact: true,
        path: 'GENIE',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'GENIE-BPC',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Publications',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Contributors',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'External Resources',
        hideRouteFromNavbar: false,
      },
    ],
  },
  {
    path: 'Access',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Access',
        className: 'DataAccessPage',
        props: {
          ownerId: 'syn26710600',
          wikiId: '619468',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
  {
    path: 'Help',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Help',
        className: 'HelpPage',
        props: {
          ownerId: 'syn26710600',
          wikiId: '619468',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
]

export default routes
