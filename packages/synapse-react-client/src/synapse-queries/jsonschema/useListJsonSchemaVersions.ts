import { getAllOfNextPageTokenPaginatedService } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  JsonSchemaVersionInfo,
  SynapseClient,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { queryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { KeyFactory } from '../KeyFactory'

/**
 * Shared query definition for {@link useListJsonSchemaVersions}, so it can also be fetched
 * imperatively (e.g. via `queryClient.fetchQuery`) using the exact same query key/queryFn --
 * see `useJsonSchemaSelection`'s auto-selection of the latest version.
 */
export function getJsonSchemaVersionsQuery(
  organizationName: string,
  schemaName: string,
  context: { synapseClient: SynapseClient; keyFactory: KeyFactory },
) {
  const { synapseClient, keyFactory } = context
  return queryOptions<JsonSchemaVersionInfo[], SynapseClientError>({
    queryKey: keyFactory.getListJsonSchemaVersionsQueryKey(
      organizationName,
      schemaName,
    ),
    queryFn: ({ signal }) =>
      getAllOfNextPageTokenPaginatedService<JsonSchemaVersionInfo>(
        async nextPageToken => {
          const response =
            await synapseClient.jsonSchemaServicesClient.postRepoV1SchemaVersionList(
              {
                listJsonSchemaVersionInfoRequest: {
                  organizationName,
                  schemaName,
                  nextPageToken: nextPageToken ?? undefined,
                },
              },
              { signal },
            )
          return {
            page: response.page ?? [],
            nextPageToken: response.nextPageToken,
          }
        },
      ),
  })
}

/**
 * Lists every version of a single JSON Schema (scoped to an Organization + schema name),
 * fetching every page in one query. Disabled until both organizationName and schemaName are
 * provided. Intended to be used lazily, e.g. only for a schema the user has selected.
 */
export function useListJsonSchemaVersions(
  organizationName: string,
  schemaName: string,
  options?: Partial<
    UseQueryOptions<JsonSchemaVersionInfo[], SynapseClientError>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery<JsonSchemaVersionInfo[], SynapseClientError>({
    ...getJsonSchemaVersionsQuery(organizationName, schemaName, {
      synapseClient,
      keyFactory,
    }),
    ...options,
    enabled: !!organizationName && !!schemaName && (options?.enabled ?? true),
  })
}
