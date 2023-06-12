import { ObjectType } from './ObjectType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/doi/v2/DoiAssociation.html
export type DoiAssociation = {
  associationId: string
  etag: string
  doiUri: string
  doiUrl: string
  objectId: string
  objectType: ObjectType
  objectVersion?: number
  associatedBy: string
  associatedOn: string
  updatedBy: string
  updatedOn: string
}
