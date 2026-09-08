import metadataPlotNavProps from '@/config/synapseConfigs/metadata'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreMetadata() {
  return <QueryWrapperPlotNav {...metadataPlotNavProps} />
}

export default ExploreMetadata
