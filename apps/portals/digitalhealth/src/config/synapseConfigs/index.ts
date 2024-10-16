import dataQueryWrapperPlotNavProps from './data'
import { publicationsQueryWrapperPlotNavProps } from './publications'
import { studiesQueryWrapperPlotNavProps } from './studies'
import { toolsQueryWrapperPlotNavProps } from './tools'

export {
  publicationsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
  dataQueryWrapperPlotNavProps,
  toolsQueryWrapperPlotNavProps,
}

export default {
  studies: studiesQueryWrapperPlotNavProps,
  data: dataQueryWrapperPlotNavProps,
  tools: toolsQueryWrapperPlotNavProps,
  publications: publicationsQueryWrapperPlotNavProps,
}
