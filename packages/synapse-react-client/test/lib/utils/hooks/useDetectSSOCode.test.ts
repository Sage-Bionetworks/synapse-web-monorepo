import { renderHook, waitFor } from '@testing-library/react'
import useDetectSSOCode from '../../../../src/lib/utils/hooks/useDetectSSOCode'
import { SynapseClient } from '../../../../src/lib'
import { LoginResponse } from '../../../../src/lib/utils/synapseTypes'
import { BackendDestinationEnum } from '../../../../src/lib/utils/functions/getEndpoint'
import { SynapseClientError } from '../../../../src/lib/utils/SynapseClientError'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '../../../../src/lib/utils/synapseTypes/ErrorResponse'
import { PROVIDERS } from '../../../../src/lib/containers/auth/AuthenticationMethodSelection'

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

describe('useDetectSSOCode tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    history.replaceState({}, '', `/`)
  })

  it('Does nothing if searchParams are not set', () => {
    const hookReturn = renderHook(() =>
      useDetectSSOCode({ onSignInComplete: onSignInComplete }),
    )

    expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
    expect(mockOAuthRegisterAccountStep2).not.toHaveBeenCalled()
    expect(mockBindOAuthProviderToAccount).not.toHaveBeenCalled()
    expect(onSignInComplete).not.toHaveBeenCalled()
    expect(hookReturn.result.current.isLoading).toBe(false)
  })

  it('Handles successful login with Google', async () => {
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}`,
    )
    mockOAuthSessionRequest.mockResolvedValue(successfulLoginResponse)
    mockSetAccessTokenCookie.mockResolvedValue(undefined)

    const hookReturn = renderHook(() =>
      useDetectSSOCode({ onSignInComplete: onSignInComplete }),
    )

    // Should initially be loading
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(onSignInComplete).toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })

  it('Handles 2fa scenario on login with Google', async () => {
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}`,
    )
    const mockOn2fa = jest.fn()
    mockOAuthSessionRequest.mockResolvedValue(twoFactorAuthErrorResponse)

    const hookReturn = renderHook(() =>
      useDetectSSOCode({
        onSignInComplete,
        onTwoFactorAuthRequired: mockOn2fa,
      }),
    )

    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockOn2fa).toHaveBeenCalledWith(twoFactorAuthErrorResponse)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).not.toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
  })

  it('Redirects to account registration on failed login with Google where the status is 404', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}`,
    )
    const notFoundError = new SynapseClientError(
      404,
      'not found',
      expect.getState().currentTestName!,
    )

    mockOAuthSessionRequest.mockRejectedValue(notFoundError)

    const hookReturn = renderHook(() => useDetectSSOCode({ onSignInComplete }))

    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).not.toHaveBeenCalled()
      expect(window.location.replace).toHaveBeenCalledWith(
        'https://www.synapse.org/#!RegisterAccount:0',
      )
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
    consoleSpy.mockReset()
  })

  it('Handles other error on login with Google', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}`,
    )
    const unhandledError = new SynapseClientError(
      500,
      'other error',
      expect.getState().currentTestName!,
    )

    mockOAuthSessionRequest.mockRejectedValue(unhandledError)
    const mockOnError = jest.fn()

    const hookReturn = renderHook(() =>
      useDetectSSOCode({ onSignInComplete, onError: mockOnError }),
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSignInComplete).not.toHaveBeenCalled()

      expect(mockOnError).toHaveBeenCalledWith(unhandledError.reason)
      // Should not redirect to account creation
      expect(window.location.href).not.toEqual(
        'https://www.synapse.org/#!RegisterAccount:0',
      )
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
    consoleSpy.mockReset()
  })

  it('Handles successful account registration with Google', async () => {
    const state = 'newUsername'
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}&state=${state}`,
    )
    mockOAuthRegisterAccountStep2.mockResolvedValue(successfulLoginResponse)
    mockSetAccessTokenCookie.mockResolvedValue(undefined)
    const hookReturn = renderHook(() => useDetectSSOCode({ onSignInComplete }))
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockOAuthRegisterAccountStep2).toHaveBeenCalledWith(
        state,
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
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
      `/?code=${authorizationCode}&provider=${PROVIDERS.ORCID}`,
    )
    mockBindOAuthProviderToAccount.mockResolvedValue(successfulLoginResponse)

    const hookReturn = renderHook(() => useDetectSSOCode({ onSignInComplete }))
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.ORCID}`,
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
      `/?code=${authorizationCode}&provider=${PROVIDERS.ORCID}`,
    )

    const mockOnError = jest.fn()
    const error = new SynapseClientError(
      400,
      'some reason',
      expect.getState().currentTestName!,
    )
    mockBindOAuthProviderToAccount.mockRejectedValue(error)

    const hookReturn = renderHook(() =>
      useDetectSSOCode({ onSignInComplete, onError: mockOnError }),
    )
    expect(hookReturn.result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockOnError).toHaveBeenCalledWith(error.reason)

      expect(onSignInComplete).not.toHaveBeenCalled()
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(hookReturn.result.current.isLoading).toBe(false)
    })
    consoleSpy.mockReset()
  })
})
