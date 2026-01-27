import { filesViewQueryWrapperPlotNavProps } from '@/config/synapseConfigs/cohortbuilder'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function exploreCohortBuilderData() {
  return <QueryWrapperPlotNav {...filesViewQueryWrapperPlotNavProps} />
}

export default exploreCohortBuilderData
