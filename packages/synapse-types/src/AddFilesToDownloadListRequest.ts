import { Query } from './Table/Query'

//https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/AddFileToDownloadListRequest.html
export type AddFilesToDownloadListRequest = {
  concreteType: 'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest'
  //from the docs: The ID of the folder containing the files to add to the user's download list. Note: Only the files in this folder will be added to the download list, files in sub-folders will not be added. Should be null if setting a 'query'.
  folderId?: string | null
  query?: Query
}
