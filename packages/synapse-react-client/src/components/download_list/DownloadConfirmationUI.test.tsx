import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DownloadConfirmationUI,
  DownloadConfirmationUIProps,
} from './DownloadConfirmationUI'
import * as DownloadDetailsModule from './DownloadDetails'

const DOWNLOAD_DETAILS_TEST_ID = 'DownloadDetails'
vi.spyOn(DownloadDetailsModule, 'default').mockImplementation(() => (
  <div data-testid={DOWNLOAD_DETAILS_TEST_ID}></div>
))

async function setUp(
  componentProps: DownloadConfirmationUIProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  const user = userEvent.setup()
  let component
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    component = render(<DownloadConfirmationUI {...componentProps} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  const cancelButton = screen.queryByRole<HTMLButtonElement>('button', {
    name: /Cancel/i,
  })
  const addButton = screen.queryByRole<HTMLButtonElement>('button', {
    name: /Add/i,
  })
  const closeButton = screen.queryByRole<HTMLButtonElement>('button', {
    name: /Close/i,
  })
  return { component, user, addButton, cancelButton, closeButton }
}

const mockOnAddToDownloadCart = vi.fn()
const mockOnCancel = vi.fn()

describe('DownloadConfirmationUI', () => {
  it('Shows download details', async () => {
    const props: DownloadConfirmationUIProps = {
      fileCount: 5,
      isLoadingStats: false,
      isAddingToDownloadCart: false,
      onAddToDownloadCart: mockOnAddToDownloadCart,
      onCancel: mockOnCancel,
    }
    const { user, addButton, cancelButton } = await setUp(props)

    await screen.findByTestId(DOWNLOAD_DETAILS_TEST_ID)
    await screen.findByText(
      /Would you like to add these files to the download cart?/i,
    )

    expect(addButton).toBeInTheDocument()
    await user.click(addButton!)
    expect(mockOnAddToDownloadCart).toHaveBeenCalled()

    expect(cancelButton).toBeInTheDocument()
    await user.click(cancelButton!)
    expect(mockOnCancel).toHaveBeenCalled()
  })

  it('Shows loading stats', async () => {
    const props: DownloadConfirmationUIProps = {
      fileCount: 0,
      isLoadingStats: true,
      isAddingToDownloadCart: false,
      onAddToDownloadCart: mockOnAddToDownloadCart,
      onCancel: mockOnCancel,
    }
    const { user, addButton, cancelButton } = await setUp(props)

    await screen.findByText(/Calculating file size/i)

    expect(addButton).not.toBeInTheDocument()

    expect(cancelButton).toBeInTheDocument()
    await user.click(cancelButton!)
    expect(mockOnCancel).toHaveBeenCalled()
  })

  it('Shows adding to list', async () => {
    const props: DownloadConfirmationUIProps = {
      fileCount: 5,
      isLoadingStats: false,
      isAddingToDownloadCart: true,
      onAddToDownloadCart: mockOnAddToDownloadCart,
      onCancel: mockOnCancel,
    }
    const { addButton, cancelButton } = await setUp(props)

    await screen.findByText(/Adding files to download cart/i)

    expect(addButton).not.toBeInTheDocument()

    expect(cancelButton).not.toBeInTheDocument()
  })

  it('Shows unauthenticated state', async () => {
    const props: DownloadConfirmationUIProps = {
      fileCount: 5,
      isLoadingStats: false,
      isAddingToDownloadCart: true,
      onAddToDownloadCart: mockOnAddToDownloadCart,
      onCancel: mockOnCancel,
    }
    const { user, addButton, closeButton, cancelButton } = await setUp(props, {
      accessToken: 'anon-token',
      isAuthenticated: false,
    })

    await screen.findByText(/Sign In/i)

    expect(addButton).not.toBeInTheDocument()
    expect(cancelButton).not.toBeInTheDocument()

    expect(closeButton).toBeInTheDocument()
    await user.click(closeButton!)
    expect(mockOnCancel).toHaveBeenCalled()
  })
})
