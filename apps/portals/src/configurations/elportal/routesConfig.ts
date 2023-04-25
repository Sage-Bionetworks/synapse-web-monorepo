import { GenericRoute } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import {
  projects,
  studies,
  data,
  people,
  publications,
} from './synapseConfigs'
import RouteControlWrapperProps from './routeControlWrapperProps'
import {
  studiesProgrammaticRouteConfig,
} from './synapseConfigs/studies'
import {
  projectCardConfiguration,
  projectsDetailsPageConfiguration,
} from './synapseConfigs/projects'
import { results } from './synapseConfigs/results'
import experimentalTools from './synapseConfigs/experimental_tools'
import computationalTools from './synapseConfigs/computational_tools'
import targetEnablingResources from './synapseConfigs/target_enabling_resources'
import {
  dataSql,
  projectsSql,
  peopleSql,
} from './resources'

const routes: GenericRoute[] = [
  {
    path: '',
    hideRouteFromNavbar: true,
    exact: true,
    synapseConfigArray: [
      {
        name: 'FeaturedDataTabs',
        title: 'Featured Data',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          sql: dataSql,
          rgbIndex: 3,
          configs: [
            {
              title: 'Human Studies',
              icon: 'PERSON',
              explorePagePath: '/Explore/Studies',
              exploreObjectType: 'Studies',
              plotsConfig: {
                configs: [
                  {
                    title: 'The Long Life Family Study',
                    description:
                      'This study is an international collaborative study of the genetics and familial components of exceptional survival, longevity, and healthy aging.',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'LLFS',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn26229161',
                  },
                  {
                    title: 'The Single cell transcriptomic analysis of PBMCs in Extreme Longevity',
                    description:
                      'This study provides data from 7 centenarian samples (> 100 years) and 2 younger control samples (20-59 years) from New England Centenarian Study (NECS) at Boston University and the Integrative Longevity Omics (ILO). Peripheral Blood Mononuclear Cells (PBMCs) transcriptional and protein expression were profiled at a single cell resolution. Pluripotent stem cells were also generated. Droplet-based single cell CITE-seq data (16,082 cells).',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'ELPSCRNA',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn26067509',
                  },
                  {
                    title:
                      'The Characterization of gene associations with aging-related traits with a genetically-predicted transcriptome-wide association study',
                    description:
                      'This study provides analyses of candidate genes and the association of Longevity-Associated Variants (LAVs) with aging-related traits and diseases.',
                    facetsToPlot: ['dataType'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'ADAMTS7',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn26969078',
                  },
                ],
              },
            },
          ],
        },
      },
      {
        name: 'Ecosystem',
        title: 'Related Resources',
        centerTitle: true,
        subtitle:
          '',
        outsideContainerClassName: 'home-spacer',
        props: {
          config: [
            {
              title: 'Cross-Species Research Partners',
              ownerId: 'syn27229419',
              wikiId: '621472',
            },
            {
              title: 'Data Portals',
              ownerId: 'syn27229419',
              wikiId: '621470',
            },
            {
              title: 'Project Websites',
              ownerId: 'syn27229419',
              wikiId: '621471',
            },
          ],
        },
      },
      {
        name: 'UserCardListRotate',
        title: 'Our People and Institutions',
        outsideContainerClassName: 'home-spacer home-bg-dark',
        centerTitle: true,
        props: {
          sql: `${peopleSql}`,
          count: 3,
          size: SynapseConstants.MEDIUM_USER_CARD,
          useQueryResultUserData: true,
          summaryLink: 'Explore/People',
          summaryLinkText: 'Explore All People',
        },
      },
      // {
      //   name: 'RssFeedCards',
      //   title: "What's New",
      //   centerTitle: true,
      //   outsideContainerClassName: 'home-spacer',
      //   props: {
      //     url: 'https://news.adknowledgeportal.org',
      //     itemsToShow: 3,
      //     allowCategories: [],
      //     mailChimpListName: 'AMP-AD quarterly newsletter',
      //     mailChimpUrl:
      //       'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
      //     lockedColumn: {
      //       value: "what's-new",
      //     },
      //   },
      // },
    ],
  },
  {
    path: 'Explore',
    routes: [
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
                  ...RouteControlWrapperProps,
                  synapseConfig: projects,
                },
              },
            ],
          },
          {
            path: 'DetailsPage',
            exact: true,
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  sql: projectsSql,
                  isHeader: true,
                  ...projectCardConfiguration,
                },
              },
              {
                name: 'DetailsPage',
                props: projectsDetailsPageConfiguration,
              },
            ],
          },
        ],
      },
      {
        path: 'Studies',
        routes: [
          {
            path: '',
            exact: true,
            synapseConfigArray: [
              {
                name: 'RouteControlWrapper',
                isOutsideContainer: true,
                props: {
                  ...RouteControlWrapperProps,
                  synapseConfig: studies,
                },
              },
            ],
          },
          {
            path: 'DetailsPage',
            routes: [
              { path: '', synapseConfigArray: studiesProgrammaticRouteConfig },
            ],
          },
        ],
      },
      {
        exact: true,
        path: 'Data',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: data,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'Publications',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: publications,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'People',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: people,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'Experimental Models',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: experimentalTools,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'Computational Tools',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: computationalTools,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'Target Enabling Resources',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: targetEnablingResources,
            },
          },
        ],
      },
      {
        exact: true,
        path: 'Results',
        synapseConfigArray: [
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: {
              ...RouteControlWrapperProps,
              synapseConfig: results,
            },
          },
        ],
      },
    ],
  },
  {
    exact: true,
    path: 'Limited Data Commons',
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Limited Data Commons',
        props: {
          ownerId: 'syn27229419',
          wikiId: '621275',
          loadingSkeletonRowCount: 10,
        },
      },
    ],
  },
  {
    exact: true,
    path: 'About',
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        props: {
          ownerId: 'syn27229419',
          wikiId: '621273',
          loadingSkeletonRowCount: 10,
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
        props: {
          ownerId: 'syn27229419',
          wikiId: '621276',
          loadingSkeletonRowCount: 20,
        },
      },
    ],
  },

  {
    path: 'Contribute',
    routes: [
      {
        exact: true,
        path: '',
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'Contribute',
            props: {
              ownerId: 'syn27229419',
              wikiId: '621277',
              loadingSkeletonRowCount: 20,
            },
          },
        ],
      },
    ],
  },
  // {
  //   exact: true,
  //   displayName: 'News',
  //   path: undefined,
  //   target: '_blank',
  //   link: 'https://news.adknowledgeportal.org/',
  //   synapseConfigArray: [],
  // },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://elite-portal-docs.scrollhelp.site/help/',
    synapseConfigArray: [],
  },
]

export default routes
