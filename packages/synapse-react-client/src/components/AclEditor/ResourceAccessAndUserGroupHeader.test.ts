import { SynapseConstants } from '@/utils'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '@/utils/SynapseConstants'
import { ACCESS_TYPE, UserGroupHeader } from '@sage-bionetworks/synapse-types'
import { compareResourceAccessAndUserGroupHeader } from './ResourceAccessAndUserGroupHeader'

describe('ResourceAccessAndUserGroupHeader', () => {
  describe('compareResourceAccessAndUserGroupHeader', () => {
    const userGroupHeaderA: UserGroupHeader = {
      ownerId: '1',
      userName: 'a',
      isIndividual: true,
    }
    const userGroupHeaderB: UserGroupHeader = {
      ownerId: '2',
      userName: 'z',
      isIndividual: true,
    }

    const authenticatedGroupHeader: UserGroupHeader = {
      ownerId: String(AUTHENTICATED_PRINCIPAL_ID),
      userName: 'Authenticated',
      isIndividual: false,
    }
    const publicGroupHeader: UserGroupHeader = {
      ownerId: String(PUBLIC_PRINCIPAL_ID),
      userName: 'Public',
      isIndividual: false,
    }

    test('sorts by change permissions', () => {
      const a = {
        resourceAccess: {
          principalId: 1,
          accessType: [],
        },
        userGroupHeader: userGroupHeaderA,
      }
      const b = {
        resourceAccess: {
          principalId: 2,
          accessType: [ACCESS_TYPE.CHANGE_PERMISSIONS],
        },
        userGroupHeader: userGroupHeaderB,
      }
      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(1)
    })

    test('sorts alphabetically by username if both have change permissions', () => {
      const a = {
        resourceAccess: {
          principalId: 1,
          accessType: [ACCESS_TYPE.CHANGE_PERMISSIONS],
        },
        userGroupHeader: userGroupHeaderA,
      }
      const b = {
        resourceAccess: {
          principalId: 2,
          accessType: [ACCESS_TYPE.CHANGE_PERMISSIONS],
        },
        userGroupHeader: userGroupHeaderB,
      }

      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(-1)
    })

    test('CHANGE_PERMISSIONS comes before AUTHENTICATED', () => {
      const a = {
        resourceAccess: {
          principalId: 1,
          accessType: [ACCESS_TYPE.CHANGE_PERMISSIONS],
        },
        userGroupHeader: userGroupHeaderA,
      }
      const b = {
        resourceAccess: {
          principalId: SynapseConstants.AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
        userGroupHeader: authenticatedGroupHeader,
      }

      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(-1)
    })

    test('AUTHENTICATED comes before PUBLIC', () => {
      const a = {
        resourceAccess: {
          principalId: SynapseConstants.AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
        userGroupHeader: authenticatedGroupHeader,
      }
      const b = {
        resourceAccess: {
          principalId: SynapseConstants.PUBLIC_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
        userGroupHeader: publicGroupHeader,
      }

      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(-1)
    })

    test('PUBLIC comes before an arbitrary usergroup without CHANGE_PERMISSIONS', () => {
      const a = {
        resourceAccess: {
          principalId: SynapseConstants.AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
        userGroupHeader: authenticatedGroupHeader,
      }
      const b = {
        resourceAccess: {
          principalId: 1,
          accessType: [ACCESS_TYPE.UPDATE],
        },
        userGroupHeader: userGroupHeaderA,
      }

      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(-1)
    })

    test('usergroups without CHANGE_PERMISSIONS are sorted alphabetically by userName', () => {
      const a = {
        resourceAccess: {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ],
        },
        userGroupHeader: userGroupHeaderA,
      }
      const b = {
        resourceAccess: {
          principalId: 2,
          accessType: [ACCESS_TYPE.UPDATE],
        },
        userGroupHeader: userGroupHeaderB,
      }

      expect(compareResourceAccessAndUserGroupHeader(a, b)).toBe(-1)
    })
  })
})
