import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { studyDetailPage } from './synapseConfigs/studies'
import RouteControlWrapperProps from './routeControlWrapperProps'
import { grantsDetailPage } from './synapseConfigs/grants'
import { peopleSql, upsetplotSql } from './resources'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Goals',
        title: 'Portal Goals',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn22315959',
        },
      },
      {
        name: 'Markdown',
        title: 'About the Portal',
        centerTitle: true,
        outsideContainerClassName: 'home-bg-dark home-spacer',
        className: 'home-container-description',
        props: {
          ownerId: 'syn21557271',
          wikiId: '605319',
          loadingSkeletonRowCount: 10,
        },
      },
      {
        name: 'Markdown',
        title: 'Featured Data',
        outsideContainerClassName: '',
        className: 'home-container-description',
        centerTitle: true,
        props: {
          ownerId: 'syn21557271',
          wikiId: '605308',
        },
      },
      {
        name: 'UpsetPlot',
        className: 'whatThePlot',
        outsideContainerClassName: 'home-spacer',
        centerTitle: true,
        props: {
          sql: upsetplotSql,
          rgbIndex: 0,
          maxBarCount: 20,
          setName: '# Individuals per assay',
          combinationName: '# Individuals',
          summaryLinkText: 'Explore All Data',
          summaryLink: '/Explore/Data',
        },
      },
      {
        name: 'UserCardListRotate',
        title: 'Our People and Institutions',
        outsideContainerClassName: 'home-spacer home-bg-dark',
        centerTitle: true,
        props: {
          sql: `${peopleSql} where feature=true`,
          count: 3,
          summaryLink: 'Explore/People',
          summaryLinkText: 'Explore All People',
        },
      },
      {
        name: 'Resources',
        outsideContainerClassName: 'home-spacer',
        title: 'Related Resources',
        centerTitle: true,
        props: {
          entityId: 'syn22311127',
        },
      },
      {
        name: 'RssFeedCards',
        title: "What's New",
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          url: 'https://news.psychencode.org',
          itemsToShow: 3,
          allowCategories: ['Data Releases', 'Preprint', 'Publication'],
        },
      },
      {
        name: 'Markdown',
        outsideContainerClassName: '',
        className: '',
        props: {
          ownerId: 'syn21557271',
          wikiId: '605340',
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
            props: RouteControlWrapperProps,
          },
        ],
      },
      {
        path: 'Studies',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            synapseConfigArray: studyDetailPage,
          },
        ],
      },
      {
        path: 'Data',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Grants',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            synapseConfigArray: grantsDetailPage,
          },
        ],
      },
      {
        path: 'Publications',
        hideRouteFromNavbar: false,
      },
      {
        path: 'People',
        hideRouteFromNavbar: false,
      },
    ],
  },
  {
    displayName: 'Data Access',
    path: 'DataAccess',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Data Access',
        props: {
          ownerId: 'syn4921369',
          wikiId: '477467',
          loadingSkeletonRowCount: 20,
        },
      },
    ],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.psychencode.org/',
  },
  {
    path: 'About',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        props: {
          ownerId: 'syn4921369',
          wikiId: '607829',
          loadingSkeletonRowCount: 20,
        },
      },
    ],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.psychencode.synapse.org/',
  },
]

export default routes
