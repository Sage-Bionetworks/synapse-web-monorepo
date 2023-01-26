//https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormGroup.html
export type FormGroup = {
  groupId: string
  name: string
  createdBy: string
  createdOn: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormData.html
export type FormData = {
  formDataId: string
  etag: string
  groupId: string
  name: string
  createdBy: string
  createdOn: string
  modifiedOn: string
  dataFileHandleId: string
  submissionStatus: SubmissionStatus
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormChangeRequest.html
export type FormChangeRequest = {
  name: string
  fileHandleId: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/FormRejection.html
export type FormRejection = {
  reason: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/SubmissionStatus.html
export type SubmissionStatus = {
  submittedOn?: string
  reviewedOn?: string
  reviewedBy?: string
  state: StatusEnum
  rejectionMessage?: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/StatusEnum.html
export enum StatusEnum {
  WAITING_FOR_SUBMISSION = 'WAITING_FOR_SUBMISSION',
  SUBMITTED_WAITING_FOR_REVIEW = 'SUBMITTED_WAITING_FOR_REVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/ListRequest.html
export type ListRequest = {
  filterByState?: StatusEnum[]
  groupId: string
  nextPageToken?: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/form/ListResponse.html
export type ListResponse = {
  page: FormData[]
  nextPageToken?: string
}
