import { Checkbox } from '@mui/material'
import { CellContext } from '@tanstack/react-table'

export function EntityFinderCheckboxCell<
  T extends { entityId: string; isSelected: boolean; isDisabled?: boolean },
>(props: CellContext<T, any>) {
  const { row } = props
  const { entityId, isSelected, isDisabled } = row.original

  if (isDisabled) {
    return null
  }

  return (
    <Checkbox
      inputProps={{ 'aria-label': `Select ${entityId}` }}
      checked={isSelected}
      onChange={() => {
        // no-op
      }}
    />
  )
}
