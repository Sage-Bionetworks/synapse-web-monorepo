import React, { useContext } from 'react'

export type AppContextType = {
  /** Source App ID */
  appId?: string
  /** Source App Redirect URL */
  redirectURL?: string
}

/**
 * This must be exported to use the context in class components.
 */
export const AppContext = React.createContext<AppContextType | undefined>(
  undefined,
)

export type AppContextProviderProps = {
  appContext: AppContextType
  children?: React.ReactNode
}

export const AppContextProvider: React.FunctionComponent<
  AppContextProviderProps
> = ({ children, appContext }) => {
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
