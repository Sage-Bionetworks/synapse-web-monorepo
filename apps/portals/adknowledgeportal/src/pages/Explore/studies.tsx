import { studiesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/studies'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
}

export default ExploreStudies
