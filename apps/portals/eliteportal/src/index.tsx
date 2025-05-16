import Portal from '@sage-bionetworks/synapse-portal-framework/Portal'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import footerConfig from './config/footerConfig'
import headerConfig from './config/headerConfig'
import logoFooterConfig from './config/logoFooterConfig'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

import './App.scss'
import logoHeaderConfig from './config/logoHeaderConfig'
import { navbarConfig } from './config/navbarConfig'
import palette from './config/paletteConfig'
import routes from './config/routesConfig'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <Portal
      portalName={import.meta.env.VITE_PORTAL_NAME}
      palette={palette}
      routeConfig={routes}
      headerConfig={headerConfig}
      footerConfig={footerConfig}
      logoHeaderConfig={logoHeaderConfig}
      logoFooterConfig={logoFooterConfig}
      navbarConfig={navbarConfig}
    />
  </StrictMode>,
)
