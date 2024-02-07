import React from 'react'
import { GenericRoute } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import RouteControlWrapperProps from './routeControlWrapperProps'
import { studiesProgrammaticRouteConfig } from './synapseConfigs/studies'
import {
  projectCardConfiguration,
  projectsDetailsPageConfiguration,
} from './synapseConfigs/projects'
import { peopleSql, projectsSql } from './resources'

const routes: GenericRoute[] = [
  {
    exact: true,
    displayName: 'Home',
    path: undefined,
    link: '/',
    synapseConfigArray: [],
  },
  {
    path: '',
    exact: false,
    synapseConfigArray: [
      {
        name: 'ELBetaLaunchBanner',
        centerTitle: true,
        props: undefined,
      },
    ],
  },
  {
    path: '',
    hideRouteFromNavbar: true,
    exact: true,
    synapseConfigArray: [
      {
        title: 'About the Portal',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer',
        name: 'Markdown',
        props: {
          ownerId: 'syn27229419',
          wikiId: '626030',
          loadingSkeletonRowCount: 10,
        },
      },
      {
        name: 'Goals',
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn51449135',
        },
      },
      // Commented out for v1
      // {
      //   name: 'UpsetPlot',
      //   title: 'Exploring the Data',
      //   outsideContainerClassName: 'home-spacer home-bg-dark',
      //   centerTitle: true,
      //   props: {
      //     sql: upsetPlotSql,
      //     rgbIndex: 0,
      //     maxBarCount: 20,
      //     setName: '# Files per data type',
      //     combinationName: '# Files',
      //     // summaryLinkText: 'Explore All Data',
      //     // summaryLink: '/Explore/Data',
      //   },
      // },
      // {
      //   name: 'FeaturedDataTabs',
      //   centerTitle: true,
      //   outsideContainerClassName: 'home-spacer home-bg-dark',
      //   props: {
      //     sql: dataSql,
      //     rgbIndex: 3,
      //     configs: [
      //       {
      //         title: 'Human Studies',
      //         icon: 'PERSON',
      //         explorePagePath: '/Explore/Studies',
      //         exploreObjectType: 'Studies',
      //         plotsConfig: {
      //           configs: [
      //             {
      //               title:
      //                 'The Mendelian randomization of human longevity using genetically-predicted exposures from the GWAS catalog study',
      //               description:
      //                 'This study provides analysis results of a two Sample Mendelian Randomization used to analyze the relationship between significantly associated GWAS traits and five distinct definitions of longevity.',
      //               facetsToPlot: ['dataType'],
      //               selectFacetColumnName: 'study',
      //               selectFacetColumnValue: 'MRGWAS',
      //               detailsPagePath:
      //                 '/Explore/Studies/DetailsPage?studyKey=MRGWAS',
      //               unitDescription: 'Files',
      //             },
      //             {
      //               title:
      //                 'The Characterization of gene associations with aging-related traits with a genetically-predicted transcriptome-wide association study',
      //               description:
      //                 'This study provides analyses of candidate genes and the association of Longevity-Associated Variants (LAVs) with aging-related traits and diseases.',
      //               facetsToPlot: ['dataType'],
      //               selectFacetColumnName: 'study',
      //               selectFacetColumnValue: 'ADAMTS7',
      //               detailsPagePath:
      //                 '/Explore/Studies/DetailsPage?studyKey=ADAMTS7',
      //               unitDescription: 'Files',
      //             },
      //             {
      //               title:
      //                 'The Phenome-wide association study of aging: data files and a web resource',
      //               description:
      //                 'This study is a collection of genetically-predicted tissue-specific gene expression associations with a collection of aging-related traits and outcomes.',
      //               facetsToPlot: ['dataType'],
      //               selectFacetColumnName: 'study',
      //               selectFacetColumnValue: 'Aging-PheWAS',
      //               detailsPagePath:
      //                 '/Explore/Studies/DetailsPage?studyKey=Aging-PheWAS',
      //               unitDescription: 'Files',
      //             },
      //           ],
      //         },
      //       },
      //       {
      //         title: 'Animal Model Studies',
      //         icon: 'MOUSE',
      //         explorePagePath: '/Explore/Studies',
      //         exploreObjectType: 'Studies',
      //         plotsConfig: {
      //           configs: [],
      //         },
      //       },
      //     ],
      //   },
      // },
      {
        name: 'Ecosystem',
        title: 'Related Resources',
        centerTitle: true,
        subtitle: '',
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          config: [
            {
              title: 'Data Repositories',
              ownerId: 'syn27229419',
              wikiId: '621470',
            },
            {
              title: 'Project Websites',
              ownerId: 'syn27229419',
              wikiId: '621471',
            },
            {
              title: 'Cross-Species Research Resources',
              ownerId: 'syn27229419',
              wikiId: '621472',
            },
          ],
        },
      },
      {
        name: 'UserCardListRotate',
        title: 'Our People & Institutions',
        outsideContainerClassName: 'home-spacer',
        centerTitle: true,
        props: {
          sql: `${peopleSql} WHERE isFeatured=true ORDER BY firstName`,
          count: 3,
          size: SynapseConstants.MEDIUM_USER_CARD,
          useQueryResultUserData: true,
          summaryLink: 'Explore/People',
          summaryLinkText: 'View All People',
        },
      },
      // {
      //   name: 'RssFeedCards',
      //   title: "What's New",
      //   centerTitle: true,
      //   outsideContainerClassName: 'home-spacer',
      //   props: {
      //     url: 'https://eliteportalstg.wpengine.com/',
      //     itemsToShow: 3,
      //     allowCategories: [],
      //     // mailChimpListName: 'AMP-AD quarterly newsletter',
      //     // mailChimpUrl:
      //     //   'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a',
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
        exact: true,
        path: 'Data by Files',
        hideRouteFromNavbar: false,
      },
      {
        exact: true,
        path: 'Data by Participants',
        synapseConfigArray: [
          {
            name: 'OrientationBanner',
            isOutsideContainer: true,
            props: {
              name: 'CohortBuilder',
              title: 'Getting Started With Explore Data by Participants',
              text: (
                <>
                  This page helps you find data related to anonymized
                  Participants in the ELITE Portal. Add filters to build a list
                  of participants, select the participants you are interested
                  in, and view the files associated with your selected cohort.
                  From there, you can download the related data files or{' '}
                  <strong>Send to CAVATICA</strong> for analysis.
                </>
              ),
              sx: { position: 'relative', zIndex: 1, marginBottom: '0px' },
              // TODO DOCS-122
              // secondaryButtonConfig: {
              //   text: 'Learn more about Cohort Builder',
              //   href: '',
              // },
            },
          },
        ],
      },
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
        path: 'Projects',
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
        path: 'Species',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Studies',
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
        path: 'Publications',
        hideRouteFromNavbar: false,
      },
      {
        path: 'Computational Tools',
        hideRouteFromNavbar: false,
      },
      {
        path: 'People',
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
          ownerId: 'syn27229419',
          wikiId: '621275',
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
          loadingSkeletonRowCount: 10,
        },
      },
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn27229419',
          wikiId: '622372',
          loadingSkeletonRowCount: 10,
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
              loadingSkeletonRowCount: 15,
            },
          },
        ],
      },
    ],
  },
  {
    exact: true,
    displayName: 'News',
    path: undefined,
    target: '_blank',
    link: 'http://news.eliteportal.org/',
    synapseConfigArray: [],
  },
  {
    exact: true,
    displayName: 'Help',
    path: undefined,
    target: '_blank',
    link: 'https://help.eliteportal.org/',
    synapseConfigArray: [],
  },
]

export default routes
