import {
  mockACTAccessRequirement,
  mockLockAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/accessRequirement/mockAccessRequirements'
import {
  LOCK_ACCESS_REQUIREMENT_TEXT,
  getOldAccessRequirementInstructions,
  hasAccessorRequirement,
} from './GovernanceUtils'

describe('GovernanceUtils', () => {
  describe('hasAccessorRequirement', () => {
    test('identifies ARs with accessor requirements', () => {
      expect(hasAccessorRequirement(mockManagedACTAccessRequirement)).toBe(true)
      expect(hasAccessorRequirement(mockSelfSignAccessRequirement)).toBe(true)
    })

    test('identifies ARs without accessor requirements', () => {
      expect(hasAccessorRequirement(mockToUAccessRequirement)).toBe(false)
      expect(hasAccessorRequirement(mockACTAccessRequirement)).toBe(false)
      expect(hasAccessorRequirement(mockLockAccessRequirement)).toBe(false)
    })
  })

  describe('getAccessRequirementText', () => {
    test('Managed AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockManagedACTAccessRequirement),
      ).toBe('')
    })
    test('Self Sign AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockSelfSignAccessRequirement),
      ).toBe('')
    })
    test('Terms Of Use AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockToUAccessRequirement),
      ).toBe(mockToUAccessRequirement.termsOfUse)
    })
    test('ACT AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockACTAccessRequirement),
      ).toBe(mockACTAccessRequirement.actContactInfo)
    })
    test('Lock AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockLockAccessRequirement),
      ).toBe(LOCK_ACCESS_REQUIREMENT_TEXT)
    })
  })
})
