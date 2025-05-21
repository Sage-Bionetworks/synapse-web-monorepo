import App from '@sage-bionetworks/synapse-portal-framework/App'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3508 and PORTALS-3515 */}
        <RepositoryUnderReviewAlert portalSpecificDisclaimer="This repository is developed by Sage Bionetworks to host and share resources related to arthritis and autoimmune and related diseases, and remains fully operational. We continue to maintain and accept related data and resources throughout this review process." />
      </App>
    ),
    children: [
      ...sharedRoutes,
      {
        index: true,
        lazy: () => import('@/pages/Home').then(convertModuleToRouteObject),
      },
      {
        path: 'About',
        lazy: () => import('@/pages/About').then(convertModuleToRouteObject),
      },
      {
        path: 'Data Access',
        lazy: () =>
          import('@/pages/DataAccess').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore',
        lazy: () =>
          import('@/pages/Explore/layout').then(convertModuleToRouteObject),
        children: [
          {
            path: 'Programs',
            lazy: () =>
              import('@/pages/Explore/Programs').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Projects',
            lazy: () =>
              import('@/pages/Explore/Projects').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Collections',
            lazy: () =>
              import('@/pages/Explore/Collections').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Datasets',
            lazy: () =>
              import('@/pages/Explore/Datasets').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'All Data',
            lazy: () =>
              import('@/pages/Explore/AllData').then(
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
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
