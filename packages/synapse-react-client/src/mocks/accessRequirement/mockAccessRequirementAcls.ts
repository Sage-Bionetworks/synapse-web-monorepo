import { ACCESS_TYPE, AccessControlList } from '@sage-bionetworks/synapse-types'
import { mockManagedACTAccessRequirement } from './mockAccessRequirements'
import { MOCK_TEAM_ID, MOCK_TEAM_ID_2 } from '../team/mockTeam'
import { MOCK_USER_ID } from '../user/mock_user_profile'

export const MOCK_MANAGED_ACCESS_REQUIREMENT_ACL: AccessControlList = {
  id: mockManagedACTAccessRequirement.id.toString(),
  resourceAccess: [
    {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
    },
    {
      principalId: MOCK_TEAM_ID_2,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
    },
    {
      principalId: MOCK_USER_ID,
      accessType: [
        ACCESS_TYPE.EXEMPTION_ELIGIBLE,
        ACCESS_TYPE.REVIEW_SUBMISSIONS,
      ],
    },
  ],
}

export const mockAccessRequirementAcls = [MOCK_MANAGED_ACCESS_REQUIREMENT_ACL]
