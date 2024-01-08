import {
  Evaluation,
  GetEvaluationParameters,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetEvaluationsInfinite(
  request: GetEvaluationParameters = {},
  options?: UseInfiniteQueryOptions<
    PaginatedResults<Evaluation>,
    SynapseClientError
  >,
) {
  const LIMIT = 20
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<Evaluation>, SynapseClientError>(
    keyFactory.getEvaluationsQueryKey(request),
    async context =>
      SynapseClient.getEvaluations(
        { ...request, limit: LIMIT, offset: context.pageParam },
        accessToken,
      ),

    {
      ...options,
      getNextPageParam: getNextPageParamForPaginatedResults,
    },
  )
}
