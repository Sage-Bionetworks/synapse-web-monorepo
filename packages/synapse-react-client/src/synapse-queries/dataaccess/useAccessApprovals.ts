import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
} from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export function useSearchAccessApprovalsInfinite(
  params: AccessApprovalSearchRequest,
  options?: UseInfiniteQueryOptions<
    AccessApprovalSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<AccessApprovalSearchResponse, SynapseClientError>(
    keyFactory.searchAccessApprovalsQueryKey(params),
    async context => {
      return await SynapseClient.searchAccessApprovals(
        {
          ...params,
          nextPageToken: context.pageParam,
        },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
