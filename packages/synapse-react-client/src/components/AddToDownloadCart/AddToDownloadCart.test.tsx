import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddToDownloadCart, { AddToDownloadCartProps } from './AddToDownloadCart'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

jest.mock('../download_list/TableQueryDownloadConfirmation', () => ({
  TableQueryDownloadConfirmation: () => (
    <div>TableQueryDownloadConfirmation</div>
  ),
}))
jest.mock('../download_list/FolderDownloadConfirmation', () => ({
  FolderDownloadConfirmation: () => <div>FolderDownloadConfirmation</div>,
}))

describe('AddToDownloadCart', () => {
  const props: AddToDownloadCartProps = {
    entityId: 'syn7248585',
  }

  it('renders the button', () => {
    render(<AddToDownloadCart {...props} />, { wrapper: createWrapper() })
    expect(
      screen.getByRole('button', { name: /add to download cart/i }),
    ).toBeInTheDocument()
  })

  it('renders TableQueryDownloadConfirmation after button click', async () => {
    render(<AddToDownloadCart {...props} />, { wrapper: createWrapper() })
    fireEvent.click(screen.getByText(/add to download cart/i))
    await waitFor(() => {
      expect(
        screen.getByText('TableQueryDownloadConfirmation'),
      ).toBeInTheDocument()
    })
  })
})
