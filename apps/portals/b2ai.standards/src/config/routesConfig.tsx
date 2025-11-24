import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'

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
        lazy: () => import('@/pages/Explore').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Standard/DetailsPage',
        lazy: () =>
          import('@/pages/StandardsDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Explore/Organization/OrganizationDetailsPage',
        lazy: () =>
          import('@/pages/OrganizationDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
    ],
  },
]

export default routes
