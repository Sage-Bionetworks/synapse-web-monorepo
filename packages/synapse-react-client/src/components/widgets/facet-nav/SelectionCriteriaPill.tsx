import { ReactElement, ReactNode } from 'react'
import FacetValueChip from './FacetValueChip'

export type SelectionCriteriaPillProps = {
  readonly key: string
  /** The chip label (plain text, or structured content from `renderFacetValue`). */
  readonly innerText: ReactNode
  readonly tooltipText?: ReactNode
  /** Optional leading icon (e.g. for a DUO term). */
  readonly icon?: ReactElement
  readonly onRemoveFilter?: () => void
  /** When true, the pill is shown without a remove button */
  readonly isLocked?: boolean
}

/**
 * Renders a pill/chicklet representing a Synapse Table Query filter/selection
 * criterion. Delegates to the shared `FacetValueChip` so the chip, icon,
 * tooltip, and remove affordance are styled identically wherever facet values
 * appear.
 */
function SelectionCriteriaPill(props: SelectionCriteriaPillProps) {
  const { innerText, tooltipText, icon, onRemoveFilter, isLocked } = props
  return (
    <FacetValueChip
      className="SelectionCriteriaPill"
      label={innerText}
      icon={icon}
      tooltipTitle={tooltipText}
      onDelete={!isLocked ? onRemoveFilter : undefined}
    />
  )
}

export default SelectionCriteriaPill
