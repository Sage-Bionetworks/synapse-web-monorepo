import { QueryResponseDetails } from './QueryResponseDetails'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListQueryResponse.html
export type DownloadListQueryResponse = {
  concreteType: string
  responseDetails: QueryResponseDetails
}
