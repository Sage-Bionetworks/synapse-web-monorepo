import { GenericRoute } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import {
  projects,
  studies,
  data,
  people,
  programs,
  publications,
} from './synapseConfigs'
import RouteControlWrapperProps from './routeControlWrapperProps'
import {
  studyCardConfiguration,
  studiesProgrammaticRouteConfig,
} from './synapseConfigs/studies'
import {
  projectCardConfiguration,
  projectsDetailsPageConfiguration,
} from './synapseConfigs/projects'
import { results } from './synapseConfigs/results'
import { programCardConfiguration } from './synapseConfigs/programs'
import { programsHomePageConfig } from './synapseConfigs/programsHomePage'
import experimentalTools from './synapseConfigs/experimental_tools'
import computationalTools from './synapseConfigs/computational_tools'
import targetEnablingResources from './synapseConfigs/target_enabling_resources'
import {
  dataSql,
  projectsSql,
  studiesSql,
  peopleSql,
  programsSql,
  experimentalModelsSql,
  modelADStrainsSelectedFacet,
} from './resources'
import { ColumnSingleValueFilterOperator } from 'synapse-react-client/dist/utils/synapseTypes/Table/QueryFilter'

const routes: GenericRoute[] = [
  {
    path: '',
    hideRouteFromNavbar: true,
    exact: true,
    synapseConfigArray: [
      {
        name: 'Programs',
        title: 'Programs',
        className: 'ProgramsHomePage',
        centerTitle: true,
        props: {
          ...programsHomePageConfig,
        },
      },
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
                    title: 'The Whole Genome Sequencing Harmonization Study',
                    description:
                      'This study provides a set of harmonized WGS data generated from the three primary AMP-AD cohort studies: ROSMAP, MSBB, and MayoRNAseq.',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'WGS_Harmonization',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn22264775',
                  },
                  {
                    title: 'The RNAseq Harmonization Study',
                    description:
                      'This study provides harmonized RNA sequencing data from the ROSMAP, MSBB, and MayoRNAseq studies that have been aligned to the GRCh38 human genome build.',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'RNAseq_Harmonization',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn21241740',
                  },
                  {
                    title:
                      'The Religious Orders and Memory and Aging Project Study',
                    description:
                      'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'ROSMAP',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn3219045',
                  },
                ],
              },
            },
            {
              title: 'Animal Model Studies',
              icon: 'MOUSE',
              explorePagePath: '/Explore/Studies',
              exploreObjectType: 'Studies',
              plotsConfig: {
                configs: [
                  {
                    title: 'The UCI MODEL-AD 5XFAD Study',
                    description:
                      "This study provides deep phenotyping data on the early onset Alzheimer's disease 5XFAD mouse model.",
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'UCI_5XFAD',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn16798076',
                  },
                  {
                    title: 'The IU/Jax/Pitt MODEL-AD Levetiracetam 5XFAD Study',
                    description:
                      'This study provides pharmacokinetic, imaging, and behavior data on the 5XFAD mouse model dosed with levetiracetam.',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'Jax.IU.Pitt_Levetiracetam-5XFAD',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn21784897',
                  },
                  {
                    title: 'The IU/Jax/Pitt MODEL-AD Verubecestat 5XFAD Study',
                    description:
                      'This study provides pharmacokinetic, imaging, immunoassay, and behavior data on the 5XFAD mouse model dosed with verubecestat.',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'Jax.IU.Pitt_Verubecestat_5XFAD',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn21863375',
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
          'The EL Portal ecosystem contains a growing list of tools and resources. Explore some of them below.',
        outsideContainerClassName: 'home-spacer',
        props: {
          config: [
            {
              title: 'Results Explorers',
              ownerId: 'syn12666371',
              wikiId: '607139',
            },
            {
              title: 'Data Portals',
              ownerId: 'syn12666371',
              wikiId: '607138',
            },
            {
              title: 'Program Websites',
              ownerId: 'syn12666371',
              wikiId: '607140',
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
          sql: `${peopleSql} where isFeatured=true`,
          count: 3,
          size: SynapseConstants.MEDIUM_USER_CARD,
          useQueryResultUserData: true,
          summaryLink: 'Explore/People',
          summaryLinkText: 'Explore All People',
        },
      },
      {
        name: 'RssFeedCards',
        title: "What's New",
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        props: {
          url: 'https://news.adknowledgeportal.org',
          itemsToShow: 3,
          allowCategories: [],
          mailChimpListName: 'AMP-AD quarterly newsletter',
          mailChimpUrl:
            'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
          lockedColumn: {
            value: "what's-new",
          },
        },
      },
    ],
  },
  {
    // PORTALS-2028: redirect /ExperimentalModels to /Explore/Experimental%20Models
    exact: true,
    path: 'ExperimentalModels',
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'RedirectWithQuery',
        props: {
          exact: false,
          strict: false,
          from: 'ExperimentalModels',
          to: 'Explore/Experimental Models',
        },
      },
    ],
  },
  {
    // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
    exact: true,
    path: 'MODEL-ADstrains',
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'Redirect',
        props: {
          from: 'MODEL-ADstrains',
          to: {
            pathname: '/Explore/Experimental Models',
            search: `QueryWrapper0={"sql":"${encodeURI(
              experimentalModelsSql,
            )}","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"${
              modelADStrainsSelectedFacet.columnName
            }","facetValues":["${modelADStrainsSelectedFacet.facetValue}"]}]}`,
          },
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
                className: 'ProgramCardList',
                props: {
                  ...RouteControlWrapperProps,
                  synapseConfig: {
                    name: 'CardContainerLogic',
                    props: {
                      ...programs,
                      sql: programsSql,
                    },
                  },
                },
              },
            ],
          },
          {
            exact: true,
            path: 'DetailsPage',
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  sql: programsSql,
                  isHeader: true,
                  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
                  ...programCardConfiguration,
                  genericCardSchema: {
                    ...programCardConfiguration.genericCardSchema!,
                    description: 'Long Description',
                  },
                },
              },
              {
                name: 'DetailsPage',
                props: {
                  showMenu: true,
                  sql: programsSql,
                  synapseConfigArray: [
                    {
                      name: 'CardContainerLogic',
                      title: 'Projects',
                      columnName: 'Program',
                      showTitleSeperator: false,
                      tableSqlKeys: ['Program'],
                      props: {
                        ...projectCardConfiguration,
                        sql: projectsSql,
                      },
                    },
                    {
                      name: 'CardContainerLogic',
                      title: 'Studies',
                      columnName: 'Program',
                      showTitleSeperator: false,
                      tableSqlKeys: ['Program'],
                      props: {
                        ...studyCardConfiguration,
                        sql: studiesSql,
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
        path: 'Experimental Tools',
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          // PORTALS-2001 - we renamed "Experimental Tools" to "Experimental Models"
          {
            name: 'RedirectWithQuery',
            props: {
              exact: false,
              strict: false,
              from: 'Experimental Tools',
              to: 'Experimental Models',
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
    path: 'Analytical Workspace',
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn22300949',
          wikiId: '604940',
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
          ownerId: 'syn12666371',
          wikiId: '581937',
          loadingSkeletonRowCount: 20,
        },
      },
    ],
  },

  // Uncomment to expose Contribute route (once research team is monitoring submissions)
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
            className: 'amp-project-component',
            props: {
              ownerId: 'syn12666371',
              wikiId: '600033',
              loadingSkeletonRowCount: 20,
            },
          },
          {
            name: 'SynapseFormSubmissionsGrid',
            props: {
              pathpart: '/Contribute/FormSubmission',
              formGroupId: '11',
              itemNoun: 'contribution-request',
              formClass: 'contribution-request',
            },
          },
        ],
      },
      {
        exact: true,
        path: 'FormSubmission',
        hideRouteFromNavbar: true,
        synapseConfigArray: [
          {
            name: 'Markdown',
            props: {
              ownerId: 'syn12666371',
              wikiId: '600034',
            },
          },
          {
            name: 'SynapseFormWrapper',
            props: {
              formSchemaEntityId: 'syn20692910',
              fileNamePath: 'study.submission_name',
              formUiSchemaEntityId: 'syn20692911',
              formNavSchemaEntityId: 'syn20968007',
              isWizardMode: true,
              formTitle: 'Your Contribution Request',
              formClass: 'contribution-request',
            },
          },
        ],
      },
    ],
  },
  {
    exact: true,
    path: 'About',
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        props: {
          wikiId: '581939',
          ownerId: 'syn12666371',
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
    link: 'https://news.adknowledgeportal.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.adknowledgeportal.org/apd/',
    synapseConfigArray: [],
  },
]

export default routes
