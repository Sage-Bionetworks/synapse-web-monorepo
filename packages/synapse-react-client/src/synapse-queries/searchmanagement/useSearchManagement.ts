import { getAllOfNextPageTokenPaginatedService } from '@/synapse-client/SynapseClient'
import { allowNotFoundError } from '@/synapse-client/SynapseClientUtils'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BindSearchConfigToEntityRequest,
  SearchConfigBinding,
  SynapseClient,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import {
  SearchManagementResourceListRequest,
  SearchManagementResourceListResponse,
  SearchManagementResourceMap,
  SearchManagementResourceType,
} from './SearchManagementResourceType'

type ListPageRequest = SearchManagementResourceListRequest & {
  nextPageToken?: string
}

type SearchManagementResourceClient<T extends SearchManagementResourceType> = {
  get: (
    client: SynapseClient,
    id: string,
    init?: RequestInit,
  ) => Promise<SearchManagementResourceMap[T]>
  list: (
    client: SynapseClient,
    request: ListPageRequest,
    init?: RequestInit,
  ) => Promise<SearchManagementResourceListResponse<T>>
  create: (
    client: SynapseClient,
    resource: SearchManagementResourceMap[T],
  ) => Promise<SearchManagementResourceMap[T]>
  update: (
    client: SynapseClient,
    resource: SearchManagementResourceMap[T],
  ) => Promise<SearchManagementResourceMap[T]>
}

// Each resource type has an identical CRUD surface under differently-named generated operations.
const resourceClients: {
  [T in SearchManagementResourceType]: SearchManagementResourceClient<T>
} = {
  TEXT_ANALYZER: {
    get: (client, id, init) =>
      client.searchManagementServicesClient.getRepoV1SearchTextAnalyzerId(
        { id: Number(id) },
        init,
      ),
    list: (client, listTextAnalyzersRequest, init) =>
      client.searchManagementServicesClient.postRepoV1SearchTextAnalyzerList(
        { listTextAnalyzersRequest },
        init,
      ),
    create: (client, textAnalyzer) =>
      client.searchManagementServicesClient.postRepoV1SearchTextAnalyzer({
        textAnalyzer,
      }),
    update: (client, textAnalyzer) =>
      client.searchManagementServicesClient.putRepoV1SearchTextAnalyzerId({
        id: Number(textAnalyzer.id),
        textAnalyzer,
      }),
  },
  COLUMN_ANALYZER_OVERRIDE: {
    get: (client, columnAnalyzerOverrideId, init) =>
      client.searchManagementServicesClient.getRepoV1SearchColumnAnalyzerOverrideColumnAnalyzerOverrideId(
        { columnAnalyzerOverrideId },
        init,
      ),
    list: (client, listColumnAnalyzerOverridesRequest, init) =>
      client.searchManagementServicesClient.postRepoV1SearchColumnAnalyzerOverrideList(
        { listColumnAnalyzerOverridesRequest },
        init,
      ),
    create: (client, columnAnalyzerOverride) =>
      client.searchManagementServicesClient.postRepoV1SearchColumnAnalyzerOverride(
        { columnAnalyzerOverride },
      ),
    update: (client, columnAnalyzerOverride) =>
      client.searchManagementServicesClient.putRepoV1SearchColumnAnalyzerOverrideColumnAnalyzerOverrideId(
        {
          columnAnalyzerOverrideId: columnAnalyzerOverride.id!,
          columnAnalyzerOverride,
        },
      ),
  },
  SYNONYM_SET: {
    get: (client, synonymSetId, init) =>
      client.searchManagementServicesClient.getRepoV1SearchSynonymSetSynonymSetId(
        { synonymSetId },
        init,
      ),
    list: (client, listSynonymSetsRequest, init) =>
      client.searchManagementServicesClient.postRepoV1SearchSynonymSetList(
        { listSynonymSetsRequest },
        init,
      ),
    create: (client, synonymSet) =>
      client.searchManagementServicesClient.postRepoV1SearchSynonymSet({
        synonymSet,
      }),
    update: (client, synonymSet) =>
      client.searchManagementServicesClient.putRepoV1SearchSynonymSetSynonymSetId(
        { synonymSetId: synonymSet.id!, synonymSet },
      ),
  },
  SEARCH_PIPELINE: {
    get: (client, searchPipelineId, init) =>
      client.searchManagementServicesClient.getRepoV1SearchPipelineSearchPipelineId(
        { searchPipelineId },
        init,
      ),
    list: (client, listNamedSearchPipelinesRequest, init) =>
      client.searchManagementServicesClient.postRepoV1SearchPipelineList(
        { listNamedSearchPipelinesRequest },
        init,
      ),
    create: (client, namedSearchPipeline) =>
      client.searchManagementServicesClient.postRepoV1SearchPipeline({
        namedSearchPipeline,
      }),
    update: (client, namedSearchPipeline) =>
      client.searchManagementServicesClient.putRepoV1SearchPipelineSearchPipelineId(
        { searchPipelineId: namedSearchPipeline.id!, namedSearchPipeline },
      ),
  },
  SEARCH_CONFIGURATION: {
    get: (client, searchConfigurationId, init) =>
      client.searchManagementServicesClient.getRepoV1SearchConfigurationSearchConfigurationId(
        { searchConfigurationId },
        init,
      ),
    list: (client, listSearchConfigurationsRequest, init) =>
      client.searchManagementServicesClient.postRepoV1SearchConfigurationList(
        { listSearchConfigurationsRequest },
        init,
      ),
    create: (client, searchConfiguration) =>
      client.searchManagementServicesClient.postRepoV1SearchConfiguration({
        searchConfiguration,
      }),
    update: (client, searchConfiguration) =>
      client.searchManagementServicesClient.putRepoV1SearchConfigurationSearchConfigurationId(
        {
          searchConfigurationId: searchConfiguration.id!,
          searchConfiguration,
        },
      ),
  },
}

