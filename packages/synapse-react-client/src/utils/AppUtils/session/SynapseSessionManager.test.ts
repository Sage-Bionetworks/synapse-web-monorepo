import {
  OAuthTokenIntrospectionResponse,
  RealmPrincipal,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import dayjs from 'dayjs'
import {
  SessionState,
  SynapseSessionManager,
  SynapseSessionManagerOptions,
} from './SynapseSessionManager'
import SynapseClient from '@/synapse-client'

const mockPostAuthV1Oauth2Introspect = vi.fn()
const mockGetRepoV1RealmPrincipals = vi.fn()

vi.mock('@sage-bionetworks/synapse-client', async () => {
  const actual = await vi.importActual<
    typeof import('@sage-bionetworks/synapse-client')
  >('@sage-bionetworks/synapse-client')
  return {
    ...actual,
    SynapseClient: vi.fn().mockImplementation(() => ({
      openIDConnectServicesClient: {
        postAuthV1Oauth2Introspect: mockPostAuthV1Oauth2Introspect,
      },
      realmServicesClient: {
        getRepoV1RealmPrincipals: mockGetRepoV1RealmPrincipals,
      },
    })),
  }
})

const MOCK_ACCESS_TOKEN = 'mock-access-token'
const MOCK_ANONYMOUS_TOKEN = 'mock-anonymous-token'
const MOCK_USER_ID = '123'
const MOCK_ANONYMOUS_PRINCIPAL_ID = '888'

const MOCK_REALM_PRINCIPAL: RealmPrincipal = {
  realmId: '0',
  anonymousUser: MOCK_ANONYMOUS_PRINCIPAL_ID,
}

const MOCK_INTROSPECTION_AUTHENTICATED: OAuthTokenIntrospectionResponse = {
  active: true,
  sub: MOCK_USER_ID,
  scope: 'openid',
  token_type: 'OIDC_ACCESS_TOKEN',
  exp: dayjs().add(1, 'hour').unix(),
  iat: dayjs().unix(),
  iss: 'https://repo-prod.prod.sagebase.org/auth/v1',
  aud: '0',
}

const MOCK_INTROSPECTION_ANONYMOUS: OAuthTokenIntrospectionResponse = {
  active: true,
  sub: MOCK_ANONYMOUS_PRINCIPAL_ID,
  scope: 'openid',
  token_type: 'OIDC_ACCESS_TOKEN',
  exp: dayjs().add(1, 'hour').unix(),
  iat: dayjs().unix(),
  iss: 'https://repo-prod.prod.sagebase.org/auth/v1',
  aud: '0',
}

const MOCK_INTROSPECTION_INACTIVE: OAuthTokenIntrospectionResponse = {
  active: false,
}

describe('SynapseSessionManager', () => {
  const mockGetAccessToken = vi.spyOn(SynapseClient, 'getAccessTokenFromCookie')
  const signOutSpy = vi
    .spyOn(SynapseClient, 'signOut')
    .mockResolvedValue(MOCK_ANONYMOUS_TOKEN)

  let onSessionInvalid: ReturnType<typeof vi.fn>
  let onMissingExpectedAuthentication: ReturnType<typeof vi.fn>

  function createManager(
    overrides?: Partial<SynapseSessionManagerOptions>,
  ): SynapseSessionManager {
    return new SynapseSessionManager({
      onSessionInvalid,
      onMissingExpectedAuthentication,
      ...overrides,
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
    signOutSpy.mockResolvedValue(MOCK_ANONYMOUS_TOKEN)
    onSessionInvalid = vi.fn()
    onMissingExpectedAuthentication = vi.fn()
    mockGetRepoV1RealmPrincipals.mockResolvedValue(MOCK_REALM_PRINCIPAL)
  })

  describe('refreshSession', () => {
    it('initializes an authenticated session when a valid token exists', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      await manager.refreshSession()

      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: MOCK_ACCESS_TOKEN,
        },
      })
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(onMissingExpectedAuthentication).not.toHaveBeenCalled()

      const expectedState: SessionState = {
        token: MOCK_ACCESS_TOKEN,
        realmId: '0',
        userId: MOCK_USER_ID,
        isAuthenticated: true,
        hasInitializedSession: true,
      }
      expect(manager.getSnapshot()).toEqual(expectedState)
    })

    it('falls back to anonymous session when no token exists', async () => {
      mockGetAccessToken.mockResolvedValue(undefined)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_ANONYMOUS,
      )

      const manager = createManager()
      await manager.refreshSession()

      expect(signOutSpy).toHaveBeenCalledWith('0')
      expect(onMissingExpectedAuthentication).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: MOCK_ANONYMOUS_TOKEN,
        },
      })

      expect(manager.getSnapshot()).toEqual(
        expect.objectContaining({
          token: MOCK_ANONYMOUS_TOKEN,
          isAuthenticated: false,
          hasInitializedSession: true,
        }),
      )
    })

    it('calls onSessionInvalid when token validation fails', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_INACTIVE,
      )

      const manager = createManager()
      const listener = vi.fn()
      manager.subscribe(listener)

      await manager.refreshSession()

      expect(signOutSpy).toHaveBeenCalled()
      expect(onSessionInvalid).toHaveBeenCalled()
      expect(listener).not.toHaveBeenCalled()
      expect(window.location.reload).not.toHaveBeenCalled()
    })

    it('reloads the page when token is invalid and no onSessionInvalid is provided', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_INACTIVE,
      )

      const manager = createManager({
        onSessionInvalid: undefined,
      })
      await manager.refreshSession()

      expect(signOutSpy).toHaveBeenCalled()
      expect(window.location.reload).toHaveBeenCalled()
    })

    it('passes maxAge to token introspection', async () => {
      const maxAge = 3600
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager({ maxAge })
      await manager.refreshSession()

      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: MOCK_ACCESS_TOKEN,
          max_age: maxAge,
        },
      })
    })

    it('uses the specified defaultRealm for anonymous sign-out', async () => {
      mockGetAccessToken.mockResolvedValue(undefined)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_ANONYMOUS,
      )

      const manager = createManager({ defaultRealm: '42' })
      await manager.refreshSession()

      expect(signOutSpy).toHaveBeenCalledWith('42')
    })

    it('initializes session when Terms of Service error occurs', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const tosError = new SynapseClientError(
        403,
        'Login to https://synapse.org to accept the latest Terms of Service.',
        '',
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason:
            'Login to https://synapse.org to accept the latest Terms of Service.',
        },
      )
      mockGetRepoV1RealmPrincipals.mockRejectedValue(tosError)

      const manager = createManager({ defaultRealm: '5' })
      const listener = vi.fn()
      manager.subscribe(listener)

      await manager.refreshSession()

      // Should initialize session with default realm and mark as authenticated
      const expectedState: SessionState = {
        token: MOCK_ACCESS_TOKEN,
        realmId: '5', // Uses defaultRealm
        userId: MOCK_USER_ID,
        isAuthenticated: true,
        hasInitializedSession: true,
      }
      expect(manager.getSnapshot()).toEqual(expectedState)
      expect(listener).toHaveBeenCalledTimes(1)
      expect(onSessionInvalid).not.toHaveBeenCalled()
    })

    it('initializes session when Terms of Service error occurs (case insensitive)', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const tosError = new SynapseClientError(
        403,
        'Login to https://synapse.org to accept the latest TERMS OF SERVICE.',
        '',
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason:
            'Login to https://synapse.org to accept the latest TERMS OF SERVICE.',
        },
      )
      mockGetRepoV1RealmPrincipals.mockRejectedValue(tosError)

      const manager = createManager()
      await manager.refreshSession()

      // Should still initialize session successfully
      expect(manager.getSnapshot().hasInitializedSession).toBe(true)
      expect(manager.getSnapshot().isAuthenticated).toBe(true)
    })

    it('initializes session when 2FA error occurs', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const twoFaError = new SynapseClientError(
        403,
        'Two factor authentication must be enabled to perform this operation.',
        'TWO_FA_ENABLED_REQUIRED',
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason:
            'Two factor authentication must be enabled to perform this operation.',
          errorCode: 'TWO_FA_ENABLED_REQUIRED',
        },
      )
      mockGetRepoV1RealmPrincipals.mockRejectedValue(twoFaError)

      const manager = createManager({ defaultRealm: '7' })
      const listener = vi.fn()
      manager.subscribe(listener)

      await manager.refreshSession()

      // Should initialize session with default realm and mark as authenticated
      const expectedState: SessionState = {
        token: MOCK_ACCESS_TOKEN,
        realmId: '7', // Uses defaultRealm
        userId: MOCK_USER_ID,
        isAuthenticated: true,
        hasInitializedSession: true,
      }
      expect(manager.getSnapshot()).toEqual(expectedState)
      expect(listener).toHaveBeenCalledTimes(1)
      expect(onSessionInvalid).not.toHaveBeenCalled()
    })

    it('re-throws non-ToS and non-2FA errors from getCurrentRealmPrincipals', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const otherError = new SynapseClientError(
        500,
        'Internal server error',
        '',
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: 'Internal server error',
        },
      )
      mockGetRepoV1RealmPrincipals.mockRejectedValue(otherError)

      const manager = createManager()

      await expect(manager.refreshSession()).rejects.toThrow(
        'Internal server error',
      )
    })
  })

  describe('clearSession', () => {
    it('signs out and notifies subscribers', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      await manager.refreshSession()

      const listener = vi.fn()
      manager.subscribe(listener)
      signOutSpy.mockClear()

      await manager.clearSession()

      expect(signOutSpy).toHaveBeenCalledWith('0')
      expect(listener).toHaveBeenCalled()
    })
  })

  describe('subscribe', () => {
    it('notifies listeners when state changes', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      const listener = vi.fn()
      manager.subscribe(listener)

      await manager.refreshSession()

      expect(listener).toHaveBeenCalledTimes(1)
    })

    it('returns an unsubscribe function', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      const listener = vi.fn()
      const unsubscribe = manager.subscribe(listener)

      unsubscribe()
      await manager.refreshSession()

      expect(listener).not.toHaveBeenCalled()
    })

    it('supports multiple listeners', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      const listener1 = vi.fn()
      const listener2 = vi.fn()
      manager.subscribe(listener1)
      manager.subscribe(listener2)

      await manager.refreshSession()

      expect(listener1).toHaveBeenCalledTimes(1)
      expect(listener2).toHaveBeenCalledTimes(1)
    })
  })

  describe('start and dispose', () => {
    it('starts periodic refresh and dispose clears the interval', async () => {
      vi.useFakeTimers()
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()
      manager.start()

      // Initial refresh call
      await vi.advanceTimersByTimeAsync(0)
      expect(mockGetAccessToken).toHaveBeenCalledTimes(1)

      // Advance 60 seconds — should trigger periodic refresh
      await vi.advanceTimersByTimeAsync(60_000)
      expect(mockGetAccessToken).toHaveBeenCalledTimes(2)

      // Dispose should stop periodic refresh
      manager.dispose()
      await vi.advanceTimersByTimeAsync(60_000)
      expect(mockGetAccessToken).toHaveBeenCalledTimes(2) // no additional call

      vi.useRealTimers()
    })
  })

  describe('getSnapshot', () => {
    it('returns a stable reference that changes only on update', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )

      const manager = createManager()

      const before = manager.getSnapshot()
      expect(before).toBe(manager.getSnapshot()) // same reference

      await manager.refreshSession()

      const after = manager.getSnapshot()
      expect(after).toBe(manager.getSnapshot()) // same reference
      expect(after).not.toBe(before) // different from pre-refresh
    })

    it('returns initial state before any refresh', () => {
      const manager = createManager()
      expect(manager.getSnapshot()).toEqual({
        token: undefined,
        realmId: undefined,
        userId: undefined,
        isAuthenticated: false,
        hasInitializedSession: false,
      })
    })
  })

  describe('static methods', () => {
    it('getStoredToken returns the token from cookie', async () => {
      mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
      const token = await SynapseSessionManager.getStoredToken()
      expect(token).toBe(MOCK_ACCESS_TOKEN)
    })

    it('getStoredToken returns undefined on error', async () => {
      mockGetAccessToken.mockRejectedValue(new Error('cookie error'))
      const token = await SynapseSessionManager.getStoredToken()
      expect(token).toBeUndefined()
    })

    it('validateToken returns introspection response for active token', async () => {
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_AUTHENTICATED,
      )
      const result = await SynapseSessionManager.validateToken(
        MOCK_ACCESS_TOKEN,
      )
      expect(result).toEqual(MOCK_INTROSPECTION_AUTHENTICATED)
    })

    it('validateToken returns null for inactive token', async () => {
      mockPostAuthV1Oauth2Introspect.mockResolvedValue(
        MOCK_INTROSPECTION_INACTIVE,
      )
      const result = await SynapseSessionManager.validateToken(
        MOCK_ACCESS_TOKEN,
      )
      expect(result).toBeNull()
    })

    it('getCurrentRealmPrincipals returns realm principals', async () => {
      mockGetRepoV1RealmPrincipals.mockResolvedValue(MOCK_REALM_PRINCIPAL)
      const result = await SynapseSessionManager.getCurrentRealmPrincipals(
        MOCK_ACCESS_TOKEN,
      )
      expect(result).toEqual(MOCK_REALM_PRINCIPAL)
    })
  })
})
