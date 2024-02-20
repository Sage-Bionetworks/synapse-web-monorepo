import { GenericRoute } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import {
  newStudiesSql,
  studiesDetailPage,
  studyCardConfiguration,
  studyHeaderIconOptions,
} from './synapseConfigs/studies'
import {
  hackathonCardConfiguration,
  hackathonsDetailPage,
} from './synapseConfigs/hackathons'

import {
  initiativeCardConfiguration,
  initiativeDetailsPageConfiguration,
} from './synapseConfigs/initiatives'
import routeControlWrapperProps from './routeControlWrapperProps'
import { columnAliases } from './synapseConfigs/commonProps'
import {
  organizationCardSchema,
  organizationDetailsPage,
  organizationDetailsPageLinkConfig,
} from './synapseConfigs/organizations'
import {
  fundersSql,
  hackathonsSql,
  initiativesSql,
  peopleSql,
  studiesSql,
} from './resources'
import { toolsDetailsPage } from './synapseConfigs/tools'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsDetailsPage } from './synapseConfigs/datasets'

const limit = 3

const routes: GenericRoute[] = [
  {
    path: '',
    exact: false,
    synapseConfigArray: [
      {
        name: 'NFSurveyToast',
        centerTitle: true,
        props: undefined,
      },
    ],
  },
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Goals',
        title: 'Portal Programs and Goals',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn23516796',
        },
      },
      {
        name: 'CardContainerLogic',
        title: 'New Studies',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        link: '/Explore/Studies',
        props: {
          initialLimit: limit,
          columnAliases,
          sql: newStudiesSql,
          ...studyCardConfiguration,
        },
      },
      {
        name: 'UserCardListRotate',
        title: 'Data Contributor Spotlight',
        outsideContainerClassName: 'home-spacer',
        centerTitle: true,
        props: {
          sql: `${peopleSql} where isFeatured=true`,
          count: 3,
          size: SynapseConstants.LARGE_USER_CARD,
          useQueryResultUserData: true,
          // summaryLink: 'Explore/People',
          // summaryLinkText: 'Explore All People',
        },
      },
      {
        name: 'CardContainerLogic',
        title: 'Our Partners',
        outsideContainerClassName: 'home-spacer',
        centerTitle: true,
        props: {
          columnAliases,
          sql: fundersSql,
          type: SynapseConstants.GENERIC_CARD,
          titleLinkConfig: organizationDetailsPageLinkConfig,
          genericCardSchema: {
            ...organizationCardSchema,
            imageFileHandleColumnName: 'cardLogo',
          },
          descriptionConfig: {
            showFullDescriptionByDefault: true,
          },
          ctaLinkConfig: {
            text: 'Visit Website',
            link: 'website',
          },
        },
      },
      {
        name: 'RssFeedCards',
        title: "What's New",
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          url: 'https://news.nfdataportal.org',
          itemsToShow: 3,
          allowCategories: [
            'Newsletter',
            'Hackathon',
            'Publication',
            'Funding',
          ],
          // mailChimpListName: 'NF quarterly newsletter',
          // mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=abcdefghi...',
          lockedColumn: {
            value: 'featured',
          },
        },
      },
    ],
  },
  {
    path: 'Browse Tools',
    exact: true,
    synapseConfigArray: [
      {
        name: 'BrowseToolsPage',
        props: undefined,
        isOutsideContainer: true,
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
        path: 'Initiatives',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: true,
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  isHeader: true,

                  ...initiativeCardConfiguration,
                  columnAliases,
                  sql: initiativesSql,
                },
              },
              {
                name: 'DetailsPage',
                isOutsideContainer: false,
                props: initiativeDetailsPageConfiguration,
                containerClassName: 'container-full-width',
              },
            ],
          },
        ],
      },
      {
        path: 'Studies',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            routes: [
              {
                path: '',
                synapseConfigArray: [
                  {
                    name: 'CardContainerLogic',
                    isOutsideContainer: true,
                    props: {
                      sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                      isHeader: true,

                      ...studyCardConfiguration,
                      columnAliases,
                      iconOptions: studyHeaderIconOptions,
                      secondaryLabelLimit: Infinity,
                      sql: studiesSql,
                    },
                  },
                  {
                    name: 'DetailsPage',
                    isOutsideContainer: false,
                    props: studiesDetailPage,
                    containerClassName: 'container-full-width',
                  },
                ],
              },
            ],
          },
        ],
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
        path: 'Files',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Publications',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Tools',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: toolsDetailsPage,
          },
        ],
      },
      {
        path: 'Hackathon',
        displayName: 'Hackathon Projects',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            exact: false,
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  isHeader: true,
                  ...hackathonCardConfiguration,
                  columnAliases: { ...columnAliases, studyStatus: 'Status' },
                  secondaryLabelLimit: Infinity,
                  sql: hackathonsSql,
                },
              },
              {
                name: 'DetailsPage',
                isOutsideContainer: false,
                props: hackathonsDetailPage,
                containerClassName: 'container-full-width',
              },
            ],
          },
        ],
      },
      {
        exact: true,
        path: 'Hackathon Projects',
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          // PORTALS-2277 - Renamed "Hackathon Projects" to "Hackathon"
          {
            name: 'RedirectWithQuery',
            props: {
              exact: false,
              strict: false,
              from: 'Hackathon Projects',
              to: 'Hackathon',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'Organizations',
    routes: [
      {
        hideRouteFromNavbar: true,
        path: 'DetailsPage',
        synapseConfigArray: organizationDetailsPage,
      },
      {
        displayName: 'CTF',
        path: 'DetailsPage?abbreviation=CTF',
      },
      {
        displayName: 'NTAP',
        path: 'DetailsPage?abbreviation=NTAP',
      },
      {
        displayName: 'GFF',
        path: 'DetailsPage?abbreviation=GFF',
      },
      {
        displayName: 'NCI DHART SPORE',
        path: 'DetailsPage?fundingAgency=NIH-NCI',
      },
      {
        displayName: 'CDMRP NFRP',
        path: 'DetailsPage?abbreviation=CDMRP',
      },
      {
        displayName: 'NFRI',
        path: 'DetailsPage?abbreviation=NFRI',
      },
    ],
  },

  {
    path: 'About',
    routes: [
      {
        path: 'NF-OSI',
        hideRouteFromNavbar: false,
        synapseConfigArray: [
          {
            name: 'Markdown',
            title: 'About',
            props: {
              ownerId: 'syn26451327',
              wikiId: '614265',
              loadingSkeletonRowCount: 20,
            },
          },
        ],
      },
      {
        displayName: 'Data Standards',
        hideRouteFromNavbar: false,
        path: undefined,
        target: '_blank',
        link: 'https://nf-osi.github.io/nf-metadata-dictionary/',
        synapseConfigArray: [],
      },
    ],
  },
  {
    exact: true,
    displayName: 'Contribute Data',
    path: undefined,
    target: '_blank',
    link: 'https://help.nf.synapse.org/NFdocs/How-to-Share-Data-(an-Overview).1994489966.html',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.nfdataportal.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.nf.synapse.org/',
    synapseConfigArray: [],
  },
]

export default routes
