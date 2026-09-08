import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UploadFilePanel, { UploadFilePanelProps } from './UploadFilePanel'

function renderComponent(propOverrides: Partial<UploadFilePanelProps> = {}) {
  const user = userEvent.setup()
  const onUploadFileList = vi.fn()
  const onValidationError = vi.fn()
  const result = render(
    <UploadFilePanel
      onUploadFileList={onUploadFileList}
      allowMultipleFiles={true}
      onValidationError={onValidationError}
      {...propOverrides}
    />,
  )
  const fileInput = result.container.querySelector<HTMLInputElement>(
    'input[type="file"][id=filesToUpload]',
  )!
  return { user, onUploadFileList, onValidationError, fileInput, result }
}

describe('UploadFilePanel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('uploads a selection that satisfies all constraints', async () => {
    const { user, onUploadFileList, onValidationError, fileInput } =
      renderComponent({
        acceptedContentTypes: ['text/plain'],
        maxFileSizeBytes: 1024,
        maxFiles: 2,
      })

    const file = new File(['contents'], 'file.txt', { type: 'text/plain' })
    await user.upload(fileInput, file)

    expect(onUploadFileList).toHaveBeenCalledTimes(1)
    expect(onUploadFileList.mock.calls[0][0][0]).toBe(file)
    expect(onValidationError).toHaveBeenCalledWith(null)
  })

  it('sets the accept attribute from acceptedContentTypes', () => {
    const { fileInput } = renderComponent({
      acceptedContentTypes: ['text/plain', 'application/pdf'],
    })
    expect(fileInput).toHaveAttribute('accept', 'text/plain,application/pdf')
  })

  it('rejects a file that exceeds maxFileSizeBytes without uploading', async () => {
    const { user, onUploadFileList, onValidationError, fileInput } =
      renderComponent({
        maxFileSizeBytes: 10,
      })

    const file = new File(['this content is over ten bytes'], 'big.txt', {
      type: 'text/plain',
    })
    await user.upload(fileInput, file)

    expect(onUploadFileList).not.toHaveBeenCalled()
    expect(onValidationError).toHaveBeenCalledWith(
      'Each file must be 0 MB or less.',
    )
  })

  it('rejects an unsupported content type without uploading', () => {
    // Uses fireEvent (rather than userEvent.upload) because userEvent.upload simulates the
    // browser's own filtering against the `accept` attribute, which is advisory only in real
    // browsers -- our JS-side validation is the actual enforcement being tested here.
    const { onUploadFileList, onValidationError, fileInput } = renderComponent({
      acceptedContentTypes: ['text/plain'],
    })

    const file = new File(['contents'], 'file.exe', {
      type: 'application/x-msdownload',
    })
    Object.defineProperty(fileInput, 'files', { value: [file] })
    fireEvent.change(fileInput)

    expect(onUploadFileList).not.toHaveBeenCalled()
    expect(onValidationError).toHaveBeenCalledWith(
      'Unsupported file type: file.exe.',
    )
  })

  it('rejects a selection that would exceed maxFiles, counting currentFileCount', async () => {
    const { user, onUploadFileList, onValidationError, fileInput } =
      renderComponent({
        maxFiles: 2,
        currentFileCount: 2,
      })

    const file = new File(['contents'], 'file.txt', { type: 'text/plain' })
    await user.upload(fileInput, file)

    expect(onUploadFileList).not.toHaveBeenCalled()
    expect(onValidationError).toHaveBeenCalledWith(
      'You can attach up to 2 files.',
    )
  })

  it('opens the file browser directly when hideFolderOption is true, even when allowMultipleFiles is true', async () => {
    const { user } = renderComponent({
      allowMultipleFiles: true,
      hideFolderOption: true,
    })

    await user.click(await screen.findByText('Click to upload'))

    expect(
      screen.queryByRole('menuitem', { name: 'Files' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('menuitem', { name: 'Folder' }),
    ).not.toBeInTheDocument()
  })

  it('still shows the Files/Folder menu when hideFolderOption is false (default)', async () => {
    const { user } = renderComponent({ allowMultipleFiles: true })

    await user.click(await screen.findByText('Click to upload'))

    expect(
      await screen.findByRole('menuitem', { name: 'Files' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('menuitem', { name: 'Folder' }),
    ).toBeInTheDocument()
  })

  it('behaves the same as before when no constraint props are provided', async () => {
    const { user, onUploadFileList, onValidationError, fileInput } =
      renderComponent({ onValidationError: undefined })

    const file = new File(['contents'], 'file.txt', { type: 'text/plain' })
    await user.upload(fileInput, file)

    expect(onUploadFileList).toHaveBeenCalledTimes(1)
    expect(onValidationError).not.toHaveBeenCalled()
  })
})
