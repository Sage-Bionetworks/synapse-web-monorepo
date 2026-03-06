import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SYNAPSE_DOCS_SHARING_SETTINGS_PERMISSIONS_CONDITIONS_FOR_USE_URL } from '@/utils/SynapseConstants'
import { render, screen } from '@testing-library/react'
import { PrivateEntityDoiWarning } from './PrivateEntityDoiWarning'

describe('PrivateEntityDoiWarning', () => {
  it('renders the warning message about private page', () => {
    render(<PrivateEntityDoiWarning />, { wrapper: createWrapper() })
    expect(screen.getByText(/this page is currently/i)).toHaveTextContent(
      'This page is currently private.',
    )
    expect(
      screen.getByText(/ We recommend making this metadata publicly visible/i, {
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it('renders link to external DOI information', () => {
    render(<PrivateEntityDoiWarning />, { wrapper: createWrapper() })

    const externalLink = screen.getByRole('link', {
      name: /More about DOIs/i,
    })
    expect(externalLink).toBeInTheDocument()
    expect(externalLink).toHaveAttribute(
      'href',
      'https://www.doi.org/the-identifier/what-is-a-doi/',
    )
  })

  it('renders link to documentation about making page public', () => {
    render(<PrivateEntityDoiWarning />, { wrapper: createWrapper() })

    const docLink = screen.getByRole('link', {
      name: /Show me how to make this page public/i,
    })
    expect(docLink).toBeInTheDocument()
    expect(docLink).toHaveAttribute(
      'href',
      SYNAPSE_DOCS_SHARING_SETTINGS_PERMISSIONS_CONDITIONS_FOR_USE_URL,
    )
  })

  it('renders information about Synapse Data Catalog', () => {
    render(<PrivateEntityDoiWarning />, { wrapper: createWrapper() })

    expect(
      screen.getByText(/Resources with a DOI may be included in the/i, {
        exact: false,
      }),
    ).toBeInTheDocument()

    const catalogLink = screen.getByRole('link', {
      name: /Synapse Data Catalog/i,
    })
    expect(catalogLink).toBeInTheDocument()
  })
})
