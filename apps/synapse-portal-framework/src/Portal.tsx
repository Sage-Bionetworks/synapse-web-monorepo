import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo, useRef, useState } from 'react'
import { CookiesProvider } from 'react-cookie'
import { createBrowserRouter, RouteObject } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { mergeTheme } from 'synapse-react-client/theme/mergeTheme'
import { RouteErrorBoundary } from 'synapse-react-client/components/error/RouteErrorBoundary'
import { PortalContextProvider } from './components/PortalContext'
import { PortalProps } from './components/PortalProps'

/**
 * Adds an errorElement to top-level routes that don't already have one
 */
function addErrorBoundaryToRoutes(
  routes: RouteObject[],
  logoIcon?: string,
): RouteObject[] {
  return routes.map(route => ({
    ...route,
    errorElement: route.errorElement ?? <RouteErrorBoundary icon={logoIcon} />,
  }))
}

function Portal(props: PortalProps) {
  const { palette, ...context } = props
  // Per-app QueryClient instance (stable via useRef).
  // Prevents cross-render cache leakage during SSR and avoids stale HMR state.
  const queryClientRef = useRef<QueryClient | null>(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient(defaultQueryClientConfig)
  }
  const queryClient = queryClientRef.current
  const routesWithErrorBoundary = useMemo(
    () =>
      addErrorBoundaryToRoutes(
        props.routeConfig,
        context.logoHeaderConfig?.icon,
      ),
    [props.routeConfig, context.logoHeaderConfig?.icon],
  )
  const router = useMemo(
    () => createBrowserRouter(routesWithErrorBoundary),
    [routesWithErrorBoundary],
  )
  const theme = useMemo(() => createTheme(mergeTheme({ palette })), [palette])
  const defaultTitle = props.portalName || undefined

  return (
    <PortalContextProvider value={context}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <DocumentMetadataProvider defaultTitle={defaultTitle}>
              <RouterProvider router={router} />
            </DocumentMetadataProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}

export default Portal
