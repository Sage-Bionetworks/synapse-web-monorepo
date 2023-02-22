import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
  useQueryClient,
  useMutation,
  UseMutationOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  AccessControlList,
  AccessRequirement,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  WikiPageKey,
} from '../../../synapseTypes'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchResponse,
} from '../../../synapseTypes/AccessRequirement/AccessRequirementSearch'

export function useGetAccessRequirements<T extends AccessRequirement>(
  accessRequirementId: string | number,
  options?: UseQueryOptions<T, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<T, SynapseClientError>(
    keyFactory.getAccessRequirementQueryKey(String(accessRequirementId)),
    () =>
      SynapseClient.getAccessRequirementById<T>(
        accessToken,
        accessRequirementId,
      ),
    options,
  )
}

export function useGetAccessRequirementWikiPageKey(
  accessRequirementId: string,
  options?: UseQueryOptions<WikiPageKey, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<WikiPageKey, SynapseClientError>(
    keyFactory.getAccessRequirementWikiPageKey(accessRequirementId),
    () =>
      SynapseClient.getWikiPageKeyForAccessRequirement(
        accessToken,
        accessRequirementId,
      ),
    options,
  )
}

export function useGetAccessRequirementACL(
  accessRequirementId: string,
  options?: UseQueryOptions<AccessControlList | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<AccessControlList | null, SynapseClientError>(
    keyFactory.getAccessRequirementAclQueryKey(accessRequirementId),
    () =>
      SynapseClient.getAccessRequirementAcl(accessToken, accessRequirementId),
    options,
  )
}

export function useSearchAccessRequirementsInfinite(
  params: Omit<AccessRequirementSearchRequest, 'nextPageToken'>,
  options?: UseInfiniteQueryOptions<
    AccessRequirementSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<AccessRequirementSearchResponse, SynapseClientError>(
    keyFactory.searchAccessRequirementsQueryKey(params),
    async context => {
      return await SynapseClient.searchAccessRequirements(accessToken, {
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useGetRestrictionInformation(
  request: RestrictionInformationRequest,
  options?: UseQueryOptions<RestrictionInformationResponse, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<RestrictionInformationResponse, SynapseClientError>(
    keyFactory.getAccessRequirementRestrictionInformationQueryKey(request),
    () => SynapseClient.getRestrictionInformation(request, accessToken),
    options,
  )
}

export function useCreateLockAccessRequirement(
  options?: UseMutationOptions<AccessRequirement, SynapseClientError, string>,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<AccessRequirement, SynapseClientError, string>({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.createLockAccessRequirement(entityId, accessToken),
    mutationKey: ['createLockAccessRequirement'],
    onSuccess: async (data, variables, ctx) => {
      // Invalidate all access requirement queries
      await queryClient.invalidateQueries(
        keyFactory.getAccessRequirementQueryKey(),
      )
      // Invalidate all entity queries (not just the current entity because the new AR may apply to this entity's children)
      await queryClient.invalidateQueries(keyFactory.getAllEntityDataQueryKey())
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}
