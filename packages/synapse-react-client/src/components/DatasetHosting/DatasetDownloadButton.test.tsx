import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { DatasetDownloadButton } from './DatasetDownloadButton'

describe('DatasetDownloadButton', () => {
  describe('downloadable hosting', () => {
    test('renders an enabled add-to-download button when authenticated', () => {
      render(
        <DatasetDownloadButton entityId="syn123" name="Ds" hosting="synapse" />,
        { wrapper: createWrapper({ isAuthenticated: true }) },
      )
      expect(screen.getByRole('button', { name: 'Download, Ds' })).toBeEnabled()
      expect(screen.queryByRole('link')).not.toBeInTheDocument()
    })

    test('signed out: button stays clickable and flips to a red sign-in CTA', async () => {
      render(
        <DatasetDownloadButton entityId="syn123" name="Ds" hosting="synapse" />,
        { wrapper: createWrapper({ isAuthenticated: false }) },
      )
      const button = screen.getByRole('button', { name: 'Download, Ds' })
      expect(button).toBeEnabled()

      await userEvent.click(button)
      const cta = screen.getByRole('button', {
        name: 'Sign in to download, Ds',
      })
      // Carries the app-wide sign-in class so clicking opens the sign-in modal.
      expect(cta).toHaveClass(SRC_SIGN_IN_CLASS)
    })

    test('labels the button with the repository for external-download', () => {
      render(
        <DatasetDownloadButton
          entityId="syn123"
          name="Ds"
          hosting="external-download"
          repository="GEO"
        />,
        { wrapper: createWrapper({ isAuthenticated: true }) },
      )
      expect(
        screen.getByRole('button', { name: 'Download from GEO, Ds' }),
      ).toBeInTheDocument()
    })
  })

  test('external-access renders a link-out regardless of auth', () => {
    render(
      <DatasetDownloadButton
        name="Ds"
        hosting="external-access"
        repository="dbGaP"
        externalUrl="https://example.org/"
      />,
      { wrapper: createWrapper({ isAuthenticated: false }) },
    )
    expect(
      screen.getByRole('link', { name: 'Access at dbGaP, Ds' }),
    ).toHaveAttribute('href', 'https://example.org/')
  })

  test('unavailable renders a disabled, non-actionable button', () => {
    render(<DatasetDownloadButton name="Ds" hosting="unavailable" />, {
      wrapper: createWrapper({ isAuthenticated: true }),
    })
    expect(
      screen.getByRole('button', { name: /Not available for download/ }),
    ).toBeDisabled()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
