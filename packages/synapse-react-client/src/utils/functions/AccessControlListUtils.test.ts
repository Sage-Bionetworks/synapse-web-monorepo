import {
  MOCK_ANONYMOUS_PRINCIPAL_ID,
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  consolidateResourceAccessList,
  isEntityPublic,
  resourceAccessListIsEqual,
} from './AccessControlListUtils'

describe('AccessControlListUtils', () => {
  describe('resourceAccessListIsEqual', () => {
    test('empty list', () => {
      expect(resourceAccessListIsEqual([], [])).toBe(true)
    })
    test('principal ids out of order', () => {
      const a: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.READ],
        },
      ]
      const b: ResourceAccess[] = [
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      expect(resourceAccessListIsEqual(a, b)).toBe(true)
    })
    test('accessType out of order', () => {
      const a: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
        },
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
        },
      ]

      const b: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.DOWNLOAD, ACCESS_TYPE.READ],
        },
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.DOWNLOAD, ACCESS_TYPE.READ],
        },
      ]

      expect(resourceAccessListIsEqual(a, b)).toBe(true)
    })

    test('missing entry', () => {
      const a: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
        },
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
        },
      ]

      const b: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.DOWNLOAD, ACCESS_TYPE.READ],
        },
      ]

      expect(resourceAccessListIsEqual(a, b)).toBe(false)
    })

    test('changed accessType', () => {
      const a: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const b: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.DOWNLOAD, ACCESS_TYPE.READ],
        },
      ]

      expect(resourceAccessListIsEqual(a, b)).toBe(false)
    })
    test('changed principal', () => {
      const a: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const b: ResourceAccess[] = [
        {
          principalId: 2,
          accessType: [ACCESS_TYPE.READ],
        },
      ]
      expect(resourceAccessListIsEqual(a, b)).toBe(false)
    })
  })

  describe('isEntityPublic', () => {
    test('returns true when public group principal present', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: 123,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: MOCK_PUBLIC_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {
        publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
      })

      expect(result).toBe(true)
    })

    test('returns true when authenticated users principal present', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: 123,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {
        authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      })

      expect(result).toBe(true)
    })

    test('returns true when anonymous user principal present', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: 123,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: MOCK_ANONYMOUS_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {
        anonymousUser: String(MOCK_ANONYMOUS_PRINCIPAL_ID),
      })

      expect(result).toBe(true)
    })

    test('returns true when multiple public principals present', () => {
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

      const result = isEntityPublic(resourceAccess, {
        publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
        authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      })

      expect(result).toBe(true)
    })

    test('returns false when no public principals present', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: 123,
          accessType: [ACCESS_TYPE.READ],
        },
        {
          principalId: 456,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {
        publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
        authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
        anonymousUser: String(MOCK_ANONYMOUS_PRINCIPAL_ID),
      })

      expect(result).toBe(false)
    })

    test('returns false when resource access array is empty', () => {
      const resourceAccess: ResourceAccess[] = []

      const result = isEntityPublic(resourceAccess, {
        publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
        authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      })

      expect(result).toBe(false)
    })

    test('returns false when realm principals are undefined', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: MOCK_PUBLIC_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {})

      expect(result).toBe(false)
    })

    test('returns false when realm principals have undefined values', () => {
      const resourceAccess: ResourceAccess[] = [
        {
          principalId: MOCK_PUBLIC_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ]

      const result = isEntityPublic(resourceAccess, {
        publicGroup: undefined,
        authenticatedUsers: undefined,
        anonymousUser: undefined,
      })

      expect(result).toBe(false)
    })
  })

  describe('consolidateResourceAccessList', () => {
    it('returns the same number of entries when there are no duplicates', () => {
      const list: ResourceAccess[] = [
        { principalId: 1, accessType: [ACCESS_TYPE.READ] },
        { principalId: 2, accessType: [ACCESS_TYPE.DOWNLOAD] },
      ]

      expect(consolidateResourceAccessList(list)).toHaveLength(2)
    })

    it('unions accessType arrays for duplicate principalId entries', () => {
      const list: ResourceAccess[] = [
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
        },
        {
          principalId: 1,
          accessType: [ACCESS_TYPE.UPDATE, ACCESS_TYPE.DELETE],
        },
        { principalId: 2, accessType: [ACCESS_TYPE.READ] },
      ]

      const result = consolidateResourceAccessList(list)
      expect(result).toHaveLength(2)

      const entry = result.find(item => item.principalId === 1)
      expect(entry?.accessType).toHaveLength(4)
      expect(entry?.accessType).toEqual(
        expect.arrayContaining([
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.DELETE,
        ]),
      )
    })

    it('returns an empty list for empty input', () => {
      expect(consolidateResourceAccessList([])).toEqual([])
    })
  })
})
