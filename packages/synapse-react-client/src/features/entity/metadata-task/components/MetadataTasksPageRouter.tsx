import CreateCurationTaskFlow from '@/features/entity/metadata-task/create-task/CreateCurationTaskFlow'
import EditCurationTaskPage from '@/features/entity/metadata-task/create-task/EditCurationTaskPage'
import { PropsWithChildren, useMemo } from 'react'
import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
  RouterProvider,
  useNavigate,
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

function CreateRouteRenderer(props: { projectId: string }) {
  const navigate = useNavigate()
  return (
    <CreateCurationTaskFlow
      projectId={props.projectId}
      onExit={() => void navigate('/')}
    />
  )
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
        children: [
          {
            index: true,
            element: <MetadataTasksPageInternal projectId={projectId} />,
          },
          {
            path: 'create/*',
            element: <CreateRouteRenderer projectId={projectId} />,
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
