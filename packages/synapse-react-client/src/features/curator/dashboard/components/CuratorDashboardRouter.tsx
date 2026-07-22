import EditCurationTaskPage from '@/features/entity/metadata-task/create-task/EditCurationTaskPage'
import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import { CuratorDashboardInternal } from '../CuratorDashboard'

export type CuratorDashboardRouterProps = PropsWithChildren<{
  /** Used to determine the base path for the component. Default is CuratorDashboard:default */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For testing purposes only. */
  useMemoryRouter?: boolean
}>

/**
 * A router wrapper for `CuratorDashboard`, which applies a router around the dashboard content to
 * support the page-based edit flow for curation tasks, mirroring `GridPageRouter`.
 */
export default function CuratorDashboardRouter(
  props: CuratorDashboardRouterProps,
) {
  const {
    routerBaseName = '/CuratorDashboard:default',
    useMemoryRouter = false,
  } = props

  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        children: [
          { index: true, element: <CuratorDashboardInternal /> },
          { path: 'edit/:taskId', element: <EditCurationTaskPage /> },
        ],
      },
    ],
    [],
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
