import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import SustainabilityScorecardSummary from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecardSummary'
import { useSustainabilityScorecardProps } from './ToolsDetailsPageUtils'

function ToolsDetailsPageSustainabilityAndReusabilityTab() {
  const { toolName } = useGetPortalComponentSearchParams()

  const { props: summaryProps } = useSustainabilityScorecardProps(
    toolName,
    'summaryText',
  )

  return <SustainabilityScorecardSummary {...summaryProps} />
}

export default ToolsDetailsPageSustainabilityAndReusabilityTab
