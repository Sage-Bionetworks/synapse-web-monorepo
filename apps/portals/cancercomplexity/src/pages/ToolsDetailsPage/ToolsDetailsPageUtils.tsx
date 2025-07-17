import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions'
import { metricsConfigSql, toolkitSql } from '@/config/resources'
import { getAdditionalFilters } from 'synapse-react-client/utils/functions'
import {
  getMetricConfig,
  MetricsConfig,
} from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardUtils'
import { SustainabilityScorecardSummaryProps } from 'synapse-react-client/components/SustainabilityScorecard'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'

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

export function getMetricQueryBundleRequest(sql: string): QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(sql)

  return {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql,
    },
  }
}

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

/**
 * Builds the query config and metric text content needed for the sustainabilityScorecard component or sustainabilityScorecardSummary component.
 *
 * @param toolName - The name of the tool to filter by.
 * @param tooltipType - Controls which text to show depending on component ('summaryText' or 'tooltipText').
 * @returns Props used by SustainabilityScorecard or SustainabilityScorecardSummary and loading state.
 */
export function useSustainabilityScorecardData(
  toolName: string,
  tooltipType: 'tooltipText' | 'summaryText',
) {
  const query = getToolkitQueryBundleRequest(toolName)
  const metricTextsQuery = getMetricQueryBundleRequest(metricsConfigSql)
  const { data: metricBundle, isLoading } =
    useGetQueryResultBundle(metricTextsQuery)

  const metricsConfig = getMetricConfig(metricBundle, tooltipType)

  const props: SustainabilityScorecardSummaryProps = {
    queryRequest: query,
    filterColumn: 'toolName',
    searchParamKey: 'toolName',
    scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
    description: (
      <p>
        The following metrics were used to evaluate this tool, by way of the
        Cancer Complexity toolkit.
      </p>
    ),
    metricsConfig,
  }

  return { props, isLoading }
}
