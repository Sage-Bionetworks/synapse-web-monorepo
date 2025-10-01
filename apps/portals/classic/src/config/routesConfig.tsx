import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { STUDY_DETAILS_PAGE_DETAILS_TAB_PATH } from './routeConstants'
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
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
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
        ],
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
        ],
      },
      {
        path: 'Contribute Study Metadata',
        lazy: () =>
          import('@/pages/ContributeData').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
