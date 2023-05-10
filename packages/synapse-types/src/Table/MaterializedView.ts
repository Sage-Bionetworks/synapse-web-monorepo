import { Table } from './Table'

export const MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.MaterializedView'
export type MATERIALIZED_VIEW_CONCRETE_TYPE =
  typeof MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE

export interface MaterializedView extends Table {
  concreteType: MATERIALIZED_VIEW_CONCRETE_TYPE
  definingSQL: string
}
