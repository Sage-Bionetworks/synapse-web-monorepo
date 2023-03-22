import { GenericRoute } from 'types/portal-config'
import { publications, datasets, grants, tools, people } from './synapseConfigs'
import { projectCardConfiguration } from './synapseConfigs/projects'
import { datasetCardConfiguration } from './synapseConfigs/datasets'
import RouteControlWrapperProps from './routeControlWrapperProps'
import { toolsConfiguration } from './synapseConfigs/tools'
import DatasetSvg from './style/Dataset.svg'
import { publicationsCardConfiguration } from './synapseConfigs/publications'
import { grantsCardConfiguration } from './synapseConfigs/grants'
import { peopleCardConfiguration } from './synapseConfigs/people'
import { onPointClick } from './synapseConfigs/onPointClick'
import columnAliases from './columnAliases'
import {
  datasetsSql,
  grantsSql,
  publicationSql,
  projectsSql,
  toolsSql,
  peopleSql,
} from './resources'
import consortiaHomePageConfig from './synapseConfigs/consortiaHomePage'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from 'synapse-react-client/dist/utils/synapseTypes/Table/QueryFilter'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
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
        name: 'ConsortiaGoals',
        title: 'Consortia Activity',
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
              title: 'Data Common Nodes',
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
        path: 'Grants',
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
                  synapseConfig: grants,
                },
              },
            ],
          },
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
                      tableSqlKeys: ['grantNumber'],
                      props: {
                        sqlOperator: ColumnMultiValueFunction.HAS,
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
        path: 'People',
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
                  synapseConfig: people,
                },
              },
            ],
          },
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
                  synapseConfig: publications,
                },
              },
            ],
          },
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
                  synapseConfig: datasets,
                },
              },
            ],
          },
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
                  ...datasetCardConfiguration,
                  secondaryLabelLimit: Infinity,
                  sql: datasetsSql,
                  iconOptions: {
                    dataset: DatasetSvg,
                  },
                  columnAliases,
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  sql: datasetsSql,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      columnName: 'grantNumber',
                      title: 'Related Grants',
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
                      title: 'Related Publications',
                      tableSqlKeys: ['pubMedId'],
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
        path: 'Tools',
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
                  synapseConfig: tools,
                },
              },
            ],
          },
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
]

export default routes
