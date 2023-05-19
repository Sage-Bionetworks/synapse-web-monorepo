import { ResourceAccess } from './ResourceAccess'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/AccessControlList.html

export type AccessControlList = {
  id: string
  createdBy?: string
  creationDate?: string
  modifiedBy?: string
  modifiedOn?: string
  etag?: string
  resourceAccess: ResourceAccess[]
}
