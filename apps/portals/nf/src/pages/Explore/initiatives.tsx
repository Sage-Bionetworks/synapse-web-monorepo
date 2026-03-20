import initiatives from '@/config/synapseConfigs/initiatives'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [
    { title: `Explore Initiatives | ${import.meta.env.VITE_PORTAL_NAME}` },
  ]
}

function ExploreInitiatives() {
  return <QueryWrapperPlotNav {...initiatives} />
}

export default ExploreInitiatives
