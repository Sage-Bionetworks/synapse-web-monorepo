import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import {
  datasetCardConfiguration,
  datasetDetailsPageConfig,
} from './synapseConfigs/datasets'
import RouteControlWrapperProps from './routeControlWrapperProps'
import { toolsConfiguration } from './synapseConfigs/tools'
import DatasetSvg from './style/Dataset.svg?url'
import { publicationsCardConfiguration } from './synapseConfigs/publications'
import { grantsCardConfiguration } from './synapseConfigs/grants'
import { peopleCardConfiguration } from './synapseConfigs/people'
import { educationDetailsCardConfiguration } from './synapseConfigs/education'
import personGraySvg from './style/PersonGray.svg?url'
import {
  onPointClick,
  onIndividualThemeBarPlotPointClick,
} from './synapseConfigs/onPointClick'
import columnAliases from './columnAliases'
import {
  datasetsSql,
  educationSql,
  grantsSql,
  peopleSql,
  projectsSql,
  publicationSql,
  toolsSql,
} from './resources'
import consortiaHomePageConfig from './synapseConfigs/consortiaHomePage'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { mc2SupplementTable } from './synapseConfigs/mc2supplement'
import { projectCardConfiguration } from './synapseConfigs/projects'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        name: 'ConsortiaGoals',
        title: 'Portal Goals',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: undefined,
      },
      {
        name: 'ThemesPlot',
        containerClassName: 'CSBC-ThemesPlot',
        title: 'What Research Themes are Scientists Currently Focusing On?',
        centerTitle: true,
        props: {
          onPointClick,
          onIndividualThemeBarPlotPointClick,
          topBarPlot: {
            entityId: 'syn21641485',
            xField: 'totalCount',
            yField: 'groupBy',
            groupField: 'consortium',
            colors: {
              CCBIR: 'rgba(24, 115, 107, 1)',
              CSBC: 'rgba(156, 196, 233, 1)',
              ICBP: 'rgba(226, 149, 12, 1)',
              MetNet: 'rgba(30, 44, 72, 1)',
              NCI: 'rgba(249, 204, 125, 1)',
              PDMC: 'rgba(32, 171, 159, 1)',
              'PS-ON': 'rgba(197, 191, 223, 1)',
              TEC: 'rgba(59, 88, 143, 1)',
              'Sage Bionetworks': 'rgba(127, 127, 127, 1)',
            },
            whereClause: 'totalCount is not NULL',
          },
          sideBarPlot: {
            entityId: 'syn21649281',
            xField: 'totalCount',
            yField: 'theme',
            groupField: 'consortium',
            countLabel: 'grants',
            plotStyle: {
              backgroundColor: '#f5f9fa',
            },
            colors: {
              CSBC: '#1c76af',
              'PS-ON': '#5bb0b5',
              ICBP: '#9cc4e9',
              TEC: '#c5bfdf',
            },
          },
          dotPlot: {
            entityId: 'syn21639584',
            xField: 'totalCount',
            yField: 'theme',
            groupField: 'groupBy',
            infoField: 'themeDescription',
            whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
            markerSymbols: {
              tools: 'y-down',
              datasets: 'diamond-x',
              publications: 'circle',
            },
            plotStyle: {
              markerLine: 'rgba(0, 0, 0,1)',
              markerFill: 'rgba(255, 255, 255,1)',
              markerSize: 11,
              backgroundColor: '#f5f9fa',
            },
          },
        },
      },
      {
        name: 'RssFeedCards',
        title: "What's New",
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          url: 'https://news.cancercomplexity.synapse.org',
          itemsToShow: 3,
          allowCategories: [],
          filter: {
            value: 'CCKP',
            type: 'category',
          },
        },
      },
      {
        name: 'Programs',
        title: 'Consortia',
        outsideContainerClassName: 'home-spacer cancercomplexity-consortia',
        centerTitle: true,
        props: {
          ...consortiaHomePageConfig,
        },
      },
      {
        name: 'Ecosystem',
        title: 'The Cancer Resource Information Ecosystem',
        centerTitle: true,
        subtitle:
          'The Cancer Resource Information ecosystem contains a growing list of tools and resources. Explore some of them below.',
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          config: [
            {
              title: 'Public Repositories',
              ownerId: 'syn21498902',
              wikiId: '601489',
            },
            {
              title: 'Data Commons',
              ownerId: 'syn21498902',
              wikiId: '601490',
            },
            {
              title: 'Data Coordination',
              ownerId: 'syn21498902',
              wikiId: '601574',
            },
            {
              title: 'Data Exploration',
              ownerId: 'syn21498902',
              wikiId: '601575',
            },
            {
              title: 'Cloud Platform',
              ownerId: 'syn21498902',
              wikiId: '601576',
            },
          ],
        },
      },
      {
        name: 'AboutPortal',
        title: 'About the Cancer Complexity Knowledge Portal',
        subtitle:
          'The portal is built to disseminate resources to accelerate discovery and collaboration in the cancer research community. We aim to provide rich context about and access to activities and contributors that have produced the resources hosted within this and other repositories.',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          cardProps: [
            { ownerId: 'syn21498902', wikiId: '601369' },
            { ownerId: 'syn21498902', wikiId: '601370' },
          ],
        },
      },
      {
        name: 'DevelopedBySage',
        props: undefined,
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
        path: 'Grants',
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
                  isHeader: true,
                  ...grantsCardConfiguration,
                  secondaryLabelLimit: Infinity,
                  sql: grantsSql,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: `${grantsSql}`,
                  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Projects',
                      helpText:
                        'Subprojects and cores supported by this grant, as listed on NIH RePORTER',
                      tableSqlKeys: ['grant'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                        sql: `${projectsSql} where grantType LIKE '%U54%'`,
                        ...projectCardConfiguration,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related People',
                      helpText: 'Contributors associated with this grant',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: peopleSql,
                        ...peopleCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Publications',
                      helpText:
                        'Novel papers published with support from this grant',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: publicationSql,
                        ...publicationsCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Datasets',
                      helpText:
                        'Novel datasets collected and shared with support from this grant',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: datasetsSql,
                        ...datasetCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Tools',
                      helpText:
                        'Novel computational tools developed and shared with support from this grant',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: toolsSql,
                        ...toolsConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Educational Resources',
                      helpText:
                        'Novel educational resources developed and shared with support from this grant',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: educationSql,
                        ...educationDetailsCardConfiguration,
                        columnAliases,
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        path: 'People',
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
                  isHeader: true,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  ...peopleCardConfiguration,
                  iconOptions: {
                    Person: personGraySvg,
                  },
                  secondaryLabelLimit: Infinity,
                  sql: peopleSql,
                  columnAliases,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: peopleSql,
                  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Grants',
                      helpText:
                        'MC2 Center member grant(s) that supported research performed by this person',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: grantsSql,
                        ...grantsCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'publicationId',
                      title: 'Related Publications',
                      helpText:
                        'Publication(s) to which this person contributed',
                      tableSqlKeys: ['pubMedId'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: publicationSql,
                        ...publicationsCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'datasetId',
                      title: 'Related Datasets',
                      helpText:
                        'Dataset(s) developed and shared with contribution from this person',
                      tableSqlKeys: ['datasetAlias'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: datasetsSql,
                        ...datasetCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'toolId',
                      title: 'Related Tools',
                      helpText:
                        'Tool(s) developed and shared with contribution from this person',
                      tableSqlKeys: ['toolName'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: toolsSql,
                        ...toolsConfiguration,
                        columnAliases,
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        path: 'Publications',
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
                  isHeader: true,
                  ...publicationsCardConfiguration,
                  secondaryLabelLimit: Infinity,
                  columnAliases,
                  sql: publicationSql,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: publicationSql,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Grants',
                      helpText:
                        'MC2 Center member grant(s) that supported development of the resource',
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: grantsSql,
                        ...grantsCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'pubMedId',
                      title: 'Related People',
                      helpText:
                        'Individual(s) that contributed to the development of the resource',
                      tableSqlKeys: ['publicationId'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                        sql: peopleSql,
                        ...peopleCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'pubMedId',
                      title: 'Related Datasets',
                      helpText:
                        'Novel dataset(s) collected and shared as part of this study',
                      tableSqlKeys: ['pubMedId'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
                        sql: datasetsSql,
                        ...datasetCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'pubMedId',
                      title: 'Related Tools',
                      helpText:
                        'Novel computational tool(s) developed and shared as part of this study',
                      tableSqlKeys: ['pubMedId'],
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: toolsSql,
                        ...toolsConfiguration,
                        columnAliases,
                      },
                    },
                  ],
                },
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
            exact: false,
            synapseConfigArray: datasetDetailsPageConfig,
          },
        ],
      },
      {
        path: 'Tools',
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
                  isHeader: true,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  ...toolsConfiguration,
                  secondaryLabelLimit: Infinity,
                  sql: toolsSql,
                  iconOptions: {
                    dataset: DatasetSvg,
                  },
                  columnAliases,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: toolsSql,
                  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Grants',
                      tableSqlKeys: ['grantNumber'],
                      helpText:
                        'MC2 Center member grant(s) that supported development of the resource',
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: grantsSql,
                        ...grantsCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'toolName',
                      title: 'Related People',
                      tableSqlKeys: ['toolId'],
                      helpText:
                        'Individual(s) that contributed to the development of the resource',
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                        sql: peopleSql,
                        ...peopleCardConfiguration,
                        columnAliases,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      columnName: 'pubMedId',
                      title: 'Related Publications',
                      tableSqlKeys: ['pubMedId'],
                      helpText:
                        'The publication in which the resource was first reported',
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: publicationSql,
                        ...publicationsCardConfiguration,
                        columnAliases,
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        path: 'Educational Resources',
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
                  isHeader: true,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  ...educationDetailsCardConfiguration,
                  secondaryLabelLimit: Infinity,
                  sql: educationSql,
                  columnAliases,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: educationSql,
                  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Grants',
                      tableSqlKeys: ['grantNumber'],
                      helpText:
                        'MC2 Center member grant(s) that supported development of the resource',
                      props: {
                        sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                        sql: grantsSql,
                        ...grantsCardConfiguration,
                        columnAliases,
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    exact: true,
    displayName: 'Intranet',
    path: undefined,
    target: '_blank',
    link: 'https://sites.google.com/sagebase.org/mc2intranet/home?authuser=0',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'https://news.cancercomplexity.synapse.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'http://help.cancercomplexity.synapse.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    path: 'MC2Supplement',
    hideRouteFromNavbar: true,
    synapseConfigArray: [mc2SupplementTable],
  },
]

export default routes
