import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import * as ApplicationSessionContextModule from '@/utils/AppUtils/session/ApplicationSessionContext'
import { ApplicationSessionContextType } from '@/utils/AppUtils/session/ApplicationSessionContext'
import * as SynapseContextModule from '@/utils/context/SynapseContext'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { MOCK_APPLICATION_SESSION_CONTEXT } from '@/mocks/applicationSessionContext/MockApplicationSessionContext'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import ClientError from './ClientError'

vi.mock('@/utils/AppUtils/session/ApplicationSessionContext', () => ({
  useApplicationSessionContext: vi.fn(),
}))

vi.mock('@/utils/context/SynapseContext', () => ({
  useSynapseContext: vi.fn(),
}))

const mockUseApplicationSessionContext = vi.mocked(
  ApplicationSessionContextModule.useApplicationSessionContext,
)
const mockUseSynapseContext = vi.mocked(SynapseContextModule.useSynapseContext)

function mockSession(
  overrides: Partial<ApplicationSessionContextType> = {},
): void {
  mockUseApplicationSessionContext.mockReturnValue({
    ...MOCK_APPLICATION_SESSION_CONTEXT,
    ...overrides,
  })
}

function mockSynapse(overrides: Partial<SynapseContextType> = {}): void {
  mockUseSynapseContext.mockReturnValue({
    ...MOCK_CONTEXT_VALUE,
    ...overrides,
  })
}

const error401 = new SynapseClientError(
  401,
  'Unauthorized',
  'https://repo-prod.prod.sagebase.org',
)
const error403 = new SynapseClientError(
  403,
  'You do not have permission',
  'https://repo-prod.prod.sagebase.org',
)
const error500 = new SynapseClientError(
  500,
  'Internal Server Error',
  'https://repo-prod.prod.sagebase.org',
)

const loader = <div role="progressbar">Loading...</div>

describe('ClientError', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('when session is not yet initialized with a login error', () => {
    it('shows a loading spinner when a reloadFn is provided', () => {
      mockSession({ hasInitializedSession: false })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })

      render(
        <ClientError
          error={error401}
          reloadFn={vi.fn()}
          loadingIndicator={loader}
        />,
      )

      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('does not show a loading spinner when no reloadFn is provided', () => {
      mockSession({ hasInitializedSession: false })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })

      render(<ClientError error={error401} loadingIndicator={loader} />)

      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
      expect(screen.getByText(error401.reason)).toBeInTheDocument()
    })
  })

  describe('when session is initialized and the user is not authenticated', () => {
    beforeEach(() => {
      mockSession({ hasInitializedSession: true })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })
    })

    it('shows a sign-in prompt for a 401 error', () => {
      render(<ClientError error={error401} loadingIndicator={loader} />)

      expect(screen.getByText(/to view this resource/)).toBeInTheDocument()
    })

    it('shows a sign-in prompt for a 403 error', () => {
      render(<ClientError error={error403} loadingIndicator={loader} />)

      expect(screen.getByText(/to view this resource/)).toBeInTheDocument()
    })
  })

  describe('when session is initialized and the user is authenticated', () => {
    beforeEach(() => {
      mockSession({ hasInitializedSession: true })
      mockSynapse({ isAuthenticated: true })
    })

    it('shows an access denied message for a 403 error', () => {
      render(<ClientError error={error403} loadingIndicator={loader} />)

      expect(
        screen.getByText('You are not authorized to access this resource.'),
      ).toBeInTheDocument()
    })

    it('shows the error reason for a 500 error', () => {
      render(<ClientError error={error500} loadingIndicator={loader} />)

      expect(screen.getByText(error500.reason)).toBeInTheDocument()
    })

    it('toggles the error details for a 403 access denied error', async () => {
      const user = userEvent.setup()
      render(<ClientError error={error403} loadingIndicator={loader} />)

      // "Show details" button is visible; details are not yet expanded
      const showButton = screen.getByRole('button', { name: 'Show details' })
      expect(showButton).toBeInTheDocument()

      // Expand
      await user.click(showButton)
      expect(
        screen.getByRole('button', { name: 'Hide details' }),
      ).toBeInTheDocument()

      // Collapse
      await user.click(screen.getByRole('button', { name: 'Hide details' }))
      expect(
        screen.getByRole('button', { name: 'Show details' }),
      ).toBeInTheDocument()
    })
  })

  describe('auto-reload when session initializes', () => {
    it('calls reloadFn when hasInitializedSession transitions from false to true', async () => {
      const reloadFn = vi.fn()

      mockSession({ hasInitializedSession: false })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })

      const { rerender } = render(
        <ClientError
          error={error401}
          reloadFn={reloadFn}
          loadingIndicator={loader}
        />,
      )

      expect(reloadFn).not.toHaveBeenCalled()

      // Session finishes initializing
      mockSession({ hasInitializedSession: true })
      rerender(
        <ClientError
          error={error401}
          reloadFn={reloadFn}
          loadingIndicator={loader}
        />,
      )

      await waitFor(() => {
        expect(reloadFn).toHaveBeenCalledTimes(1)
      })
    })

    it('does not call reloadFn when hasInitializedSession is already true at mount', async () => {
      const reloadFn = vi.fn()

      mockSession({ hasInitializedSession: true })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })

      render(
        <ClientError
          error={error401}
          reloadFn={reloadFn}
          loadingIndicator={loader}
        />,
      )

      // Allow effects to run
      await waitFor(() => {
        expect(reloadFn).not.toHaveBeenCalled()
      })
    })

    it('does not call reloadFn for a non-login error when session initializes', async () => {
      const reloadFn = vi.fn()

      // Session not initialized, but the error is a 500 — not a login error
      mockSession({ hasInitializedSession: false })
      mockSynapse({ isAuthenticated: false, accessToken: undefined })

      const { rerender } = render(
        <ClientError
          error={error500}
          reloadFn={reloadFn}
          loadingIndicator={loader}
        />,
      )

      mockSession({ hasInitializedSession: true })
      rerender(
        <ClientError
          error={error500}
          reloadFn={reloadFn}
          loadingIndicator={loader}
        />,
      )

      await waitFor(() => {
        expect(reloadFn).not.toHaveBeenCalled()
      })
    })
  })
})
