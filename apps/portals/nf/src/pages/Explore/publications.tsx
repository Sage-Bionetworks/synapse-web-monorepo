import React from 'react'
import publications from '@/config/synapseConfigs/publications'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [
    { title: `Explore Publications | ${import.meta.env.VITE_PORTAL_NAME}` },
  ]
}

const ExplorePublications = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...publications} />
}

export default ExplorePublications
