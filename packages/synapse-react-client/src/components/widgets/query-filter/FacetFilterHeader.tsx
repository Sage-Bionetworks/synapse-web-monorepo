import * as React from 'react'
import IconPlus from '../../../assets/icons/IconPlus'
import IconMinus from '../../../assets/icons/IconMinus'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

export type FacetFilterHeaderProps = {
  label: string
  isCollapsed: boolean
  onClick: (newValue: boolean) => void
}

export const FacetFilterHeader: React.FunctionComponent<
  FacetFilterHeaderProps
> = ({ label, isCollapsed, onClick }: FacetFilterHeaderProps) => {
  const { getColumnDisplayName } = useQueryVisualizationContext()
  return (
    <div className="FacetFilterHeader">
      <label className="FacetFilterHeader__label">
        {getColumnDisplayName(label)}
      </label>
      <button
        className="FacetFilterHeader__collapseToggleBtn"
        onClick={() => onClick(!isCollapsed)}
      >
        {isCollapsed ? (
          <IconPlus className="icon-plus" title="Expand Menu" />
        ) : (
          <IconMinus className="icon-minus" title="Collapse Menu" />
        )}
      </button>
    </div>
  )
}
