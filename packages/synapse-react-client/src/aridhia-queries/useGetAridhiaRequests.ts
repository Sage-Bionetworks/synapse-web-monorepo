import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import {
  Configuration,
  FairRequestsGet200Response,
  RequestsApi,
} from '@sage-bionetworks/aridhia-client'
import { useAridhiaContextOptional } from '@/utils/context/AridhiaContext'

export const ARIDHIA_REQUESTS_QUERY_KEY = ['aridhia', 'requests'] as const

/**
 * Hook to fetch data access requests from Aridhia FAIR API
 * Uses the DAP token from AridhiaContext for authentication
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
  const dapToken = aridhiaContext?.dapToken

  return useQuery({
    ...options,
    queryKey: ARIDHIA_REQUESTS_QUERY_KEY,
    queryFn: async () => {
      if (!dapToken) {
        throw new Error('Aridhia DAP token is not available')
      }

      const requestsApi = new RequestsApi(
        new Configuration({
          basePath: 'https://fair.c-path-dev.aridhia.io/api',
          accessToken: dapToken,
        }),
      )

      return await requestsApi.fairRequestsGet()
    },
    enabled: options?.enabled !== undefined ? options.enabled : !!dapToken,
  })
}
