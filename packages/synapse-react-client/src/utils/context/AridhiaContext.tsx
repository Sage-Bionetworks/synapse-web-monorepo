import { createContext, PropsWithChildren, useContext } from 'react'
import { AuthenticationRequest } from '@sage-bionetworks/aridhia-client/generated/models'

export type AridhiaContextType = {
  /**
   * Base URL for the Aridhia Gateway API (where authentication endpoint lives)
   */
  apiBasePath: string
  /**
   * Authentication request parameters for token exchange (excluding subject_token)
   */
  authenticationRequest: Omit<AuthenticationRequest, 'subject_token'>
}

const AridhiaContext = createContext<AridhiaContextType | undefined>(undefined)

export type AridhiaContextProviderProps = PropsWithChildren<{
  /**
   * Base URL for the Aridhia Gateway API (where authentication endpoint lives)
   * @default 'https://gateway.westus2.c-path-dev.aridhia.io'
   */
  apiBasePath?: string
  /**
   * Authentication request parameters for token exchange
   */
  authenticationRequest: Omit<AuthenticationRequest, 'subject_token'>
}>

/**
 * Context provider that stores Aridhia API configuration.
 * Token exchange is handled by individual hooks/queries to ensure fresh tokens.
 */
export function AridhiaContextProvider(props: AridhiaContextProviderProps) {
  const {
    children,
    apiBasePath = 'https://gateway.westus2.c-path-dev.aridhia.io',
    authenticationRequest,
  } = props

  const contextValue: AridhiaContextType = {
    apiBasePath,
    authenticationRequest,
  }

  return (
    <AridhiaContext.Provider value={contextValue}>
      {children}
    </AridhiaContext.Provider>
  )
}

/**
 * Hook to access the Aridhia context containing the access token
 * @throws Error if used outside of AridhiaContextProvider
 */
export function useAridhiaContext(): AridhiaContextType {
  const context = useContext(AridhiaContext)
  if (!context) {
    throw new Error(
      'useAridhiaContext must be used within an AridhiaContextProvider',
    )
  }
  return context
}

/**
 * Hook to access the Aridhia context, returning undefined if not within a provider.
 * Useful for optional Aridhia integration.
 */
export function useAridhiaContextOptional(): AridhiaContextType | undefined {
  return useContext(AridhiaContext)
}
