import { ApplicationSessionContextType } from '@/utils/AppUtils/session/ApplicationSessionContext'
import { MOCK_ANONYMOUS_PRINCIPAL_ID } from '../realm/mockRealmPrincipal'

/**
 * Mock ApplicationSessionContext for testing purposes.
 * Provides a minimal valid context that can be used in tests and stories.
 */
export const MOCK_APPLICATION_SESSION_CONTEXT: ApplicationSessionContextType = {
  token: 'mock-anonymous-token',
  userId: MOCK_ANONYMOUS_PRINCIPAL_ID.toString(),
  realmId: '0',
  isAuthenticated: false,
  termsOfServiceStatus: undefined,
  twoFactorStatus: undefined,
  hasInitializedSession: true,
  refreshSession: async () => {},
  clearSession: async () => {},
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}
