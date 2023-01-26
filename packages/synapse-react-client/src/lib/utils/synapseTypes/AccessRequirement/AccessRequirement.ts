import ACCESS_TYPE from '../ACCESS_TYPE'
import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'

export interface AccessRequirement {
  versionNumber: number //	The version number issued to this version on the object.
  id: number //	The unique immutable ID. Provided by the system, the user may not set this field.
  name: string // Name of the AR. Limited to 50 characters.
  etag: string //	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date.
  createdOn: string //	The date this object was created. Provided by the system, the user may not set this field.
  modifiedOn: string //	The date this object was last modified. Provided by the system, the user may not set this field.
  createdBy: string //	The user that created this object. Provided by the system, the user may not set this field.
  modifiedBy: string //	The user that last modified this object. Provided by the system, the user may not set this field.
  subjectIds: Array<RestrictableObjectDescriptor> // The IDs of the items controlled by this Access Requirement. Required when creating or updating.
  accessType: ACCESS_TYPE //	The enumeration of possible permission.
  concreteType: string //	Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field.
}
