import { hackathonDetailsPageRoutesConfig } from '@/pages/HackathonDetailsPage/HackathonDetailsPage'
import { searchPageChildRoutes } from '@/pages/NFSearchPage'
import { organizationsDetailsPageRoute } from '@/pages/OrganizationDetailsPage/OrganizationDetailsPage'
import { toolDetailsPageRoutesConfig } from '@/pages/ToolDetailsPage/ToolDetailsPage'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { sharePageLinkExplorePageButtonProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { Navigate, RouteObject } from 'react-router'
import { SharePageLinkButton } from 'synapse-react-client'
import HomePage from '../pages/HomePage'
import { studyDetailsPageRoute } from '../pages/StudyDetailsPage/StudyDetailsPage'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { l } from 'node_modules/react-router/dist/development/fog-of-war-D2zsXvum.mjs'

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/pages/RootApp').then(convertModuleToRouteObject),
    children: [
      ...sharedRoutes,
      { index: true, element: <HomePage /> },
      {
        //PORTALS-3454: Redirect Browse Tools to Research Tools Central/Browse Tools
        path: 'Browse Tools',
        element: <Navigate to="/Research Tools Central/Browse Tools" replace />,
      },
      {
        path: 'Research Tools Central',
        children: [
          {
            path: 'Browse Tools',
            lazy: () =>
              import('@/pages/BrowseTools').then(convertModuleToRouteObject),
          },
          {
            path: 'Submit Animal Model',
            lazy: () =>
              import('@/pages/SubmitAnimalModel').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Submit Observation',
            lazy: () =>
              import('@/pages/SubmitObservation').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Submit Cell Line',
            lazy: () =>
              import('@/pages/SubmitCellLine').then(convertModuleToRouteObject),
          },
          {
            path: 'Submit Antibody',
            lazy: () =>
              import('@/pages/SubmitAntibody').then(convertModuleToRouteObject),
          },
          {
            path: 'Submit Genetic Reagent',
            lazy: () =>
              import('@/pages/SubmitGeneticReagent').then(
                convertModuleToRouteObject,
              ),
          },
        ],
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
            path: 'Datasets',
            lazy: () =>
              import('@/pages/Explore/datasets').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Files',
            lazy: () =>
              import('@/pages/Explore/files').then(convertModuleToRouteObject),
          },
          {
            path: 'Publications',
            lazy: () =>
              import('@/pages/Explore/publications').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'Tools',
            lazy: () =>
              import('@/pages/Explore/tools').then(convertModuleToRouteObject),
          },
          {
            path: 'Hackathon',
            lazy: () =>
              import('@/pages/Explore/hackathons').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Search',
        children: searchPageChildRoutes,
      },
      {
        path: 'Explore/Initiatives/DetailsPage',
        lazy: () =>
          import('@/pages/InitiativeDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      studyDetailsPageRoute,
      {
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
      },
      toolDetailsPageRoutesConfig,
      hackathonDetailsPageRoutesConfig,
      {
        // PORTALS-2277 - Renamed "Hackathon Projects" to "Hackathon"
        path: 'Explore/Hackathon Projects',
        element: <RedirectWithQuery to="/Explore/Hackathon" />,
      },
      organizationsDetailsPageRoute,
    ],
  },
]

export default routes
