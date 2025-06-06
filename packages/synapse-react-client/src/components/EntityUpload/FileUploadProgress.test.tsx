import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import {
  FileUploadProgress,
  FileUploadProgressProps,
} from './FileUploadProgress'

describe('FileUploadProgress', () => {
  const props = {
    status: 'PREPARING',
    fileName: 'file.txt',
    uploadedSizeInBytes: 0,
    totalSizeInBytes: 1024 * 1024 * 100,
    onCancel: vi.fn(),
    onPause: vi.fn(),
    onResume: vi.fn(),
    onRemove: vi.fn(),
  } satisfies FileUploadProgressProps

  function renderComponent(
    propOverrides: Partial<FileUploadProgressProps> = {},
  ) {
    const user = userEvent.setup()

    render(<FileUploadProgress {...props} {...propOverrides} />)

    const pauseButton = screen.queryByRole('button', { name: 'Pause' })
    const resumeButton = screen.queryByRole('button', { name: 'Resume' })
    const cancelButton = screen.queryByRole('button', { name: 'Cancel' })
    const removeButton = screen.queryByRole('button', { name: 'Remove' })

    return { user, pauseButton, resumeButton, cancelButton, removeButton }
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('preparing upload', async () => {
    const { user, pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({ status: 'PREPARING' })

    await screen.findByText('file.txt')
    await screen.findByText('Preparing to upload...')

    expect(cancelButton).toBeInTheDocument()

    expect(pauseButton).not.toBeInTheDocument()
    expect(resumeButton).not.toBeInTheDocument()
    expect(removeButton).not.toBeInTheDocument()

    await user.click(cancelButton!)
    expect(props.onCancel).toHaveBeenCalledTimes(1)
  })

  test('uploading', async () => {
    const { user, pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({
        status: 'UPLOADING',
        uploadedSizeInBytes: 1024 * 1024 * 50,
      })

    await screen.findByText('file.txt')
    await screen.findByText('50.0 MB')
    await screen.findByText('100.0 MB')

    expect(cancelButton).toBeInTheDocument()
    expect(pauseButton).toBeInTheDocument()

    expect(resumeButton).not.toBeInTheDocument()
    expect(removeButton).not.toBeInTheDocument()

    await user.click(cancelButton!)
    expect(props.onCancel).toHaveBeenCalledTimes(1)

    await user.click(pauseButton!)
    expect(props.onPause).toHaveBeenCalledTimes(1)
  })

  test('paused', async () => {
    const { user, pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({
        status: 'PAUSED',
        uploadedSizeInBytes: 1024 * 1024 * 50,
      })

    await screen.findByText('file.txt')
    await screen.findByText('50.0 MB')
    await screen.findByText('100.0 MB')

    expect(cancelButton).toBeInTheDocument()
    expect(resumeButton).toBeInTheDocument()

    expect(pauseButton).not.toBeInTheDocument()
    expect(removeButton).not.toBeInTheDocument()

    await user.click(cancelButton!)
    expect(props.onCancel).toHaveBeenCalledTimes(1)

    await user.click(resumeButton!)
    expect(props.onResume).toHaveBeenCalledTimes(1)
  })

  test('canceled by user', async () => {
    const { user, pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({
        status: 'CANCELED_BY_USER',
      })

    await screen.findByText('file.txt')
    await screen.findByText('Canceled')

    expect(removeButton).toBeInTheDocument()

    expect(cancelButton).not.toBeInTheDocument()
    expect(pauseButton).not.toBeInTheDocument()
    expect(resumeButton).not.toBeInTheDocument()

    await user.click(removeButton!)
    expect(props.onRemove).toHaveBeenCalledTimes(1)
  })

  test('failed', async () => {
    const { user, pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({
        status: 'FAILED',
        errorMessage: 'Something went wrong.',
      })

    await screen.findByText('file.txt')
    await screen.findByText('Failed')
    await screen.findByLabelText('Something went wrong.')

    expect(removeButton).toBeInTheDocument()

    expect(cancelButton).not.toBeInTheDocument()
    expect(pauseButton).not.toBeInTheDocument()
    expect(resumeButton).not.toBeInTheDocument()

    await user.click(removeButton!)
    expect(props.onRemove).toHaveBeenCalledTimes(1)
  })

  test('complete', async () => {
    const { pauseButton, resumeButton, cancelButton, removeButton } =
      renderComponent({
        status: 'COMPLETE',
        uploadedSizeInBytes: 1024 * 1024 * 100,
      })

    await screen.findByText('file.txt')
    await screen.findAllByText('100.0 MB')

    expect(removeButton).not.toBeInTheDocument()
    expect(cancelButton).not.toBeInTheDocument()
    expect(pauseButton).not.toBeInTheDocument()
    expect(resumeButton).not.toBeInTheDocument()
  })
})
