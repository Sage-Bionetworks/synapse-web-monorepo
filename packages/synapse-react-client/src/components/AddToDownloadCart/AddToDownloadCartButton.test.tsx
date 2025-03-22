import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddToDownloadCartButton, {
  AddToDownloadCartButtonProps,
} from './AddToDownloadCartButton'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

jest.mock('../download_list/TableQueryDownloadConfirmation', () => ({
  TableQueryDownloadConfirmation: () => (
    <div data-testid="TableQueryDownloadConfirmation" />
  ),
}))
jest.mock('../download_list/FolderDownloadConfirmation', () => ({
  FolderDownloadConfirmation: () => (
    <div data-testid="FolderDownloadConfirmation" />
  ),
}))

describe('AddToDownloadCartButton', () => {
  const props: AddToDownloadCartButtonProps = {
    entityId: 'syn7248585',
    buttonText: 'Download',
  }

  it('renders the button', () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    expect(
      screen.getByRole('button', { name: /download/i }),
    ).toBeInTheDocument()
  })

  it('button is disabled when loading and then enabled', () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    const button = screen.getByRole('button', { name: /download/i })
    expect(button).toBeDisabled()
  })

  it('button is enabled when not loading', async () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    const button = screen.getByRole('button', { name: /download/i })
    expect(button).toBeDisabled()
    await waitFor(() => {
      expect(button).toBeEnabled()
    })
  })

  it('table entities show the download confirmation UI when clicked', async () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    await waitFor(() => {
      const button = screen.getByRole('button', {
        name: /download/i,
      })
      fireEvent.click(button)
    })
    expect(
      screen.getByTestId('TableQueryDownloadConfirmation'),
    ).toBeInTheDocument()
  })
  it('folder entities show the download confirmation UI when clicked', async () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    await waitFor(() => {
      const button = screen.getByRole('button', {
        name: /download/i,
      })
      fireEvent.click(button)
      expect(
        screen.getByTestId('FolderDownloadConfirmation'),
      ).toBeInTheDocument()
    })
  })
})
