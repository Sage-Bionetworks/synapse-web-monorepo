import studies from '@/config/synapseConfigs/studies'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studies} />
}

export default ExploreStudies
