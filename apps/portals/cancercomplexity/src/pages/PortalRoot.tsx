import PortalRoot from '@sage-bionetworks/synapse-portal-framework/ssg/PortalRoot'
import { navbarConfig } from '../config/navbarConfig'
import palette from '../config/paletteConfig'
import footerConfig from '../config/footerConfig'
import logoHeaderConfig from '../config/logoHeaderConfig'
import logoFooterConfig from '../config/logoFooterConfig'
import headerConfig from '../config/headerConfig'
import synapseChatConfig from '../config/synapseChatConfig'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'
import '../App.scss'

export default function CancerComplexityPortalRoot() {
  return (
    <PortalRoot
      portalName={import.meta.env.VITE_PORTAL_NAME ?? ''}
      portalKey={import.meta.env.VITE_PORTAL_KEY ?? ''}
      portalDescription={import.meta.env.VITE_PORTAL_DESCRIPTION}
      palette={palette}
      navbarConfig={navbarConfig}
      headerConfig={headerConfig}
      footerConfig={footerConfig}
      logoHeaderConfig={logoHeaderConfig}
      logoFooterConfig={logoFooterConfig}
      synapseChatProps={synapseChatConfig}
    />
  )
}
