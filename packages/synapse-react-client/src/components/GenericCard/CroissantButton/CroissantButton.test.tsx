import { useGetCroissantUrl } from '@/synapse-queries/croissant/useGetCroissantUrl'
import {
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { render, screen } from '@testing-library/react'
import { vi, describe, it } from 'vitest'
import CroissantButton from './CroissantButton'

vi.mock('@/synapse-queries/croissant/useGetCroissantUrl', () => ({
  useGetCroissantUrl: vi.fn(),
}))

const mockUseGetCroissantUrl = vi.mocked(useGetCroissantUrl)

describe('CroissantButton', () => {
  it('Displays the button when croissantUrl is available', () => {
    mockUseGetCroissantUrl.mockReturnValue(getUseQuerySuccessMock('some_url'))

    render(<CroissantButton datasetId={'syn123'} datasetVersionNumber={4} />)

    const croissantLink = screen.getByRole('link')
    expect(croissantLink).toHaveAttribute('href', 'some_url')
    expect(croissantLink).toHaveTextContent('Croissant')
    expect(croissantLink).toHaveAttribute('target', '_blank')
  })

  it('Displays a skeleton when croissantUrl is loading', () => {
    mockUseGetCroissantUrl.mockReturnValue(getUseQueryLoadingMock())

    render(<CroissantButton datasetId={'syn123'} datasetVersionNumber={4} />)

    screen.getByRole('progressbar')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('Does not display the button when croissantUrl is null', () => {
    mockUseGetCroissantUrl.mockReturnValue(getUseQuerySuccessMock(null))

    render(<CroissantButton datasetId={'syn123'} datasetVersionNumber={4} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })
})
