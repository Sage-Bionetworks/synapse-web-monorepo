import { contributorsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreContributors() {
  return <QueryWrapperPlotNav {...contributorsQueryWrapperPlotNavProps} />
}

export default ExploreContributors
