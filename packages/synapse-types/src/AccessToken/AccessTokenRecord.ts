// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/AccessTokenRecord.html
export type AccessTokenRecord = {
  id: string
  userId: string
  scopes: string[]
  userInfoClaims?: object
  name: string
  createdOn: string
  lastUsed: string
  state: 'ACTIVE' | 'EXPIRED'
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/AccessTokenRecordList.html
export type AccessTokenRecordList = {
  results: AccessTokenRecord[]
  nextPageToken?: string
}
