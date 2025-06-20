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
        lazy: () => import('@/pages/HomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'Collections',
            lazy: () =>
              import('@/pages/explore/Collections').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Data',
            lazy: () =>
              import('@/pages/explore/Data').then(convertModuleToRouteObject),
          },
          {
            path: 'Tools',
            lazy: () =>
              import('@/pages/explore/Tools').then(convertModuleToRouteObject),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/explore/Publications').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },

      {
        path: 'Explore/Collections/DetailsPage',
        lazy: () =>
          import('@/pages/CollectionsDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'About',
        lazy: () =>
          import('@/pages/AboutPage').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
