import React from 'react'
import { FacetColumnResult } from '@sage-bionetworks/synapse-types'
import IconSvg from '../../IconSvg/IconSvg'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'

export type FacetChipProps = {
  facet: FacetColumnResult
  isChecked: boolean
  onClick: () => void
}

export const FacetChip: React.FC<FacetChipProps> = ({
  facet,
  isChecked,
  onClick,
}) => {
  const { getColumnDisplayName } = useQueryVisualizationContext()
  return (
    <button className={`Chip ${isChecked ? 'Checked' : ''}`} onClick={onClick}>
      {getColumnDisplayName(facet.columnName)}
      <IconSvg
        icon={isChecked ? 'check' : 'add'}
        sx={{
          width: '14px',
          paddingLeft: '0.2rem',
        }}
      ></IconSvg>
    </button>
  )
}
