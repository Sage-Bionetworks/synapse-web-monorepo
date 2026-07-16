import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
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

    test('disables the button when signed out (no confirmation popup)', () => {
      render(
        <DatasetDownloadButton entityId="syn123" name="Ds" hosting="synapse" />,
        { wrapper: createWrapper({ isAuthenticated: false }) },
      )
      expect(
        screen.getByRole('button', { name: 'Download, Ds' }),
      ).toBeDisabled()
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
