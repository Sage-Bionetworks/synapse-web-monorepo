import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  OAuthTokenIntrospectionResponse,
  RealmPrincipal,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ErrorResponseCode,
  TermsOfServiceState,
  TermsOfServiceStatus,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import dayjs from 'dayjs'
import { MemoryRouter } from 'react-router'
import * as UseDetectSSOCodeModule from '../../hooks/useDetectSSOCode'
import { UseDetectSSOCodeOptions } from '../../hooks/useDetectSSOCode'
import { ApplicationSessionContextType } from './ApplicationSessionContext'
import {
  useApplicationSession,
  UseApplicationSessionOptions,
} from './useApplicationSession'
import { defaultQueryClientConfig } from '@/utils/context'
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

function renderSessionHook(options?: UseApplicationSessionOptions) {
  const queryClient = new QueryClient(defaultQueryClientConfig)
  return renderHook(() => useApplicationSession(options), {
    wrapper: ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>{children}</MemoryRouter>
        </QueryClientProvider>
      )
    },
  })
}

const mockAnonymousToken = 'mock-anonymous-token'

const mockUserId = 123
const mockAnonymousPrincipalId = '888'

const mockUseDetectSSOCode = vi.spyOn(UseDetectSSOCodeModule, 'default')

const MOCK_REALM_PRINCIPAL_AUTHENTICATED: RealmPrincipal = {
  realmId: '0',
  anonymousUser: mockAnonymousPrincipalId,
}

const MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED: OAuthTokenIntrospectionResponse =
  {
    active: true,
    sub: mockUserId.toString(),
    scope: ['openid'],
    token_type: 'OIDC_ACCESS_TOKEN',
    exp: dayjs().add(1, 'hour').unix(),
    iat: dayjs().unix(),
    iss: 'https://repo-prod.prod.sagebase.org/auth/v1',
    aud: '0',
  }

const MOCK_TOKEN_INTROSPECTION_ACTIVE_ANONYMOUS: OAuthTokenIntrospectionResponse =
  {
    active: true,
    sub: mockAnonymousPrincipalId.toString(),
    scope: ['openid'],
    token_type: 'OIDC_ACCESS_TOKEN',
    exp: dayjs().add(1, 'hour').unix(),
    iat: dayjs().unix(),
    iss: 'https://repo-prod.prod.sagebase.org/auth/v1',
    aud: '0',
  }

const MOCK_TOKEN_INTROSPECTION_INACTIVE: OAuthTokenIntrospectionResponse = {
  active: false,
}

const EXPECTED_ANONYMOUS_STATE: Partial<ApplicationSessionContextType> = {
  token: mockAnonymousToken,
  termsOfServiceStatus: undefined,
  hasInitializedSession: true,
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}
const TERMS_OF_SERVICE_STATUS_UP_TO_DATE: TermsOfServiceStatus = {
  userId: mockUserId.toString(),
  userCurrentTermsOfServiceState: TermsOfServiceState.UP_TO_DATE,
  lastAgreementDate: '',
  lastAgreementVersion: '0.0.0',
}
const EXPECTED_AUTH_STATE: Partial<ApplicationSessionContextType> = {
  token: MOCK_ACCESS_TOKEN,
  termsOfServiceStatus: TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
  hasInitializedSession: true,
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}

const TERMS_OF_SERVICE_STATUS_MUST_AGREE_NOW: TermsOfServiceStatus = {
  userId: mockUserId.toString(),
  userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
  lastAgreementDate: '',
  lastAgreementVersion: '0.0.0',
}
const EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED: Partial<ApplicationSessionContextType> =
  {
    ...EXPECTED_AUTH_STATE,
    termsOfServiceStatus: TERMS_OF_SERVICE_STATUS_MUST_AGREE_NOW,
  }

