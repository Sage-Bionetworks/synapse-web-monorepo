import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import MfaRequiredPage from './MfaRequiredPage'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag'
import { when } from 'vitest-when'

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
}))
vi.mock('synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag')

describe('MFA Required Page', () => {
  const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)

  function renderComponent() {
    render(<MfaRequiredPage />)
  }
  test('UI explains that MFA is required', () => {
    when(mockUseGetFeatureFlag)
      .calledWith(FeatureFlagEnum.MFA_REQUIRED)
      .thenReturn(true)
    renderComponent()

    screen.getByText('Two Factor Authentication (2FA) is now required')
    screen.getByRole('button', { name: 'Activate 2FA to Continue' })

    // No skip button (check can be removed when skip functionality is removed)
    expect(
      screen.queryByRole('button', { name: 'Skip for now' }),
    ).not.toBeInTheDocument()
  })

  test('UI explains that MFA will be required soon', () => {
    when(mockUseGetFeatureFlag)
      .calledWith(FeatureFlagEnum.MFA_REQUIRED)
      .thenReturn(false)

    renderComponent()

    screen.getByText(
      'Two Factor Authentication (2FA) will be required starting July 1, 2025',
    )
    screen.getByRole('button', { name: 'Activate 2FA to Continue' })
    screen.getByRole('button', { name: 'Skip for now' })
  })
})
