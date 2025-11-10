import {
  FileEntityPageConfig,
  FooterConfig,
  HomePageHeaderConfig,
  LogoConfig,
} from '@/types/portal-config'
import { createContext, PropsWithChildren, useContext } from 'react'
import { RouteObject } from 'react-router'
import { NavbarConfig } from './navbar/Navbar'

export type CPathConfig = {
  enabled: boolean
  workspacesApiBasePath?: string
}

export type PortalContextType = {
  portalName: string
  routeConfig: RouteObject[]
  headerConfig: HomePageHeaderConfig
  footerConfig: FooterConfig
  logoHeaderConfig: LogoConfig
  logoFooterConfig: LogoConfig
  navbarConfig: NavbarConfig
  fileEntityPageConfig?: FileEntityPageConfig
  cpathConfig?: CPathConfig
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
