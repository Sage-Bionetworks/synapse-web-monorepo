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
  sessionToken: 'zxcv',
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
    renderHook(() => useDetectSSOCode())

    expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
    expect(mockOAuthRegisterAccountStep2).not.toHaveBeenCalled()
    expect(mockBindOAuthProviderToAccount).not.toHaveBeenCalled()
  })

  it('Handles successful login with Google', async () => {
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.GOOGLE}`,
    )
    mockOAuthSessionRequest.mockResolvedValue(successfulLoginResponse)
    mockSetAccessTokenCookie.mockResolvedValue(undefined)

    renderHook(() => useDetectSSOCode())
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

    renderHook(() => useDetectSSOCode({ onTwoFactorAuthRequired: mockOn2fa }))

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockOn2fa).toHaveBeenCalledWith(
        twoFactorAuthErrorResponse,
        expect.anything(),
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
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

    renderHook(() => useDetectSSOCode())

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()

      expect(window.location.replace).toHaveBeenCalledWith(
        'https://www.synapse.org/#!RegisterAccount:0',
      )
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

    renderHook(() => useDetectSSOCode({ onError: mockOnError }))

    await waitFor(() => {
      expect(mockOAuthSessionRequest).toHaveBeenCalledWith(
        PROVIDERS.GOOGLE,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.GOOGLE}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()

      expect(mockOnError).toHaveBeenCalledWith(unhandledError.reason)
      // Should not redirect to account creation
      expect(window.location.href).not.toEqual(
        'https://www.synapse.org/#!RegisterAccount:0',
      )
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

    renderHook(() => useDetectSSOCode())
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

      expect(mockOAuthSessionRequest).not.toHaveBeenCalled()
    })
  })
  it('Handles ORCID binding', async () => {
    history.replaceState(
      {},
      '',
      `/?code=${authorizationCode}&provider=${PROVIDERS.ORCID}`,
    )
    mockBindOAuthProviderToAccount.mockResolvedValue(successfulLoginResponse)

    renderHook(() => useDetectSSOCode())
    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
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

    renderHook(() => useDetectSSOCode({ onError: mockOnError }))
    await waitFor(() => {
      expect(mockBindOAuthProviderToAccount).toHaveBeenCalledWith(
        PROVIDERS.ORCID,
        authorizationCode,
        `http://localhost/?provider=${PROVIDERS.ORCID}`,
        BackendDestinationEnum.REPO_ENDPOINT,
      )

      expect(mockOnError).toHaveBeenCalledWith(error.reason)

      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
    })
    consoleSpy.mockReset()
  })
})
