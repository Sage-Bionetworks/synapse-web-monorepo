import { SelectColumn } from './SelectColumn'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/DownloadFromTableResult.html
export type DownloadFromTableResult = {
  concreteType: string //
  resultsFileHandleId: string //	The resulting file handle ID can be used to download the CSV file created by this job. The file will contain all of the data requested in the query SQL provided when the job was started.
  tableId: string //	The ID of the table identified in the from clause of the table query.
  etag: string //	Any RowSet returned from Synapse will contain the current etag of the change set. To update any rows from a RowSet the etag must be provided with the POST.
  headers: SelectColumn[] //	The list of SelectColumns that describes the rows of this set.
}
