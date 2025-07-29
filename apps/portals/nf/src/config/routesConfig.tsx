import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { Navigate, RouteObject } from 'react-router'
import HomePage from '../pages/HomePage'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import {
  HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
  HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
  STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
  STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
  STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
  STUDY_DETAILS_PAGE_FILES_TAB_PATH,
  TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
  TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
  TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
} from './routeConstants'

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
            path: 'Initiatives',
            lazy: () =>
              import('@/pages/Explore/initiatives').then(
                convertModuleToRouteObject,
              ),
          },
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
      {
        path: 'Explore/Initiatives/DetailsPage',
        lazy: () =>
          import('@/pages/InitiativeDetailsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Explore/Datasets/DetailsPage',
        lazy: () =>
          import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
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
            // PORTALS-3708 - Add fallback for nonmatching routes to handle route changes.
            path: '*',
            element: (
              <RedirectWithQuery
                to={`../${STUDY_DETAILS_PAGE_DETAILS_TAB_PATH}`}
              />
            ),
          },
          {
            path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDetailsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_DATASETS_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyDatasetsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_FILES_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyFilesTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: STUDY_DETAILS_PAGE_ADDITIONAL_FILES_TAB_PATH,
            lazy: () =>
              import('@/pages/StudyDetailsPage/StudyAdditionalFilesTab').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Tools/DetailsPage',
        lazy: () =>
          import('@/pages/ToolDetailsPage/ToolDetailsPage').then(
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
            // PORTALS-3708 - Add fallback for nonmatching routes to handle route changes.
            path: '*',
            element: (
              <RedirectWithQuery
                to={`../${TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH}`}
              />
            ),
          },
          {
            path: TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH,
            lazy: () =>
              import('@/pages/ToolDetailsPage/ToolDetailsPageDetailsTab').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: TOOLS_DETAILS_PAGE_OBSERVATIONS_TAB_PATH,
            lazy: () =>
              import(
                '@/pages/ToolDetailsPage/ToolDetailsPageObservationsTab'
              ).then(convertModuleToRouteObject),
          },
          {
            path: TOOLS_DETAILS_PAGE_DATA_TAB_PATH,
            lazy: () =>
              import('@/pages/ToolDetailsPage/ToolDetailsPageDataTab').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Explore/Hackathon/DetailsPage',
        lazy: () =>
          import('@/pages/HackathonDetailsPage/HackathonDetailsPage').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            index: true,
            element: (
              <RedirectWithQuery
                to={HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH}
              />
            ),
          },
          {
            // PORTALS-3708 - Add fallback for nonmatching routes to handle route changes.
            path: '*',
            element: (
              <RedirectWithQuery
                to={`../${HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH}`}
              />
            ),
          },
          {
            path: HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH,
            lazy: () =>
              import(
                '@/pages/HackathonDetailsPage/HackathonBackgroundResultsTab'
              ).then(convertModuleToRouteObject),
          },
          {
            path: HACKATHONS_DETAILS_PAGE_METHODOLOGY_TAB_PATH,
            lazy: () =>
              import(
                '@/pages/HackathonDetailsPage/HackathonMethodologyTab'
              ).then(convertModuleToRouteObject),
          },
        ],
      },
      {
        path: 'Organizations',
        children: [
          {
            path: 'DetailsPage',
            lazy: () =>
              import(
                '@/pages/OrganizationDetailsPage/OrganizationDetailsPage'
              ).then(convertModuleToRouteObject),
            children: [
              {
                index: true,
                element: (
                  <RedirectWithQuery to={ORGANIZATION_DETAILS_TAB_PATH} />
                ),
              },
              {
                // PORTALS-3708 - Add fallback for nonmatching routes to handle route changes.
                path: '*',
                element: (
                  <RedirectWithQuery
                    to={`../${ORGANIZATION_DETAILS_TAB_PATH}`}
                  />
                ),
              },
              {
                path: ORGANIZATION_DETAILS_TAB_PATH,
                lazy: () =>
                  import(
                    '@/pages/OrganizationDetailsPage/OrganizationDetailsTab'
                  ).then(convertModuleToRouteObject),
              },
              {
                path: ORGANIZATION_DATA_TAB_PATH,
                lazy: () =>
                  import(
                    '@/pages/OrganizationDetailsPage/OrganizationDataTab'
                  ).then(convertModuleToRouteObject),
              },
            ],
          },
        ],
      },
      {
        // PORTALS-2277 - Renamed "Hackathon Projects" to "Hackathon"
        path: 'Explore/Hackathon Projects',
        element: <RedirectWithQuery to="/Explore/Hackathon" />,
      },
    ],
  },
]

export default routes
