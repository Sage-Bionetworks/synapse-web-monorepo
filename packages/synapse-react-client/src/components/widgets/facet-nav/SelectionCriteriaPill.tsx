import { Close } from '@mui/icons-material'
import { Tooltip } from '@mui/material'

export type SelectionCriteriaPillProps = {
  readonly key: string
  readonly innerText: string
  readonly tooltipText: string
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
  const { innerText, tooltipText, onRemoveFilter, isLocked } = props

  return (
    <Tooltip title={tooltipText} placement={'top'}>
      <div
        className={`SelectionCriteriaPill${
          isLocked ? ' SelectionCriteriaPill--locked' : ''
        }`}
      >
        <span>{innerText}</span>
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
    </Tooltip>
  )
}

export default SelectionCriteriaPill
