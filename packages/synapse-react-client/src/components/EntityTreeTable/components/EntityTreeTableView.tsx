import React from 'react'
import { Table } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { EntityTreeTableRow } from './EntityTreeTableRow'
import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'

type EntityTreeTableViewProps = {
  table: Table<EntityBundleRow>
  className?: string
}

export const EntityTreeTableView: React.FC<EntityTreeTableViewProps> = ({
  table,
  className,
}) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTanStackTable
        table={table}
        styledTableContainerProps={{
          className,
        }}
        fullWidth={true}
        slots={{
          Tr: EntityTreeTableRow,
        }}
      />
    </div>
  )
}
