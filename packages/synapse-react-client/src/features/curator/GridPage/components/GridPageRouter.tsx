import { UpdateGridPageSearchParamsForm } from '@/features/curator/GridPage/components/UpdateGridPageSearchParamsForm'
import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router'
import { RouterProvider as DOMRouterProvider } from 'react-router/dom'

export type GridPageRouterProps = PropsWithChildren<{
  /** Used to determine the base path for the component. Default is Grid:default */
  routerBaseName?: string
  /** If true use a MemoryRouter, which prevents the browser URL from updating. For testing purposes only. */
  useMemoryRouter?: boolean
}>

/**
 * A router wrapper for the GridPage, which applies a router around the children to support using react-router APIs
 * from within SWC.
 */
export default function GridPageRouter(props: GridPageRouterProps) {
  const {
    children,
    routerBaseName = '/Grid:default',
    useMemoryRouter = false,
  } = props
  const routes: RouteObject[] = useMemo(
    () => [
      {
        path: '/',
        element: (
          <>
            {useMemoryRouter && <UpdateGridPageSearchParamsForm />}
            {children}
          </>
        ),
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
