import hackathons from '@/config/synapseConfigs/hackathons'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: 'Explore Hackathon Projects | NF Data Portal' }]
}

function ExploreHackathons() {
  return <QueryWrapperPlotNav {...hackathons} />
}

export default ExploreHackathons
