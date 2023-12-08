import React from 'react'
import { CellContext, HeaderContext } from '@tanstack/react-table'
import { Checkbox, Link } from '@mui/material'
import { EntityLink } from '../EntityLink'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { EntityHeaderOrDummy } from './EntityHeaderTable'
import { Typography } from '@mui/material'

export function EntityHeaderNameCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  const { row } = cell
  const { original } = row
  const { id, isDummy } = original
  return isDummy ? (
    <Link href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${id}`}>
      {id}
    </Link>
  ) : (
    <EntityLink entity={original} />
  )
}
export function EntityHeaderIDCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  return <Typography variant="body1">{cell.getContext().getValue()}</Typography>
}
export function EntityHeaderTypeCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  return (
    <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
      {cell.getContext().getValue()}
    </Typography>
  )
}
export function CheckBoxHeader(
  props: HeaderContext<EntityHeaderOrDummy, string | null>,
) {
  const { table } = props
  return (
    <Checkbox
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  )
}
export function CheckBoxCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
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
