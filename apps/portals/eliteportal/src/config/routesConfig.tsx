import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from './routeConstants'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/pages/RootApp').then(convertModuleToRouteObject),
    children: [
      ...sharedRoutes,
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
            path: 'How to Access Data',
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
            lazy: () =>
              import('@/pages/Explore/cohortBuilder').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Projects',
            lazy: () =>
              import('@/pages/Explore/projects').then(
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
        ],
      },
      {
        path: 'Explore/Projects/DetailsPage',
        lazy: () =>
          import('@/pages/ProjectDetailsPage').then(convertModuleToRouteObject),
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
        ],
      },
      {
        path: 'Analysis Platforms',
        lazy: () =>
          import('@/pages/AnalysisPlatforms').then(convertModuleToRouteObject),
      },
      {
        path: 'Contribute Data',
        lazy: () =>
          import('@/pages/ContributeData').then(convertModuleToRouteObject),
      },
      {
        path: 'Comparative Biology',
        lazy: () =>
          import('@/pages/ComparativeBiology').then(convertModuleToRouteObject),
      },
      {
        path: 'Omics Profiles in Humans',
        lazy: () =>
          import('@/pages/OmicsProfilesInHumans').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Translational Approaches',
        lazy: () =>
          import('@/pages/TranslationalApproaches').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'AI Models',
        lazy: () => import('@/pages/AIModels').then(convertModuleToRouteObject),
      },
      {
        path: 'IPSCs',
        lazy: () => import('@/pages/IPSCs').then(convertModuleToRouteObject),
      },
      {
        path: 'Organoids',
        lazy: () =>
          import('@/pages/Organoids').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
