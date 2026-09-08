import {
  BasicFileHandleUpload,
  BasicFileHandleUploadProps,
} from '@/components/file/upload/BasicFileHandleUpload'
import {
  APPROVED_ATTACHMENT_CONTENT_TYPES,
  MAX_AGENT_CHAT_ATTACHMENTS,
  MAX_ATTACHMENT_FILE_SIZE_BYTES,
} from '@/components/SynapseChat/utils/constants'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddFilesDialog, AddFilesDialogProps } from './AddFilesDialog'

vi.mock('@/components/file/upload/BasicFileHandleUpload', () => ({
  BasicFileHandleUpload: vi.fn(),
}))

const mockBasicFileHandleUpload = vi.mocked(BasicFileHandleUpload)

const MOCK_FILE = new File(['contents'], 'report.pdf', {
  type: 'application/pdf',
})
const MOCK_ERROR = 'Each file must be 100 MB or less.'

function mockUploadPanel(props: BasicFileHandleUploadProps) {
  return (
    <div>
      <button
        onClick={() => props.onFileUploadComplete?.('9999999', MOCK_FILE)}
      >
        Simulate upload complete
      </button>
      <button onClick={() => props.onStateChange?.('UPLOADING')}>
        Simulate uploading
      </button>
      <button onClick={() => props.onValidationError?.(MOCK_ERROR)}>
        Simulate validation error
      </button>
    </div>
  )
}

function renderComponent(propOverrides: Partial<AddFilesDialogProps> = {}) {
  const user = userEvent.setup()
  const onClose = vi.fn()
  const onAttachmentUploaded = vi.fn()
  const onUploadStateChange = vi.fn()
  render(
    <AddFilesDialog
      open={true}
      onClose={onClose}
      currentAttachmentCount={0}
      onAttachmentUploaded={onAttachmentUploaded}
      onUploadStateChange={onUploadStateChange}
      {...propOverrides}
    />,
  )
  return { user, onClose, onAttachmentUploaded, onUploadStateChange }
}

describe('AddFilesDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockBasicFileHandleUpload.mockImplementation(mockUploadPanel)
  })

  it('renders the title, limitations text, and Cancel/Done actions', () => {
    renderComponent()

    expect(screen.getByText('Add files')).toBeInTheDocument()
    expect(screen.getByText('Limitations')).toBeInTheDocument()
    expect(
      screen.getByText(
        `${MAX_AGENT_CHAT_ATTACHMENTS} files maximum, up to 100 MB per file`,
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument()
  })

  it('configures BasicFileHandleUpload with the chat attachment limits', () => {
    renderComponent({ currentAttachmentCount: 3 })

    const props = mockBasicFileHandleUpload.mock
      .calls[0][0] as BasicFileHandleUploadProps
    expect(props.allowMultipleUpload).toBe(true)
    expect(props.disableFolderUpload).toBe(true)
    expect(props.acceptedContentTypes).toEqual(
      APPROVED_ATTACHMENT_CONTENT_TYPES,
    )
    expect(props.maxFileSizeBytes).toEqual(MAX_ATTACHMENT_FILE_SIZE_BYTES)
    expect(props.maxFiles).toEqual(MAX_AGENT_CHAT_ATTACHMENTS)
    expect(props.currentFileCount).toEqual(3)
  })

  it('calls onClose when Cancel is clicked', async () => {
    const { user, onClose } = renderComponent()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Done is clicked', async () => {
    const { user, onClose } = renderComponent()

    await user.click(screen.getByRole('button', { name: 'Done' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('builds a ChatAttachment and reports it via onAttachmentUploaded when a file finishes uploading', async () => {
    const { user, onAttachmentUploaded } = renderComponent()

    await user.click(
      screen.getByRole('button', { name: 'Simulate upload complete' }),
    )

    expect(onAttachmentUploaded).toHaveBeenCalledExactlyOnceWith({
      fileHandleId: '9999999',
      fileName: 'report.pdf',
      contentType: 'application/pdf',
      sizeBytes: MOCK_FILE.size,
    })
  })

  it('forwards uploader state changes via onUploadStateChange', async () => {
    const { user, onUploadStateChange } = renderComponent()

    await user.click(screen.getByRole('button', { name: 'Simulate uploading' }))

    expect(onUploadStateChange).toHaveBeenCalledExactlyOnceWith('UPLOADING')
  })

  it('shows a validation error reported by BasicFileHandleUpload', async () => {
    const { user } = renderComponent()

    await user.click(
      screen.getByRole('button', { name: 'Simulate validation error' }),
    )

    expect(screen.getByText(MOCK_ERROR)).toBeInTheDocument()
  })

  it('does not show a validation error by default', () => {
    renderComponent()

    expect(screen.queryByText(MOCK_ERROR)).not.toBeInTheDocument()
  })
})
