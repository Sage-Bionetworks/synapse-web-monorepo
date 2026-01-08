import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'

export type SynapseSearchPageRouterProps = PropsWithChildren<{
  routerBaseName?: string
  useMemoryRouter?: boolean
}>

export default function SynapseSearchPageRouter(
  props: SynapseSearchPageRouterProps,
) {
  const {
    children,
    routerBaseName = '/SearchV2:default',
    useMemoryRouter = false,
  } = props
  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        element: <>{children}</>,
      },
    ],
    [children, useMemoryRouter],
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
