import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TwoFactorAuthSettingsPanel, {
  TwoFactorAuthSettingsPanelProps,
} from './TwoFactorAuthSettingsPanel'

const mockOnRegenerateBackupCodes = vi.fn()
const mockOnReset2FA = vi.fn()

function renderComponent(props: TwoFactorAuthSettingsPanelProps) {
  return render(<TwoFactorAuthSettingsPanel {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('TwoFactorAuthSettingsPanel', () => {
  beforeEach(() => vi.clearAllMocks())

  it('Shows a title if hideTitle is not provided', async () => {
    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onReset2FA: mockOnReset2FA,
    })

    await screen.findByRole('heading', {
      name: 'Two-factor Authentication (2FA)',
    })
  })

  it('Does not show a title if hideTitle is true', async () => {
    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onReset2FA: mockOnReset2FA,
      hideTitle: true,
    })
    // Ensure something in the component is rendered before we query for the title
    await screen.findByText('Required for all projects and all users.')

    expect(
      screen.queryByRole('heading', {
        name: 'Two-factor Authentication (2FA)',
      }),
    ).not.toBeInTheDocument()
  })

  it('Shows 2FA is active and provides options to regenerate backup codes', async () => {
    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onReset2FA: mockOnReset2FA,
    })

    await screen.findByText('Two-factor Authentication (2FA)')

    const regenerateCodesButton = await screen.findByRole('button', {
      name: 'Regenerate Backup Codes',
    })
    await userEvent.click(regenerateCodesButton)
    await waitFor(() =>
      expect(mockOnRegenerateBackupCodes).toHaveBeenCalledTimes(1),
    )
  })
  it('Shows 2FA is active and provides options to reset 2FA', async () => {
    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onReset2FA: mockOnReset2FA,
    })

    await screen.findByText('Two-factor Authentication (2FA)')

    const button = await screen.findByRole('button', {
      name: 'Reset 2FA',
    })
    await userEvent.click(button)
    await waitFor(() => expect(mockOnReset2FA).toHaveBeenCalledTimes(1))
  })
})
