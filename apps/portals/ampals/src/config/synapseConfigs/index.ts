import { datasetQueryWrapperPlotNavProps, datasetsSearch } from './datasets'
import { filesQueryWrapperPlotNavProps } from './data'
import { programsCardContainerLogicProps, programsSearch } from './programs'
import {
  datasetCollectionsCardContainerLogicProps,
  datasetCollectionsSearch,
} from './datasetcollections'
export {
  datasetQueryWrapperPlotNavProps,
  datasetsSearch,
  datasetCollectionsCardContainerLogicProps,
  programsCardContainerLogicProps,
}

export default {
  datasets: datasetQueryWrapperPlotNavProps,
  datasetsSearch,
  files: filesQueryWrapperPlotNavProps,
  collections: datasetCollectionsCardContainerLogicProps,
  collectionsSearch: datasetCollectionsSearch,
  programs: programsCardContainerLogicProps,
  programsSearch,
}
