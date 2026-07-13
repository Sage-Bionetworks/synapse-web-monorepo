import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { DatasetDownloadButton } from './DatasetDownloadButton'

describe('DatasetDownloadButton', () => {
  test('downloadable hosting renders the shared download control', () => {
    render(
      <DatasetDownloadButton entityId="syn123" name="Ds" hosting="synapse" />,
      { wrapper: createWrapper() },
    )
    expect(screen.getByRole('button', { name: /Download/ })).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  test('external-download labels the download control with the repository', () => {
    render(
      <DatasetDownloadButton
        entityId="syn123"
        name="Ds"
        hosting="external-download"
        repository="GEO"
      />,
      { wrapper: createWrapper() },
    )
    expect(
      screen.getByRole('button', { name: /Download from GEO/ }),
    ).toBeInTheDocument()
  })

  test('external-access renders a link-out instead of a download control', () => {
    render(
      <DatasetDownloadButton
        name="Ds"
        hosting="external-access"
        repository="dbGaP"
        externalUrl="https://example.org/"
      />,
      { wrapper: createWrapper() },
    )
    const link = screen.getByRole('link', { name: /Access at dbGaP/ })
    expect(link).toHaveAttribute('href', 'https://example.org/')
  })

  test('unavailable renders a disabled, non-actionable button', () => {
    render(<DatasetDownloadButton name="Ds" hosting="unavailable" />, {
      wrapper: createWrapper(),
    })
    expect(
      screen.getByRole('button', { name: /Not available for download/ }),
    ).toBeDisabled()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
