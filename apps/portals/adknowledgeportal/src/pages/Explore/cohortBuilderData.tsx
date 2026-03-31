import { filesViewQueryWrapperPlotNavProps } from '@/config/synapseConfigs/cohortbuilder'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreCohortBuilderData() {
  return <QueryWrapperPlotNav {...filesViewQueryWrapperPlotNavProps} />
}

export default ExploreCohortBuilderData
