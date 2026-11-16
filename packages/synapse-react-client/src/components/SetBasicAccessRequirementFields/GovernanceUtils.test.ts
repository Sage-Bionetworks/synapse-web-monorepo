import {
  mockACTAccessRequirement,
  mockLockAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockJsonSchemaAR1 } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { AccessRequirement } from '@sage-bionetworks/synapse-types'
import {
  getOldAccessRequirementInstructions,
  hasAccessorRequirement,
  hasIdentityProviderRequirement,
  hasTwoFactorAuthRequirement,
  LOCK_ACCESS_REQUIREMENT_TEXT,
} from './GovernanceUtils'

const jsonSchemaAccessRequirement =
  mockJsonSchemaAR1 as unknown as AccessRequirement

describe('GovernanceUtils', () => {
  describe('hasAccessorRequirement', () => {
    test('identifies ARs with accessor requirements', () => {
      expect(hasAccessorRequirement(mockManagedACTAccessRequirement)).toBe(true)
      expect(hasAccessorRequirement(mockSelfSignAccessRequirement)).toBe(true)
      expect(hasAccessorRequirement(jsonSchemaAccessRequirement)).toBe(true)
    })

    test('identifies ARs without accessor requirements', () => {
      expect(hasAccessorRequirement(mockToUAccessRequirement)).toBe(false)
      expect(hasAccessorRequirement(mockACTAccessRequirement)).toBe(false)
      expect(hasAccessorRequirement(mockLockAccessRequirement)).toBe(false)
    })
  })

  // Mirrors the backend interfaces HasTwoFactorAuthRequirement and HasIdentityProviderRequirement, which are
  // implemented by ManagedACTAccessRequirement and JsonSchemaAccessRequirement
  describe.each([
    ['hasTwoFactorAuthRequirement', hasTwoFactorAuthRequirement],
    ['hasIdentityProviderRequirement', hasIdentityProviderRequirement],
  ])('%s', (_name, guard) => {
    test.each([
      { ar: mockManagedACTAccessRequirement, expected: true },
      { ar: jsonSchemaAccessRequirement, expected: true },
      { ar: mockSelfSignAccessRequirement, expected: false },
      { ar: mockToUAccessRequirement, expected: false },
      { ar: mockACTAccessRequirement, expected: false },
      { ar: mockLockAccessRequirement, expected: false },
    ])('$ar.concreteType -> $expected', ({ ar, expected }) => {
      expect(guard(ar)).toBe(expected)
    })
  })

  describe('getAccessRequirementText', () => {
    test('Managed AR', () => {
      expect(
        getOldAccessRequirementInstructions(mockManagedACTAccessRequirement),
      ).toBe('')
    })
    test('JSON Schema AR', () => {
      expect(
        getOldAccessRequirementInstructions(jsonSchemaAccessRequirement),
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
