import { datasetCollectionsCardContainerLogicProps } from '@/config/synapseConfigs/datasetcollections'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

function ExploreCollections() {
  return (
    <div className={'CollectionList'}>
      <CardContainerLogic {...datasetCollectionsCardContainerLogicProps} />
    </div>
  )
}

export default ExploreCollections
