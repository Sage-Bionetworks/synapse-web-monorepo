import React from 'react'
import { Table } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { EntityTreeTableRow } from './EntityTreeTableRow'
import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'

type EntityTreeTableViewProps = {
  table: Table<EntityBundleRow>
}

export const EntityTreeTableView: React.FC<EntityTreeTableViewProps> = ({
  table,
}) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTanStackTable
        table={table}
        styledTableContainerProps={{
          className: 'entity-tree-table',
        }}
        fullWidth={true}
        slots={{
          Tr: EntityTreeTableRow,
        }}
      />
    </div>
  )
}
