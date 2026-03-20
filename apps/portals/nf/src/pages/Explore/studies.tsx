import studies from '@/config/synapseConfigs/studies'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: `Explore Studies | ${import.meta.env.VITE_PORTAL_NAME}` }]
}

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studies} />
}

export default ExploreStudies
