import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ErrorResponseCode,
  LoginResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { renderHook as _renderHook, waitFor } from '@testing-library/react'
import { OAuth2State, SynapseClient } from '../../index'
import { BackendDestinationEnum } from '../functions'
import {
  LOGIN_METHOD_OAUTH2_GOOGLE,
  OAUTH2_PROVIDERS,
} from '../SynapseConstants'
import useDetectSSOCode, { UseDetectSSOCodeOptions } from './useDetectSSOCode'

const authorizationCode = '12345'
const CSRF_TOKEN_STORAGE_KEY = 'oauth2_csrf_token'
const DEFAULT_CSRF_TOKEN = 'test-csrf-token'

type OAuth2StateWithCsrf = OAuth2State & { csrfToken: string }

function buildOAuthState(
  overrides: Partial<OAuth2StateWithCsrf> = {},
): OAuth2StateWithCsrf {
  return {
    csrfToken: DEFAULT_CSRF_TOKEN,
    ...overrides,
  }
}

function encodeAndStoreState(state: OAuth2StateWithCsrf): string {
  localStorage.setItem(CSRF_TOKEN_STORAGE_KEY, state.csrfToken)
  return encodeURIComponent(JSON.stringify(state))
}

const successfulLoginResponse: LoginResponse = {
  accessToken: 'abcd',
  acceptsTermsOfUse: true,
  authenticationReceipt: 'asdf',
}

const twoFactorAuthErrorResponse: TwoFactorAuthErrorResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
  userId: 123,
  twoFaToken: 'a1b2c3',
  reason: 'need 2fa plz',
  errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
}

const onSignInComplete = vi.fn()

const mockOAuthSessionRequest = vi.spyOn(SynapseClient, 'oAuthSessionRequest')
const mockSetAccessTokenCookie = vi.spyOn(SynapseClient, 'setAccessTokenCookie')
const mockOAuthRegisterAccountStep2 = vi.spyOn(
  SynapseClient,
  'oAuthRegisterAccountStep2',
)
const mockBindOAuthProviderToAccount = vi.spyOn(
  SynapseClient,
  'bindOAuthProviderToAccount',
)

