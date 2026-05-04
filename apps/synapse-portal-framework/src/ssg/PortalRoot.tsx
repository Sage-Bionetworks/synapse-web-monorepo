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
import type { SynapseChatProps } from 'synapse-react-client'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { ThemeProvider } from 'synapse-react-client/theme/ThemeProvider'
import type { NavbarConfig } from '../components/navbar/Navbar'
import { PortalContextProvider } from '../components/PortalContext'
import type {
  FooterConfig,
  HomePageHeaderConfig,
  LogoConfig,
} from '../types/portal-config'

export type PortalRootProps = {
  /** Portal display name (read from `import.meta.env.VITE_PORTAL_NAME` in the portal). */
  portalName: string
  /** Portal key — e.g. "nf" → nf.synapse.org. */
  portalKey: string
  palette: PaletteOptions
  navbarConfig: NavbarConfig
  headerConfig: HomePageHeaderConfig
  footerConfig: FooterConfig
  logoHeaderConfig: LogoConfig
  logoFooterConfig: LogoConfig
  /** Optional chat config — only set on portals that enable Synapse Chat. */
  synapseChatProps?: SynapseChatProps
  /**
   * If provided, rendered in place of the default `<Outlet />`. Most portals
   * leave this unset; supplied for cases where the portal needs to wrap the
   * outlet in extra layout.
   */
  children?: ReactNode
}

export default function PortalRoot(props: PortalRootProps) {
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )

  // routeConfig is unused in framework mode — routing is handled by routes.ts.
  // Pass an empty array to satisfy the PortalContextType (which is shared with
  // SPA-mode portals that still consume it).
  const portalContext = {
    portalName: props.portalName,
    portalKey: props.portalKey,
    routeConfig: [],
    headerConfig: props.headerConfig,
    footerConfig: props.footerConfig,
    logoHeaderConfig: props.logoHeaderConfig,
    logoFooterConfig: props.logoFooterConfig,
    navbarConfig: props.navbarConfig,
    synapseChatProps: props.synapseChatProps,
  }

  return (
    <PortalContextProvider value={portalContext}>
      <CookiesProvider>
        <ThemeProvider theme={{ palette: props.palette }}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <DocumentMetadataProvider defaultTitle={props.portalName}>
              {props.children ?? <Outlet />}
            </DocumentMetadataProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}
