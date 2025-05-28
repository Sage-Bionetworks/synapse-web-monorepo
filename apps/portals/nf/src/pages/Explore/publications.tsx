import publications from '@/config/synapseConfigs/publications'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

const ExplorePublications = () => {
  return <QueryWrapperPlotNav {...publications} />
}

export default ExplorePublications
