import { createContext, ReactNode, useContext } from 'react'

import { SignedTokenInterface } from '@sage-bionetworks/synapse-types'

export type AppContextType = {
  /** Source App ID */
  appId?: string
  /** Source App Redirect URL */
  redirectURL?: string
  /** If initialized with a signed token, this will be available in the context (until it is handled and cleared) */
  signedToken?: SignedTokenInterface
}

/**
 * This must be exported to use the context in class components.
 */
export const AppContext = createContext<AppContextType | undefined>(undefined)

export type AppContextProviderProps = {
  appContext: AppContextType
  children?: ReactNode
}

export function AppContextProvider({
  children,
  appContext,
}: AppContextProviderProps) {
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  )
}

export const AppContextConsumer = AppContext.Consumer

export function useAppContext(): AppContextType {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}
