import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import * as SynapseConstants from '../../utils/SynapseConstants'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'

export type QueryCountProps = {
  query: Query
  parens?: boolean
}

/**
 * Shows the total count of results for a table query.
 */
export function QueryCount(props: QueryCountProps) {
  const { query, parens } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: query,
    entityId,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult } = useGetQueryResultBundle(request)

  const localCount = queryResult?.queryCount?.toLocaleString()
  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
  return <>{localCount && (parens ? `(${localCount})` : localCount)}</>
}
export default QueryCount
