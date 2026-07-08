import { VIEW_CONCRETE_TYPE } from './ConcreteType'
import { Table } from './Table'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/View.html

export interface View extends Table {
  concreteType: VIEW_CONCRETE_TYPE
}
