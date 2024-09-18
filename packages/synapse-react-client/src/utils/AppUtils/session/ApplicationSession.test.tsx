import React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import ApplicationSessionManager, {
  ApplicationSessionManagerProps,
} from './ApplicationSessionManager'
import {
  ApplicationSessionContextType,
  useApplicationSessionContext,
} from './ApplicationSessionContext'
import { SynapseClient } from '../../../index'
import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '../../../mocks/user/mock_user_profile'
import { SynapseClientError } from 'synapse-client'
import { MemoryRouter } from 'react-router-dom'
import * as UseDetectSSOCodeModule from '../../hooks/useDetectSSOCode'
import { UseDetectSSOCodeOptions } from '../../hooks/useDetectSSOCode'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { MOCK_ACCESS_TOKEN } from '../../../mocks/MockSynapseContext'

function render(props?: ApplicationSessionManagerProps) {
  return renderHook(() => useApplicationSessionContext(), {
    wrapper: ({ children }) => {
      return (
        <MemoryRouter>
          <ApplicationSessionManager {...props}>
            {children}
          </ApplicationSessionManager>
        </MemoryRouter>
      )
    },
  })
}

const mockUseDetectSSOCode = jest
  .spyOn(UseDetectSSOCodeModule, 'default')
  .mockReturnValue({ isLoading: false })

const EXPECTED_ANONYMOUS_STATE: Partial<ApplicationSessionContextType> = {
  token: undefined,
  acceptsTermsOfUse: undefined,
  hasInitializedSession: true,
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}

const EXPECTED_AUTH_STATE: Partial<ApplicationSessionContextType> = {
  token: MOCK_ACCESS_TOKEN,
  acceptsTermsOfUse: true,
  hasInitializedSession: true,
  twoFactorAuthSSOErrorResponse: undefined,
  isLoadingSSO: false,
}

const EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED: Partial<ApplicationSessionContextType> =
  { ...EXPECTED_AUTH_STATE, acceptsTermsOfUse: false }

describe('ApplicationSessionManager tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockGetAccessToken = jest.spyOn(
    SynapseClient,
    'getAccessTokenFromCookie',
  )
  const signOutSpy = jest.spyOn(SynapseClient, 'signOut')
  const mockGetUserProfile = jest.spyOn(SynapseClient, 'getUserProfile')
  const mockAuthenticatedOn = jest.spyOn(SynapseClient, 'getAuthenticatedOn')

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
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockGetUserProfile).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('User has not accepted terms of use', async () => {
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockGetUserProfile.mockRejectedValue(
      new SynapseClientError(
        403,
        'Terms of use have not been signed.',
        expect.getState().currentTestName!,
      ),
    )

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockGetUserProfile).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(
        EXPECTED_AUTH_STATE_TERMS_NOT_ACCEPTED,
      )
    })
  })

  it('Finishes SSO authentication', async () => {
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
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)
    mockUseDetectSSOCode.mockReturnValue({ isLoading: false })

    // useDetectSSOCode will then invoke onSignInComplete to refresh the session
    const options: UseDetectSSOCodeOptions =
      mockUseDetectSSOCode.mock.calls[0]![0]!
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
      mockUseDetectSSOCode.mock.calls[0]![0]!
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

    const mockOnTwoFactorAuthResetThroughSSO = jest.fn()

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

    // Using the app's Login component, the user logs in. the component invokes refreshSession once the token is stored
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)

    // Call under test
    await context.result.current.refreshSession()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockGetUserProfile).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })
  })

  it('Session can be cleared', async () => {
    // Start signed in
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)

    const context = render()

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockGetUserProfile).toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_AUTH_STATE)
    })

    // Signing out would update the return value of this call
    mockGetAccessToken.mockResolvedValue(undefined)

    // Call under test
    await context.result.current.clearSession()

    await waitFor(() => {
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })

  it('authenticatedOn difference is less than maxAge', async () => {
    // User authenticated 5 minutes ago, maxAge is 1 hour
    const authenticatedOn = dayjs.utc().subtract(5, 'minutes').format()
    const maxAge = 60 * 60
    mockGetAccessToken.mockResolvedValue(MOCK_ACCESS_TOKEN)
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)
    mockAuthenticatedOn.mockResolvedValue({
      authenticatedOn,
    })

    const context = render({
      maxAge,
    })

    await waitFor(() => {
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(mockGetUserProfile).toHaveBeenCalled()
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
    mockGetUserProfile.mockResolvedValue(mockUserProfileData)

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
      expect(mockGetUserProfile).not.toHaveBeenCalled()
      expect(signOutSpy).not.toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })

  it('Calls onNoAccessTokenFound prop on error', async () => {
    const onNoAccessTokenFound = jest.fn()
    const error = new SynapseClientError(
      500,
      'some error',
      expect.getState().currentTestName!,
    )
    mockGetAccessToken.mockRejectedValue(error)

    const context = render({ onNoAccessTokenFound })

    await waitFor(() => {
      expect(onNoAccessTokenFound).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })

  it('Calls onNoAccessTokenFound prop when undefined token', async () => {
    mockGetAccessToken.mockResolvedValue(undefined)
    const onNoAccessTokenFound = jest.fn()

    const context = render({ onNoAccessTokenFound })

    await waitFor(() => {
      expect(onNoAccessTokenFound).toHaveBeenCalled()
      expect(mockGetAccessToken).toHaveBeenCalled()
      expect(signOutSpy).toHaveBeenCalled()
      expect(context.result.current).toMatchObject(EXPECTED_ANONYMOUS_STATE)
    })
  })
})
