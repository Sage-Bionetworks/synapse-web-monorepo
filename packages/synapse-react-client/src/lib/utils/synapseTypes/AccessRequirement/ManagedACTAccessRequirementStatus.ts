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
  rejectedReason?: string
  state: SubmissionState
  modifiedOn: string
}

/**
 * The status of a user meeting an ACTAccessRequirement.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/ManagedACTAccessRequirementStatus.html
 */
export type ManagedACTAccessRequirementStatus = {
  /* The ID of the requested AccessRequirement. */
  accessRequirementId: string
  /* Indicates which implementation of AccessRequirementStatus this object represents. */
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus'
  /* True if there is an AccessApproval for the user for the given AccessRequirement. */
  isApproved: boolean
  /* The date that the user no longer have access to the data. */
  expiredOn?: string
  /* Current submission status. Will be undefined if no submission has been created */
  currentSubmissionStatus?: ACTSubmissionStatus
}
