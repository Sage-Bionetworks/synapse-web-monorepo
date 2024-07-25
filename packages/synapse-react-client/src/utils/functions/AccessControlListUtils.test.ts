import resourceAccessListIsEqual from './AccessControlListUtils'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'

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
})
