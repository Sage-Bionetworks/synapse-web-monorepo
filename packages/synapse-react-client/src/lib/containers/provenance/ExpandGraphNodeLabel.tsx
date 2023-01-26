import pluralize from 'pluralize'
import React, { useMemo } from 'react'
import { EntityHeader } from '../../utils/synapseTypes'

export type ExpandGraphNodeDataProps = {
  entityHeader: EntityHeader
  itemCount: number
}
export const ExpandGraphNodeLabel = (props: ExpandGraphNodeDataProps) => {
  const { itemCount } = props
  return useMemo(
    () => (
      <>
        <a>
          Show {itemCount} {pluralize('item', itemCount)}&hellip;
        </a>
      </>
    ),
    [itemCount],
  )
}
