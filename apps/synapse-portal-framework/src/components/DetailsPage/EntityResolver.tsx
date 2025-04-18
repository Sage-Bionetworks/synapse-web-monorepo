import { Skeleton } from '@mui/material'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { ReactNode } from 'react'
import { useGetEntityHeader } from 'synapse-react-client/synapse-queries/entity/useGetEntityHeaders'

export function EntityResolver(props: {
  entityId: string
  children: (entityHeader: EntityHeader) => ReactNode
}) {
  const { data: entityHeader, isLoading } = useGetEntityHeader(props.entityId)
  if (isLoading) {
    return <Skeleton width={300} />
  }
  if (!entityHeader) {
    // TODO: Error handling
    return <></>
  }
  return props.children(entityHeader)
}
