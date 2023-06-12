import { SortDirection } from './AccessApproval'
import { AccessorChange, SubmissionState } from './AccessRequirement'

export enum SubmissionReviewerFilterType {
  ALL = 'ALL',
  ACT_ONLY = 'ACT_ONLY',
  DELEGATED_ONLY = 'DELEGATED_ONLY',
}

export enum SubmissionSortField {
  MODIFIED_ON = 'MODIFIED_ON',
  CREATED_ON = 'CREATED_ON',
}

export interface SubmissionSearchSort {
  field: SubmissionSortField
  direction: SortDirection
}

export interface SubmissionSearchRequest {
  accessorId?: string
  accessRequirementId?: string
  submissionState?: SubmissionState
  reviewerId?: string
  reviewerFilterType?: SubmissionReviewerFilterType
  sort?: SubmissionSearchSort[]
  nextPageToken?: string
}

export interface SubmissionSearchResult {
  id: string
  createdOn: string
  modifiedOn: string
  accessRequirementId: string
  accessRequirementVersion: string
  accessRequirementName: string
  accessRequirementReviewerIds: string[]
  submitterId: string
  accessorChanges: AccessorChange[]
  state: SubmissionState
}

export interface SubmissionSearchResponse {
  results: SubmissionSearchResult[]
  nextPageToken?: string
}
