import App from '@sage-bionetworks/synapse-portal-framework/App'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { Navigate, RouteObject } from 'react-router'

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
        path: 'Apply',
        children: [
          {
            index: true,
            lazy: () =>
              import('@/pages/ApplyAndViewSubmissionsPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'FormSubmission',
            lazy: () =>
              import('@/pages/FormSubmissionPage').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Help',
        children: [
          {
            index: true,
            element: <Navigate to="/Help/How It Works" replace={true} />,
          },
          {
            path: 'How It Works',
            lazy: () =>
              import('@/pages/HowItWorks').then(convertModuleToRouteObject),
          },
          {
            path: 'Data Requirements',
            lazy: () =>
              import('@/pages/DataRequirements').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
      {
        path: 'Terms',
        lazy: () => import('@/pages/Terms').then(convertModuleToRouteObject),
      },
      {
        path: 'Contact Us',
        lazy: () =>
          import('@/pages/ContactUs').then(convertModuleToRouteObject),
      },
    ],
  },
]

export default routes
