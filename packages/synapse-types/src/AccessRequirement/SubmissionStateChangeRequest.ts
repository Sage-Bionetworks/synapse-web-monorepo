import { SubmissionState } from './ManagedACTAccessRequirementStatus'

export type SubmissionStateChangeRequest = {
  /** The ID of the requested Submission. */
  submissionId: string
  /** The state of a Submission. */
  newState: SubmissionState
  /** The reason that the Submission is rejected if newState is REJECTED. */
  rejectedReason?: string
}
