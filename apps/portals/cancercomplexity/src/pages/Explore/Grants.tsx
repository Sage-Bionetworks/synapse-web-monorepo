import { grantQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreGrants() {
  return <QueryWrapperPlotNav {...grantQueryWrapperPlotNavProps} />
}
export default ExploreGrants
