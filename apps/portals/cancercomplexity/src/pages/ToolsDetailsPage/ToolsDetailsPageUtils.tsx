import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions'
import { metricsConfigSql, toolkitSql } from '@/config/resources'
import { getAdditionalFilters } from 'synapse-react-client/utils/functions'
import {
  getMetricConfig,
  MetricsConfig,
  SustainabilityScorecardBaseProps,
} from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardUtils'
import {
  SustainabilityScorecardProps,
  SustainabilityScorecardSummaryProps,
} from 'synapse-react-client/components/SustainabilityScorecard'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH } from '@/config/routeConstants'
import { Link } from '@mui/material'

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
 * @returns Props used by SustainabilityScorecard or SustainabilityScorecardSummary and loading state.
 */
export function useSustainabilityScorecardProps(toolName: string) {
  const query = getToolkitQueryBundleRequest(toolName)
  const metricTextsQuery = getMetricQueryBundleRequest(metricsConfigSql)
  const { data: metricBundle, isLoading } =
    useGetQueryResultBundle(metricTextsQuery)

  const summaryConfig = getMetricConfig(metricBundle, 'summaryText')
  const scorecardConfig = getMetricConfig(metricBundle, 'tooltipText')

  const baseProps: SustainabilityScorecardBaseProps = {
    queryRequest: query,
    filterColumn: 'toolName',
    searchParamKey: 'toolName',
    scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
    metricsConfig: [],
  }

  const summaryProps: SustainabilityScorecardSummaryProps = {
    ...baseProps,
    metricsConfig: summaryConfig,
    description: (
      <p>
        The following metrics were used to evaluate this tool, by way of the
        <Link
          href="https://github.com/mc2-center/cckp-toolkit-workflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Cancer Complexity toolkit.
        </Link>
      </p>
    ),
  }

  const scorecardProps: SustainabilityScorecardProps = {
    ...baseProps,
    metricsConfig: scorecardConfig,
    sustainabilityReportLink:
      TOOLS_DETAILS_PAGE_SUSTAINABILITY_AND_REUSABILITY_TAB_PATH,
  }

  return {
    summaryProps,
    scorecardProps,
    isLoading,
  }
}
