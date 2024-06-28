import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import routeControlWrapperProps from './routeControlWrapperProps'
import { projectDetailPage } from './synapseConfigs/projects'
import { programDetailPage } from './synapseConfigs/programs'
import { datasetsDetailsPage } from './synapseConfigs/datasets'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'ARKWelcomePage',
        props: undefined,
        isOutsideContainer: true,
      },
      {
        name: 'Goals',
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn38103451',
        },
      },
    ],
  },
  {
    path: 'About',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        className: 'AboutPage',
        props: {
          ownerId: 'syn26710600',
          wikiId: '619467',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
  {
    path: 'Data Access',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Data Access',
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
        path: 'Programs',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: programDetailPage,
          },
        ],
      },
      {
        path: 'Projects',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: projectDetailPage,
          },
        ],
      },
      {
        path: 'Collections',
        exact: true,
        hideRouteFromNavbar: false,
      },
      {
        path: 'Datasets',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: true,
            synapseConfigArray: datasetsDetailsPage,
          },
        ],
      },
      {
        path: 'All Data',
        exact: true,
        hideRouteFromNavbar: false,
      },
    ],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.arkportal.org',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.arkportal.org/help/',
  },
]

export default routes
