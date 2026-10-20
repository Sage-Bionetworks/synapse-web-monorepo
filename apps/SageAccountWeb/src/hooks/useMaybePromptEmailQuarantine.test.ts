import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { useLocation, useNavigate, Location } from 'react-router'
import { storeLastPlace } from 'synapse-react-client/utils/AppUtils/AppUtils'
import {
  ApplicationSessionContextType,
  useApplicationSessionContext,
} from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { useGetNotificationEmail } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { vi } from 'vitest'
import { SKIPPED_EMAIL_UNDELIVERABLE_SESSIONSTORAGE_KEY } from '@/utils/StorageKeys'
import { SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY } from './useMaybePromptToSignTermsOfService'
import useMaybePromptEmailQuarantine, {
  EMAIL_QUARANTINED_PATH,
} from './useMaybePromptEmailQuarantine'

vi.mock('synapse-react-client/utils/AppUtils/AppUtils', () => ({
  storeLastPlace: vi.fn(),
}))

vi.mock(
  'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext',
  () => ({
    useApplicationSessionContext: vi.fn(),
  }),
)

vi.mock('synapse-react-client/utils/context/SynapseContext', () => ({
  useSynapseContext: vi.fn(),
}))

vi.mock('synapse-react-client/synapse-queries/user/useUserBundle', () => ({
  useGetNotificationEmail: vi.fn(),
}))

vi.mock('react-router', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}))

const mockLocation: Location = {
  key: '',
  state: undefined,
  pathname: '/',
  search: '',
  hash: '',
  mask: undefined,
}

const quarantinedNotificationEmail = {
  email: 'user@example.com',
  quarantineStatus: {
    reason: 'PERMANENT_BOUNCE' as const,
    reasonDetails: '550 mailbox unavailable',
    expiration: '2027-01-01T00:00:00.000Z',
  },
}

const mockNavigate = vi.fn()
const mockUseGetNotificationEmail = vi.mocked(useGetNotificationEmail)

function mockTermsOfServiceState(
  userCurrentTermsOfServiceState: TermsOfServiceState,
) {
  vi.mocked(useApplicationSessionContext).mockReturnValue({
    termsOfServiceStatus: {
      userId: '1234',
      userCurrentTermsOfServiceState,
      lastAgreementDate: new Date().toISOString(),
    },
  } as ApplicationSessionContextType)
}

function mockNotificationEmailQuery(result: {
  data?: typeof quarantinedNotificationEmail | { email: string }
  isLoading?: boolean
}) {
  mockUseGetNotificationEmail.mockReturnValue({
    data: result.data,
    isLoading: result.isLoading ?? false,
  } as ReturnType<typeof useGetNotificationEmail>)
}

describe('useMaybePromptEmailQuarantine', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    sessionStorage.clear()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    vi.mocked(useLocation).mockReturnValue(mockLocation)
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
    } as ReturnType<typeof useSynapseContext>)
    mockTermsOfServiceState(TermsOfServiceState.UP_TO_DATE)
  })

  it('saves the current page and redirects to the email page when the notification email is quarantined', async () => {
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(EMAIL_QUARANTINED_PATH)
    })
    expect(storeLastPlace).toHaveBeenCalled()
    expect(hook.result.current.mayPromptEmailQuarantine).toBe(true)
  })

  it('does not redirect and reports no prompt when the notification email is not quarantined', async () => {
    mockNotificationEmailQuery({ data: { email: 'user@example.com' } })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    await waitFor(() => {
      expect(hook.result.current.mayPromptEmailQuarantine).toBe(false)
    })
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('does not redirect and reports no prompt when the user skipped the prompt this session', async () => {
    sessionStorage.setItem(
      SKIPPED_EMAIL_UNDELIVERABLE_SESSIONSTORAGE_KEY,
      'true',
    )
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    await waitFor(() => {
      expect(hook.result.current.mayPromptEmailQuarantine).toBe(false)
    })
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('does not redirect when the user is already on the email page', async () => {
    vi.mocked(useLocation).mockReturnValue({
      ...mockLocation,
      pathname: EMAIL_QUARANTINED_PATH,
    })
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    await waitFor(() => {
      expect(hook.result.current.mayPromptEmailQuarantine).toBe(true)
    })
    expect(mockNavigate).not.toHaveBeenCalled()
    expect(storeLastPlace).not.toHaveBeenCalled()
  })

  it('waits while the notification email is loading', () => {
    mockNotificationEmailQuery({ isLoading: true })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    expect(hook.result.current.mayPromptEmailQuarantine).toBe(true)
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('does not redirect when the user is not signed in', () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: false,
    } as ReturnType<typeof useSynapseContext>)
    mockNotificationEmailQuery({ data: undefined })

    renderHook(() => useMaybePromptEmailQuarantine())

    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('waits for the user to resolve pending terms of service before redirecting', () => {
    mockTermsOfServiceState(TermsOfServiceState.MUST_AGREE_NOW)
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    const hook = renderHook(() => useMaybePromptEmailQuarantine())

    expect(mockNavigate).not.toHaveBeenCalled()
    expect(storeLastPlace).not.toHaveBeenCalled()
    expect(hook.result.current.mayPromptEmailQuarantine).toBe(true)
  })

  it('redirects when the user skipped signing the updated terms of service this session', async () => {
    sessionStorage.setItem(SKIPPED_SIGNING_TOS_SESSIONSTORAGE_KEY, 'true')
    mockTermsOfServiceState(TermsOfServiceState.MUST_AGREE_SOON)
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    renderHook(() => useMaybePromptEmailQuarantine())

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(EMAIL_QUARANTINED_PATH)
    })
  })

  it.each([
    '/authenticated/2faRequired',
    '/authenticated/2fa/enroll',
    '/authenticated/currentaffiliation',
    '/register1',
    '/register2',
  ])('does not interrupt the user while they are on %s', pathname => {
    vi.mocked(useLocation).mockReturnValue({ ...mockLocation, pathname })
    mockNotificationEmailQuery({ data: quarantinedNotificationEmail })

    renderHook(() => useMaybePromptEmailQuarantine())

    expect(mockNavigate).not.toHaveBeenCalled()
    expect(storeLastPlace).not.toHaveBeenCalled()
  })
})
