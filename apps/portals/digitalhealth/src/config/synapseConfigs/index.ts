import dataQueryWrapperPlotNavProps from './data'
import {
  publicationsQueryWrapperPlotNavProps,
  publicationsSearch,
} from './publications'
import { studiesQueryWrapperPlotNavProps, studiesSearch } from './studies'
import { toolsQueryWrapperPlotNavProps, toolsSearch } from './tools'

export {
  publicationsQueryWrapperPlotNavProps,
  publicationsSearch,
  studiesQueryWrapperPlotNavProps,
  studiesSearch,
  dataQueryWrapperPlotNavProps,
  toolsQueryWrapperPlotNavProps,
  toolsSearch,
}

export default {
  studies: studiesQueryWrapperPlotNavProps,
  data: dataQueryWrapperPlotNavProps,
  tools: toolsQueryWrapperPlotNavProps,
  publications: publicationsQueryWrapperPlotNavProps,
}
