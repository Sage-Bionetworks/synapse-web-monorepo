import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddToDownloadCartButton, {
  AddToDownloadCartButtonProps,
} from './AddToDownloadCartButton'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

jest.mock('../download_list/TableQueryDownloadConfirmation', () => ({
  TableQueryDownloadConfirmation: () => (
    <div>TableQueryDownloadConfirmation</div>
  ),
}))
jest.mock('../download_list/FolderDownloadConfirmation', () => ({
  FolderDownloadConfirmation: () => <div>FolderDownloadConfirmation</div>,
}))
jest.mock('../download_list/DownloadConfirmationUI', () => ({
  DownloadConfirmationUI: () => <div>DownloadConfirmationUI</div>,
}))

describe('AddToDownloadCartButton', () => {
  const props: AddToDownloadCartButtonProps = {
    entityId: 'syn7248585',
  }

  it('renders the button', () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    expect(
      screen.getByRole('button', { name: /add to download cart/i }),
    ).toBeInTheDocument()
  })

  it('button is disabled when loading', () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    const button = screen.getByRole('button', { name: /add to download cart/i })
    expect(button).toBeDisabled()
  })

  it('button is enabled when not loading', async () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /add to download cart/i }),
      ).toBeEnabled()
    })
  })

  it('displays the correct download confirmation component when clicked', async () => {
    render(<AddToDownloadCartButton {...props} />, { wrapper: createWrapper() })
    await waitFor(() => {
      const button = screen.getByRole('button', {
        name: /add to download cart/i,
      })
      fireEvent.click(button)
      expect(
        screen.getByText('TableQueryDownloadConfirmation'),
      ).toBeInTheDocument()
    })
  })
})