describe('useApplicationSession tests', () => {
  const mockGetAccessToken = vi.spyOn(SynapseClient, 'getAccessTokenFromCookie')
  const signOutSpy = vi
    .spyOn(SynapseClient, 'signOut')
    .mockResolvedValue(mockAnonymousToken)
  const mockTermsOfServiceStatus = vi.spyOn(
    SynapseClient,
    'getTermsOfServiceStatus',
  )

  beforeEach(() => {
    vi.clearAllMocks()
    // Re-establish default mocks after reset
    signOutSpy.mockResolvedValue(mockAnonymousToken)
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })

    // Set up default mock response for realm principals
    mockGetRepoV1RealmPrincipals.mockResolvedValue(
      MOCK_REALM_PRINCIPAL_AUTHENTICATED,
    )
  })

  it('Bootstraps when there is no token', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_ANONYMOUS,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: mockAnonymousToken,
        },
      })
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(
        EXPECTED_ANONYMOUS_STATE,
      )
    })
  })

  it('Bootstraps with an anonymous token', async () => {
    mockGetAccessToken.mockResolvedValue(mockAnonymousToken)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_ANONYMOUS,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: mockAnonymousToken,
        },
      })
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(
        EXPECTED_ANONYMOUS_STATE,
      )
    })
  })
  it('Bootstraps when signed in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalled()
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('User has not accepted terms of use', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_MUST_AGREE_NOW,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalled()
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(
        EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED,
      )
    })
  })

  it('Finishes SSO authentication', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })
    // once the token is set up, these will be called:
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject({
        isLoadingSSO: true,
      })
    })

    // At this point, useDetectSSOCode would use the URL query parameters to finish sign in
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })

    // useDetectSSOCode will then invoke onSignInComplete to refresh the session
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0][0]!
    options.onSignInComplete!()

    await waitFor(() => {
      expect(result.current.sessionContext).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Contains the SSO error object if 2FA is required', async () => {
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })
    mockGetAccessToken.mockResolvedValue(undefined)

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject({
        isLoadingSSO: true,
      })
    })

    // At this point, useDetectSSOCode would determine that the user needs to use a 2FA code to complete sign-in
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })
    const twoFactorAuthError: TwoFactorAuthErrorResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
      userId: mockUserId,
      twoFaToken: 'some-token',
      reason: 'need 2fa plz',
    }
    // useDetectSSOCode will then invoke onTwoFactorAuthRequired to pass along the error
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0][0]!
    options.onTwoFactorAuthRequired!(twoFactorAuthError)

    await waitFor(() => {
      expect(
        result.current.sessionContext.twoFactorAuthSSOErrorResponse,
      ).toEqual(twoFactorAuthError)
      expect(result.current.sessionContext.isLoadingSSO).toBe(false)
    })
  })

  it('Invokes the onTwoFactorAuthResetThroughSSO if the user signed in with SSO to disable 2FA', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })

    const mockOnTwoFactorAuthResetThroughSSO = vi.fn()

    const { result } = renderSessionHook({
      onTwoFactorAuthResetThroughSSO: mockOnTwoFactorAuthResetThroughSSO,
    })

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject({
        isLoadingSSO: true,
      })
    })

    // At this point, useDetectSSOCode would determine that the user
    // 1. received a twoFactorAuthError (because they have 2FA enabled)
    // 2. possesses a twoFaResetToken, so they are attempting to disable 2FA
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })
    const twoFactorAuthError: TwoFactorAuthErrorResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
      userId: mockUserId,
      twoFaToken: 'some-token',
      reason: 'need 2fa plz',
    }
    const twoFactorResetToken = 'abcd'
    // useDetectSSOCode will then invoke onTwoFactorAuthResetTokenPresent to pass along the error
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0][0]!
    options.onTwoFactorAuthResetTokenPresent!(
      twoFactorAuthError,
      twoFactorResetToken,
    )

    await waitFor(() => {
      expect(
        result.current.sessionContext.twoFactorAuthSSOErrorResponse,
      ).toEqual(twoFactorAuthError)
      expect(result.current.sessionContext.isLoadingSSO).toBe(false)
      expect(mockOnTwoFactorAuthResetThroughSSO).toHaveBeenCalledWith(
        twoFactorAuthError,
        twoFactorResetToken,
      )
    })
  })

  it('Session can be refreshed', async () => {
    // Start out unauthenticated
    mockGetAccessToken.mockResolvedValue(undefined)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_ANONYMOUS,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(result.current.sessionContext.token).toBe(mockAnonymousToken)
      expect(result.current.sessionContext.hasInitializedSession).toBe(true)
    })

    // The user logs in (potentially in a different tab).
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )

    // The component will invoke refreshSession after the timer elapses (or it is explicitly invoked)
    // Call under test
    await result.current.sessionContext.refreshSession()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalled()
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Page is reloaded if refreshSession encounters an invalid token', async () => {
    // Start out authenticated with a valid token
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(result.current.sessionContext.token).toBe(MOCK_ACCESS_TOKEN)
      expect(result.current.sessionContext.hasInitializedSession).toBe(true)
    })

    // The user's token becomes invalid (e.g. expired). On session refresh, we should see a sign out and page reload.
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_INACTIVE,
    )
    // Call under test
    await result.current.sessionContext.refreshSession()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(window.location.reload).toHaveBeenCalled()
    })
  })

  it('Session can be cleared', async () => {
    // Start signed in
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )

    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)

    const { result } = renderSessionHook()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalled()
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(EXPECTED_AUTH_STATE)
    })

    // Signing out would update the return value of this call
    mockGetAccessToken.mockResolvedValue(undefined)
    // Call under test
    await result.current.sessionContext.clearSession()

    await waitFor(() => {
      expect(signOutSpy).toHaveBeenCalled()
    })
  })

  it('Token passes introspection when maxAge requirement is met', async () => {
    // Token introspection will validate the token with maxAge parameter
    const maxAge = 60 * 60 // 1 hour
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_ACTIVE_AUTHENTICATED,
    )
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)

    const { result } = renderSessionHook({
      maxAge,
    })

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: MOCK_ACCESS_TOKEN,
          max_age: maxAge,
        },
      })
      expect(mockGetRepoV1RealmPrincipals).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(result.current.sessionContext).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Token fails introspection when token is inactive (e.g., maxAge exceeded)', async () => {
    const maxAge = 60 * 60 // 1 hour
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockPostAuthV1Oauth2Introspect.mockResolvedValue(
      MOCK_TOKEN_INTROSPECTION_INACTIVE,
    )

    renderSessionHook({
      maxAge,
    })

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockPostAuthV1Oauth2Introspect).toHaveBeenCalledWith({
        oAuthTokenIntrospectionRequest: {
          token: MOCK_ACCESS_TOKEN,
          max_age: maxAge,
        },
      })
      expect(signOutSpy).toHaveBeenCalled()
      expect(window.location.reload).toHaveBeenCalled()
    })
  })

  it('Calls onMissingAuthentication prop on error', async () => {
    const onMissingAuthentication = vi.fn()
    const error = new SynapseClientError(
      500,
      'some error',
      expect.getState().currentTestName!,
    )
    mockGetAccessToken.mockRejectedValue(error)

    renderSessionHook({
      onMissingExpectedAuthentication: onMissingAuthentication,
    })

    await waitFor(() => {
      expect(onMissingAuthentication).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
    })
  })

  it('Calls onMissingAuthentication prop when undefined token', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    const onMissingAuthentication = vi.fn()

    renderSessionHook({
      onMissingExpectedAuthentication: onMissingAuthentication,
    })

    await waitFor(() => {
      expect(onMissingAuthentication).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
    })
  })
})
