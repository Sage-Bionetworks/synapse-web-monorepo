import { toolkitSql } from '@/config/resources'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardSummary'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from 'synapse-react-client/utils/functions'

function ToolsDetailsPageSustainabilityAndReusabilityTab() {
  const { toolName } = useGetPortalComponentSearchParams()

  const entityId = parseEntityIdFromSqlStatement(toolkitSql)

  const additionalFilters = getAdditionalFilters({ toolName })

  const query: QueryBundleRequest = {
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

  const props: SustainabilityScorecardSummaryProps = {
    queryRequest: query,
    filterColumn: 'toolName',
    searchParamKey: 'toolName',
    scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
    text: (
      <p>
        The following metrics were used to evaluate this tool, by way of the
        Cancer Complexity toolkit.
      </p>
    ),
    metricsConfig: [
      {
        key: 'CloneRepository',
        label: 'Repository',
        text: 'Todo',
      },
      {
        key: 'CheckReadme',
        label: 'README',
        text: 'Todo',
      },
      {
        key: 'CheckDependencies',
        label: 'Dependencies',
        text: 'Todo',
      },
      {
        key: 'CheckTests',
        label: 'Tests',
        text: 'Todo',
      },
    ],
  }

  return <SustainabilityScorecardSummary {...props} />
}

export default ToolsDetailsPageSustainabilityAndReusabilityTab
