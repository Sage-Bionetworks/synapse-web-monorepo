import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'
import { filesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesQueryWrapperPlotNavProps} />
}

export default ExploreFiles
