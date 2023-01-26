export type VerificationSubmission = {
  id?: string // The ID of this object
  createdOn?: string // The date and time this object was created
  createdBy?: string // The principal ID of the user requesting verification
  firstName: string // This person's given name (forename)
  lastName: string // This person's family name (surname)
  emails: string[] //  The list of user email addresses registered to this user.
  location: string // This person's location
  company: string // This person's current affiliation
  orcid: string // The user's ORCID URI
  stateHistory?: VerificationState[] // List of state changes the submission has passed through, ordered by time. The last in the list contains the current state of the submission.
  attachments: AttachmentMetadata[] // Metadata of Files attached to the submission
}

export type VerificationState = {
  createdOn: string
  createdBy: string
  state: VerificationStateEnum
  reason?: string
  notes?: string // Additional notes that can be set by the ACT team and that is not exposed to the end user.
}

export enum VerificationStateEnum {
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED',
}

export type AttachmentMetadata = {
  fileName: string
  id: string // file handle ID
}
