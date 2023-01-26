import { CsvTableDescriptor } from '../Table'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListManifestRequest.html
export type DownloadListManifestRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.DownloadListManifestRequest'
  csvTableDescriptor: CsvTableDescriptor // The description of a csv for download.
}
