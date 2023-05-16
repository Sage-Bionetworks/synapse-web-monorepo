import { VIEW_CONCRETE_TYPE } from './ConcreteType'
import { Table } from './Table'

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/View.html

// The View interface only exists in
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface View extends Table {
  concreteType: VIEW_CONCRETE_TYPE
}
