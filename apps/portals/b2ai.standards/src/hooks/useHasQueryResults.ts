import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import {
  ColumnMultiValueFunction,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'

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
  const additionalFilters = getAdditionalFilters(searchParams, sqlOperator)
  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      additionalFilters,
      limit: 1, // Just check if any results exist
      offset: 0,
    },
  }

  console.log('Query bundle request:', queryBundleRequest)

  const { data, error, isLoading } = useGetQueryResultBundle(
    queryBundleRequest,
    {
      select: data => {
        const hasResults = (data?.queryCount || 0) > 0
        console.log('Query result:', {
          queryCount: data?.queryCount,
          hasResults,
        })
        return hasResults
      },
    },
  )

  console.log('Hook returning:', { data, error, isLoading })

  return { data, error, isLoading }
}
