import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
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
import { defaultQueryClientConfig, SynapseClient } from '../../../index'
import * as UseDetectSSOCodeModule from '../../hooks/useDetectSSOCode'
import { UseDetectSSOCodeOptions } from '../../hooks/useDetectSSOCode'
import {
  ApplicationSessionContextType,
  useApplicationSessionContext,
} from './ApplicationSessionContext'
import ApplicationSessionManager, {
  ApplicationSessionManagerProps,
} from './ApplicationSessionManager'

function render(props?: ApplicationSessionManagerProps) {
  const queryClient = new QueryClient(defaultQueryClientConfig)
  return renderHook(() => useApplicationSessionContext(), {
    wrapper: ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <ApplicationSessionManager {...props}>
              {children}
            </ApplicationSessionManager>
          </MemoryRouter>
        </QueryClientProvider>
      )
    },
  })
}

const mockUseDetectSSOCode = vi
  .spyOn(UseDetectSSOCodeModule, 'default')
  .mockReturnValue({ isLoading: false })

const EXPECTED_ANONYMOUS_STATE: Partial<ApplicationSessionContextType> = {
  token: undefined,
  termsOfServiceStatus: undefined,
  hasInitializedSession: true,
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}
const TERMS_OF_SERVICE_STATUS_UP_TO_DATE: TermsOfServiceStatus = {
  userId: `${MOCK_USER_ID}`,
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
  userId: `${MOCK_USER_ID}`,
  userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
  lastAgreementDate: '',
  lastAgreementVersion: '0.0.0',
}
const EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED: Partial<ApplicationSessionContextType> =
  {
    ...EXPECTED_AUTH_STATE,
    termsOfServiceStatus: TERMS_OF_SERVICE_STATUS_MUST_AGREE_NOW,
  }

describe('ApplicationSessionManager tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mockGetAccessToken = vi.spyOn(SynapseClient, 'getAccessTokenFromCookie')
  const signOutSpy = vi.spyOn(SynapseClient, 'signOut')
  const mockAuthenticatedOn = vi.spyOn(SynapseClient, 'getAuthenticatedOn')
  const mockTermsOfServiceStatus = vi.spyOn(
    SynapseClient,
    'getTermsOfServiceStatus',
  )

  it('Bootstraps when not signed in', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })

  it('Bootstraps when signed in', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('User has not accepted terms of use', async () => {
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_MUST_AGREE_NOW,
    )
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(
        EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED,
      )
    })
  })

  it('Finishes SSO authentication', async () => {
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })
    mockGetAccessToken.mockResolvedValue(undefined)

    const context = render()

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(context.result.current).toMatchObject({
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
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Contains the SSO error object if 2FA is enabled', async () => {
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })
    mockGetAccessToken.mockResolvedValue(undefined)

    const context = render()

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(context.result.current).toMatchObject({
        isLoadingSSO: true,
      })
    })

    // At this point, useDetectSSOCode would determine that the user needs to use a 2FA code to complete sign-in
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })
    const twoFactorAuthError: TwoFactorAuthErrorResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
      userId: MOCK_USER_ID,
      twoFaToken: 'some-token',
      reason: 'need 2fa plz',
    }
    // useDetectSSOCode will then invoke onTwoFactorAuthRequired to pass along the error
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0][0]!
    options.onTwoFactorAuthRequired!(twoFactorAuthError)

    await waitFor(() => {
      expect(context.result.current).toMatchObject({
        ...EXPECTED_ANONYMOUS_STATE,
        twoFactorAuthSSOErrorResponse: twoFactorAuthError,
        isLoadingSSO: false,
      })
    })
  })

  it('Invokes the onTwoFactorAuthResetThroughSSO if the user signed in with SSO to disable 2FA', async () => {
    mockUseDetectSSOCode.mockReturnValue({ isLoading: true })
    mockGetAccessToken.mockResolvedValue(undefined)

    const mockOnTwoFactorAuthResetThroughSSO = vi.fn()

    const context = render({
      onTwoFactorAuthResetThroughSSO: mockOnTwoFactorAuthResetThroughSSO,
    })

    await waitFor(() => {
      expect(mockUseDetectSSOCode).toHaveBeenCalled()
      expect(context.result.current).toMatchObject({
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
      userId: MOCK_USER_ID,
      twoFaToken: 'some-token',
      reason: 'need 2fa plz',
    }
    const twoFactorResetToken = 'abcd'
    // useDetectSSOCode will then invoke onTwoFactorAuthRequired to pass along the error
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0][0]!
    options.onTwoFactorAuthResetTokenPresent!(
      twoFactorAuthError,
      twoFactorResetToken,
    )

    await waitFor(() => {
      expect(context.result.current).toMatchObject({
        ...EXPECTED_ANONYMOUS_STATE,
        twoFactorAuthSSOErrorResponse: twoFactorAuthError,
        isLoadingSSO: false,
      })
      expect(mockOnTwoFactorAuthResetThroughSSO).toHaveBeenCalledWith(
        twoFactorAuthError,
        twoFactorResetToken,
      )
    })
  })

  it('Session can be refreshed', async () => {
    // Start out unauthenticated
    mockGetAccessToken.mockResolvedValue(undefined)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })

    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    // Using the app's Login component, the user logs in. the component invokes refreshSession once the token is stored
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)

    // Call under test
    await context.result.current.refreshSession()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Session can be cleared', async () => {
    // Start signed in
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })

    // Signing out would update the return value of this call
    mockGetAccessToken.mockResolvedValue(undefined)
    // Call under test
    await context.result.current.clearSession()

    await waitFor(() => {
      expect(signOutSpy).toHaveBeenCalled()
    })
  })

  it('authenticatedOn difference is less than maxAge', async () => {
    // User authenticated 5 minutes ago, maxAge is 1 hour
    const authenticatedOn = dayjs.utc().subtract(5, 'minutes').format()
    const maxAge = 60 * 60
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockAuthenticatedOn.mockResolvedValue({
      authenticatedOn,
    })

    const context = render({
      maxAge,
    })

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).toHaveBeenCalled()
      expect(mockAuthenticatedOn).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('authenticatedOn difference is greater than maxAge', async () => {
    // User authenticated 24 hours ago, maxAge is 1 hour
    const authenticatedOn = dayjs.utc().subtract(24, 'hours').format()
    const maxAge = 60 * 60
    const token = 'asdf'
    mockGetAccessToken.mockResolvedValue(token)
    mockTermsOfServiceStatus.mockResolvedValue(
      TERMS_OF_SERVICE_STATUS_UP_TO_DATE,
    )

    console.log(dayjs.utc().subtract(24, 'hours').format())
    mockAuthenticatedOn.mockResolvedValue({
      authenticatedOn,
    })

    const context = render({
      maxAge,
    })

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockAuthenticatedOn).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(mockTermsOfServiceStatus).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
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

    const context = render({ onMissingAuthentication })

    await waitFor(() => {
      expect(onMissingAuthentication).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })

  it('Calls onMissingAuthentication prop when undefined token', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    const onMissingAuthentication = vi.fn()

    const context = render({ onMissingAuthentication })

    await waitFor(() => {
      expect(onMissingAuthentication).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })
})
