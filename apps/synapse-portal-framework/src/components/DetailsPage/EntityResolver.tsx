import { Skeleton } from '@mui/material'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { SynapseQueries } from 'synapse-react-client'

export function EntityResolver(props: {
  entityId: string
  children: (entityHeader: EntityHeader) => React.ReactNode
}) {
  const { data: entityHeader, isLoading } = SynapseQueries.useGetEntityHeader(
    props.entityId,
  )
  if (isLoading) {
    return <Skeleton width={300} />
  }
  if (!entityHeader) {
    // TODO: Error handling
    return <></>
  }
  return props.children(entityHeader)
}
