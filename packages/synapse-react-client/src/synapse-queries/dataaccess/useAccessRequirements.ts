import {
  InfiniteData,
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
import { SynapseClientError, useSynapseContext } from '../../utils'
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
  options?: Partial<UseQueryOptions<T, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getAccessRequirementQueryKey(
      String(accessRequirementId),
    ),
    queryFn: () =>
      SynapseClient.getAccessRequirementById<T>(
        accessToken,
        accessRequirementId,
      ),
  })
}

export function useGetAccessRequirementsForEntity(
  entityId: string,
  options?: Partial<UseQueryOptions<AccessRequirement[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityAccessRequirementsQueryKey(entityId),
    queryFn: () =>
      SynapseClient.getAllAccessRequirements(accessToken, entityId),
  })
}

export function useGetAccessRequirementsForTeam(
  teamId: string,
  options?: Partial<UseQueryOptions<AccessRequirement[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getTeamAccessRequirementsQueryKey(teamId),
    queryFn: () => SynapseClient.getTeamAccessRequirements(accessToken, teamId),
  })
}

export function useGetAccessRequirementWikiPageKey(
  accessRequirementId: string,
  options?: Partial<UseQueryOptions<WikiPageKey, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getAccessRequirementWikiPageKey(accessRequirementId),

    queryFn: () =>
      SynapseClient.getWikiPageKeyForAccessRequirement(
        accessToken,
        accessRequirementId,
      ),
  })
}

export function useGetAccessRequirementACL(
  accessRequirementId: string,
  options?: Partial<
    UseQueryOptions<AccessControlList | null, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getAccessRequirementAclQueryKey(accessRequirementId),

    queryFn: () =>
      SynapseClient.getAccessRequirementAcl(accessToken, accessRequirementId),
  })
}

export function useSearchAccessRequirementsInfinite<
  TData = InfiniteData<AccessRequirementSearchResponse>,
>(
  params: Omit<AccessRequirementSearchRequest, 'nextPageToken'>,
  options?: UseInfiniteQueryOptions<
    AccessRequirementSearchResponse,
    SynapseClientError,
    TData,
    AccessRequirementSearchResponse,
    QueryKey,
    AccessRequirementSearchResponse['nextPageToken']
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    AccessRequirementSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    AccessRequirementSearchResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.searchAccessRequirementsQueryKey(params),
    queryFn: async context => {
      return await SynapseClient.searchAccessRequirements(accessToken, {
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useGetRestrictionInformation(
  request: RestrictionInformationRequest,
  options?: Partial<
    UseQueryOptions<RestrictionInformationResponse, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getAccessRequirementRestrictionInformationQueryKey(request),
    queryFn: () =>
      SynapseClient.getRestrictionInformation(request, accessToken),
  })
}

export function useCreateLockAccessRequirement(
  options?: Partial<
    UseMutationOptions<AccessRequirement, SynapseClientError, string>
  >,
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
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAccessRequirementQueryKey(),
      })
      // Invalidate all entity queries (not just the current entity because the new AR may apply to this entity's children)
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllEntityDataQueryKey(),
      })
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
): UseQueryOptions<T, SynapseClientError> {
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

  return useQuery({
    ...options,
    ...getAccessRequirementStatusQueryOptions<T>(
      keyFactory,
      accessToken!,
      accessRequirementId,
    ),
  })
}

export function useGetAccessRequirementStatuses<
  T extends
    | AccessRequirementStatus
    | ManagedACTAccessRequirementStatus = AccessRequirementStatus,
>(accessRequirementIds: string[]) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQueries({
    queries: accessRequirementIds.map(id =>
      getAccessRequirementStatusQueryOptions<T>(keyFactory, accessToken!, id),
    ),
  })
}

export function useSortAccessRequirementIdsByCompletion(
  accessRequirementIds: string[],
  options?: Partial<UseQueryOptions<string[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getSortedAccessRequirementsAndStatusQueryKey(
        accessRequirementIds,
      ),

    queryFn: () =>
      sortAccessRequirementsByCompletion(accessToken, accessRequirementIds),
  })
}

export function useGetResearchProject(
  accessRequirementId: string,
  options?: Partial<UseQueryOptions<ResearchProject, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getAccessRequirementResearchProjectQueryKey(
        accessRequirementId,
      ),
    queryFn: () =>
      SynapseClient.getResearchProject(accessRequirementId, accessToken!),
  })
}

export function useUpdateResearchProject(
  options?: Partial<
    UseMutationOptions<ResearchProject, SynapseClientError, ResearchProject>
  >,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation<ResearchProject, SynapseClientError, ResearchProject>({
    ...options,
    mutationFn: (researchProject: ResearchProject) =>
      SynapseClient.updateResearchProject(researchProject, accessToken!),
    onSuccess: async (data, variables, ctx) => {
      // Invalidate the research project query
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAccessRequirementResearchProjectQueryKey(
          data.accessRequirementId,
        ),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useGetDataAccessRequestForUpdate(
  accessRequirementId: string,
  options?: Partial<UseQueryOptions<Request | Renewal, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey:
      keyFactory.getDataAccessRequestForUpdateQueryKey(accessRequirementId),

    queryFn: () =>
      SynapseClient.getDataAccessRequestForUpdate(
        accessRequirementId,
        accessToken!,
      ),
  })
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

  return useMutation<Request | Renewal, SynapseClientError, Request | Renewal>({
    ...options,
    mutationFn: (requestInterface: Request | Renewal) =>
      SynapseClient.updateDataAccessRequest(requestInterface, accessToken!),
    onSuccess: async (data, variables, ctx) => {
      // Invalidate the data access request query
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getDataAccessRequestForUpdateQueryKey(
          data.accessRequirementId,
        ),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
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
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.createAccessApproval(accessToken, request),
    onSuccess: async (data, variables, ctx) => {
      // Invalidate query for AR status
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAccessRequirementStatusQueryKey(
          String(variables.requirementId),
        ),
      })
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
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.cancelDataAccessRequest(request.submissionId, accessToken!),
    onSuccess: async (data, variables, ctx) => {
      // Invalidate query for AR status
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAccessRequirementStatusQueryKey(
          String(variables.accessRequirementId),
        ),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}
