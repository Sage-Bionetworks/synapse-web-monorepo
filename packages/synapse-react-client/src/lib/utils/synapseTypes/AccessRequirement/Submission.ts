import { ResearchProject } from '../ResearchProject'
import { RestrictableObjectType } from '../RestrictionInformation'
import { AccessorChange } from './AccessorChange'
import { SubmissionState } from './ManagedACTAccessRequirementStatus'

export type Submission = {
  /** The unique immutable ID for this submission. A new ID will be generated for new Submission. Once issued, this ID is guaranteed to never change or be re-issued. */
  id: string
  /** The ID of the Access Requirement which requires a request to be submitted to gain access to a dataset. This submission contains information that satisfies those requirements. */
  accessRequirementId: string
  /** The version of the Access Requirement which requires a request to be submitted to gain access to a dataset. This submission contains information that satisfies those requirements. */
  accessRequirementVersion: number
  /** The ID of the Request which is used to create this submission. */
  requestId: string
  /** The Data Use Certificate uploaded by user. */
  ducFileHandleId?: string
  /** The Institutional Review Board Approval document uploaded by user. */
  irbFileHandleId?: string
  /** The set of file handle ID of attached files to this request. */
  attachments?: Array<string>
  /** List of user changes. A user can gain access, renew access or have access revoked. */
  accessorChanges: Array<AccessorChange>
  /** A research project describes a project at an institution that used a controlled data set for the purposes that are stated in the Intended Data Use Statement. */
  researchProjectSnapshot: ResearchProject
  /** True if this submission is a renewal submission. */
  isRenewalSubmission: boolean
  /** Link(s) to publication that used the controlled data. */
  publication?: string
  /** Summary of how the data has been used. */
  summaryOfUse?: string
  /** The date this submission was created. */
  submittedOn: string
  /** The date this submission was reviewed or was cancelled. */
  modifiedOn: string
  /** The ID of the user that submitted this submission. */
  submittedBy: string
  /** The ID of the user that last modified the status of this submission. */
  modifiedBy: string
  /** The state of a Submission. */
  state: SubmissionState
  /** The reason this submission is rejected, if it's rejected. */
  rejectedReason?: string
  /** Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time a request is updated it is used to detect when a client's current representation of a request is out-of-date. */
  etag: string
  /** The ID of the subject user interested in. This information will be used to help user navigate back to where they were to continue their work. */
  subjectId: string
  /** JSON enum for the types of objects which can be restricted by an AccessRequirement. */
  subjectType: RestrictableObjectType
}

export type SubmissionPage = {
  results: Submission[]
  nextPageToken?: string
}
