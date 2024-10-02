import { datasetsQueryWrapperPlotNavProps } from './datasets'
import { educationQueryWrapperPlotNavProps } from './education'
import { files } from './files'
import { grantQueryWrapperPlotNavProps } from './grants'
import { peopleQueryWrapperPlotNavProps } from './people'
import { projects } from './projects'
import { publicationsQueryWrapperPlotNavProps } from './publications'
import { toolsQueryWrapperPlotNavProps } from './tools'

export {
  files,
  datasetsQueryWrapperPlotNavProps,
  grantQueryWrapperPlotNavProps,
  publicationsQueryWrapperPlotNavProps,
  projects,
  toolsQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  educationQueryWrapperPlotNavProps,
}

export default {
  files,
  datasets: datasetsQueryWrapperPlotNavProps,
  grants: grantQueryWrapperPlotNavProps,
  publications: publicationsQueryWrapperPlotNavProps,
  projects,
  tools: toolsQueryWrapperPlotNavProps,
  people: peopleQueryWrapperPlotNavProps,
  education: educationQueryWrapperPlotNavProps,
}
