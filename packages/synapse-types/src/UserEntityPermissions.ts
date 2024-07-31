// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/UserEntityPermissions.html
export type UserEntityPermissions = {
  canView: boolean
  canEdit: boolean
  canMove: boolean
  canAddChild: boolean
  canCertifiedUserEdit: boolean
  canCertifiedUserAddChild: boolean
  isCertifiedUser: boolean
  canChangePermissions: boolean
  canChangeSettings: boolean
  canDelete: boolean
  canDownload: boolean
  canUpload: boolean
  canEnableInheritance: boolean
  ownerPrincipalId: number
  canPublicRead: boolean
  canModerate: boolean
  isCertificationRequired: boolean
  isEntityOpenData: boolean
  isUserDataContributor: boolean
}
