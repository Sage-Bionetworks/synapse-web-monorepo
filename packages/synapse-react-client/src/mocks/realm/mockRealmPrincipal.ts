import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'

/**
 * Mock realm principal ID values from realm '0' for use in tests and mocks.
 * These match the legacy hard-coded values for backwards compatibility.
 */
export const MOCK_AUTHENTICATED_PRINCIPAL_ID = 273948
export const MOCK_PUBLIC_PRINCIPAL_ID = 273949
export const MOCK_ANONYMOUS_PRINCIPAL_ID = 273950

export const MOCK_PUBLIC_PRINCIPAL_IDS = [
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
  MOCK_ANONYMOUS_PRINCIPAL_ID,
]

/**
 * Mock realm principals for testing.
 * Uses the legacy hard-coded values from realm '0' for backwards compatibility with existing tests.
 */
export const MOCK_REALM_PRINCIPAL: RealmPrincipal = {
  realmId: '0',
  anonymousUser: String(MOCK_ANONYMOUS_PRINCIPAL_ID),
  publicGroup: String(MOCK_PUBLIC_PRINCIPAL_ID),
  authenticatedUsers: String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
  administrativeGroup: undefined,
}
