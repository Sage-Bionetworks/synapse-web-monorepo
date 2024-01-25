// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableUpdateTransactionRequest.html
// Update a table
import { ColumnModel } from './ColumnModel'

export type TableUpdateTransactionRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest'
  entityId: string
  changes: TableUpdateRequest[] //List of changes that describes schema and/or row changes to a table.
  createSnapshot?: boolean
  snapshotOptions?: SnapshotRequest
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

export type TableSchemaChangeRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest'
  entityId: string
  /* List of changes that describes column additions, deletions, and updates */
  changes: ColumnChange[]
  /* Optional: Used to set the order of columns for this table. If this list is provided it must include the IDs of
     each column that will be in the schema after the changes of this request are applied. */
  orderedColumnIds: string[]
}

/**
 * Describes a change from one column to another.
 */
export type ColumnChange = {
  /* The ID of the old ColumnModel to be replaced with the new. Set to null to indicate a new column should be added without replacing an old column. */
  oldColumnId: string | null
  /* The ID of the new ColumnModel to replace the old. Set to null to indicate the old column should be removed without being replaced. */
  newColumnId: string | null
}

export type TableUpdateRequest =
  | TableSchemaChangeRequest
  | AppendableRowSetRequest
// | UploadToTableRequest
// | TableSearchChangeRequest

/**
 * Request to create a new snapshot of a table or view. The provided comment, label, and activity ID will be applied to
 * the current version thereby creating a snapshot and locking the current version. After the snapshot is created a new
 * version will be started with an 'in-progress' label.
 */
export type SnapshotRequest = {
  /* Optional. If createNewSnapshot=true, the comment to be applied to the snapshot version. Null by default */
  snapshotComment?: string
  /* Optional. If createNewSnapshot=true, the label to be applied to the snapshot version. Null by default */
  snapshotLabel?: string
  /* Optional. If createNewSnapshot=true, the Activity ID to be applied to the snapshot version. Null by default */
  snapshotActivityId?: string
}

/**
 * An AsynchronousResponseBody returned from a table update transaction.
 */
export type TableUpdateTransactionResponse = {
  concreteType: 'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse'
  /* List of responses. There will be one response for each request in the transaction. */
  results: TableUpdateResponse[]
  /* The version number of the snapshot. Returned only, if a new snapshot was requested. */
  snapshotVersionNumber?: number
}

/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TableUpdateResponse.html
 */
export type TableUpdateResponse = TableSchemaChangeResponse
// | TableSearchChangeResponse
// | RowReferenceSetResults
// | EntityUpdateResults
// | UploadToTableResult

export type TableSchemaChangeResponse = {
  concreteType: 'org.sagebionetworks.repo.model.table.TableSchemaChangeResponse'
  schema: ColumnModel[]
}
