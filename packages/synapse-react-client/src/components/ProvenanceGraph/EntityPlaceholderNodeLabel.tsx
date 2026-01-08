import React from 'react'
import { useMemo } from 'react'
import { Reference } from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'

/**
 * This node type is used if the user cannot access the entity for some reason
 */
export const EntityPlaceholderNodeLabel = (
  data: Reference,
): React.ReactNode => {
  const targetVersionNumberString = data.targetVersionNumber
    ? `.${data.targetVersionNumber}`
    : ''
  const entityVersionString = `${data.targetId}${targetVersionNumberString}`
  return useMemo(
    () => (
      <>
        <div>
          <IconSvg icon="fileOutlined" />
        </div>
        <span>{entityVersionString}</span>
      </>
    ),
    [entityVersionString],
  )
}
