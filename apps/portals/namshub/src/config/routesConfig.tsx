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
    ],
  },
]

export default routes
