import usePathBefore2FARedirect from '@/hooks/usePathBefore2FARedirect'
import { useSkipMfaPrompt } from '@/hooks/useSkipMfaPrompt'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetCurrentUserProfile } from 'synapse-react-client/synapse-queries/index'
import {
  ApplicationSessionContextType,
  useApplicationSessionContext,
} from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { vi } from 'vitest'
import { useLocation, useNavigate, Location } from 'react-router'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag'
import useMaybeForceEnable2FA from './useMaybeForceEnable2FA'

vi.mock(
  'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext',
  () => {
    return {
      useApplicationSessionContext: vi.fn(),
    }
  },
)

vi.mock(
  'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag',
  () => {
    return {
      useGetFeatureFlag: vi.fn(),
    }
  },
)

vi.mock('react-router', () => {
  return {
    useLocation: vi.fn(),
    useNavigate: vi.fn(),
  }
})

vi.mock('@/hooks/useSkipMfaPrompt')
vi.mock('@/hooks/usePathBefore2FARedirect')

const mockUseSkipMfaPrompt = vi.mocked(useSkipMfaPrompt)
mockUseSkipMfaPrompt.mockReturnValue({
  hasSkippedRecently: false,
  skip: vi.fn(),
})

const mockApplicationSessionContext: ApplicationSessionContextType = {
  hasInitializedSession: true,
  refreshSession: vi.fn(),
  clearSession: vi.fn(),
  isLoadingSSO: false,
  token: 'mockToken',
  twoFactorStatus: {
    status: 'ENABLED',
  },
}

const mockLocation: Location = {
  key: '',
  state: undefined,
  pathname: '/',
  search: '',
  hash: '',
}
const mockUseApplicationSessionContext = vi.mocked(useApplicationSessionContext)
const mockNavigate = vi.fn()
vi.mocked(useNavigate).mockReturnValue(mockNavigate)
vi.mocked(useLocation).mockReturnValue(mockLocation)
const mockFeatureFlagValue = true
vi.mocked(useGetFeatureFlag).mockReturnValue(mockFeatureFlagValue)
const mockSetPathBefore2FARedirect = vi.fn()
vi.mocked(usePathBefore2FARedirect).mockReturnValue({
  value: undefined,
  set: mockSetPathBefore2FARedirect,
  remove: vi.fn(),
  fetch: vi.fn(),
})

describe('useMaybeForceEnable2FA', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('does not redirect and updates state to indicate no redirect when 2FA is enabled', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(false)
      expect(mockNavigate).not.toHaveBeenCalled()
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })
  it('does not redirect when user is not logged in', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      token: undefined,
      twoFactorStatus: undefined,
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalled()
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })
  it('redirects to 2faRequired when user has not enabled 2FA', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith('/authenticated/2faRequired')
      expect(mockSetPathBefore2FARedirect).toHaveBeenLastCalledWith('/')
    })
  })

  it('does not redirect to 2faRequired if user is already on 2faRequired', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/2faRequired',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/2faRequired',
      )
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })
  it('does not redirect to 2faRequired if user is already on 2fa enroll page', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/2fa/enroll',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/2faRequired',
      )
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })
  it('does not redirect to 2faRequired if user is signing the terms of use', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/signTermsOfUse',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/2faRequired',
      )
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })
  it('does not redirect to 2faRequired if user is signing updated terms of use', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/signUpdatedTermsOfUse',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/2faRequired',
      )
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })

  it('does not redirect to 2faRequired if the user has skipped recently and MFA is not required', async () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(false)
    vi.mocked(useSkipMfaPrompt).mockReturnValue({
      hasSkippedRecently: true,
      skip: vi.fn(),
    })
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(false)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/2faRequired',
      )
      expect(mockSetPathBefore2FARedirect).not.toHaveBeenCalled()
    })
  })

  it('redirect to 2faRequired if the user has skipped recently and MFA is required', async () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(true) // Feature flag is on, so user cannot skip
    vi.mocked(useSkipMfaPrompt).mockReturnValue({
      hasSkippedRecently: true,
      skip: vi.fn(),
    })
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith('/authenticated/2faRequired')
      expect(mockSetPathBefore2FARedirect).toHaveBeenLastCalledWith('/')
    })
  })

  it('sets the redirect path to the current path before redirecting to 2faRequired', async () => {
    // Simulate e.g. the account created workflow
    const accountCreatedPath = '/authenticated/accountCreated'
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: accountCreatedPath,
    })
    vi.mocked(useGetFeatureFlag).mockReturnValue(true)
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      twoFactorStatus: {
        status: 'DISABLED',
      },
    })

    const hook = renderHook(() => useMaybeForceEnable2FA())
    await waitFor(() => {
      expect(hook.result.current.mayForceEnable2FA).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith('/authenticated/2faRequired')
      // Verify that the user will be redirected back to the account created path after 2FA enrollment
      expect(mockSetPathBefore2FARedirect).toHaveBeenLastCalledWith(
        accountCreatedPath,
      )
    })
  })
})
