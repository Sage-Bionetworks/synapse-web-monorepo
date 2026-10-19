import { datasetQueryWrapperPlotNavProps, datasetsSearch } from './datasets'
import { filesQueryWrapperPlotNavProps } from './data'
import {
  datasetCollectionsCardContainerLogicProps,
  datasetCollectionsSearch,
} from './datasetcollections'
export {
  datasetQueryWrapperPlotNavProps,
  datasetsSearch,
  datasetCollectionsCardContainerLogicProps,
}

export default {
  datasets: datasetQueryWrapperPlotNavProps,
  datasetsSearch,
  files: filesQueryWrapperPlotNavProps,
  collections: datasetCollectionsCardContainerLogicProps,
  collectionsSearch: datasetCollectionsSearch,
}
