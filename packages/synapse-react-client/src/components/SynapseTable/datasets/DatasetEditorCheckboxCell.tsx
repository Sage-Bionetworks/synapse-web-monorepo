import { Checkbox } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { EntityIdAndVersionNumber } from '../../EntityFinder/details/view/table/TableCellTypes'

export function DatasetEditorCheckboxCell<
  T extends EntityIdAndVersionNumber & {
    isSelected: boolean
    isDisabled?: boolean
    setSelected: (newValue: boolean) => void
  },
>(props: CellContext<T, any>) {
  const { isSelected, isDisabled, setSelected, entityId } = props.row.original
  return (
    !isDisabled && (
      <Checkbox
        disabled={isDisabled}
        inputProps={{ 'aria-label': `Select ${entityId}` }}
        checked={isSelected}
        onChange={(_event, checked) => {
          setSelected(checked)
        }}
      />
    )
  )
}
