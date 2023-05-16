import { Table } from './Table'
import { TABLE_ENTITY_CONCRETE_TYPE } from './ConcreteType'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableEntity.html
export interface TableEntity extends Table {
  concreteType: TABLE_ENTITY_CONCRETE_TYPE
}
