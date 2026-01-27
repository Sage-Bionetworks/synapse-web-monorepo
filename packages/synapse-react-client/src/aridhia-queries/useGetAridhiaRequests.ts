import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { FairRequestsGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useAridhiaContextOptional } from '@/utils/context/AridhiaContext'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { createAridhiaApiConfiguration } from './aridhiaTokenExchange'

export const ARIDHIA_REQUESTS_QUERY_KEY = ['aridhia', 'requests'] as const

/**
 * Hook to fetch data access requests from Aridhia FAIR API
 * Exchanges the Synapse access token for an Aridhia token on each request
 */
export function useGetAridhiaRequests(
  options?: Partial<
    UseQueryOptions<
      FairRequestsGet200Response,
      Error,
      FairRequestsGet200Response
    >
  >,
) {
  const aridhiaContext = useAridhiaContextOptional()
  const { accessToken: synapseAccessToken } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: ARIDHIA_REQUESTS_QUERY_KEY,
    queryFn: async () => {
      if (!synapseAccessToken) {
        throw new Error('Synapse access token is not available')
      }

      if (!aridhiaContext) {
        throw new Error(
          'AridhiaContext is not available. Make sure to wrap your component with AridhiaContextProvider',
        )
      }

      // Exchange Synapse token for Aridhia token and create API configuration
      // All FAIR API calls go through the gateway with /fair prefix
      const configuration = await createAridhiaApiConfiguration(
        synapseAccessToken,
        aridhiaContext.apiBasePath,
        aridhiaContext.authenticationRequest,
      )

      const requestsApi = new RequestsApi(configuration)
      return await requestsApi.fairRequestsGet()
    },
    enabled:
      options?.enabled !== undefined
        ? options.enabled
        : !!synapseAccessToken && !!aridhiaContext,
  })
}
