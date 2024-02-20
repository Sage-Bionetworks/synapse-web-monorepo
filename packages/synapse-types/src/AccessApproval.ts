export type SortDirection = 'ASC' | 'DESC'

export enum ApprovalState {
  APPROVED = 'APPROVED',
  REVOKED = 'REVOKED',
}

export enum AccessApprovalSortField {
  MODIFIED_ON = 'MODIFIED_ON',
  EXPIRED_ON = 'EXPIRED_ON',
}

export interface AccessApprovalSearchSort {
  field: AccessApprovalSortField
  direction: SortDirection
}

export interface AccessApprovalSearchResult {
  id: string
  accessRequirementId: string
  accessRequirementVersion: string
  accessRequirementName: string
  submitterId: string
  reviewerId: string
  state: ApprovalState
  modifiedOn: string
  expiredOn: string
}

export interface AccessApproval {
  id: number //	The unique immutable ID
  etag: string //	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date.
  createdOn: string //	The date this object was created.
  modifiedOn: string //	The date this object was last modified.
  createdBy: string //	The user that created this object.
  modifiedBy: string //	The user that last modified this object.
  requirementId: number //	The ID of the Access Requirement that this object approves.
  requirementVersion?: number //	The version of the Access Requirement that this object approves.
  submitterId: string //	The user who performed the necessary action(s) to gain this approval.
  accessorId: string //	The ID of the principal (user or group) approved for access
  expiredOn?: string //	The date this object will be expired.
  state: ApprovalState //	JSON enum for the state of AccessApproval
}

export type CreateAccessApprovalRequest = Pick<
  AccessApproval,
  | 'requirementId'
  | 'requirementVersion'
  | 'submitterId'
  | 'accessorId'
  | 'state'
>

export interface AccessApprovalSearchRequest {
  accessorId: string // 	Filter by the id of the principal that is an accessor in the approval. Note that the submitter is always part of the accessors. This field is required.
  accessRequirementId?: string // Filter by the id of the access requirement of the approvals.
  sort?: AccessApprovalSearchSort[] // Identifies both the field and direction for a single sort operation.
  nextPageToken?: string // A token used to get the next page of a request.
}

export interface AccessApprovalSearchResponse {
  results: AccessApprovalSearchResult[] // The matching Access Approval information corresponding to the search parameters
  nextPageToken?: string // A token used to get the next page of a particular search query.
}
