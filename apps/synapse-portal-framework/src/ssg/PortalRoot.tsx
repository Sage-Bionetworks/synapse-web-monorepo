/**
 * Shared provider stack for SSG portals (React Router framework mode).
 *
 * Replaces the role of `Portal.tsx` + `index.tsx` in the SPA setup:
 * - Wraps the app in PortalContext, theme, query client, document metadata,
 *   and cookies providers
 * - Renders `<Outlet />` to host child routes
 *
 * Portal env values (`portalName`, `portalKey`) are passed in as props because
 * `import.meta.env` is not available inside this pre-built library. Portal
 * config objects (palette, navbar, header, footer, logos, optional chat)
 * are also passed in.
 *
 * Side effect imports (e.g. KaTeX CSS, portal SCSS) stay in the portal-side
 * wrapper file because they need to be part of the portal's build graph.
 */
import { CssBaseline } from '@mui/material'
import type { PaletteOptions } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { CookiesProvider } from 'react-cookie'
import { Outlet } from 'react-router'
import { ThemeProvider } from 'synapse-react-client/theme/ThemeProvider'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import {
  PortalContextProvider,
  PortalContextType,
} from '../components/PortalContext'

export type PortalRootProps = Omit<PortalContextType, 'routeConfig'> & {
  palette: PaletteOptions
  /**
   * If provided, rendered in place of the default `<Outlet />`. Most portals
   * leave this unset; supplied for cases where the portal needs to wrap the
   * outlet in extra layout.
   */
  children?: ReactNode
}

export default function PortalRoot(props: PortalRootProps) {
  const { children, palette, ...portalContextProps } = props
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )

  // routeConfig is unused in framework mode — routing is handled by routes.ts.
  // Pass an empty array to satisfy the PortalContextType (which is shared with
  // SPA-mode portals that still consume it).
  const portalContext: PortalContextType = {
    ...portalContextProps,
    routeConfig: [],
  }

  return (
    <PortalContextProvider value={portalContext}>
      <CookiesProvider>
        <ThemeProvider theme={{ palette }}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <DocumentMetadataProvider defaultTitle={portalContext.portalName}>
              {children ?? <Outlet />}
            </DocumentMetadataProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}
