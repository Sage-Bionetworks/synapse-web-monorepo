import { useQuery } from '@tanstack/react-query'
import { SynapseClient, useSynapseContext } from 'synapse-react-client'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'

type UseHasQueryResultsProps = {
  sql: string
  searchParams?: Record<string, string>
  sqlOperator?: ColumnMultiValueFunction
}

/**
 * Hook that returns true if a query would return any results, false otherwise.
 * Useful for conditionally rendering sections based on data availability.
 */
export function useHasQueryResults({
  sql,
  searchParams,
  sqlOperator,
}: UseHasQueryResultsProps) {
  const { accessToken } = useSynapseContext()

  return useQuery({
    queryKey: ['hasQueryResults', sql, searchParams, sqlOperator],
    queryFn: async () => {
      if (!accessToken) return false

      try {
        const query = {
          sql,
          additionalFilters: getAdditionalFilters(searchParams, sqlOperator),
          offset: 0,
          limit: 1, // Just check if any results exist
        }

        const entityId = parseEntityIdFromSqlStatement(sql)
        const queryRequest = {
          partMask: 65, // BUNDLE_MASK_QUERY_COUNT
          entityId,
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
          query,
        }

        const result = await SynapseClient.getQueryTableResults(
          queryRequest,
          accessToken,
        )
        return (result?.queryCount || 0) > 0
      } catch (error) {
        console.error('Error checking query results:', error)
        return false
      }
    },
    enabled: !!accessToken && !!sql,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  })
}
