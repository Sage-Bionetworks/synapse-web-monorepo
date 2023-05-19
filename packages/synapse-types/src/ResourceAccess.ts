import ACCESS_TYPE from './ACCESS_TYPE'

export type ResourceAccess = {
  principalId: number
  accessType: ACCESS_TYPE[]
}
