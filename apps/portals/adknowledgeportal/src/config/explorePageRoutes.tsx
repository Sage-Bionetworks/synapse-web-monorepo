import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { RouteObject } from 'react-router'

export const explorePageRoutes: RouteObject[] = [
  {
    path: 'Programs',
    lazy: () =>
      import('@/pages/Explore/programs').then(convertModuleToRouteObject),
  },
  {
    path: 'Projects',
    lazy: () =>
      import('@/pages/Explore/projects').then(convertModuleToRouteObject),
  },
  {
    path: 'Studies',
    lazy: () =>
      import('@/pages/Explore/studies').then(convertModuleToRouteObject),
  },
  {
    path: 'Data',
    lazy: () => import('@/pages/Explore/data').then(convertModuleToRouteObject),
  },
  {
    path: 'Publications',
    lazy: () =>
      import('@/pages/Explore/publications').then(convertModuleToRouteObject),
  },
  {
    path: 'People',
    lazy: () =>
      import('@/pages/Explore/people').then(convertModuleToRouteObject),
  },
  {
    path: 'Experimental Models',
    lazy: () =>
      import('@/pages/Explore/experimental_models').then(
        convertModuleToRouteObject,
      ),
  },
  {
    path: 'Computational Tools',
    lazy: () =>
      import('@/pages/Explore/computational_tools').then(
        convertModuleToRouteObject,
      ),
  },
  {
    path: 'Target Enabling Resources',
    lazy: () =>
      import('@/pages/Explore/target_enabling_resources').then(
        convertModuleToRouteObject,
      ),
  },
  {
    path: 'Results',
    lazy: () =>
      import('@/pages/Explore/results').then(convertModuleToRouteObject),
  },
  {
    path: 'Cohort Builder',
    children: [
      {
        index: true,
        element: (
          <RedirectWithQuery to={'/Explore/Cohort Builder/Individuals'} />
        ),
      },
      {
        path: 'Individuals',
        lazy: () =>
          import('@/pages/Explore/cohortBuilder').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Data',
        lazy: () =>
          import('@/pages/Explore/cohortBuilderData').then(
            convertModuleToRouteObject,
          ),
      },
    ],
  },
]
