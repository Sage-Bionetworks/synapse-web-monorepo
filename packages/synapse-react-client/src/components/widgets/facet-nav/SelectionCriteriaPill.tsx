import { Close } from '@mui/icons-material'
import { ElementWithTooltip } from '../ElementWithTooltip'

export type SelectionCriteriaPillProps = {
  readonly key: string
  readonly innerText: string
  readonly tooltipText: string
  readonly onRemoveFilter: () => void
}

/**
 * Renders a pill or chicklet to represent a Synapse Table Query filter/selection criterion.
 * @param props
 * @constructor
 */
function SelectionCriteriaPill(props: SelectionCriteriaPillProps) {
  const { innerText, tooltipText, onRemoveFilter } = props

  return (
    <ElementWithTooltip tooltipText={tooltipText} callbackFn={() => {}}>
      <div className="SelectionCriteriaPill">
        <span>{innerText}</span>
        <button
          onClick={onRemoveFilter}
          className="SelectionCriteriaPill__btnRemove"
          title="deselect"
        >
          <Close />
        </button>
      </div>
    </ElementWithTooltip>
  )
}

export default SelectionCriteriaPill
