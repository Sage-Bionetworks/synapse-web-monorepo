import { GenericRoute } from 'types/portal-config'
import { programs, projects, data, datasets, datasetCollections } from './synapseConfigs'
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
          loadingSkeletonRowCount: 8
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
          loadingSkeletonRowCount: 8
        },
      },
    ],
  },
  {
    path: 'Explore',
    routes: [
      {
        path: 'Programs',
        routes: [
          {
            path: '',
            exact: true,
            synapseConfigArray: [
              {
                name: 'RouteControlWrapper',
                isOutsideContainer: true,
                props: {
                  ...routeControlWrapperProps,
                  synapseConfig: programs,
                },
              },
            ],
          },
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: programDetailPage,
          },
        ],
      },
      {
        path: 'Projects',
        routes: [
          {
            path: '',
            exact: true,
            synapseConfigArray: [
              {
                name: 'RouteControlWrapper',
                isOutsideContainer: true,
                props: {
                  ...routeControlWrapperProps,
                  synapseConfig: projects,
                },
              },
            ],
          },
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
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            className: 'CollectionList',
            props: {
              ...routeControlWrapperProps,
              synapseConfig: datasetCollections,
            },
          },
        ],
      },
      {
        path: 'Datasets',
        routes: [
          {
            path: '',
            exact: true,
            synapseConfigArray: [
              {
                name: 'RouteControlWrapper',
                isOutsideContainer: true,
                props: {
                  ...routeControlWrapperProps,
                  synapseConfig: datasets,
                },
              },
            ],
          },
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
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...routeControlWrapperProps,
              synapseConfig: data,
            },
          },
        ],
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
