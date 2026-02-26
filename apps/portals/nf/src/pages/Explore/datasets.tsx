import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import type { MetaDescriptor } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export function meta(): MetaDescriptor[] {
  return [{ title: 'Explore Datasets | NF Data Portal' }]
}

const ExploreDatasets = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
