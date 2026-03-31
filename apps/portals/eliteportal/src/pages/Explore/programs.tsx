import programsQueryWrapperPlotNavProps from '@/config/synapseConfigs/programs'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExplorePrograms() {
  return <QueryWrapperPlotNav {...programsQueryWrapperPlotNavProps} />
}

export default ExplorePrograms
