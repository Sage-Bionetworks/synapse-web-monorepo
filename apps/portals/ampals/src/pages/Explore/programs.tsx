import { programsCardContainerLogicProps } from '@/config/synapseConfigs/programs'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

function ExplorePrograms() {
  return <CardContainerLogic {...programsCardContainerLogicProps} />
}

export default ExplorePrograms
