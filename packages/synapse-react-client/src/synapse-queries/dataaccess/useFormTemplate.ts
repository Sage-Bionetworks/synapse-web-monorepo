/*
 * Hooks for authoring and retrieving FormTemplates, which define how a JSON Schema is rendered
 * to a requester as a multi-step form.
 */
import { useSynapseContext } from '@/utils'
import {
  FormTemplate,
  FormTemplateSearchRequest,
  FormTemplateSearchResponse,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  InfiniteData,
  QueryKey,
  skipToken,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueries,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { useMemo } from 'react'

/**
 * Retrieve the latest version of a FormTemplate by its ID. Disabled while templateId is undefined.
 * @see GET /repo/v1/accessRequirement/formTemplate/{templateId}
 */
export function useGetFormTemplate(
  templateId: string | undefined,
  options?: Partial<UseQueryOptions<FormTemplate, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getFormTemplateByIdQueryKey(templateId ?? ''),
    queryFn: templateId
      ? () =>
          synapseClient.accessRequirementServicesClient.getRepoV1AccessRequirementFormTemplateTemplateId(
            { templateId },
          )
      : skipToken,
  })
}

/**
 * Retrieve a specific version of a FormTemplate. Disabled while templateId or versionNumber is
 * undefined.
 * @see GET /repo/v1/accessRequirement/formTemplate/{templateId}/version/{versionNumber}
 */
export function useGetFormTemplateVersion(
  templateId: string | undefined,
  versionNumber: number | undefined,
  options?: Partial<UseQueryOptions<FormTemplate, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getFormTemplateVersionQueryKey(
      templateId ?? '',
      versionNumber ?? 0,
    ),
    queryFn:
      templateId != null && versionNumber != null
        ? () =>
            synapseClient.accessRequirementServicesClient.getRepoV1AccessRequirementFormTemplateTemplateIdVersionVersionNumber(
              { templateId, versionNumber },
            )
        : skipToken,
  })
}

/**
 * Retrieve every version of a FormTemplate. The API has no endpoint to list versions (PLFM-10045),
 * so this fetches the latest version and then each earlier version number in turn. `versions` is
 * ordered newest first and omits any version that has not loaded; `latestVersion` is always the
 * template's actual latest version. Disabled while templateId is undefined.
 */
export function useGetFormTemplateVersions(templateId: string | undefined) {
  const { keyFactory, synapseClient } = useSynapseContext()
  const { data: latestVersion, error: latestVersionError } =
    useGetFormTemplate(templateId)

  const earlierVersionNumbers = useMemo(() => {
    const earlierVersionCount = Math.max(
      (latestVersion?.versionNumber ?? 0) - 1,
      0,
    )
    return Array.from(
      { length: earlierVersionCount },
      (_, index) => earlierVersionCount - index,
    )
  }, [latestVersion?.versionNumber])

  return useQueries({
    queries: earlierVersionNumbers.map(versionNumber => ({
      queryKey: keyFactory.getFormTemplateVersionQueryKey(
        templateId ?? '',
        versionNumber,
      ),
      queryFn: () =>
        synapseClient.accessRequirementServicesClient.getRepoV1AccessRequirementFormTemplateTemplateIdVersionVersionNumber(
          { templateId: templateId!, versionNumber },
        ),
    })),
    combine: results => ({
      latestVersion,
      versions: [
        ...(latestVersion ? [latestVersion] : []),
        ...results.flatMap(result => (result.data ? [result.data] : [])),
      ],
      isLoading:
        templateId != null &&
        (latestVersion == null
          ? latestVersionError == null
          : results.some(result => result.isLoading)),
      error: latestVersionError ?? results.find(result => result.error)?.error,
    }),
  })
}

/**
 * Search FormTemplates by name (all pages, via useInfiniteQuery). Only the latest version of each
 * matching template is returned.
 * @see POST /repo/v1/accessRequirement/formTemplate/search
 */
export function useSearchFormTemplatesInfinite<
  TData = InfiniteData<FormTemplateSearchResponse>,
>(
  request: Omit<FormTemplateSearchRequest, 'nextPageToken'> = {},
  options?: Partial<
    UseInfiniteQueryOptions<
      FormTemplateSearchResponse,
      SynapseClientError,
      TData,
      QueryKey,
      FormTemplateSearchResponse['nextPageToken']
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useInfiniteQuery<
    FormTemplateSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    FormTemplateSearchResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.searchFormTemplatesQueryKey(request),
    queryFn: context =>
      synapseClient.accessRequirementServicesClient.postRepoV1AccessRequirementFormTemplateSearch(
        {
          formTemplateSearchRequest: {
            ...request,
            nextPageToken: context.pageParam,
          },
        },
      ),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

/**
 * Create a new FormTemplate. Creating a template issues its first version.
 * @see POST /repo/v1/accessRequirement/formTemplate
 */
export function useCreateFormTemplate(
  options?: Omit<
    UseMutationOptions<FormTemplate, SynapseClientError, FormTemplate>,
    'mutationFn'
  >,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<FormTemplate, SynapseClientError, FormTemplate>({
    ...options,
    mutationFn: formTemplate =>
      synapseClient.accessRequirementServicesClient.postRepoV1AccessRequirementFormTemplate(
        { formTemplate },
      ),
    onSuccess: async (createdTemplate, variables, ctx, ...rest) => {
      queryClient.setQueryData(
        keyFactory.getFormTemplateByIdQueryKey(createdTemplate.id!),
        createdTemplate,
      )
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getFormTemplateQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(createdTemplate, variables, ctx, ...rest)
      }
    },
  })
}

export type UpdateFormTemplateRequest = {
  templateId: string
  /**
   * The new version's content. Must carry the `etag` of the version this update was based on so
   * the server can reject the write if the template was concurrently modified.
   */
  formTemplate: FormTemplate
}

/**
 * Add a new version to an existing FormTemplate. The server uses the `etag` on `formTemplate` to
 * detect concurrent modification; if the template has since changed, the mutation's error will
 * reflect the conflict rather than silently overwriting the newer version.
 * @see POST /repo/v1/accessRequirement/formTemplate/{templateId}
 */
export function useUpdateFormTemplate(
  options?: Omit<
    UseMutationOptions<
      FormTemplate,
      SynapseClientError,
      UpdateFormTemplateRequest
    >,
    'mutationFn'
  >,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<
    FormTemplate,
    SynapseClientError,
    UpdateFormTemplateRequest
  >({
    ...options,
    mutationFn: ({ templateId, formTemplate }) =>
      synapseClient.accessRequirementServicesClient.postRepoV1AccessRequirementFormTemplateTemplateId(
        { templateId, formTemplate },
      ),
    onSuccess: async (updatedTemplate, variables, ctx, ...rest) => {
      queryClient.setQueryData(
        keyFactory.getFormTemplateByIdQueryKey(variables.templateId),
        updatedTemplate,
      )
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getFormTemplateQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedTemplate, variables, ctx, ...rest)
      }
    },
  })
}
