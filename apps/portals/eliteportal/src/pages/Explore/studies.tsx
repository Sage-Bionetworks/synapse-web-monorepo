import studiesQueryWrapperPlotNavProps from '@/config/synapseConfigs/studies'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function exploreStudies() {
  return <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
}

export default exploreStudies
