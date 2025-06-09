import { renderHook, waitFor } from '@testing-library/react'
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
    })
  })
})
