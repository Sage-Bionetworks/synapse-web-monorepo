import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthenticationApi } from '@sage-bionetworks/aridhia-client/generated/apis/AuthenticationApi'
import { AuthenticationRequest } from '@sage-bionetworks/aridhia-client/generated/models/AuthenticationRequest'
import { AuthenticationResponse } from '@sage-bionetworks/aridhia-client/generated/models/AuthenticationResponse'
import { Configuration } from '@sage-bionetworks/aridhia-client/generated/runtime'
import { useSynapseContext } from './SynapseContext'

export type AridhiaContextType = {
  /**
   * The Aridhia access token obtained by exchanging the Synapse access token.
   * Will be undefined if the user is not logged in to Synapse or if the exchange fails.
   */
  accessToken: string | undefined
  /**
   * The full authentication response from Aridhia, including token expiration info
   */
  authResponse: AuthenticationResponse | undefined
  /**
   * Whether the token exchange is currently in progress
   */
  isLoading: boolean
  /**
   * Error that occurred during token exchange, if any
   */
  error: Error | undefined
  /**
   * Manually refresh the Aridhia access token by re-exchanging the current Synapse token
   */
  refreshAccessToken: () => Promise<void>
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
 * Context provider that monitors the Synapse access token and exchanges it for an Aridhia access token.
 * The Aridhia access token is automatically updated when the user logs in/out of Synapse.
 */
export function AridhiaContextProvider(props: AridhiaContextProviderProps) {
  const {
    children,
    apiBasePath = 'https://gateway.westus2.c-path-dev.aridhia.io',
    authenticationRequest,
  } = props

  const { accessToken: synapseAccessToken } = useSynapseContext()
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
  const [authResponse, setAuthResponse] = useState<
    AuthenticationResponse | undefined
  >(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const exchangeTokenForAridhiaToken = useCallback(
    async (
      synapseToken: string,
    ): Promise<AuthenticationResponse | undefined> => {
      try {
        setIsLoading(true)
        setError(undefined)

        const authApi = new AuthenticationApi(
          new Configuration({
            basePath: apiBasePath,
            accessToken: synapseToken,
          }),
        )

        // Exchange the Synapse token for an Aridhia access token
        const response = await authApi.authenticatePost({
          authenticationRequest: {
            ...authenticationRequest,
            subject_token: synapseToken,
          },
        })

        return response
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('Failed to exchange token')
        setError(error)
        console.error(
          'Failed to exchange Synapse token for Aridhia access token:',
          error,
        )
        return undefined
      } finally {
        setIsLoading(false)
      }
    },
    [apiBasePath, authenticationRequest],
  )

  const refreshAccessToken = async () => {
    if (synapseAccessToken) {
      const response = await exchangeTokenForAridhiaToken(synapseAccessToken)
      setAuthResponse(response)
      setAccessToken(response?.access_token)
    }
  }

  // Monitor Synapse access token changes
  useEffect(() => {
    if (synapseAccessToken) {
      // User is logged in to Synapse, exchange for Aridhia access token
      exchangeTokenForAridhiaToken(synapseAccessToken).then(
        (response: AuthenticationResponse | undefined) => {
          setAuthResponse(response)
          setAccessToken(response?.access_token)
        },
      )
    } else {
      // User is not logged in to Synapse, clear Aridhia access token
      setAccessToken(undefined)
      setAuthResponse(undefined)
      setError(undefined)
    }
  }, [synapseAccessToken, exchangeTokenForAridhiaToken])

  const contextValue: AridhiaContextType = {
    accessToken,
    authResponse,
    isLoading,
    error,
    refreshAccessToken,
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