function getResourceClient<T extends SearchManagementResourceType>(
  resourceType: T,
): SearchManagementResourceClient<T> {
  return resourceClients[resourceType] as SearchManagementResourceClient<T>
}

export function useGetSearchManagementResource<
  T extends SearchManagementResourceType,
  TData = SearchManagementResourceMap[T],
>(
  resourceType: T,
  id: string,
  options?: Partial<
    UseQueryOptions<SearchManagementResourceMap[T], SynapseClientError, TData>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSearchManagementResourceQueryKey(resourceType, id),
    queryFn: ({ signal }) =>
      getResourceClient(resourceType).get(synapseClient, id, { signal }),
  })
}

/**
 * Lists resources of one type a page at a time, for "Show More" tables.
 */
export function useListSearchManagementResourcesInfinite<
  T extends SearchManagementResourceType,
  TData = InfiniteData<SearchManagementResourceListResponse<T>>,
>(
  resourceType: T,
  request: SearchManagementResourceListRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      SearchManagementResourceListResponse<T>,
      SynapseClientError,
      TData,
      QueryKey,
      string | undefined
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    SearchManagementResourceListResponse<T>,
    SynapseClientError,
    TData,
    QueryKey,
    string | undefined
  >({
    ...options,
    queryKey: keyFactory.getSearchManagementResourceListQueryKey(
      resourceType,
      request,
      true,
    ),
    queryFn: ({ pageParam, signal }) =>
      getResourceClient(resourceType).list(
        synapseClient,
        { ...request, nextPageToken: pageParam },
        { signal },
      ),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken ?? undefined,
  })
}

/**
 * Lists every resource of one type, fetching all pages in one query. Intended to power pickers.
 */
export function useListAllSearchManagementResources<
  T extends SearchManagementResourceType,
  TData = SearchManagementResourceMap[T][],
