// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/DownloadListPackageRequest.html
// Request to package files from a user's download list.
export type DownloadListPackageRequest = {
  concreteType: 'org.sagebionetworks.repo.model.download.DownloadListPackageRequest'
  zipFileName?: string //Optional parameter to set the name of the resulting zip file.
  includeManifest?: boolean //Optional with a default value of false. When set to true, a metadata manifest file will be included in the package. The manifest will include all the metadata for each file in the package.
}
