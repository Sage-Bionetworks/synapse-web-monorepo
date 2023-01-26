import { ColumnModel } from './ColumnModel'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableBundle.html
export type TableBundle = {
  columnModels: ColumnModel[]
  maxRowsPerPage: number
}
