import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Checkbox, Link, Typography } from '@mui/material'
import { CellContext, HeaderContext } from '@tanstack/react-table'
import { EntityLink } from '../EntityLink'
import { EntityHeaderOrDummy } from './EntityHeaderTable'

export function EntityHeaderNameCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  'use no memo' // opt out of react compiler
  const { cell } = props
  const { row } = cell
  const { original } = row
  const { id, isDummy } = original
  return isDummy ? (
    <Link href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${id}`}>{id}</Link>
  ) : (
    <EntityLink entity={original} />
  )
}
export function EntityHeaderIDCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  'use no memo' // opt out of react compiler
  const { cell } = props
  return <Typography variant="body1">{cell.getContext().getValue()}</Typography>
}
export function EntityHeaderTypeCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  'use no memo' // opt out of react compiler
  const { cell } = props
  return (
    <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
      {cell.getContext().getValue()}
    </Typography>
  )
}
export function CheckBoxHeader<TData = never, TValue = never>(
  props: HeaderContext<TData, TValue>,
) {
  'use no memo' // opt out of react compiler
  const { table } = props
  return (
    <Checkbox
      inputProps={{
        'aria-label': 'Select All',
      }}
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  )
}
export function CheckBoxCell<TData = never, TValue = never>(
  props: CellContext<TData, TValue>,
) {
  'use no memo' // opt out of react compiler
  const { row } = props
  return (
    <Checkbox
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      indeterminate={row.getIsSomeSelected()}
      onClick={row.getToggleSelectedHandler()}
    />
  )
}
