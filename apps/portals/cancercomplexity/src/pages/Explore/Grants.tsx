import { grantQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreGrants() {
  return <QueryWrapperPlotNav {...grantQueryWrapperPlotNavProps} />
}
export default ExploreGrants
