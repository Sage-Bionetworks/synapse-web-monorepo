import React, { useContext } from 'react'
import {
  FooterConfig,
  GenericRoute,
  HomePageHeaderConfig,
  LogoConfig,
} from '../types/portal-config'

export type PortalContextType = {
  portalName: string
  routeConfig: GenericRoute[]
  headerConfig: HomePageHeaderConfig
  footerConfig: FooterConfig
  logoHeaderConfig: LogoConfig
  logoFooterConfig: LogoConfig
}

export const PortalContext = React.createContext<PortalContextType | undefined>(
  undefined,
)

export type PortalContextProviderProps = React.PropsWithChildren<{
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
