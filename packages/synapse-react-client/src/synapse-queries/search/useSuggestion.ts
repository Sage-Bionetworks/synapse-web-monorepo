import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  SuggestionQuery,
  SuggestionResults,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useSuggestion(
  query: SuggestionQuery,
  options?: Partial<
    UseQueryOptions<SuggestionResults, SynapseClientError, SuggestionResults>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSuggestionQueryKey(query),
    queryFn: () =>
      synapseClient.searchServicesClient.postRepoV1Suggestion({
        suggestionQuery: query,
      }),
  })
}
