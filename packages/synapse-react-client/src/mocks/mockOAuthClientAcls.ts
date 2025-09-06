import { MOCK_USER_ID } from './user/mock_user_profile'
import {
  AccessControlList,
  OAuthClient,
  ResourceAccess,
} from '@sage-bionetworks/synapse-client'
import { MOCK_TEAM_ID } from './team/mockTeam'
import { getAccessTypeFromPermissionLevel } from '@/utils/PermissionLevelToAccessType'

export const mockOauthClient: Partial<OAuthClient> = {
  client_id: '1234',
  client_name: 'OAuth Client Demo',
  verified: true,
  client_uri: 'https://yourhost.com/index.html',
  policy_uri: 'https://yourhost.com/policy',
  tos_uri: 'https://yourhost.com/terms_of_service',
}

export const MOCK_OAUTH_CLIENT_ACL: AccessControlList = {
  id: mockOauthClient.client_id!.toString(),
  resourceAccess: new Set<ResourceAccess>([
    {
      principalId: MOCK_TEAM_ID,
      accessType: new Set(
        getAccessTypeFromPermissionLevel('CAN_ADMINISTER_OAUTH_CLIENT'),
      ),
    },
    {
      principalId: MOCK_USER_ID,
      accessType: new Set(
        getAccessTypeFromPermissionLevel('CAN_ADMINISTER_OAUTH_CLIENT'),
      ),
    },
  ]),
}

export const mockOAuthClientAcls = [MOCK_OAUTH_CLIENT_ACL]
