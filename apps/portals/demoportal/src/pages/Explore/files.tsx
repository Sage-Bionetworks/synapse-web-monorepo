import { filesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/files'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesQueryWrapperPlotNavProps} />
}

export default ExploreFiles
