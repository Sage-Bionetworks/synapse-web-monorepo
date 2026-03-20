import filesPlotNavProps from '@/config/synapseConfigs/files'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: `Explore Files | ${import.meta.env.VITE_PORTAL_NAME}` }]
}

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesPlotNavProps} />
}

export default ExploreFiles
