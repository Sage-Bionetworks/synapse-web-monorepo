import { getCurationTaskFlowRoutes } from '@/features/entity/metadata-task/create-task/curationTaskFlowRoutes'
import EditCurationTaskPage from '@/features/entity/metadata-task/create-task/EditCurationTaskPage'
import { useRestoreScrollOnRouteChange } from '@/utils/hooks/useRestoreScrollOnRouteChange'
import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import { MetadataTasksPageInternal } from './MetadataTasksPage'

export type MetadataTasksPageRouterProps = PropsWithChildren<{
  projectId: string
  /**
   * Used to determine the base path for the component. In SWC, this should be /Synapse:syn123/metadata/
   * (replacing syn123 with the project ID).
   */
  routerBaseName: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For testing purposes only. */
  useMemoryRouter?: boolean
}>

/**
 * Parent of every route on the page. Stays mounted across navigation between the task list and the
 * create/edit flows, all of which render into its `Outlet`.
 */
function MetadataTasksPageLayout() {
  useRestoreScrollOnRouteChange()

  return <Outlet />
}

/**
 * A router wrapper for `MetadataTasksPage`, which applies a router around the page content to support
 * page-based create/edit flows for curation tasks, mirroring `GridPageRouter`.
 */
export default function MetadataTasksPageRouter(
  props: MetadataTasksPageRouterProps,
) {
  const { projectId, routerBaseName, useMemoryRouter = false } = props

  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        element: <MetadataTasksPageLayout />,
        children: [
          {
            index: true,
            element: <MetadataTasksPageInternal projectId={projectId} />,
          },
          {
            path: 'create',
            children: getCurationTaskFlowRoutes({ projectId, exitPath: '/' }),
          },
          {
            path: 'edit/:taskId',
            element: <EditCurationTaskPage />,
          },
        ],
      },
    ],
    [projectId],
  )

  const router = useMemo(() => {
    if (useMemoryRouter) {
      return createMemoryRouter(routes, {
        basename: routerBaseName,
      })
    } else {
      return createBrowserRouter(routes, {
        basename: routerBaseName,
      })
    }
  }, [useMemoryRouter, routes, routerBaseName])

  if (useMemoryRouter) {
    return <RouterProvider router={router} />
  }

  return <DOMRouterProvider router={router} />
}
