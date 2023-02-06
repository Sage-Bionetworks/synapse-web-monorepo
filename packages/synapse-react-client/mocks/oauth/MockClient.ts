import { OAuthClientList } from '../../src/lib/utils/synapseTypes/OAuthClient'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../user/mock_user_profile'

export const mockClientList1: OAuthClientList = {
  results: [
    {
      client_id: mockUserProfileData.ownerId,
      client_name: mockUserProfileData.firstName,
      verified: true,
      redirect_uris: [mockUserProfileData.url!],
      client_uri: mockUserProfileData.url,
      policy_uri: mockUserProfileData.url,
      tos_uri: mockUserProfileData.url,
      createdOn: mockUserProfileData.createdOn,
      modifiedOn: mockUserProfileData.createdOn,
      createdBy: mockUserProfileData.userName,
      sector_identifier_uri: mockUserProfileData.url!,
    },
  ],
  nextPageToken: '50a0',
}

export const mockClientList2: OAuthClientList = {
  results: [
    {
      client_id: mockUserProfileData2.ownerId,
      client_name: mockUserProfileData2.firstName,
      verified: false,
      redirect_uris: [mockUserProfileData2.url!],
      client_uri: mockUserProfileData2.url,
      policy_uri: mockUserProfileData2.url,
      tos_uri: mockUserProfileData2.url,
      createdOn: mockUserProfileData2.createdOn,
      modifiedOn: mockUserProfileData2.createdOn,
      createdBy: mockUserProfileData2.userName,
      sector_identifier_uri: mockUserProfileData2.url!,
    },
  ],
  nextPageToken: undefined,
}
