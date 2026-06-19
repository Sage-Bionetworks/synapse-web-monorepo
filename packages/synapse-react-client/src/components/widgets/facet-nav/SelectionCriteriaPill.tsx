import { Close } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { ReactNode } from 'react'

export type SelectionCriteriaPillProps = {
  readonly key: string
  readonly innerText: string
  readonly tooltipText: string
  /**
   * Optional custom node to render in place of the plain-text label (e.g. DUO
   * tags). The node is expected to carry its own tooltip, so the pill's own
   * tooltip is suppressed when this is provided.
   */
  readonly renderedInnerText?: ReactNode
  readonly onRemoveFilter?: () => void
  /** When true, the pill is shown without a remove button */
  readonly isLocked?: boolean
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

  const pill = (
    <div
      className={`SelectionCriteriaPill${
        isLocked ? ' SelectionCriteriaPill--locked' : ''
      }${renderedInnerText != null ? ' SelectionCriteriaPill--custom' : ''}`}
    >
      <span>{renderedInnerText ?? innerText}</span>
      {!isLocked && onRemoveFilter && (
        <button
          onClick={onRemoveFilter}
          className="SelectionCriteriaPill__btnRemove"
          title="deselect"
        >
          <Close />
        </button>
      )}
    </div>
  )

  // A custom rendered node provides its own tooltip; avoid nesting tooltips.
  if (renderedInnerText != null) {
    return pill
  }

  return (
    <Tooltip title={tooltipText} placement={'top'}>
      {pill}
    </Tooltip>
  )
}

export default SelectionCriteriaPill
