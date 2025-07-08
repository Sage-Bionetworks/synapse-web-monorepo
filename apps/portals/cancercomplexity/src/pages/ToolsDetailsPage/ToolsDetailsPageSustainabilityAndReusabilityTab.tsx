import { toolkitSql } from '@/config/resources'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardSummary'

function ToolsDetailsPageSustainabilityAndReusabilityTab() {
  const props: SustainabilityScorecardSummaryProps = {
    sql: toolkitSql,
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
