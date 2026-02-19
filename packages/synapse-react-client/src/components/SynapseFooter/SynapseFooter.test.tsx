import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SYNAPSE_REALM } from '@/utils/SynapseConstants'
import { SynapseClientError, useApplicationSessionContext } from '@/utils'
import { useGetCurrentRealm } from '@/synapse-queries/realm/useRealmPrincipals'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import { SynapseFooter, SynapseFooterProps } from './SynapseFooter'
import { ApplicationSessionContextType } from '@/utils/AppUtils/session/ApplicationSessionContext'
import { UseQueryResult } from '@tanstack/react-query'
import { Realm } from '@sage-bionetworks/synapse-client'

vi.mock('@/utils', () => ({
  useApplicationSessionContext: vi.fn(),
}))

vi.mock('@/synapse-queries/realm/useRealmPrincipals', () => ({
  useGetCurrentRealm: vi.fn(),
}))

vi.mock('@/utils/hooks/useOneSageURL', () => ({
  useOneSageURL: vi.fn(),
}))

const mockUseApplicationSessionContext = vi.mocked(useApplicationSessionContext)
const mockUseGetCurrentRealm = vi.mocked(useGetCurrentRealm)
const mockUseOneSageURL = vi.mocked(useOneSageURL)

const defaultProps: SynapseFooterProps = {
  portalVersion: '1.0.0',
  srcVersion: '2.0.0',
  repoVersion: '3.0.0',
  gotoPlace: vi.fn(),
  onExperimentalModeToggle: vi.fn(),
}

function renderComponent(props: SynapseFooterProps = defaultProps) {
  return render(<SynapseFooter {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockClearSession = vi.fn()

describe('SynapseFooter', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseApplicationSessionContext.mockReturnValue({
      isAuthenticated: true,
      clearSession: mockClearSession,
    } as unknown as ApplicationSessionContextType)

    mockUseOneSageURL.mockReturnValue(new URL('https://example.org'))
  })

  describe('Realm support', () => {
    it('hides reset realm button when realm is the Synapse realm', () => {
      mockUseGetCurrentRealm.mockReturnValue({
        data: {
          id: SYNAPSE_REALM,
          name: 'Synapse',
        },
      } as UseQueryResult<Realm, SynapseClientError>)

      renderComponent()

      expect(
        screen.queryByRole('button', { name: 'Reset Realm' }),
      ).not.toBeInTheDocument()
    })

    it('shows reset realm button when realm differs and clears the session', async () => {
      mockUseGetCurrentRealm.mockReturnValue({
        data: {
          id: 'syn123',
          name: 'Other Realm',
        },
      } as UseQueryResult<Realm, SynapseClientError>)

      renderComponent()

      const resetButton = screen.getByRole('button', { name: 'Reset Realm' })
      await userEvent.setup().click(resetButton)

      expect(mockClearSession).toHaveBeenCalledTimes(1)
    })
  })
})
