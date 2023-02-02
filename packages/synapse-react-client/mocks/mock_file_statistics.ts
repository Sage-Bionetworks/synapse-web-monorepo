import { FilesStatisticsResponse } from '../src/lib/utils/synapseTypes/DownloadListV2/QueryResponseDetails'

export const mockFileStatistics: FilesStatisticsResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
  totalNumberOfFiles: 5,
  numberOfFilesAvailableForDownload: 5,
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: 4,
  numberOfFilesRequiringAction: 0,
  sumOfFileSizesAvailableForDownload: 141730,
}
