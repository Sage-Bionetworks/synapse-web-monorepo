import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import { datasetCollectionsCardContainerLogicProps } from '@/config/synapseConfigs/datasetcollections'

function ExploreCollections() {
  return (
    <div className={'CollectionList'}>
      <CardContainerLogic {...datasetCollectionsCardContainerLogicProps} />
    </div>
  )
}
export default ExploreCollections
