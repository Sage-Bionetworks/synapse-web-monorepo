import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import RouteControlWrapperProps from './routeControlWrapperProps'
import { studyDetailPage } from './synapseConfigs/studies'
import { toolsDetailsLandingPage } from './synapseConfigs/tools'
import { SynapseConstants } from 'synapse-react-client'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Goals',
        title: '',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer ',
        props: {
          entityId: 'syn23518009',
        },
      },
      {
        name: 'FeaturedDataTabs',
        title: 'Collections',
        centerTitle: true,
        outsideContainerClassName: 'home-bg-dark home-spacer',
        props: {
          sql: 'SELECT * FROM syn21994974',
          rgbIndex: 3,
          configs: [
            {
              title: 'Studies',
              icon: SynapseConstants.FILE,
              explorePagePath: '/Explore/Collections',
              exploreObjectType: 'Collections',
              plotsConfig: {
                sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Validation Study\' OR "collectionType" = \'Interventional Study\' OR "collectionType" = \'Observational Study\' ) )',
                configs: [
                  {
                    facetsToPlot: [
                      'diagnosis',
                      'dataCollectionMethod',
                      'digitalAssessmentCategory',
                      'sensorType',
                      'devicePlatform',
                    ],
                    unitDescription: 'Collections',
                  },
                ],
              },
            },
            {
              title: 'Analysis',
              icon: SynapseConstants.CHART2,
              explorePagePath: '/Explore/Collections',
              exploreObjectType: 'Collections',
              plotsConfig: {
                sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \'Analysis\' OR "collectionType" = \'Challenge\' ) )',
                configs: [
                  {
                    facetsToPlot: [
                      'diagnosis',
                      'dataCollectionMethod',
                      'digitalAssessmentCategory',
                      'sensorType',
                      'devicePlatform',
                    ],
                    unitDescription: 'Collections',
                  },
                ],
              },
            },
          ],
        },
      },
      {
        name: 'TableFeedCards',
        title: "What's New",
        centerTitle: true,
        props: {
          tableEntityId: 'syn23520190',
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
        path: 'Collections',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: studyDetailPage,
          },
        ],
      },
      {
        path: 'Data',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Tools',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            synapseConfigArray: toolsDetailsLandingPage,
          },
        ],
      },
      {
        path: 'Publications',
        hideRouteFromNavbar: false,
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
          ownerId: 'syn22130826',
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
    link: 'https://help.dhealth.synapse.org/doc/',
  },
]

export default routes
