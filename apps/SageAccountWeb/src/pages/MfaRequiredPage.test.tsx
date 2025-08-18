import { render, screen } from '@testing-library/react'
import MfaRequiredPage from './MfaRequiredPage'

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}))
vi.mock('synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag')

describe('MFA Required Page', () => {
  function renderComponent() {
    render(<MfaRequiredPage />)
  }
  test('UI explains that MFA is required', () => {
    renderComponent()

    screen.getByText('Two Factor Authentication (2FA) is now required')
    screen.getByRole('button', { name: 'Activate 2FA to Continue' })

    // No skip button (check can be removed when skip functionality is removed)
    expect(
      screen.queryByRole('button', { name: 'Skip for now' }),
    ).not.toBeInTheDocument()
  })
})
