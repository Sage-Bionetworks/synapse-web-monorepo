import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import {
  SharePageLinkButtonConfig,
  SharePageLinkButtonDetailPageConfig,
} from '@sage-bionetworks/synapse-portal-framework/src/shared-config/SharePageLinkButtonConfig'
import { SynapseConstants } from 'synapse-react-client'
import {
  newStudiesSql,
  studiesDetailPage,
  studyCardConfiguration,
  studyColumnIconConfigs,
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
  popularSearchesSql,
  studiesSql,
  topProjectsSql,
  toolsSql,
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
        name: 'SurveyToast',
        props: {
          localStorageKey:
            'org.sagebionetworks.security.cookies.portal.nfsurvey.dismissed',
          description:
            'Help us improve the NF Data Portal by completing a data access survey!',
          surveyURL:
            'https://docs.google.com/forms/d/e/1FAIpQLSdSgkq66IoLHbvXNmMEjEg4nMELwM-_CaJK3rFkU9pn84gYuA/viewform',
        },
      },
    ],
  },
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'Goals',
        title: 'Resource Overview',
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
          filter: {
            value: 'featured',
          },
        },
      },
      {
        name: 'CardContainerLogic',
        title: 'Top 10 Studies (Last 30 Days)',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          sql: topProjectsSql,
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: {
            type: SynapseConstants.STUDY,
            title: 's.studyName',
            secondaryLabels: [
              'f.n_downloads',
              'f.n_unique_users',
              'f.egress_size_in_gb',
              's.studyId',
            ],
            dataTypeIconNames: 's.dataType',
          },
          columnIconOptions: studyColumnIconConfigs,
          secondaryLabelLimit: 5,
          columnAliases: {
            'f.n_downloads': '# Downloads',
            'f.n_unique_users': '# Unique Users',
            'f.egress_size_in_gb': 'Download Volume (GB)',
            's.studyId': 'On Synapse',
          },
          titleLinkConfig: {
            isMarkdown: false,
            baseURL: 'Explore/Studies/DetailsPage',
            URLColumnName: 'studyId',
            matchColumnName: 's.studyId',
          },
        },
      },
    ],
  },
  {
    path: 'Research Tools Central',
    routes: [
      {
        path: 'Browse Tools',
        synapseConfigArray: [
          {
            name: 'NFBrowseToolsPage',
            props: {
              popularSearchesSql: popularSearchesSql,
              toolsSql,
            },
            isOutsideContainer: true,
          },
        ],
      },
      {
        path: 'Submit Animal Model',
        synapseConfigArray: [
          {
            name: 'DynamicForm',
            props: {
              schemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/submitAnimalModel.json',
              uiSchemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/animal-model/SubmitAnimalModelUiSchema.json',
              postUrl: 'https://submit-form.com/KwZ46H4T',
            },
            isOutsideContainer: false,
          },
        ],
      },
      {
        path: 'Submit Observation',
        synapseConfigArray: [
          {
            name: 'DynamicForm',
            props: {
              schemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationSchema.json',
              uiSchemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json',
              postUrl: 'https://submit-form.com/KwZ46H4T',
            },
            isOutsideContainer: false,
          },
        ],
      },
      {
        path: 'Submit Cell Line',
        synapseConfigArray: [
          {
            name: 'DynamicForm',
            props: {
              schemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/cell-line/submitCellLine.json',
              uiSchemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/cell-line/submitCellLineUiSchema.json',
              postUrl: 'https://submit-form.com/KwZ46H4T',
            },
            isOutsideContainer: false,
          },
        ],
      },
      {
        path: 'Submit Antibody',
        synapseConfigArray: [
          {
            name: 'DynamicForm',
            props: {
              schemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/submitAntibody.json',
              uiSchemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/antibody/SubmitAntibodyUiSchema.json',
              postUrl: 'https://submit-form.com/KwZ46H4T',
            },
            isOutsideContainer: false,
          },
        ],
      },
      {
        path: 'Submit Genetic Reagent',
        synapseConfigArray: [
          {
            name: 'DynamicForm',
            props: {
              schemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagent.json',
              uiSchemaUrl:
                'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/genetic-reagent/submitGeneticReagentUiSchema.json',
              postUrl: 'https://submit-form.com/KwZ46H4T',
            },
            isOutsideContainer: false,
          },
        ],
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
          SharePageLinkButtonConfig,
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
                  SharePageLinkButtonDetailPageConfig,
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
        displayName: 'NF-OSI',
        hideRouteFromNavbar: false,
        path: undefined,
        target: '_blank',
        link: 'https://help.nf.synapse.org/NFdocs/about',
        synapseConfigArray: [],
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
