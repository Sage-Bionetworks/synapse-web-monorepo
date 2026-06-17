import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import studiesQueryWrapperPlotNavProps from '@/config/synapseConfigs/studies'

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
}

export default ExploreStudies
