import {
  filesViewQueryWrapperPlotNavProps,
  individualsViewQueryWrapperPlotNavProps,
} from './cohortbuilder'
import peopleQueryWrapperPlotNavProps, { peopleSearch } from './people'
import projectsQueryWrapperPlotNavProps, { projectsSearch } from './projects'
import publications, { publicationsSearch } from './publications'
import studiesQueryWrapperPlotNavProps, { studiesSearch } from './studies'
import { dataQueryWrapperPlotNavProps } from './data'
import { datasetQueryWrapperPlotNavProps } from './datasets'
import modelsQueryWrapperPlotNavProps from './models'

export {
  projectsQueryWrapperPlotNavProps,
  projectsSearch,
  studiesQueryWrapperPlotNavProps,
  studiesSearch,
  peopleQueryWrapperPlotNavProps,
  peopleSearch,
  publications,
  publicationsSearch,
  individualsViewQueryWrapperPlotNavProps,
  filesViewQueryWrapperPlotNavProps,
  dataQueryWrapperPlotNavProps,
  datasetQueryWrapperPlotNavProps,
  modelsQueryWrapperPlotNavProps,
}

export default {
  projects: projectsQueryWrapperPlotNavProps,
  projectsSearch,
  studies: studiesQueryWrapperPlotNavProps,
  studiesSearch,
  people: peopleQueryWrapperPlotNavProps,
  peopleSearch,
  publications,
  publicationsSearch,
  individualsView: individualsViewQueryWrapperPlotNavProps,
  filesView: filesViewQueryWrapperPlotNavProps,
  data: dataQueryWrapperPlotNavProps,
  datasets: datasetQueryWrapperPlotNavProps,
  models: modelsQueryWrapperPlotNavProps,
}
