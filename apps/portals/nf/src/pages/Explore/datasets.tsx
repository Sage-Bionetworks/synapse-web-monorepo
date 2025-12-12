import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

const ExploreDatasets = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
