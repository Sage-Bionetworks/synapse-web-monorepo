// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableUpdateTransactionRequest.html
// Update a table
export type TableUpdateTransactionRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest'
  entityId: string
  changes: AppendableRowSetRequest[] //List of changes that describes schema and/or row changes to a table.
  // createSnapshot?: boolean
  // snapshotOptions
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/AppendableRowSetRequest.html
export type AppendableRowSetRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.AppendableRowSetRequest'
  entityId: string
  toAppend: PartialRowSet
}

//http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/PartialRowSet.html
export type PartialRowSet = {
  concreteType: 'org.sagebionetworks.repo.model.table.PartialRowSet'
  tableId: string
  rows: PartialRow[]
}

//http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/PartialRow.html
export type PartialRow = {
  rowId: number
  values: KeyValuePair[]
  etag?: string
}

//The key is the columnId and value is the cell value
export type KeyValuePair = {
  key: string
  value: string
}
