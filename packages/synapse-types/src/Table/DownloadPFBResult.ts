/**
 * DownloadPFBResult
 *
 *
 * Response of a PFB download
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/DownloadPFBResult.html
 */
export type DownloadPFBResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.DownloadPFBResult'
  /* The resulting file handle ID can be used to download the PFB file created by this job. */
  resultsFileHandleId: string
  /* The ID of the table identified in the from clause of the table query. */
  tableId: string
}
