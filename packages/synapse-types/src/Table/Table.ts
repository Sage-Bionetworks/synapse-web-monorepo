import { VersionableEntity } from '../Entity/Entity'
import { TABLE_CONCRETE_TYPE } from './ConcreteType'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Table.html
export interface Table extends VersionableEntity {
  columnIds: string[]
  concreteType: TABLE_CONCRETE_TYPE
  isSearchEnabled: boolean
}
