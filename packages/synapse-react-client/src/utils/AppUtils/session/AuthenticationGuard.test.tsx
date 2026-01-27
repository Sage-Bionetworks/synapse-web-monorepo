import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { AuthenticationGuard } from './AuthenticationGuard'
import * as SynapseContextModule from '../../context/SynapseContext'
import * as ApplicationSessionContextModule from './ApplicationSessionContext'
import * as AppUtilsModule from '../AppUtils'
import * as UseOneSageURLModule from '../../hooks/useOneSageURL'
import { ApplicationSessionContextType } from './ApplicationSessionContext'
import { SynapseContextType } from '../../context/SynapseContext'

vi.mock('../../context/SynapseContext', () => ({
  useSynapseContext: vi.fn(),
}))

vi.mock('./ApplicationSessionContext', () => ({
  useApplicationSessionContext: vi.fn(),
}))

vi.mock('../../hooks/useOneSageURL', () => ({
  useOneSageURL: vi.fn(),
}))

vi.mock('../AppUtils', () => ({
  storeRedirectURLForOneSageLoginAndGotoURL: vi.fn(),
}))

const mockUseSynapseContext = vi.mocked(SynapseContextModule.useSynapseContext)
const mockUseApplicationSessionContext = vi.mocked(
  ApplicationSessionContextModule.useApplicationSessionContext,
)
const mockUseOneSageURL = vi.mocked(UseOneSageURLModule.useOneSageURL)
const mockStoreRedirectURL = vi.mocked(
  AppUtilsModule.storeRedirectURLForOneSageLoginAndGotoURL,
)

const mockOneSageURL = new URL('https://accounts.synapse.org/login')

// Helper function to create a minimal mock of ApplicationSessionContextType
function createMockSessionContext(
  overrides: Partial<ApplicationSessionContextType> = {},
): ApplicationSessionContextType {
  return {
    hasInitializedSession: false,
    refreshSession: vi.fn(),
    clearSession: vi.fn(),
    isLoadingSSO: false,
    ...overrides,
  }
}

// Helper function to create a minimal mock of SynapseContextType
function createMockSynapseContext(
  overrides: Partial<SynapseContextType> = {},
): SynapseContextType {
  return {
    isAuthenticated: false,
    accessToken: undefined,
    isInExperimentalMode: false,
    utcTime: false,
    withErrorBoundary: false,
    downloadCartPageUrl: '/DownloadCart',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keyFactory: {} as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    synapseClient: {} as any,
    ...overrides,
  }
}

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseOneSageURL.mockReturnValue(mockOneSageURL)
  })

  describe('Loading state', () => {
    it('should show loading screen while session is initializing', () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: false,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: false,
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()
      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
    })

    it('should show loading screen until hasCheckedAuth is set to true', () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: false,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: true,
          accessToken: 'token',
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Shows loading while session hasn't initialized
      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()
      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
    })
  })

  describe('Unauthenticated user redirect', () => {
    it('should redirect unauthenticated users to OneSage login', async () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: false,
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Wait for the effect to run
      await waitFor(() => {
        expect(mockStoreRedirectURL).toHaveBeenCalledWith(
          mockOneSageURL.toString(),
        )
      })

      // Should show redirect loading screen
      expect(screen.getByText('Redirecting to sign in...')).toBeInTheDocument()
      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
    })

    it('should store the redirect URL for post-login navigation', async () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: false,
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      await waitFor(() => {
        expect(mockStoreRedirectURL).toHaveBeenCalledTimes(1)
        expect(mockStoreRedirectURL).toHaveBeenCalledWith(
          'https://accounts.synapse.org/login',
        )
      })
    })

    it('should not trigger redirect multiple times', async () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: false,
        }),
      )

      const { rerender } = render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      await waitFor(() => {
        expect(mockStoreRedirectURL).toHaveBeenCalledTimes(1)
      })

      // Rerender the component
      rerender(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Should not trigger redirect again
      expect(mockStoreRedirectURL).toHaveBeenCalledTimes(1)
    })
  })

  describe('Authenticated user', () => {
    it('should render children when user is authenticated', async () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: true,
          accessToken: 'token',
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      await waitFor(() => {
        expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      })

      expect(
        screen.queryByText('Checking authentication...'),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText('Redirecting to sign in...'),
      ).not.toBeInTheDocument()
    })

    it('should not call redirect function when user is authenticated', async () => {
      mockUseApplicationSessionContext.mockReturnValue(
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: true,
          accessToken: 'token',
        }),
      )

      render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      await waitFor(() => {
        expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      })

      expect(mockStoreRedirectURL).not.toHaveBeenCalled()
    })
  })

  describe('Session initialization flow', () => {
    it('should transition from loading to authenticated state', async () => {
      let hasInitialized = false

      mockUseApplicationSessionContext.mockImplementation(() =>
        createMockSessionContext({
          hasInitializedSession: hasInitialized,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: true,
          accessToken: 'token',
        }),
      )

      const { rerender } = render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Initially loading
      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()
      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()

      // Update to initialized
      hasInitialized = true
      mockUseApplicationSessionContext.mockImplementation(() =>
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )

      rerender(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Now authenticated
      await waitFor(() => {
        expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      })
    })

    it('should transition from loading to redirect state for unauthenticated users', async () => {
      let hasInitialized = false

      mockUseApplicationSessionContext.mockImplementation(() =>
        createMockSessionContext({
          hasInitializedSession: hasInitialized,
        }),
      )
      mockUseSynapseContext.mockReturnValue(
        createMockSynapseContext({
          isAuthenticated: false,
        }),
      )

      const { rerender } = render(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Initially loading
      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()

      // Update to initialized
      hasInitialized = true
      mockUseApplicationSessionContext.mockImplementation(() =>
        createMockSessionContext({
          hasInitializedSession: true,
        }),
      )

      rerender(
        <AuthenticationGuard>
          <div data-testid="protected-content">Protected Content</div>
        </AuthenticationGuard>,
      )

      // Should transition to redirect state
      await waitFor(() => {
        expect(mockStoreRedirectURL).toHaveBeenCalled()
        expect(
          screen.getByText('Redirecting to sign in...'),
        ).toBeInTheDocument()
      })
    })
  })
})
