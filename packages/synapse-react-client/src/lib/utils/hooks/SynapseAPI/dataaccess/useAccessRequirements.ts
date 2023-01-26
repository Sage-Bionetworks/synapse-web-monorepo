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
import { entityQueryKeys } from '../entity/queryKeys'

const ACCESS_REQUIREMENT_QUERY_KEY = 'accessRequirement'

export function useGetAccessRequirements<T extends AccessRequirement>(
  accessRequirementId: string | number,
  options?: UseQueryOptions<T, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<T, SynapseClientError>(
    [ACCESS_REQUIREMENT_QUERY_KEY, accessRequirementId],
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
  const { accessToken } = useSynapseContext()
  return useQuery<WikiPageKey, SynapseClientError>(
    [ACCESS_REQUIREMENT_QUERY_KEY, accessRequirementId, 'wikiPageKey'],
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
  const { accessToken } = useSynapseContext()
  return useQuery<AccessControlList | null, SynapseClientError>(
    [ACCESS_REQUIREMENT_QUERY_KEY, accessRequirementId, 'acl'],
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
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<AccessRequirementSearchResponse, SynapseClientError>(
    [ACCESS_REQUIREMENT_QUERY_KEY, 'search', params],
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
  const { accessToken } = useSynapseContext()
  return useQuery<RestrictionInformationResponse, SynapseClientError>(
    [ACCESS_REQUIREMENT_QUERY_KEY, 'restrictionInformation', request],
    () => SynapseClient.getRestrictionInformation(request, accessToken),
    options,
  )
}

export function useCreateLockAccessRequirement(
  options?: UseMutationOptions<AccessRequirement, SynapseClientError, string>,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<AccessRequirement, SynapseClientError, string>({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.createLockAccessRequirement(entityId, accessToken),
    mutationKey: ['createLockAccessRequirement'],
    onSuccess: async (data, variables, ctx) => {
      // Invalidate all access requirement queries
      await queryClient.invalidateQueries([ACCESS_REQUIREMENT_QUERY_KEY])
      // Invalidate all entity queries (not just the current entity because the new AR may apply to this entity's children)
      await queryClient.invalidateQueries(entityQueryKeys.all)
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}
