import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueries,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  AccessApproval,
  AccessControlList,
  AccessRequirement,
  AccessRequirementSearchRequest,
  AccessRequirementSearchResponse,
  AccessRequirementStatus,
  ACTSubmissionStatus,
  CreateAccessApprovalRequest,
  ManagedACTAccessRequirementStatus,
  Renewal,
  Request,
  ResearchProject,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { sortAccessRequirementsByCompletion } from '../../components/AccessRequirementList/AccessRequirementListUtils'
import { KeyFactory } from '../KeyFactory'

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

export function useGetAccessRequirementsForEntity(
  entityId: string,
  options?: UseQueryOptions<AccessRequirement[], SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<AccessRequirement[], SynapseClientError>(
    keyFactory.getEntityAccessRequirementsQueryKey(entityId),
    () => SynapseClient.getAllAccessRequirements(accessToken, entityId),
    options,
  )
}

export function useGetAccessRequirementsForTeam(
  teamId: string,
  options?: UseQueryOptions<AccessRequirement[], SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<AccessRequirement[], SynapseClientError>(
    keyFactory.getTeamAccessRequirementsQueryKey(teamId),
    () => SynapseClient.getTeamAccessRequirements(accessToken, teamId),
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
      return
    },
  })
}

function getAccessRequirementStatusQueryOptions<
  T extends
    | AccessRequirementStatus
    | ManagedACTAccessRequirementStatus = AccessRequirementStatus,
>(
  keyFactory: KeyFactory,
  accessToken: string,
  accessRequirementId: string,
): //UseQueryOptions<T, SynapseClientError> // for @tanstack/react-query v5
{ queryKey: QueryKey; queryFn: QueryFunction<T> } {
  return {
    queryKey:
      keyFactory.getAccessRequirementStatusQueryKey(accessRequirementId),
    queryFn: () =>
      SynapseClient.getAccessRequirementStatus<T>(
        accessToken,
        accessRequirementId,
      ),
  }
}

export function useGetAccessRequirementStatus<
  T extends
    | AccessRequirementStatus
    | ManagedACTAccessRequirementStatus = AccessRequirementStatus,
>(
  accessRequirementId: string,
  options?: Partial<UseQueryOptions<T, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryOptions = getAccessRequirementStatusQueryOptions<T>(
    keyFactory,
    accessToken!,
    accessRequirementId,
  )

  return useQuery(queryOptions.queryKey, queryOptions.queryFn, options)
}

export function useGetAccessRequirementStatuses<
  T extends
    | AccessRequirementStatus
    | ManagedACTAccessRequirementStatus = AccessRequirementStatus,
>(
  accessRequirementIds: string[],
  options?: UseQueryOptions<T, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQueries(
    accessRequirementIds.map(id => ({
      ...options,
      ...getAccessRequirementStatusQueryOptions<T>(
        keyFactory,
        accessToken!,
        id,
      ),
    })),
  )
}

export function useSortAccessRequirementIdsByCompletion(
  accessRequirementIds: string[],
  options?: UseQueryOptions<string[], SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<string[], SynapseClientError>(
    keyFactory.getSortedAccessRequirementsAndStatusQueryKey(
      accessRequirementIds,
    ),
    () => sortAccessRequirementsByCompletion(accessToken, accessRequirementIds),
    options,
  )
}

export function useGetResearchProject(
  accessRequirementId: string,
  options?: UseQueryOptions<ResearchProject, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<ResearchProject, SynapseClientError>(
    keyFactory.getAccessRequirementResearchProjectQueryKey(accessRequirementId),
    () => SynapseClient.getResearchProject(accessRequirementId, accessToken!),
    options,
  )
}

export function useUpdateResearchProject(
  options?: UseMutationOptions<
    ResearchProject,
    SynapseClientError,
    ResearchProject
  >,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<ResearchProject, SynapseClientError, ResearchProject>(
    (researchProject: ResearchProject) =>
      SynapseClient.updateResearchProject(researchProject, accessToken!),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        // Invalidate the research project query
        await queryClient.invalidateQueries(
          keyFactory.getAccessRequirementResearchProjectQueryKey(
            data.accessRequirementId,
          ),
        )
        if (options?.onSuccess) {
          return options.onSuccess(data, variables, ctx)
        }
        return
      },
    },
  )
}

export function useGetDataAccessRequestForUpdate(
  accessRequirementId: string,
  options?: UseQueryOptions<Request | Renewal, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<Request | Renewal, SynapseClientError>(
    keyFactory.getDataAccessRequestForUpdateQueryKey(accessRequirementId),
    () =>
      SynapseClient.getDataAccessRequestForUpdate(
        accessRequirementId,
        accessToken!,
      ),
    options,
  )
}

export function useUpdateDataAccessRequest(
  options?: UseMutationOptions<
    Request | Renewal,
    SynapseClientError,
    Request | Renewal
  >,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<Request | Renewal, SynapseClientError, Request | Renewal>(
    (requestInterface: Request | Renewal) =>
      SynapseClient.updateDataAccessRequest(requestInterface, accessToken!),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        // Invalidate the data access request query
        await queryClient.invalidateQueries(
          keyFactory.getDataAccessRequestForUpdateQueryKey(
            data.accessRequirementId,
          ),
        )
        if (options?.onSuccess) {
          return options.onSuccess(data, variables, ctx)
        }
        return
      },
    },
  )
}

export function useCreateAccessApproval(
  options?: UseMutationOptions<
    AccessApproval,
    SynapseClientError,
    CreateAccessApprovalRequest
  >,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<
    AccessApproval,
    SynapseClientError,
    CreateAccessApprovalRequest
  >(request => SynapseClient.createAccessApproval(accessToken, request), {
    ...options,
    onSuccess: async (data, variables, ctx) => {
      // Invalidate query for AR status
      await queryClient.invalidateQueries(
        keyFactory.getAccessRequirementStatusQueryKey(
          String(variables.requirementId),
        ),
      )
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useCancelDataAccessRequest(
  options?: UseMutationOptions<
    ACTSubmissionStatus,
    SynapseClientError,
    { submissionId: string; accessRequirementId: string }
  >,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<
    ACTSubmissionStatus,
    SynapseClientError,
    { submissionId: string; accessRequirementId: string }
  >(
    request =>
      SynapseClient.cancelDataAccessRequest(request.submissionId, accessToken!),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        // Invalidate query for AR status
        await queryClient.invalidateQueries(
          keyFactory.getAccessRequirementStatusQueryKey(
            String(variables.accessRequirementId),
          ),
        )
        if (options?.onSuccess) {
          return options.onSuccess(data, variables, ctx)
        }
        return
      },
    },
  )
}
