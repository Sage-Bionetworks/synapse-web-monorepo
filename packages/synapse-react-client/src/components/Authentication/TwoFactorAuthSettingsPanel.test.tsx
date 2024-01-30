import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import TwoFactorAuthSettingsPanel, {
  TwoFactorAuthSettingsPanelProps,
} from './TwoFactorAuthSettingsPanel'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'

const enabledStatus: TwoFactorAuthStatus = {
  status: 'ENABLED',
}

const disabledStatus: TwoFactorAuthStatus = {
  status: 'DISABLED',
}

const mockGetCurrentEnrollmentStatus = jest.spyOn(
  SynapseClient,
  'getCurrentUserTwoFactorEnrollmentStatus',
)

const mockDisableTwoFactorAuth = jest
  .spyOn(SynapseClient, 'disableTwoFactorAuthForCurrentUser')
  .mockReturnValue(Promise.resolve())

const mockOnRegenerateBackupCodes = jest.fn()
const mockOnBeginTwoFactorEnrollment = jest.fn()

function renderComponent(props: TwoFactorAuthSettingsPanelProps) {
  return render(<TwoFactorAuthSettingsPanel {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('TwoFactorAuthSettingsPanel', () => {
  beforeEach(() => jest.clearAllMocks())

  it('Shows a title if hideTitle is not provided', async () => {
    mockGetCurrentEnrollmentStatus.mockResolvedValue(disabledStatus)

    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onBeginTwoFactorEnrollment: mockOnBeginTwoFactorEnrollment,
    })

    await screen.findByRole('heading', {
      name: 'Two-factor Authentication (2FA)',
    })
  })

  it('Does not show a title if hideTitle is true', async () => {
    mockGetCurrentEnrollmentStatus.mockResolvedValue(disabledStatus)

    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onBeginTwoFactorEnrollment: mockOnBeginTwoFactorEnrollment,
      hideTitle: true,
    })
    // Ensure something in the component is rendered before we query for the title
    await screen.findByText('Inactive')

    expect(
      screen.queryByRole('heading', {
        name: 'Two-factor Authentication (2FA)',
      }),
    ).not.toBeInTheDocument()
  })

  it('Shows 2FA is inactive and provides an option to enroll', async () => {
    mockGetCurrentEnrollmentStatus.mockResolvedValue(disabledStatus)

    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onBeginTwoFactorEnrollment: mockOnBeginTwoFactorEnrollment,
    })

    await screen.findByText('Inactive')
    await screen.findByText('Two-factor Authentication (2FA)')
    await waitFor(() =>
      expect(
        screen.queryByText('Regenerate Backup Codes'),
      ).not.toBeInTheDocument(),
    )
    const activateButton = await screen.findByRole('button', {
      name: 'Activate 2FA',
    })
    await userEvent.click(activateButton)
    await waitFor(() =>
      expect(mockOnBeginTwoFactorEnrollment).toHaveBeenCalledTimes(1),
    )
  })

  it('Shows 2FA is active and provides options to regenerate backup codes or disable 2FA', async () => {
    mockGetCurrentEnrollmentStatus.mockResolvedValue(enabledStatus)

    renderComponent({
      onRegenerateBackupCodes: mockOnRegenerateBackupCodes,
      onBeginTwoFactorEnrollment: mockOnBeginTwoFactorEnrollment,
    })

    await screen.findByText('Active')
    await screen.findByText('Two-factor Authentication (2FA)')

    const regenerateCodesButton = await screen.findByRole('button', {
      name: 'Regenerate Backup Codes',
    })
    await userEvent.click(regenerateCodesButton)
    await waitFor(() =>
      expect(mockOnRegenerateBackupCodes).toHaveBeenCalledTimes(1),
    )

    const deactivateButton = await screen.findByRole('button', {
      name: 'Deactivate 2FA',
    })
    await userEvent.click(deactivateButton)
    await waitFor(() =>
      expect(mockDisableTwoFactorAuth).toHaveBeenCalledTimes(1),
    )
  })
})
