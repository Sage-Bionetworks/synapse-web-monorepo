import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export function useGetApprovedSubmissionInfoInfinite(
  accessRequirementId: string,
  options?: UseInfiniteQueryOptions<
    SubmissionInfoPage,
    SynapseClientError,
    SubmissionInfoPage
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: SubmissionInfoPageRequest = {
    accessRequirementId,
  }
  return useInfiniteQuery<SubmissionInfoPage, SynapseClientError>(
    keyFactory.getApprovedSubmissionInfoQueryKey(request),
    async context => {
      return await SynapseClient.getApprovedSubmissionInfo(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
