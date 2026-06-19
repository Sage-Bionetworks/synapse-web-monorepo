import { Chip, Tooltip } from '@mui/material'
import { ReactNode } from 'react'

export type SelectionCriteriaPillProps = {
  readonly key: string
  readonly innerText: string
  readonly tooltipText: string
  /**
   * Optional custom node to render in place of the plain-text label (e.g. DUO
   * tags). The node is expected to be self-contained — carrying its own tooltip
   * and its own remove affordance — so the pill's tooltip, chrome, and remove
   * button are all suppressed when this is provided.
   */
  readonly renderedInnerText?: ReactNode
  readonly onRemoveFilter?: () => void
  /** When true, the pill is shown without a remove button */
  readonly isLocked?: boolean
}

// Neutral styling for plain-value pills, matching the (colored) DUO chips'
// shape and size so all active-filter pills are visually consistent. The delete
// icon inherits the text color and brightens on hover.
const neutralChipSx = {
  bgcolor: 'var(--synapse-secondary-action-color-alpha-10)',
  color: 'var(--synapse-text-color-dark)',
  '&:hover': { bgcolor: 'var(--synapse-secondary-action-color-alpha-20)' },
  '& .MuiChip-deleteIcon': { color: 'inherit', opacity: 0.7 },
  '& .MuiChip-deleteIcon:hover': { color: 'inherit', opacity: 1 },
}

/**
 * Renders a pill or chicklet to represent a Synapse Table Query filter/selection criterion.
 * @param props
 * @constructor
 */
function SelectionCriteriaPill(props: SelectionCriteriaPillProps) {
  const {
    innerText,
    tooltipText,
    renderedInnerText,
    onRemoveFilter,
    isLocked,
  } = props

  // A self-contained custom node (e.g. a DUO chip) is the whole pill: it carries
  // its own background, tooltip, and remove icon, so render it bare without the
  // pill chrome, tooltip, or separate remove button.
  if (renderedInnerText != null) {
    return (
      <span className="SelectionCriteriaPill SelectionCriteriaPill--custom">
        {renderedInnerText}
      </span>
    )
  }

  return (
    <Tooltip title={tooltipText} placement={'top'}>
      <Chip
        className="SelectionCriteriaPill"
        size="small"
        label={innerText}
        onDelete={!isLocked ? onRemoveFilter : undefined}
        sx={neutralChipSx}
      />
    </Tooltip>
  )
}

export default SelectionCriteriaPill
