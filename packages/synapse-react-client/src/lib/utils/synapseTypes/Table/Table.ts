import { VIEW_CONCRETE_TYPE_VALUES } from '.'
import { VersionableEntity } from '../Entity/Entity'
import { MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE } from './MaterializedView'
import { TABLE_ENTITY_CONCRETE_TYPE_VALUE } from './TableEntity'

export const TABLE_CONCRETE_TYPE_VALUES = [
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  ...VIEW_CONCRETE_TYPE_VALUES,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
] as const

export type TABLE_CONCRETE_TYPE = typeof TABLE_CONCRETE_TYPE_VALUES[number]

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Table.html
export interface Table extends VersionableEntity {
  columnIds: string[]
  concreteType: TABLE_CONCRETE_TYPE
  isSearchEnabled: boolean
}
