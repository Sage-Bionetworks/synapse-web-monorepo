import App from '@sage-bionetworks/synapse-portal-framework/App'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'
import {
  COMMUNITY_PATH,
  INSTRUCTIONS_PATH,
  NEWS_PATH,
  OVERVIEW_PATH,
} from './challengeDetailsPageTabConfig'

const CHALLENGE_LIST_PATH = '/Challenge List'

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
        path: CHALLENGE_LIST_PATH,
        lazy: () =>
          import('@/pages/ChallengeListPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Challenges/DetailsPage',
        lazy: () =>
          import('@/pages/ChallengeDetailsPage').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            index: true,
            element: <RedirectWithQuery to={OVERVIEW_PATH} />,
          },
          {
            path: OVERVIEW_PATH,
            lazy: () =>
              import('@/pages/ChallengeDetailsPageTabContent/OverviewTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: INSTRUCTIONS_PATH,
            lazy: () =>
              import(
                '@/pages/ChallengeDetailsPageTabContent/InstructionsTab'
              ).then(convertModuleToRouteObject),
          },
          {
            path: NEWS_PATH,
            lazy: () =>
              import('@/pages/ChallengeDetailsPageTabContent/NewsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: COMMUNITY_PATH,
            lazy: () =>
              import(
                '@/pages/ChallengeDetailsPageTabContent/CommunityTab'
              ).then(convertModuleToRouteObject),
          },
          {
            // Task tab last so we attempt to match the other paths first before using the slug
            path: ':taskId',
            lazy: () =>
              import('@/pages/ChallengeDetailsPageTabContent/TaskTab').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
    ],
  },
]

export default routes
