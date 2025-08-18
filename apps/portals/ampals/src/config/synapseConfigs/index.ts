import { datasetQueryWrapperPlotNavProps } from './datasets'
import { filesQueryWrapperPlotNavProps } from './data'
import { programsCardContainerLogicProps } from './programs'
import { datasetCollectionsCardContainerLogicProps } from './datasetcollections'
export {
  datasetQueryWrapperPlotNavProps,
  datasetCollectionsCardContainerLogicProps,
  programsCardContainerLogicProps,
}

export default {
  datasets: datasetQueryWrapperPlotNavProps,
  files: filesQueryWrapperPlotNavProps,
  collections: datasetCollectionsCardContainerLogicProps,
  programs: programsCardContainerLogicProps,
}
