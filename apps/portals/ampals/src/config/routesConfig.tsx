import App from '@sage-bionetworks/synapse-portal-framework/App'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
//import header images for Resources pages
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'

//TO DO: help page button url(s), remove first child h2 padding-top or find some other fix, add input for header images

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3627 */}
        <RepositoryUnderReviewAlert />
      </App>
    ),
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
            path: 'Programs',
            lazy: () =>
              import('@/pages/Explore/programs').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Files',
            lazy: () =>
              import('@/pages/Explore/files').then(convertModuleToRouteObject),
          },
          {
            path: 'Collections',
            lazy: () =>
              import('@/pages/Explore/collections').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Datasets',
            lazy: () =>
              import('@/pages/Explore/datasets').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Data Access',
        lazy: () =>
          import('@/pages/resources/ForResearchers').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Resources',
        children: [
          // {
          //   path: 'For Persons With Lived Experience',
          //   lazy: () =>
          //     import('@/pages/resources/ForPWLEs').then(
          //       convertModuleToRouteObject,
          //     ),
          // },
          {
            path: 'Requirements for Publication',
            lazy: () =>
              import('@/pages/resources/RequirementsForPublication').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Frequently Asked Questions',
            lazy: () =>
              import('@/pages/resources/FrequentlyAskedQuestions').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Publishing Requirements',
            lazy: () =>
              import('@/pages/resources/PublishingRequirements').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Contribute Data',
        lazy: () =>
          import('@/pages/resources/ForContributors').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'ContactUs',
        lazy: () =>
          import('@/pages/ContactUs').then(convertModuleToRouteObject),
      },
      {
        path: 'Search',
        children: [
          {
            index: true,
            lazy: () =>
              import('@/pages/Search').then(convertModuleToRouteObject),
          },
          {
            path: ':resourceType',
            lazy: () =>
              import('@/pages/Search').then(convertModuleToRouteObject),
          },
        ],
      },
    ],
  },
]

export default routes
