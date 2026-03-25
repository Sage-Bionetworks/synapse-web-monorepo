import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import {
  ApplicationSessionContextType,
  useApplicationSessionContext,
} from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { vi } from 'vitest'
import useMaybePromptToSignTermsOfService, {
  SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY,
} from './useMaybePromptToSignTermsOfService'
import { useLocation, useNavigate, Location } from 'react-router'

vi.mock('synapse-react-client/utils/AppUtils/AppUtils', () => {
  return {
    storeLastPlace: vi.fn(),
  }
})

vi.mock(
  'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext',
  () => {
    return {
      useApplicationSessionContext: vi.fn(),
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
  isAuthenticated: true,
  hasInitializedSession: true,
  refreshSession: vi.fn(),
  clearSession: vi.fn(),
  isLoadingSSO: false,
  termsOfServiceStatus: {
    userId: '1234',
    userCurrentTermsOfServiceState: TermsOfServiceState.UP_TO_DATE,
    lastAgreementDate: new Date().toISOString(),
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

describe('useMaybeRedirectToSignTermsOfService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('does not redirect and updates state to indicate no redirect when user ToS status is up to date', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.UP_TO_DATE,
        lastAgreementDate: new Date().toISOString(),
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(false)
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })
  it('does not redirect when user ToS is MUST_AGREE_SOON and user has skipped signing updated ToS', async () => {
    sessionStorage.setItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY, 'true')
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_SOON,
        lastAgreementDate: new Date().toISOString(),
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(false)
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })
  it('redirects to signTermsOfUse when user ToS is MUST_AGREE_SOON and user has not skipped signing updated ToS and has never signed ToU', async () => {
    sessionStorage.removeItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY)
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_SOON,
        lastAgreementDate: null,
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith('/authenticated/signTermsOfUse')
    })
  })
  it('redirects to signTermsOfUse when user ToS is MUST_AGREE_NOW and has never signed ToU', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
        lastAgreementDate: null,
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith('/authenticated/signTermsOfUse')
    })
  })

  it('redirects to signUpdatedTermsOfUse when user ToS is MUST_AGREE_SOON and user has not skipped signing updated ToS and has signed ToU', async () => {
    sessionStorage.removeItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY)
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_SOON,
        lastAgreementDate: new Date().toISOString(),
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith(
        '/authenticated/signUpdatedTermsOfUse',
      )
    })
  })
  it('redirects to signTermsOfUse when user ToS is MUST_AGREE_NOW and has signed ToU', async () => {
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
        lastAgreementDate: new Date().toISOString(),
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).toHaveBeenCalledWith(
        '/authenticated/signUpdatedTermsOfUse',
      )
    })
  })

  it('does not redirect when already on signTermsOfUsePage', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/signTermsOfUse',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
        lastAgreementDate: null,
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/signTermsOfUse',
      )
    })
  })

  it('does not redirect when already on signUpdatedTermsOfUsePage', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: '/authenticated/signUpdatedTermsOfUse',
    })
    mockUseApplicationSessionContext.mockReturnValue({
      ...mockApplicationSessionContext,
      termsOfServiceStatus: {
        userId: '1234',
        userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
        lastAgreementDate: new Date().toISOString(),
      },
    })

    const hook = renderHook(() => useMaybePromptToSignTermsOfService())
    await waitFor(() => {
      expect(hook.result.current.mayPromptTermsOfUse).toBe(true)
      expect(mockNavigate).not.toHaveBeenCalledWith(
        '/authenticated/signUpdatedTermsOfUse',
      )
    })
  })
})
