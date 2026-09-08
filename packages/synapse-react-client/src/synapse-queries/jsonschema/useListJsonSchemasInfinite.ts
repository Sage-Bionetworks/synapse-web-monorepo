import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  ListJsonSchemaInfoResponse,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

/**
 * Lists the JSON Schemas that belong to a single Organization, one page at a time.
 * Disabled until an organizationName is provided.
 */
export function useListJsonSchemasInfinite<
  TData = InfiniteData<ListJsonSchemaInfoResponse>,
>(
  organizationName: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      ListJsonSchemaInfoResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListJsonSchemaInfoResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    ListJsonSchemaInfoResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListJsonSchemaInfoResponse['nextPageToken']
  >({
    ...options,
    enabled: !!organizationName && (options?.enabled ?? true),
    initialPageParam: undefined,
    queryKey: keyFactory.getListJsonSchemasQueryKey(organizationName),
    queryFn: async context =>
      synapseClient.jsonSchemaServicesClient.postRepoV1SchemaList({
        listJsonSchemaInfoRequest: {
          organizationName,
          nextPageToken: context.pageParam,
        },
      }),
    getNextPageParam: page => page.nextPageToken,
  })
}
