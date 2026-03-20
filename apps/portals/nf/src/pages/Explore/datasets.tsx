import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: `Explore Datasets | ${import.meta.env.VITE_PORTAL_NAME}` }]
}

const ExploreDatasets = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
