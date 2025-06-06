import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import {
  ROROrganization,
  RORSearchResult,
} from '../../ror-client/types/ROROrganization'
import { getOrganization, searchRegistry } from '../../ror-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'

export function useGetOrganization(
  rorId: string,
  options?: Partial<UseQueryOptions<ROROrganization, SynapseClientError>>,
) {
  return useQuery({
    staleTime: Infinity,
    ...options,
    queryKey: ['ror', 'organization', rorId],
    queryFn: () => getOrganization(rorId),
  })
}

export function useSearchRegistry(
  query: string,
  options?: Partial<UseQueryOptions<RORSearchResult, SynapseClientError>>,
) {
  const queryClient = useQueryClient()
  return useQuery({
    staleTime: Infinity,
    ...options,
    queryKey: ['ror', 'search', query],
    queryFn: async () => {
      const results = await searchRegistry(query)
      results.items.forEach(item => {
        let id = item.id
        if (id.startsWith('https://ror.org/')) {
          id = id.split('https://ror.org/')[1]
        }
        queryClient.setQueryData(['ror', 'organization', id], item)
      })
      return results
    },
  })
}