>(
  resourceType: T,
  request: SearchManagementResourceListRequest = {},
  options?: Partial<
    UseQueryOptions<SearchManagementResourceMap[T][], SynapseClientError, TData>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSearchManagementResourceListQueryKey(
      resourceType,
      request,
      false,
    ),
    queryFn: ({ signal }) =>
      getAllOfNextPageTokenPaginatedService<SearchManagementResourceMap[T]>(
        async nextPageToken => {
          const response = await getResourceClient(resourceType).list(
            synapseClient,
            { ...request, nextPageToken: nextPageToken ?? undefined },
            { signal },
          )
          return {
            page: response.results ?? [],
            nextPageToken: response.nextPageToken,
          }
        },
      ),
  })
}

export function useCreateSearchManagementResource<
  T extends SearchManagementResourceType,
>(
  resourceType: T,
  options?: Partial<
    UseMutationOptions<
      SearchManagementResourceMap[T],
      SynapseClientError,
      SearchManagementResourceMap[T]
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: resource =>
      getResourceClient(resourceType).create(synapseClient, resource),
    onSuccess: async (data, variables, ...rest) => {
      await queryClient.invalidateQueries({
        queryKey:
          keyFactory.getAllSearchManagementResourceListQueryKey(resourceType),
      })
      await options?.onSuccess?.(data, variables, ...rest)
    },
  })
}

export function useUpdateSearchManagementResource<
  T extends SearchManagementResourceType,
>(
  resourceType: T,
  options?: Partial<
    UseMutationOptions<
      SearchManagementResourceMap[T],
      SynapseClientError,
      SearchManagementResourceMap[T]
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: resource =>
      getResourceClient(resourceType).update(synapseClient, resource),
    onSuccess: async (data, variables, ...rest) => {
      queryClient.setQueryData(
        keyFactory.getSearchManagementResourceQueryKey(resourceType, data.id!),
        data,
      )
      await queryClient.invalidateQueries({
        queryKey:
          keyFactory.getAllSearchManagementResourceListQueryKey(resourceType),
      })
      await options?.onSuccess?.(data, variables, ...rest)
    },
  })
}

/**
 * Gets the SearchConfigBinding attached directly to an entity, or null if the entity has none.
 */
export function useGetSearchConfigBinding<TData = SearchConfigBinding | null>(
  entityId: string,
  options?: Partial<
    UseQueryOptions<SearchConfigBinding | null, SynapseClientError, TData>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSearchConfigBindingQueryKey(entityId),
    queryFn: ({ signal }) =>
      allowNotFoundError(() =>
        synapseClient.searchManagementServicesClient.getRepoV1EntityEntityIdSearchconfigBinding(
          { entityId },
          { signal },
        ),
      ),
  })
}

export function useBindSearchConfiguration(
  options?: Partial<
    UseMutationOptions<
      SearchConfigBinding,
      SynapseClientError,
      Required<BindSearchConfigToEntityRequest>
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: bindSearchConfigToEntityRequest =>
      synapseClient.searchManagementServicesClient.putRepoV1EntityEntityIdSearchconfigBinding(
        {
          entityId: bindSearchConfigToEntityRequest.entityId,
          bindSearchConfigToEntityRequest,
        },
      ),
    onSuccess: async (data, variables, ...rest) => {
      queryClient.setQueryData(
        keyFactory.getSearchConfigBindingQueryKey(variables.entityId),
        data,
      )
      await options?.onSuccess?.(data, variables, ...rest)
    },
  })
}

export function useDeleteSearchConfigBinding(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: entityId =>
      synapseClient.searchManagementServicesClient.deleteRepoV1EntityEntityIdSearchconfigBinding(
        { entityId },
      ),
    onSuccess: async (data, entityId, ...rest) => {
      queryClient.setQueryData(
        keyFactory.getSearchConfigBindingQueryKey(entityId),
        null,
      )
      await options?.onSuccess?.(data, entityId, ...rest)
    },
  })
}
