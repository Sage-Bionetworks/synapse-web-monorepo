import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions'
import { toolkitSql } from '@/config/resources'
import { getAdditionalFilters } from 'synapse-react-client/utils/functions'
import { MetricsConfig } from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardUtils'

export const metricsConfig: MetricsConfig[] = [
  {
    key: 'CloneRepository',
    label: 'Repository',
    text: 'Some text for presence of a repository',
  },
  {
    key: 'CheckReadme',
    label: 'README',
    text: 'Some text for presence of a readme file',
  },
  {
    key: 'CheckDependencies',
    label: 'Dependencies',
    text: 'Some text for presence of dependencies',
  },
  {
    key: 'CheckTests',
    label: 'Tests',
    text: 'Some text for presence of tests',
  },
]

export function getToolkitQueryBundleRequest(
  toolName: string,
): QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(toolkitSql)

  const additionalFilters = getAdditionalFilters({ toolName })

  return {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: toolkitSql,
      additionalFilters,
    },
  }
}
