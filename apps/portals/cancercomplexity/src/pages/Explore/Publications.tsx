import { publicationsQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExplorePublications() {
  return <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />
}
export default ExplorePublications
