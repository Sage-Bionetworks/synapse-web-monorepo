import { GenericRoute } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import RouteControlWrapperProps from './routeControlWrapperProps'
import {
  projectCardConfiguration,
  projectsDetailsPageConfiguration,
} from './synapseConfigs/projects'
import {
  studiesDetailPageConfiguration,
  studyCardConfiguration,
} from './synapseConfigs/studies'
import { projectsSql, studiesSql } from './resources'
import { SynapseConstants } from 'synapse-react-client'

const routes: GenericRoute[] = [
  {
    path: '',
    exact: true,
    synapseConfigArray: [
      {
        title: 'About the Portal',
        centerTitle: true,
        name: 'Markdown',
        props: {
          ownerId: 'syn21645000',
          loadingSkeletonRowCount: 10,
        },
      },
      {
        name: 'Goals',
        outsideContainerClassName: 'home-spacer',
        props: {
          entityId: 'syn23021143',
        },
      },
      {
        name: 'UserCardListGroups',
        title: 'Grants and Principal Investigators',
        centerTitle: true,
        outsideContainerClassName: 'home-spacer home-bg-dark',
        props: {
          sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
          columnName: 'Project Title',
          facetValues: [
            'Somatic Mosaicism in the brain of Tourette syndrome',
            'Somatic Mosaicism in Schizophrenia and Control Brains',
            '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
            '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
            '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
            'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
            'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
            '1/2-Somatic mosaicism and autism spectrum disorder',
            '2/2-Somatic mosaicism and autism spectrum disorder',
          ],
          size: SynapseConstants.MEDIUM_USER_CARD,
          useQueryResultUserData: true,
          summaryLinkText: 'Explore All People',
          summaryLink: '/Explore/People',
          count: 6,
        },
      },
      {
        title: 'Acknowledgement',
        centerTitle: true,
        name: 'Markdown',
        props: {
          ownerId: 'syn23308351',
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
        path: 'Projects',
        hideRouteFromNavbar: false,
        routes: [
          {
            path: 'DetailsPage',
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  isHeader: true,
                  ...projectCardConfiguration,
                  sql: projectsSql,
                  isAlignToLeftNav: true,
                  secondaryLabelLimit: Infinity,
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
        path: 'Data',
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
                  ...studyCardConfiguration,
                  titleLinkConfig: undefined,
                  sql: studiesSql,
                  isAlignToLeftNav: true,
                  secondaryLabelLimit: Infinity,
                },
              },
              {
                name: 'DetailsPage',
                props: studiesDetailPageConfiguration,
              },
            ],
          },
        ],
      },
      {
        path: 'Tools',
        hideRouteFromNavbar: false,
      },
      {
        path: 'People',
        hideRouteFromNavbar: false,
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
        props: {
          ownerId: 'syn21896405',
          loadingSkeletonRowCount: 20,
        },
      },
    ],
  },
]

export default routes
