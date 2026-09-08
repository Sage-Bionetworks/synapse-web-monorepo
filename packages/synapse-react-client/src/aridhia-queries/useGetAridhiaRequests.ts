import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FairRequestsGet200Response } from '@sage-bionetworks/aridhia-client/generated/models'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/**
 * Hook to fetch data access requests from the C-Path FAIR API.
 * Exchanges the Synapse access token for an Aridhia token on each request (tokens are
 * single-use — see `aridhiaTokenExchange.ts`).
 */
export function useGetAridhiaRequests(
  options?: Partial<
    UseQueryOptions<
      FairRequestsGet200Response,
      AridhiaError,
      FairRequestsGet200Response
    >
  >,
): UseQueryResult<FairRequestsGet200Response, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairRequestsGet200Response>(
    keyFactory.requests(),
    async configuration => {
      const requestsApi = new RequestsApi(configuration)
      return await requestsApi.fairRequestsGet({
        page: 1,
        pageSize: 100,
        orderBy: 'updated_at desc',
      })
    },
    options,
  )
}
