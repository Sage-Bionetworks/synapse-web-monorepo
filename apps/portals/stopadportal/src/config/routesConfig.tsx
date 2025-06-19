import App from '@sage-bionetworks/synapse-portal-framework/App'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then(convertModuleToRouteObject),
      },
      {
        path: 'Apply',
        lazy: () =>
          import('@/pages/ApplyAndViewSubmissionsPage').then(
            convertModuleToRouteObject,
          ),
      },
      {
        path: 'Apply/FormSubmission',
        lazy: () =>
          import('@/pages/FormSubmissionPage').then(convertModuleToRouteObject),
      },
      {
        path: 'Help/How It Works',
        lazy: () =>
          import('@/pages/HowItWorks').then(convertModuleToRouteObject),
      },
      {
        path: 'Help/Data Requirements',
        lazy: () =>
          import('@/pages/DataRequirements').then(convertModuleToRouteObject),
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
