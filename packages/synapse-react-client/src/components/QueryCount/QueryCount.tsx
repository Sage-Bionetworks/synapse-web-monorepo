import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { formatQueryCount } from '@/utils/functions/queryCountUtils'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import React from 'react'

export type QueryCountProps = {
  query: Query
  parens?: boolean
}

/**
 * Shows the total count of results for a table query.
 */
export function QueryCount(props: QueryCountProps): React.ReactNode {
  const { query, parens } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: query,
    entityId,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult } = useGetQueryResultBundle(request)

  const localCount = queryResult && formatQueryCount(queryResult)
  return <>{localCount && (parens ? `(${localCount})` : localCount)}</>
}
export default QueryCount
