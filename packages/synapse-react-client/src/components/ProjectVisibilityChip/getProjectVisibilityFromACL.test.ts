import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { getProjectVisibilityFromACL } from './getProjectVisibilityFromACL'

const realmPrincipals = {
  publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
  authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
}

describe('getProjectVisibilityFromACL', () => {
  it('returns PRIVATE for empty ACL', () => {
    const resourceAccess: ResourceAccess[] = []
    const visibility = getProjectVisibilityFromACL(
      resourceAccess,
      realmPrincipals,
    )
    expect(visibility).toBe('PRIVATE')
  })

  it('returns DISCOVERABLE for public READ + authenticated READ', () => {
    const resourceAccess: ResourceAccess[] = [
      {
        principalId: MOCK_PUBLIC_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ],
      },
    ]
    const visibility = getProjectVisibilityFromACL(
      resourceAccess,
      realmPrincipals,
    )
    expect(visibility).toBe('DISCOVERABLE')
  })

  it('returns PUBLIC for public READ + authenticated READ + authenticated DOWNLOAD', () => {
    const resourceAccess: ResourceAccess[] = [
      {
        principalId: MOCK_PUBLIC_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
      },
    ]
    const visibility = getProjectVisibilityFromACL(
      resourceAccess,
      realmPrincipals,
    )
    expect(visibility).toBe('PUBLIC')
  })

  it('returns PUBLIC when everyone has DOWNLOAD', () => {
    const resourceAccess: ResourceAccess[] = [
      {
        principalId: MOCK_PUBLIC_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
      },
      {
        principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
        accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
      },
    ]
    expect(getProjectVisibilityFromACL(resourceAccess, realmPrincipals)).toBe(
      'PUBLIC',
    )
  })
})
