import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
} from '@sage-bionetworks/synapse-types'

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
