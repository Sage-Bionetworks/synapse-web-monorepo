import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo } from 'react'
import { CookiesProvider } from 'react-cookie'
import { createBrowserRouter, RouteObject } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { defaultQueryClientConfig } from 'synapse-react-client/stores/FullContextProvider/FullContextProvider'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { mergeTheme } from 'synapse-react-client/theme/mergeTheme'
import { RouteErrorBoundary } from 'synapse-react-client/components/error/RouteErrorBoundary'
import { PortalContextProvider } from './components/PortalContext'
import { PortalProps } from './components/PortalProps'

const queryClient = new QueryClient(defaultQueryClientConfig)

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
  const routesWithErrorBoundary = useMemo(
    () =>
      addErrorBoundaryToRoutes(
        props.routeConfig,
        context.logoHeaderConfig?.icon,
      ),
    [props.routeConfig, context.logoHeaderConfig?.icon],
  )
  const router = createBrowserRouter(routesWithErrorBoundary)
  const theme = useMemo(() => createTheme(mergeTheme({ palette })), [palette])
  const portalTitleEnv: unknown = import.meta.env.VITE_PORTAL_NAME
  const defaultTitle =
    typeof portalTitleEnv === 'string' ? portalTitleEnv : undefined

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
