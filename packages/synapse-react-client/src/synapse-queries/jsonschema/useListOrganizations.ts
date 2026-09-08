import { getAllOfNextPageTokenPaginatedService } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  Organization,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Lists every JSON Schema Organization, fetching every page in one query. Intended to power an
 * Autocomplete's option list rather than a paginated "load more" UI.
 */
export function useListOrganizations(
  options?: Partial<UseQueryOptions<Organization[], SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery<Organization[], SynapseClientError>({
    ...options,
    queryKey: keyFactory.getListOrganizationsQueryKey(),
    queryFn: ({ signal }) =>
      getAllOfNextPageTokenPaginatedService<Organization>(
        async nextPageToken => {
          const response =
            await synapseClient.jsonSchemaServicesClient.postRepoV1SchemaOrganizationList(
              {
                listOrganizationsRequest: {
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
