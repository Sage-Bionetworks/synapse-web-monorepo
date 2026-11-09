import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import { FileHandleLink } from './FileHandleLink'

describe('FileHandleLink', () => {
  it('renders a text link by default', () => {
    render(
      <FileHandleLink
        creatorFileHandleId="1234"
        displayValue="report.pdf"
        showDownloadIcon={false}
      />,
      { wrapper: createWrapper() },
    )

    const link = screen.getByRole('button', { name: 'report.pdf' })
    expect(link).not.toHaveClass('MuiButton-root')
  })

  it('renders an MUI button of the given variant', () => {
    render(
      <FileHandleLink
        creatorFileHandleId="1234"
        displayValue="Download Template"
        buttonVariant="outlined"
        showDownloadIcon
      />,
      { wrapper: createWrapper() },
    )

    expect(
      screen.getByRole('button', { name: 'Download Template' }),
    ).toHaveClass('MuiButton-root', 'MuiButton-outlined')
  })
})
