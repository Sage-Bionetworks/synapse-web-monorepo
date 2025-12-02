import { individualsViewQueryWrapperPlotNavProps } from '@/config/synapseConfigs/cohortbuilder'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreCohortBuilder() {
  return <QueryWrapperPlotNav {...individualsViewQueryWrapperPlotNavProps} />
}

export default ExploreCohortBuilder
