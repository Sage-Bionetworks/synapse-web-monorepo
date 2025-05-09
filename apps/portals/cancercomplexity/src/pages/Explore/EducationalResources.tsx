import { educationQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreEducationalResources() {
  return <QueryWrapperPlotNav {...educationQueryWrapperPlotNavProps} />
}

export default ExploreEducationalResources
