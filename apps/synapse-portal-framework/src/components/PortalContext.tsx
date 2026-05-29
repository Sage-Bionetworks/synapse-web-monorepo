import {
  FileEntityPageConfig,
  FooterConfig,
  HomePageHeaderConfig,
  LogoConfig,
} from '@/types/portal-config'
import { createContext, PropsWithChildren, useContext } from 'react'
import { RouteObject } from 'react-router'
import { SynapseChatProps } from 'synapse-react-client'
import { NavbarConfig } from './navbar/Navbar'

export type AridhiaConfig = {
  apiBasePath?: string
}

export type PortalContextType = {
  /** Portal key — e.g. "nf" → nf.synapse.org. */
  portalKey: string
  /** Portal display name (read from `import.meta.env.VITE_PORTAL_NAME` in the portal). */
  portalName: string
  /** Portal description, used as `<meta name="description">` etc. */
  portalDescription: string
  routeConfig: RouteObject[]
  headerConfig: HomePageHeaderConfig
  footerConfig: FooterConfig
  logoHeaderConfig: LogoConfig
  logoFooterConfig: LogoConfig
  navbarConfig: NavbarConfig
  fileEntityPageConfig?: FileEntityPageConfig
  aridhiaConfig?: AridhiaConfig
  /** Optional chat config — only set on portals that enable Synapse Chat. */
  synapseChatProps?: SynapseChatProps
}

export const PortalContext = createContext<PortalContextType | undefined>(
  undefined,
)

export type PortalContextProviderProps = PropsWithChildren<{
  value: PortalContextType
}>

export function PortalContextProvider(props: PortalContextProviderProps) {
  const { children, value } = props

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  )
}

export function usePortalContext(): PortalContextType {
  const context = useContext(PortalContext)
  if (context === undefined) {
    throw new Error(
      'usePortalContext must be used within a PortalContextProvider',
    )
  }
  return context
}
