import { QueryRequestDetails } from './QueryRequestDetails'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListQueryRequest.html
export type DownloadListQueryRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.DownloadListQueryRequest'
  requestDetails: QueryRequestDetails // Required. Must be one of the implementations of QueryRequestDetails.
}
