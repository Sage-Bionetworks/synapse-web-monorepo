import RedirectWithQuery from '@/components/RedirectWithQuery'
import { convertModuleToRouteObject } from '@/utils/convertModuleToRouteObject'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
  {
    path: '*',
    lazy: () => import('@/pages/ErrorPage').then(convertModuleToRouteObject),
  },
  {
    // Handles redirecting '/Home' to '/'
    path: 'Home',
    element: <RedirectWithQuery to="/" />,
  },
  {
    path: 'DownloadCart',
    lazy: () =>
      import('@/pages/DownloadCartPage').then(convertModuleToRouteObject),
  },
  {
    path: 'FileEntity',
    lazy: () =>
      import('@/pages/FileEntityPage/FileEntityPage').then(
        convertModuleToRouteObject,
      ),
  },
]

export default routes
