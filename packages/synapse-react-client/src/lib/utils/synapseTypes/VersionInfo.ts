// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/VersionInfo.html
export type VersionInfo = {
  id: string
  versionNumber: number
  versionLabel: string
  versionComment: string
  modifiedBy: string
  modifiedByPrincipalId: string
  modifiedOn: string
  isLatestVersion: boolean
  contentSize?: string
  contentMd5?: string
}
