import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import routeControlWrapperProps from './routeControlWrapperProps'
import { dataReleases } from './synapseConfigs'
import { currentDataReleases } from './synapseConfigs/dataReleases'

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
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          entityId: 'syn54352754',
        },
      },
      {
        name: 'Goals',
        title: 'What Else Is In The Portal',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn54355188',
        },
      },
      {
        ...currentDataReleases,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        centerTitle: true,
      },
      {
        name: 'Markdown',
        title: 'Related Resources',
        centerTitle: true,
        props: {
          ownerId: 'syn53013218',
          wikiId: '626554',
          loadingSkeletonRowCount: 10,
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
    path: 'Data Releases',
    exact: true,
    synapseConfigArray: dataReleases,
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
          ownerId: 'syn53013218',
          wikiId: '626697',
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
          ownerId: 'syn53013218',
          wikiId: '626556',
          loadingSkeletonRowCount: 8,
        },
      },
    ],
  },
]

export default routes
