import {
  AccessApprovalSearchResult,
  AccessApprovalSearchResponse,
  ApprovalState,
} from '../src/lib/utils/synapseTypes'
import { MOCK_USER_ID } from './user/mock_user_profile'

let mockSearchResults = []
for (let i = 0; i < 50; i++) {
  mockSearchResults.push({
    accessRequirementId: '9602629',
    accessRequirementName: 'Access Requirement',
    accessRequirementVersion: '3',
    id: (Date.now() + i).toString(),
    modifiedOn: '2022-05-24T21:20:58.420Z',
    expiredOn: '2022-05-24T21:20:58.420Z',
    reviewerId: MOCK_USER_ID.toString(),
    state: ApprovalState.APPROVED,
    submitterId: MOCK_USER_ID.toString(),
  })
}

export const mockApprovalSearchResponse: AccessApprovalSearchResponse = {
  results: mockSearchResults,
  nextPageToken: '50a0',
}

export let mockAccessApprovalSearchResult2: AccessApprovalSearchResult = {
  accessRequirementId: '9602629',
  accessRequirementName: 'Access Requirement2',
  accessRequirementVersion: '3',
  id: '9602632',
  modifiedOn: '2022-05-24T21:20:58.420Z',
  expiredOn: '2022-05-24T21:20:58.420Z',
  reviewerId: MOCK_USER_ID.toString(),
  state: ApprovalState.APPROVED,
  submitterId: MOCK_USER_ID.toString(),
}
