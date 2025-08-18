import App from '@sage-bionetworks/synapse-portal-framework/App'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import RepositoryUnderReviewAlert from '@sage-bionetworks/synapse-portal-framework/components/RepositoryUnderReviewAlert'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'
import {
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
} from './routeConstants'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <App>
        {/* PORTALS-3505 & PORTALS-3508*/}
        <RepositoryUnderReviewAlert
          portalSpecificDisclaimer={
            'This repository is developed by Sage Bionetworks to host and share resources related to cancer research, and remains fully operational. We continue to maintain and accept cancer-related data and resources throughout this review process.'
          }
        />
      </App>
    ),
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
            path: 'Grants',
            lazy: () =>
              import('@/pages/Explore/Grants').then(convertModuleToRouteObject),
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
          {
            path: 'Datasets',
            lazy: () =>
              import('@/pages/Explore/Datasets').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Tools',
            lazy: () =>
              import('@/pages/Explore/Tools').then(convertModuleToRouteObject),
          },
          {
            path: 'Educational Resources',
            lazy: () =>
              import('@/pages/Explore/EducationalResources').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Grants/DetailsPage',
        lazy: () =>
          import('@/pages/GrantDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/People/DetailsPage',
        lazy: () =>
          import('@/pages/PeopleDetailsPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Explore/Publications/DetailsPage',
        lazy: () =>
          import('@/pages/PublicationsDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetsDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Explore/Tools/DetailsPage',
        lazy: () =>
          import('@/pages/ToolsDetailsPage/ToolsDetailsPage').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery to={TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH} />
            ),
          },
          {
            path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
            lazy: () =>
              import(
                '@/pages/ToolsDetailsPage/ToolsDetailsPageDetailsTab'
              ).then(convertModuleToRouteObject),
          },
          {
            path: TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
            lazy: () =>
              import(
                '@/pages/ToolsDetailsPage/ToolsDetailsPageSustainabilityAndReusabilityTab'
              ).then(convertModuleToRouteObject),
          },
        ],
      },
      {
        path: 'Explore/Educational Resources/DetailsPage',
        lazy: () =>
          import('@/pages/EducationalResourcesDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'MC2Supplement',
        lazy: () =>
          import('@/pages/MC2Supplement').then(convertModuleToRouteObject),
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
