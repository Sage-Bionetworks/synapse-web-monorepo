import { programsSql } from '@/config/resources'
import programs from '@/config/synapseConfigs/programs'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/index'

function ExplorePrograms() {
  return <CardContainerLogic cardConfiguration={programs} sql={programsSql} />
}

export default ExplorePrograms
