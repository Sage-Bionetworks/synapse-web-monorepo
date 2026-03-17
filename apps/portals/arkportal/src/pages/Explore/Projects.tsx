import { projectsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/projects'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreProjects() {
  return <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />
}

export default ExploreProjects
