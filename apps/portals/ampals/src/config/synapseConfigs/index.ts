import { datasetQueryWrapperPlotNavProps } from './datasets'
import { filesQueryWrapperPlotNavProps } from './data'
import { datasetCollectionsCardContainerLogicProps } from './datasetcollections'
import { programsCardContainerLogicProps } from './programs'

export {
  datasetQueryWrapperPlotNavProps,
  filesQueryWrapperPlotNavProps,
  datasetCollectionsCardContainerLogicProps,
  programsCardContainerLogicProps,
}

export default {
  datasets: datasetQueryWrapperPlotNavProps,
  files: filesQueryWrapperPlotNavProps,
  collections: datasetCollectionsCardContainerLogicProps,
  programs: programsCardContainerLogicProps,
}
