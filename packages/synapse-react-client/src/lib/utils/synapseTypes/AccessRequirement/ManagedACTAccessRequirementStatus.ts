import { AccessRequirementStatus } from './AccessRequirementStatus'

/**
 * The state of a Submission.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionState.html
 */
export enum SubmissionState {
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

/**
 * The status of a Submission.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionStatus.html
 */
export type ACTSubmissionStatus = {
  submissionId: string
  submittedBy: string
  rejectedReason: string
  state: SubmissionState
  modifiedOn: string
}

/**
 * The status of a user meeting an ACTAccessRequirement.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/ManagedACTAccessRequirementStatus.html
 */
export interface ManagedACTAccessRequirementStatus
  extends AccessRequirementStatus {
  currentSubmissionStatus: ACTSubmissionStatus
}
