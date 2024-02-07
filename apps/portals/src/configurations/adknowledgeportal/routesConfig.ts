import { GenericRoute } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import RouteControlWrapperProps from './routeControlWrapperProps'
import {
  studiesProgrammaticRouteConfig,
  studyCardConfiguration,
} from './synapseConfigs/studies'
import {
  projectCardConfiguration,
  projectsDetailsPageConfiguration,
} from './synapseConfigs/projects'
import { programCardConfiguration } from './synapseConfigs/programs'
import { programsHomePageConfig } from './synapseConfigs/programsHomePage'
import {
  dataSql,
  experimentalModelsSql,
  modelADStrainsSelectedFacet,
  peopleSql,
  programsSql,
  projectsSql,
  studiesSql,
} from './resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

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
                    unitDescription: 'Files',
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
                    unitDescription: 'Files',
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
                    unitDescription: 'Files',
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
                    unitDescription: 'Files',
                  },
                  {
                    title: 'The IU/Jax/Pitt MODEL-AD Levetiracetam 5XFAD Study',
                    description:
                      'This study provides pharmacokinetic, imaging, and behavior data on the 5XFAD mouse model dosed with levetiracetam.',
                    facetsToPlot: ['dataType', 'assay'],
                    selectFacetColumnName: 'study',
                    selectFacetColumnValue: 'Jax.IU.Pitt_Levetiracetam_5XFAD',
                    detailsPagePath:
                      '/Explore/Studies/DetailsPage?Study=syn21784897',
                    unitDescription: 'Files',
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
                    unitDescription: 'Files',
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
          'The AD Knowledge Portal ecosystem contains a growing list of tools and resources. Explore some of them below.',
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
          to: '/Explore/Experimental Models',
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
    // PORTALS-2836: redirect /Explore/Programs/DetailsPage?Program=ELITE to the ELITE portal
    exact: true,
    path: 'Explore/Programs/DetailsPage',
    hideRouteFromNavbar: true,
    synapseConfigArray: [
      {
        name: 'RedirectToURL',
        props: {
          toURL: 'https://eliteportal.synapse.org/',
          search: 'Program=ELITE',
        },
      },
    ],
  },
  // PORTALS-2919: Redirect DataAccess/Instructions to /Data Access
  {
    path: 'DataAccess',
    hideRouteFromNavbar: true,
    routes: [
      {
        path: 'Instructions',
        synapseConfigArray: [
          {
            name: 'Redirect',
            props: {
              to: {
                pathname: '/Data Access',
              },
            },
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
          {
            name: 'RouteControlWrapper',
            isOutsideContainer: true,
            props: RouteControlWrapperProps,
          },
        ],
      },

      {
        path: 'Programs',
        hideRouteFromNavbar: false,
        routes: [
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
        hideRouteFromNavbar: false,
        routes: [
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
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Publications',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'People',
        hideRouteFromNavbar: false,
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
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Computational Tools',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Target Enabling Resources',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Results',
        hideRouteFromNavbar: false,
      },
    ],
  },
  {
    exact: true,
    path: 'Analysis Platforms',
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'Analysis Platforms',
        props: {
          ownerId: 'syn12666371',
          wikiId: '625598',
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
