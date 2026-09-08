import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from './routeConstants'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { getDoiRedirectRoute } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'
import { doiRedirector, doiSerializer } from '@/config/doiRedirector'

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/pages/RootApp').then(convertModuleToRouteObject),
    children: [
      ...sharedRoutes,
      getDoiRedirectRoute({
        redirector: doiRedirector,
        deserializer: doiSerializer,
      }),
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Browse Tools',
        lazy: () =>
          import('@/pages/BrowseTools').then(convertModuleToRouteObject),
      },
      {
        path: 'SWC-7536-test',
        lazy: () =>
          import('@/pages/SWC-7536-test').then(convertModuleToRouteObject),
      },
      {
        path: 'Data Access',
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={'/Data Access/How to Access Our Data'} />
            ),
          },
          {
            path: 'Data Acknowledgement',
            lazy: () =>
              import('@/pages/DataAcknowledgementPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Data Access Overview',
            lazy: () =>
              import('@/pages/DataAccess').then(convertModuleToRouteObject),
          },
          {
            path: 'AI_ML_Acceptable_Use_Policy',
            lazy: () =>
              import('@/pages/AIMLAcceptableUsePolicy').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Approved Access Requests',
            lazy: () =>
              import('@/pages/ApprovedAccessRequests').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'Data',
            lazy: () =>
              import('@/pages/Explore/data').then(convertModuleToRouteObject),
          },
          {
            path: 'Cohort Builder',
            children: [
              {
                index: true,
                element: (
                  <RedirectWithQuery
                    to={'/Explore/Cohort Builder/Individuals'}
                  />
                ),
              },
              {
                path: 'Individuals',
                lazy: () =>
                  import('@/pages/Explore/cohortBuilder').then(
                    convertModuleToRouteObject,
                  ),
              },
              {
                path: 'Data',
                lazy: () =>
                  import('@/pages/Explore/cohortBuilderData').then(
                    convertModuleToRouteObject,
                  ),
              },
            ],
          },
          {
            path: 'Projects',
            lazy: () =>
              import('@/pages/Explore/projects').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Programs',
            lazy: () =>
              import('@/pages/Explore/programs').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Studies',
            lazy: () =>
              import('@/pages/Explore/studies').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/Explore/publications').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Computational Tools',
            lazy: () =>
              import('@/pages/Explore/computationalTools').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'People',
            lazy: () =>
              import('@/pages/Explore/people').then(convertModuleToRouteObject),
          },
          {
            path: 'Datasets',
            lazy: () =>
              import('@/pages/Explore/datasets').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Models',
            lazy: () =>
              import('@/pages/Explore/models').then(convertModuleToRouteObject),
          },
        ],
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Models/DetailsPage',
        lazy: () =>
          import('@/pages/ModelDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Computational Tools/DetailsPage',
        lazy: () =>
          import('@/pages/ToolDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Projects/DetailsPage',
        lazy: () =>
          import('@/pages/ProjectDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Programs/DetailsPage',
        lazy: () =>
          import('@/pages/ProgramDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Studies/DetailsPage',
        lazy: () =>
          import('@/pages/StudyDetailsPage/StudyDetailsPage').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
            ),
          },
          {
            path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDetailsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_DATA_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDataTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDatasetsTab').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Analysis Platforms',
        lazy: () =>
          import('@/pages/AnalysisPlatforms').then(convertModuleToRouteObject),
      },
      {
        path: 'Data Contribution',
        lazy: () =>
          import('@/pages/ContributeData').then(convertModuleToRouteObject),
      },
      {
        path: 'Data Coordinating Center',
        lazy: () =>
          import('@/pages/DataCoordinatingCenter').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Overview',
        lazy: () => import('@/pages/Overview').then(convertModuleToRouteObject),
      },
      {
        path: 'Comparative Aging',
        lazy: () =>
          import('@/pages/ComparativeAging').then(convertModuleToRouteObject),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'Comparative Biology',
        lazy: () =>
          import('@/pages/ComparativeAging').then(convertModuleToRouteObject),
      },
      {
        path: 'Longevity Resilience',
        lazy: () =>
          import('@/pages/LongevityResilience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'Omics Profiles in Humans',
        lazy: () =>
          import('@/pages/LongevityResilience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Translational Science',
        lazy: () =>
          import('@/pages/TranslationalScience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'Translational Approaches',
        lazy: () =>
          import('@/pages/TranslationalScience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Biological Aging',
        lazy: () =>
          import('@/pages/BiologicalAging').then(convertModuleToRouteObject),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'AI Models',
        lazy: () =>
          import('@/pages/BiologicalAging').then(convertModuleToRouteObject),
      },
      {
        path: 'Healthspan',
        lazy: () =>
          import('@/pages/Healthspan').then(convertModuleToRouteObject),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'IPSCs',
        lazy: () =>
          import('@/pages/Healthspan').then(convertModuleToRouteObject),
      },
      {
        path: 'Cognitive Resilience',
        lazy: () =>
          import('@/pages/CognitiveResilience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        // TODO: Remove deprecated route once external references are updated
        path: 'Organoids',
        lazy: () =>
          import('@/pages/CognitiveResilience').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Search',
        lazy: () => import('@/pages/Search').then(convertModuleToRouteObject),
      },
      {
        path: 'Search/:resourceType',
        lazy: () => import('@/pages/Search').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