describe('useDetectSSOCode tests', () => {
  function renderHook(options: UseDetectSSOCodeOptions) {
    return _renderHook(() =>
      useDetectSSOCode({ ...options, isInitializingSession: false }),
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
    history.replaceState({}, '', `/`)
    localStorage.clear()
  })

  it('Does nothing if searchParams are not set', () => {
    const hookReturn = renderHook({
      onSignInComplete: onSignInComplete,
      isInitializingSession: false,
    })

    expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
    expect(mockOAuthRegisterAccountStep2).not.toHaveBeenCalled()
    expect(mockBindOAuthProviderToAccount).not.toHaveBeenCalled()
    expect(onSignInComplete).not.toHaveBeenCalled()
    expect(hookReturn.result.current.isLoading).toBe(false)
  })

  it('Handles successful account registration with Google', async () => {
    const state = buildOAuthState({ registrationUsername: 'newUsername' })
    const encodedState = encodeAndStoreState(state)
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.GOOGLE}&state=${encodedState}`,
    )
    mockOAuthRegisterAccountStep2.mockResolvedValue(successfulLoginResponse)
    mockSetAccessTokenCookie.mockResolvedValue(undefined)
    const hookReturn = renderHook({
      onSignInComplete,
      isInitializingSession: false,
    })
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthRegisterAccountStep2).toHaveBeenCalledWith(
        state.registrationUsername,
        OAUTH2_PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost:3000/?provider=${OAUTH2_PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(onSignInComplete).toHaveBeenCalled()

      expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })
  it('Handles ORCID binding', async () => {
    const encodedState = encodeAndStoreState(buildOAuthState())
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.ORCID}&state=${encodedState}`,
    )
    mockBindOAuthProviderToAccount.mockResolvedValue(successfulLoginResponse)

    const hookReturn = renderHook(
      {
        onSignInComplete,
        token: MOCK_ACCESS_TOKEN,
        isInitializingSession: false,
      }, // User is logged in
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        OAUTH2_PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost:3000/?provider=${OAUTH2_PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })
  it('Handles ORCID binding failure', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const encodedState = encodeAndStoreState(buildOAuthState())
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.ORCID}&state=${encodedState}`,
    )

    const mockOnError = vi.fn()
    const error = new SynapseClientError(
      400,
      'some reason',
      expect.getState().currentTestName!,
    )
    mockBindOAuthProviderToAccount.mockRejectedValue(error)

    const hookReturn = renderHook(
      {
        onSignInComplete,
        onError: mockOnError,
        token: MOCK_ACCESS_TOKEN,
        isInitializingSession: false,
      }, // User is logged in
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        OAUTH2_PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost:3000/?provider=${OAUTH2_PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockOnError).toHaveBeenCalledWith(error.reason)

      expect(onSignInComplete).not.toHaveBeenCalled()
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
    consoleSpy.mockReset()
  })

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Handles successful login with %s',
    async provider => {
      const encodedState = encodeAndStoreState(buildOAuthState())
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      mockOAuthSessionRequest.mockResolvedValue(successfulLoginResponse)
      mockSetAccessTokenCookie.mockResolvedValue(undefined)

      const hookReturn = renderHook({
        onSignInComplete: onSignInComplete,
        isInitializingSession: false,
      })

      // Should initially be loading
      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost:3000/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )

        expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
          successfulLoginResponse.accessToken,
        )
        expect(onSignInComplete).toHaveBeenCalled()
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
    },
  )

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Handles 2fa scenario on login with %s',
    async provider => {
      const encodedState = encodeAndStoreState(buildOAuthState())
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      const mockOn2fa = vi.fn()
      mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

      const hookReturn = renderHook({
        onSignInComplete,
        onTwoFactorAuthRequired: mockOn2fa,
        isInitializingSession: false,
      })

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost:3000/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockOn2fa).toHaveBeenCalledWith(twoFactorAuthErrorResponse)
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
    },
  )

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Handles 2fa scenario on login with %s where a twoFaResetToken is passed in state',
    async provider => {
      const state = buildOAuthState({ twoFaResetToken: 'asdf' })
      const encodedState = encodeAndStoreState(state)
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      const mockOn2faReset = vi.fn()
      mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

      const hookReturn = renderHook({
        onSignInComplete,
        onTwoFactorAuthResetTokenPresent: mockOn2faReset,
        isInitializingSession: false,
      })

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost:3000/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockOn2faReset).toHaveBeenCalledWith(
          twoFactorAuthErrorResponse,
          state.twoFaResetToken,
        )
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
    },
  )

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Redirects to account registration on failed login with %s where the status is 404',
    async provider => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      const encodedState = encodeAndStoreState(buildOAuthState())
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      const notFoundError = new SynapseClientError(
        404,
        'not found',
        expect.getState().currentTestName!,
      )

      mockOAuthSessionRequest.mockRejectedValue(notFoundError)

      const hookReturn = renderHook({
        onSignInComplete,
        isInitializingSession: false,
      })

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost:3000/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(window.location.replace).toHaveBeenCalledWith(
          'http://localhost:3000/register1',
        )
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
      consoleSpy.mockReset()
    },
  )

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Handles other error on login with %s',
    async provider => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      const encodedState = encodeAndStoreState(buildOAuthState())
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      const unhandledError = new SynapseClientError(
        500,
        'other error',
        expect.getState().currentTestName!,
      )

      mockOAuthSessionRequest.mockRejectedValue(unhandledError)
      const mockOnError = vi.fn()

      const hookReturn = renderHook({
        onSignInComplete,
        onError: mockOnError,
        isInitializingSession: false,
      })
      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost:3000/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()

        expect(mockOnError).toHaveBeenCalledWith(unhandledError.reason)
        // Should not redirect to account creation
        expect(window.location.href).not.toEqual(
          'https://accounts.synapse.org/register1',
        )
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
      consoleSpy.mockReset()
    },
  )

  it('Aborts the OAuth flow when the CSRF token does not match', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const state = buildOAuthState()
    const encodedState = encodeURIComponent(JSON.stringify(state))
    localStorage.setItem(CSRF_TOKEN_STORAGE_KEY, 'different-token')

    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.GOOGLE}&state=${encodedState}`,
    )
    const mockOnError = vi.fn()

    const hookReturn = renderHook({
      onSignInComplete,
      onError: mockOnError,
      isInitializingSession: false,
    })

    await waitFor(() => {
      expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
      expect(mockOnError).toHaveBeenCalledWith(
        'Invalid OAuth state. Please try signing in again.',
      )
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
    consoleSpy.mockRestore()
  })

  test('Does not attempt to use the state param if we are acting as identity provider', async () => {
    const provider = OAUTH2_PROVIDERS[LOGIN_METHOD_OAUTH2_GOOGLE]
    const state: string = 'd9320jdmfion2f' // arbitrary string passed by external client -- should NOT be parsed
    const encodedState = encodeURIComponent(state)

    // The client_id and redirect_uri are set, so the hook will recognize that an external client is using Synapse as an IdP
    const urlParams = new URLSearchParams()
    urlParams.set('client_id', '10000')
    urlParams.set(
      'redirect_uri',
      'https://www.certification.openid.net/test/a/Synapse/callback',
    )
    urlParams.set('state', encodedState)
    urlParams.set('provider', provider)
    urlParams.set('code', authorizationCode)

    history.replaceState({}, '', `/?${urlParams.toString()}`)
    const mockOn2faReset = vi.fn()
    mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

    const hookReturn = renderHook({
      onSignInComplete,
      onTwoFactorAuthResetTokenPresent: mockOn2faReset,
      isInitializingSession: false,
    })

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        provider,
        authorizationCode,
        `http://localhost:3000/?provider=${provider}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      // mockOn2faReset would only be called if noParseStateParam was false
      expect(mockOn2faReset).not.toHaveBeenCalled()
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).not.toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })
})
