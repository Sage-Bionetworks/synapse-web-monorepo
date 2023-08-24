import React from 'react'
import { EntityLink } from '../../EntityLink'
import { useGetEntityHeaders } from '../../../synapse-queries'

export type EntityIdListProps = {
  entityIdList: string[]
}

function EntityIdList(props: EntityIdListProps) {
  const { entityIdList } = props

  const { data: entityHeaders } = useGetEntityHeaders(
    entityIdList.map(id => ({ targetId: id })),
    {},
  )

  return (
    <span>
      {entityHeaders?.results.map(header => (
        <p key={header.id}>
          <EntityLink entity={header} displayTextField={'name'} />
        </p>
      ))}
    </span>
  )
}

export default EntityIdList
