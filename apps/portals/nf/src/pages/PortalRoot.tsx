/**
 * PortalRoot — root layout route for Framework Mode.
 *
 * Replaces the role of Portal.tsx + index.tsx in the SPA setup:
 * - Provides all context (theme, query client, portal context, document metadata)
 * - Renders <Outlet /> to host child routes
 *
 * This component is used as the top-level layout route in routes.ts.
 */
import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { CookiesProvider } from 'react-cookie'
import { Outlet } from 'react-router'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { mergeTheme } from 'synapse-react-client/theme/mergeTheme'
import { PortalContextProvider } from '@sage-bionetworks/synapse-portal-framework/components/PortalContext'
import { navbarConfig } from '../config/navbarConfig'
import palette from '../config/paletteConfig'
import footerConfig from '../config/footerConfig'
import logoHeaderConfig from '../config/logoHeaderConfig'
import logoFooterConfig from '../config/logoFooterConfig'
import headerConfig from '../config/headerConfig'
import routes from '../config/routesConfig'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'
import '../App.scss'

const portalContext = {
  portalName: import.meta.env.VITE_PORTAL_NAME ?? '',
  routeConfig: routes,
  headerConfig,
  footerConfig,
  logoHeaderConfig,
  logoFooterConfig,
  navbarConfig,
}

export default function PortalRoot() {
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )
  const theme = useMemo(() => createTheme(mergeTheme({ palette })), [])
  const portalTitleEnv: unknown = import.meta.env.VITE_PORTAL_NAME
  const defaultTitle =
    typeof portalTitleEnv === 'string' ? portalTitleEnv : undefined

  return (
    <PortalContextProvider value={portalContext}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <DocumentMetadataProvider defaultTitle={defaultTitle}>
              <Outlet />
            </DocumentMetadataProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}
