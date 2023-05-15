import { ActionRequiredCount } from './ActionRequired'
import { DownloadListItemResult } from './DownloadListItemResult'

export type QueryResponseDetails =
  | AvailableFilesResponse
  | FilesStatisticsResponse
  | ActionRequiredResponse

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/AvailableFilesResponse.html
export type AvailableFilesResponse = {
  concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesResponse' // Will indicate the full package name of the response type.
  page: DownloadListItemResult[] //The page of download list items
  nextPageToken?: string // When provided, the nextPageToken indicates that there are more results. Forward this token to the next request to get the next page.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/FilesStatisticsResponse.html
export type FilesStatisticsResponse = {
  concreteType: 'org.sagebionetworks.repo.model.download.FilesStatisticsResponse' // Will indicate the full package name of the response type.
  totalNumberOfFiles: number // The total number of files on the user's download list.
  numberOfFilesAvailableForDownload: number // The number of files that are currently available for download.
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: number //The number of files that are currently available for download and eligible for packaging.
  numberOfFilesRequiringAction: number // The number of files that are currently unavailable for download. These are files that require some action on the user's part in order gain download access.
  sumOfFileSizesAvailableForDownload: number // The sum of all of the files sizes on the user's download list that are currently available for download.
}

//http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/ActionRequiredResponse.html
export type ActionRequiredResponse = {
  concreteType: 'org.sagebionetworks.repo.model.download.ActionRequiredResponse' // Will indicate the full package name of the response type.
  page: ActionRequiredCount[] //The page of ActionRequiredCount
  nextPageToken?: string // When provided, the nextPageToken indicates that there are more results. Forward this token to the next request to get the next page.
}
