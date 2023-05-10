// see https://rest-docs.synapse.org/rest/POST/statistics.html

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/ProjectFilesStatisticsRequest.html
export type ProjectFilesStatisticsRequest = {
  concreteType: 'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest'
  objectId: string
  fileDownloads: boolean
  fileUploads: boolean
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/ProjectFilesStatisticsResponse.html
export type ProjectFilesStatisticsResponse = {
  objectId: string
  concreteType: 'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsResponse'
  fileDownloads: MonthlyFilesStatistics
  fileUploads: MonthlyFilesStatistics
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/MonthlyFilesStatistics.html
export type MonthlyFilesStatistics = {
  lastUpdatedOn: string // note: ignore this
  months: FilesCountStatistics[]
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/statistics/FilesCountStatistics.html
export type FilesCountStatistics = {
  rangeStart: string
  rangeEnd: string
  filesCount: number
  usersCount: number
}
