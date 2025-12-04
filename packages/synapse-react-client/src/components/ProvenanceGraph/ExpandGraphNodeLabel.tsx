import React from 'react'
import pluralize from 'pluralize'
import { useMemo } from 'react'
import { EntityHeader } from '@sage-bionetworks/synapse-types'

export type ExpandGraphNodeDataProps = {
  entityHeader: EntityHeader
  itemCount: number
}
export const ExpandGraphNodeLabel = (
  props: ExpandGraphNodeDataProps,
): React.ReactNode => {
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
