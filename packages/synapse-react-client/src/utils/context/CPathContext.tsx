import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  AuthenticationApi,
  Configuration,
} from '@sage-bionetworks/cpath-client'
import { useSynapseContext } from './SynapseContext'

export type CPathContextType = {
  /**
   * The DAP token obtained by exchanging the Synapse access token.
   * Will be undefined if the user is not logged in to Synapse or if the exchange fails.
   */
  dapToken: string | undefined
  /**
   * Whether the token exchange is currently in progress
   */
  isLoading: boolean
  /**
   * Error that occurred during token exchange, if any
   */
  error: Error | undefined
  /**
   * Manually refresh the DAP token by re-exchanging the current Synapse token
   */
  refreshDapToken: () => Promise<void>
}

const CPathContext = createContext<CPathContextType | undefined>(undefined)

export type CPathContextProviderProps = PropsWithChildren<{
  /**
   * Base URL for the C-Path Workspaces API (where authentication endpoint lives)
   * @default 'https://fair.c-path-dev.aridhia.io/api'
   */
  workspacesApiBasePath?: string
}>

/**
 * Context provider that monitors the Synapse access token and exchanges it for a C-Path DAP token.
 * The DAP token is automatically updated when the user logs in/out of Synapse.
 */
export function CPathContextProvider(props: CPathContextProviderProps) {
  const {
    children,
    workspacesApiBasePath = 'https://fair.c-path-dev.aridhia.io/api',
  } = props

  const { accessToken: synapseAccessToken } = useSynapseContext()
  const [dapToken, setDapToken] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const exchangeTokenForDapToken = useCallback(
    async (synapseToken: string): Promise<string | undefined> => {
      try {
        setIsLoading(true)
        setError(undefined)

        const authApi = new AuthenticationApi(
          new Configuration({
            basePath: workspacesApiBasePath,
            accessToken: synapseToken,
          }),
        )

        // Exchange the Synapse token for a DAP token
        const authResponse = await authApi.authenticatePost({
          authenticationRequest: {
            username: '',
            password: '',
          },
        })

        return authResponse.token
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('Failed to exchange token')
        setError(error)
        console.error('Failed to exchange Synapse token for DAP token:', error)
        return undefined
      } finally {
        setIsLoading(false)
      }
    },
    [workspacesApiBasePath],
  )

  const refreshDapToken = async () => {
    if (synapseAccessToken) {
      const newDapToken = await exchangeTokenForDapToken(synapseAccessToken)
      setDapToken(newDapToken)
    }
  }

  // Monitor Synapse access token changes
  useEffect(() => {
    if (synapseAccessToken) {
      // User is logged in to Synapse, exchange for DAP token
      exchangeTokenForDapToken(synapseAccessToken).then(
        (token: string | undefined) => {
          setDapToken(token)
        },
      )
    } else {
      // User is not logged in to Synapse, clear DAP token
      setDapToken(undefined)
      setError(undefined)
    }
  }, [synapseAccessToken, workspacesApiBasePath, exchangeTokenForDapToken])

  const contextValue: CPathContextType = {
    dapToken,
    isLoading,
    error,
    refreshDapToken,
  }

  return (
    <CPathContext.Provider value={contextValue}>
      {children}
    </CPathContext.Provider>
  )
}

/**
 * Hook to access the C-Path context containing the DAP token
 * @throws Error if used outside of CPathContextProvider
 */
export function useCPathContext(): CPathContextType {
  const context = useContext(CPathContext)
  if (!context) {
    throw new Error(
      'useCPathContext must be used within a CPathContextProvider',
    )
  }
  return context
}

/**
 * Hook to access the C-Path context, returning undefined if not within a provider.
 * Useful for optional C-Path integration.
 */
export function useCPathContextOptional(): CPathContextType | undefined {
  return useContext(CPathContext)
}
