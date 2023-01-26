import { Table } from './Table'

export const TABLE_ENTITY_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.TableEntity'
export type TABLE_ENTITY_CONCRETE_TYPE = typeof TABLE_ENTITY_CONCRETE_TYPE_VALUE

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableEntity.html
export interface TableEntity extends Table {
  concreteType: TABLE_ENTITY_CONCRETE_TYPE
}
