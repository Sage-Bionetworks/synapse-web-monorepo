import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '../../../synapseTypes/SubmissionInfo'

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
