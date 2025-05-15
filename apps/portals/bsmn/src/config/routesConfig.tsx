import App from '@sage-bionetworks/synapse-portal-framework/App'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      ...sharedRoutes,
      {
        index: true,
        lazy: () => import('@/pages/Home').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'Projects',
            lazy: () =>
              import('@/pages/Explore/Projects').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Data',
            lazy: () =>
              import('@/pages/Explore/Data').then(convertModuleToRouteObject),
          },
          {
            path: 'Tools',
            lazy: () =>
              import('@/pages/Explore/Tools').then(convertModuleToRouteObject),
          },
          {
            path: 'People',
            lazy: () =>
              import('@/pages/Explore/People').then(convertModuleToRouteObject),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/Explore/Publications').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Projects/DetailsPage',
        lazy: () =>
          import('@/pages/ProjectDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Data/DetailsPage',
        lazy: () =>
          import('@/pages/StudyDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'About',
        lazy: () => import('@/pages/About').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
