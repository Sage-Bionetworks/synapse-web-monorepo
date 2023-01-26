import { DownloadList } from '.'

//https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/AddFileToDownloadListResponse.html
export type AddFilesToDownloadListResponse = {
  concreteType: 'org.sagebionetworks.repo.model.file.AddFileToDownloadListResponse'
  downloadList: DownloadList
}
