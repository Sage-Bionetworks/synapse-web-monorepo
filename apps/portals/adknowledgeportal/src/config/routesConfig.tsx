import { doiRedirector, doiSerializer } from '@/config/doiRedirector'
import {
  STUDY_DETAILS_PAGE_DATA_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
} from '@/config/routeConstants'
import { getDoiRedirectRoute } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'
import { explorePageRoutes } from './explorePageRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/pages/layout').then(convertModuleToRouteObject),
    children: [
      ...sharedRoutes,
      getDoiRedirectRoute({
        redirector: doiRedirector,
        deserializer: doiSerializer,
      }),
      {
        index: true,
        lazy: () => import('@/pages/Home').then(convertModuleToRouteObject),
      },
      {
        path: 'ExperimentalModels',
        lazy: () =>
          import('@/pages/ExperimentalModels').then(convertModuleToRouteObject),
      },
      {
        // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
        path: 'MODEL-ADstrains',
        lazy: () =>
          import('@/pages/ModelADStrains').then(convertModuleToRouteObject),
      },
      {
        path: 'DataAccess',
        lazy: () =>
          import('@/pages/DataAccess').then(convertModuleToRouteObject),
      },
      {
        // PORTALS-2919: Redirect DataAccess/Instructions to /Data Access
        path: 'DataAccess/Instructions',
        lazy: () =>
          import('@/pages/DataAccess-Instructions').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
          ...explorePageRoutes,
          {
            // PORTALS-2001 - we renamed "Experimental Tools" to "Experimental Models"
            // 'Experimental Tools' not included in explorePageRoutes because it is legacy
            path: 'Experimental Tools',
            lazy: () =>
              import('@/pages/Explore/experimental_tools').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Programs/DetailsPage',
        lazy: () =>
          import('@/pages/ProgramDetailsPage').then(convertModuleToRouteObject),
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
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDetailsPage-Index').then(
                convertModuleToRouteObject,
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
        path: 'Data Access',
        lazy: () =>
          import('@/pages/DataAccess').then(convertModuleToRouteObject),
      },
      {
        path: 'Contribute',
        lazy: () =>
          import('@/pages/Contribute/Contribute-Home').then(
            convertModuleToRouteObject,
          ),
      },
      {
        // The FormSubmission page has been replaced with a link to Service Desk
        // path: 'Contribute/FormSubmission',
        // lazy: () =>
        //   import('@/pages/Contribute/Contribute-FormSubmission').then(
        //     convertModuleToRouteObject,
        //   ),
      },
      {
        path: 'About',
        lazy: () => import('@/pages/About').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
