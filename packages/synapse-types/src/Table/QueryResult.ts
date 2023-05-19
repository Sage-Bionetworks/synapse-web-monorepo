import { SelectColumn } from './SelectColumn'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryResult.html
export type QueryResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResult'
  queryResults: RowSet // Represents a set of row of a TableEntity
  nextPageToken?: QueryNextPageToken
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/RowSet.html
export type RowSet = {
  tableId: string
  concreteType: string
  etag: string // Any RowSet returned from Synapse will contain the current etag of the change set. To update any rows from a RowSet the etag must be provided with the POST.
  headers: SelectColumn[] // The list of SelectColumns that describes the rows of this set.
  rows: Row[] // 	The Rows of this set. The index of each row value aligns with the index of each header.
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Row.html
export type Row = {
  rowId?: number // The immutable ID issued to a new row.
  versionNumber?: number // The version number of this row. Each row version is immutable, so when a row is updated a new version is created
  etag?: string // For queries against EntityViews with query.includeEtag=true, this field will contain the etag of the entity. Will be null for all other cases.
  values: (string | null)[] // The values for each column of this row.
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryNextPageToken.html
export type QueryNextPageToken = {
  token: string // The token for the next page.
}
