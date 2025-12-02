import publications from '@/config/synapseConfigs/publications'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

const ExplorePublications = () => {
  return <QueryWrapperPlotNav {...publications} />
}

export default ExplorePublications
