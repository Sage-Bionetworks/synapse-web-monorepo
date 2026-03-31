import {
  filesViewQueryWrapperPlotNavProps,
  individualsViewQueryWrapperPlotNavProps,
} from './cohortbuilder'
import peopleQueryWrapperPlotNavProps from './people'
import projectsQueryWrapperPlotNavProps from './projects'
import publications from './publications'
import studiesQueryWrapperPlotNavProps from './studies'
import { dataQueryWrapperPlotNavProps } from './data'

export {
  projectsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  publications,
  individualsViewQueryWrapperPlotNavProps,
  filesViewQueryWrapperPlotNavProps,
  dataQueryWrapperPlotNavProps,
}

export default {
  projects: projectsQueryWrapperPlotNavProps,
  studies: studiesQueryWrapperPlotNavProps,
  people: peopleQueryWrapperPlotNavProps,
  publications,
  individualsView: individualsViewQueryWrapperPlotNavProps,
  filesView: filesViewQueryWrapperPlotNavProps,
  data: dataQueryWrapperPlotNavProps,
}
