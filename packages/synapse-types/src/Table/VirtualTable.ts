import { Table } from './Table'

export const VIRTUAL_TABLE_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.VirtualTable'
export type VIRTUAL_TABLE_CONCRETE_TYPE =
  typeof VIRTUAL_TABLE_CONCRETE_TYPE_VALUE

/**
 * A virtual table is a type of table whose content is defined by a synapse SQL query. Its content is NOT persisted and
 * any query on a virtual table will run the defined SQL statement. The defining SQL of the virtual table CANNOT contain
 * JOIN clauses on multiple tables.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/VirtualTable.html
 */
export interface VirtualTable extends Table {
  concreteType: VIRTUAL_TABLE_CONCRETE_TYPE
  /* The synapse SQL statement that defines the data in the virtual table. The SQL CANNOT contain JOIN/UNION clauses on multiple tables. */
  definingSQL: string
}
