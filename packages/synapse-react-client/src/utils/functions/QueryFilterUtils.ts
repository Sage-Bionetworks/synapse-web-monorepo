import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'

export function getPrimaryKeyINFilter(
  primaryKeyColumnNames: string[],
  selectedRows: Row[],
  columnModels: ColumnModel[],
): QueryFilter {
  if (!primaryKeyColumnNames || primaryKeyColumnNames.length !== 1) {
    // If the key is undefined, then the user should have never been able to apply a filter
    // TODO: Handling a composite key would be tricky since the QueryFilter API currently only allows you to specify one column
    throw new Error('rowSelectionPrimaryKey must be defined and have length 1')
  }
  // Apply a filter that should only return the selected rows
  const primaryKeyColumnIndex = columnModels.findIndex(
    cm => cm.name === primaryKeyColumnNames[0],
  )
  const filter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: primaryKeyColumnNames[0],
    operator: ColumnSingleValueFilterOperator.IN,
    values: selectedRows.map(row => row.values[primaryKeyColumnIndex]!),
  }
  return filter
}
