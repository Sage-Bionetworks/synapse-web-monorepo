import { AccessTokenRecordList } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'

export const mockAccessTokenRecordListPageOne: AccessTokenRecordList = {
  results: [
    {
      id: '98454651819681681685',
      userId: String(MOCK_USER_ID),
      scopes: ['view', 'download', 'modify'],
      userInfoClaims: {},
      name: 'Active token for the Python Client on my machine',
      createdOn: '2023-09-20T15:49:36.680Z',
      lastUsed: '2024-01-30T15:09:33.892Z',
      state: 'ACTIVE',
    },
    {
      id: '98454651819681681684',
      userId: String(MOCK_USER_ID),
      scopes: ['view', 'download'],
      userInfoClaims: {},
      name: 'Custom script token from a long time ago',
      createdOn: '2020-11-30T20:13:07.916Z',
      lastUsed: '2021-01-04T14:11:41.662Z',
      state: 'EXPIRED',
    },
  ],
  nextPageToken: 'next-page-token',
}

export const mockAccessTokenRecordListPageTwo: AccessTokenRecordList = {
  results: [
    {
      id: '98454651819681681683',
      userId: String(MOCK_USER_ID),
      scopes: ['view', 'download'],
      userInfoClaims: {},
      name: 'Token on page two',
      createdOn: '2020-11-30T20:13:07.916Z',
      lastUsed: '2021-01-04T14:11:41.662Z',
      state: 'EXPIRED',
    },
  ],
}
