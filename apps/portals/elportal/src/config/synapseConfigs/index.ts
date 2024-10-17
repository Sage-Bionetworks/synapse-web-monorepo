import {
  filesViewQueryWrapperPlotNavProps,
  individualsViewQueryWrapperPlotNavProps,
} from './cohortbuilder'
import peopleQueryWrapperPlotNavProps from './people'
import projectsQueryWrapperPlotNavProps from './projects'
import publications from './publications'
import studiesQueryWrapperPlotNavProps from './studies'

export {
  projectsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  publications,
  individualsViewQueryWrapperPlotNavProps,
  filesViewQueryWrapperPlotNavProps,
}

export default {
  projects: projectsQueryWrapperPlotNavProps,
  studies: studiesQueryWrapperPlotNavProps,
  people: peopleQueryWrapperPlotNavProps,
  publications,
  individualsView: individualsViewQueryWrapperPlotNavProps,
  filesView: filesViewQueryWrapperPlotNavProps,
}
