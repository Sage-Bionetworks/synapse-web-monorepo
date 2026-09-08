import { datasetsQueryWrapperPlotNavProps, datasetsSearch } from './datasets'
import { educationQueryWrapperPlotNavProps, educationSearch } from './education'
import { grantQueryWrapperPlotNavProps, grantsSearch } from './grants'
import { peopleQueryWrapperPlotNavProps, peopleSearch } from './people'
import {
  publicationsQueryWrapperPlotNavProps,
  publicationsSearch,
} from './publications'
import { toolsQueryWrapperPlotNavProps, toolsSearch } from './tools'

export {
  datasetsQueryWrapperPlotNavProps,
  datasetsSearch,
  grantQueryWrapperPlotNavProps,
  grantsSearch,
  publicationsQueryWrapperPlotNavProps,
  publicationsSearch,
  toolsQueryWrapperPlotNavProps,
  toolsSearch,
  peopleQueryWrapperPlotNavProps,
  peopleSearch,
  educationQueryWrapperPlotNavProps,
  educationSearch,
}

export default {
  datasets: datasetsQueryWrapperPlotNavProps,
  datasetsSearch,
  grants: grantQueryWrapperPlotNavProps,
  grantsSearch,
  publications: publicationsQueryWrapperPlotNavProps,
  publicationsSearch,
  tools: toolsQueryWrapperPlotNavProps,
  toolsSearch,
  people: peopleQueryWrapperPlotNavProps,
  peopleSearch,
  education: educationQueryWrapperPlotNavProps,
  educationSearch,
}
