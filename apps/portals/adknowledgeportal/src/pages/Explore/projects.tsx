import { projectsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/projects'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreProjects() {
  return <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />
}

export default ExploreProjects
