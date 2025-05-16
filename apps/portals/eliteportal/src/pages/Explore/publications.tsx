import publicationsQueryWrapperPlotNavProps from '@/config/synapseConfigs/publications'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExplorePublications() {
  return <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />
}

export default ExplorePublications
