import { contributorsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreContributors() {
  return <QueryWrapperPlotNav {...contributorsQueryWrapperPlotNavProps} />
}

export default ExploreContributors
