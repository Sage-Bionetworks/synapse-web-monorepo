import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'
import { CuratorDashboardContent } from './CuratorDashboard'

export type CuratorDashboardRouterProps = PropsWithChildren<{
  /** Used to determine the base path for the component. Default is /curator/dashboard */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For testing purposes only. */
  useMemoryRouter?: boolean
}>

/**
 * A router wrapper for the CuratorDashboard, which applies a router around the component to support using react-router APIs
 * from within the dashboard.
 */
export default function CuratorDashboardRouter(
  props: CuratorDashboardRouterProps,
) {
  const { routerBaseName = '/curator/dashboard:0', useMemoryRouter = false } =
    props

  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        element: <CuratorDashboardContent />,
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
