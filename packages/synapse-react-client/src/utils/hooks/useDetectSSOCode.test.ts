import { renderHook as _renderHook, waitFor } from '@testing-library/react'
import useDetectSSOCode, { UseDetectSSOCodeOptions } from './useDetectSSOCode'
import { OAuth2State, SynapseClient } from '../../index'
import {
  ErrorResponseCode,
  LoginResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { BackendDestinationEnum } from '../functions'
import { SynapseClientError } from '../SynapseClientError'
import {
  LOGIN_METHOD_OAUTH2_GOOGLE,
  OAUTH2_PROVIDERS,
} from '../SynapseConstants'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../context'

const authorizationCode = '12345'

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

const onSignInComplete = jest.fn()

const mockOAuthSessionRequest = jest.spyOn(SynapseClient, 'oAuthSessionRequest')
const mockSetAccessTokenCookie = jest.spyOn(
  SynapseClient,
  'setAccessTokenCookie',
)
const mockOAuthRegisterAccountStep2 = jest.spyOn(
  SynapseClient,
  'oAuthRegisterAccountStep2',
)
const mockBindOAuthProviderToAccount = jest.spyOn(
  SynapseClient,
  'bindOAuthProviderToAccount',
)

const AUTHENTICATED_CONTEXT: SynapseContextType = {
  ...MOCK_CONTEXT_VALUE,
}

const UNAUTHENTICATED_CONTEXT: SynapseContextType = {
  ...MOCK_CONTEXT_VALUE,
  accessToken: undefined,
}

describe('useDetectSSOCode tests', () => {
  function renderHook(
    options: UseDetectSSOCodeOptions,
    contextOverrides?: Partial<SynapseContextType>,
  ) {
    return _renderHook(() => useDetectSSOCode(options), {
      wrapper: createWrapper(contextOverrides),
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
    history.replaceState({}, '', `/`)
  })

  it('Does nothing if searchParams are not set', () => {
    const hookReturn = renderHook({ onSignInComplete: onSignInComplete })

    expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
    expect(mockOAuthRegisterAccountStep2).not.toHaveBeenCalled()
    expect(mockBindOAuthProviderToAccount).not.toHaveBeenCalled()
    expect(onSignInComplete).not.toHaveBeenCalled()
    expect(hookReturn.result.current.isLoading).toBe(false)
  })

  it('Handles successful account registration with Google', async () => {
    const state: OAuth2State = { registrationUsername: 'newUsername' }
    const encodedState = encodeURIComponent(JSON.stringify(state))
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.GOOGLE}&state=${encodedState}`,
    )
    mockOAuthRegisterAccountStep2.mockResolvedValue(successfulLoginResponse)
    mockSetAccessTokenCookie.mockResolvedValue(undefined)
    const hookReturn = renderHook({ onSignInComplete }, UNAUTHENTICATED_CONTEXT)
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthRegisterAccountStep2).toHaveBeenCalledWith(
        state.registrationUsername,
        OAUTH2_PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${OAUTH2_PROVIDERS.GOOGLE}`,
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
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.ORCID}`,
    )
    mockBindOAuthProviderToAccount.mockResolvedValue(successfulLoginResponse)

    const hookReturn = renderHook(
      { onSignInComplete },
      // User is logged in
      AUTHENTICATED_CONTEXT,
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        OAUTH2_PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${OAUTH2_PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })
  it('Handles ORCID binding failure', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${OAUTH2_PROVIDERS.ORCID}`,
    )

    const mockOnError = jest.fn()
    const error = new SynapseClientError(
      400,
      'some reason',
      expect.getState().currentTestName!,
    )
    mockBindOAuthProviderToAccount.mockRejectedValue(error)

    const hookReturn = renderHook(
      { onSignInComplete, onError: mockOnError },
      // User is logged in
      AUTHENTICATED_CONTEXT,
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        OAUTH2_PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${OAUTH2_PROVIDERS.ORCID}`,
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
    'Handles successful login with %p',
    async provider => {
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}`,
      )
      mockOAuthSessionRequest.mockResolvedValue(successfulLoginResponse)
      mockSetAccessTokenCookie.mockResolvedValue(undefined)

      const hookReturn = renderHook(
        { onSignInComplete: onSignInComplete },
        UNAUTHENTICATED_CONTEXT,
      )

      // Should initially be loading
      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost/?provider=${provider}`,
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
    'Handles 2fa scenario on login with %p',
    async provider => {
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}`,
      )
      const mockOn2fa = jest.fn()
      mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

      const hookReturn = renderHook(
        {
          onSignInComplete,
          onTwoFactorAuthRequired: mockOn2fa,
        },
        UNAUTHENTICATED_CONTEXT,
      )

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost/?provider=${provider}`,
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
    'Handles 2fa scenario on login with %p where a twoFaResetToken is passed in state',
    async provider => {
      const state: OAuth2State = {
        twoFaResetToken: 'asdf',
      }
      const encodedState = encodeURIComponent(JSON.stringify(state))
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}&state=${encodedState}`,
      )
      const mockOn2faReset = jest.fn()
      mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

      const hookReturn = renderHook(
        {
          onSignInComplete,
          onTwoFactorAuthResetTokenPresent: mockOn2faReset,
        },
        UNAUTHENTICATED_CONTEXT,
      )

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost/?provider=${provider}`,
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
    'Redirects to account registration on failed login with %p where the status is 404',
    async provider => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}`,
      )
      const notFoundError = new SynapseClientError(
        404,
        'not found',
        expect.getState().currentTestName!,
      )

      mockOAuthSessionRequest.mockRejectedValue(notFoundError)

      const hookReturn = renderHook(
        { onSignInComplete },
        UNAUTHENTICATED_CONTEXT,
      )

      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()
        expect(window.location.replace).toHaveBeenCalledWith(
          'https://www.synapse.org/RegisterAccount:0',
        )
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
      consoleSpy.mockReset()
    },
  )

  test.each(Object.values(OAUTH2_PROVIDERS))(
    'Handles other error on login with %p',
    async provider => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      history.replaceState(
        {},
        '',
        `/?code=${authorizationCode}&provider=${provider}`,
      )
      const unhandledError = new SynapseClientError(
        500,
        'other error',
        expect.getState().currentTestName!,
      )

      mockOAuthSessionRequest.mockRejectedValue(unhandledError)
      const mockOnError = jest.fn()

      const hookReturn = renderHook(
        { onSignInComplete, onError: mockOnError },
        UNAUTHENTICATED_CONTEXT,
      )
      expect(hookReturn.result.current.isLoading).toBe(true)

      await waitFor(() => {
        expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
          provider,
          authorizationCode,
          `http://localhost/?provider=${provider}`,
          BackendDestinationEnum.REPO_ENDPOINT,
        )
        expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
        expect(onSignInComplete).not.toHaveBeenCalled()

        expect(mockOnError).toHaveBeenCalledWith(unhandledError.reason)
        // Should not redirect to account creation
        expect(window.location.href).not.toEqual(
          'https://www.synapse.org/RegisterAccount:0',
        )
        expect(hookReturn.result.current.isLoading).toBe(false)
      })
      consoleSpy.mockReset()
    },
  )

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
    const mockOn2faReset = jest.fn()
    mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

    const hookReturn = renderHook(
      {
        onSignInComplete,
        onTwoFactorAuthResetTokenPresent: mockOn2faReset,
      },
      UNAUTHENTICATED_CONTEXT,
    )

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        provider,
        authorizationCode,
        `http://localhost/?provider=${provider}`,
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
