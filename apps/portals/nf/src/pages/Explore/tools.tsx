import tools from '@/config/synapseConfigs/tools'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: 'Explore Tools | NF Data Portal' }]
}

function ExploreTools() {
  return <QueryWrapperPlotNav {...tools} />
}

export default ExploreTools
