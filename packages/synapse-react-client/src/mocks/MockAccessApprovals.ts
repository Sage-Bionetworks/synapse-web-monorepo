import {
  AccessApprovalSearchResult,
  AccessApprovalSearchResponse,
  ApprovalState,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from './user/mock_user_profile'

export const mockApprovalSearchResponse: AccessApprovalSearchResponse = {
  results: [
    {
      accessRequirementId: '9602629',
      accessRequirementName: 'Access Requirement',
      accessRequirementVersion: '3',
      id: Date.now().toString(),
      modifiedOn: '2022-05-24T21:20:58.420Z',
      expiredOn: '2022-05-24T21:20:58.420Z',
      reviewerId: MOCK_USER_ID.toString(),
      state: ApprovalState.APPROVED,
      submitterId: MOCK_USER_ID.toString(),
    },
  ],
  nextPageToken: '50a0',
} satisfies AccessApprovalSearchResponse

export const mockAccessApprovalSearchResult2: AccessApprovalSearchResult = {
  accessRequirementId: '9602630',
  accessRequirementName: 'Access Requirement2',
  accessRequirementVersion: '3',
  id: '9602632',
  modifiedOn: '2022-05-24T21:20:58.420Z',
  expiredOn: '2022-05-24T21:20:58.420Z',
  reviewerId: MOCK_USER_ID.toString(),
  state: ApprovalState.APPROVED,
  submitterId: MOCK_USER_ID.toString(),
}
