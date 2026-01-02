import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Configuration } from '@sage-bionetworks/aridhia-client/generated/runtime'
import { RequestsGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useAridhiaContextOptional } from '@/utils/context/AridhiaContext'

export const ARIDHIA_REQUESTS_QUERY_KEY = ['aridhia', 'requests'] as const

/**
 * Hook to fetch data access requests from Aridhia FAIR API
 * Uses the Aridhia access token from AridhiaContext for authentication
 */
export function useGetAridhiaRequests(
  options?: Partial<
    UseQueryOptions<RequestsGet200Response, Error, RequestsGet200Response>
  >,
) {
  const aridhiaContext = useAridhiaContextOptional()
  const accessToken = aridhiaContext?.accessToken
  return useQuery({
    ...options,
    queryKey: ARIDHIA_REQUESTS_QUERY_KEY,
    queryFn: async () => {
      if (!accessToken) {
        throw new Error('Aridhia access token is not available')
      }

      const requestsApi = new RequestsApi(
        new Configuration({
          basePath: 'https://fair.c-path-dev.aridhia.io/api',
          accessToken: accessToken,
        }),
      )

      return await requestsApi.requestsGet()
    },
    enabled: options?.enabled !== undefined ? options.enabled : !!accessToken,
  })
}
