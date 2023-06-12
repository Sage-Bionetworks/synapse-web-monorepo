export type QueryRequestDetails =
  | AvailableFilesRequest
  | FilesStatisticsRequest
  | ActionRequiredRequest

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/AvailableFilesRequest.html
export type AvailableFilesRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesRequest'
  nextPageToken?: string // Forward the resulting nextPageToken from a previous request to get the next page of results.
  sort?: Sort[] // Optional. Defines how the query results should be sorted. If excluded a default sort will be used.
  filter?: AvailableFilter //Optional. Defines how the query results should be filtered. If excluded all available files will be returned.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/FilesStatisticsRequest.html
export type FilesStatisticsRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.FilesStatisticsRequest'
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/ActionRequiredRequest.html
export type ActionRequiredRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.ActionRequiredRequest'
  nextPageToken?: string // Forward the resulting nextPageToken from a previous request to get the next page of results.
}

export type SortField =
  | 'fileName' // The name of the file entity.
  | 'projectName' //	The name of the file's project.
  | 'synId' // The synId of the file
  | 'versionNumber' // The version of number of the file.
  | 'addedOn' // The date-time that the file was added to the user's download list
  | 'createdBy' // The ID of the user that created the file.
  | 'createdOn' // The date-time when the file was created.
  | 'fileSize' // The size of the file.
export type DownloadListSortDirection = 'ASC' | 'DESC' // Direction of a sort.
// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/Sort.html
export type Sort = {
  field: SortField // http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/SortField.html
  // Enumeration of the fields of a user's download list that can be used for sorting.
  direction: DownloadListSortDirection
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/AvailableFilter.html
export type AvailableFilter =
  | 'eligibleForPackaging'
  | 'ineligibleForPackaging'
  | undefined
