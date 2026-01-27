import { ApplicationSessionContextType } from '@/utils/AppUtils/session/ApplicationSessionContext'

/**
 * Mock ApplicationSessionContext for testing purposes.
 * Provides a minimal valid context that can be used in tests and stories.
 */
export const MOCK_APPLICATION_SESSION_CONTEXT: ApplicationSessionContextType = {
  token: undefined,
  termsOfServiceStatus: undefined,
  twoFactorStatus: undefined,
  hasInitializedSession: true,
  refreshSession: async () => {},
  clearSession: async () => {},
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}
