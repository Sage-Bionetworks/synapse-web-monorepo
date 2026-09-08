import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BasicFileHandleUpload } from '@/components/file/upload/BasicFileHandleUpload'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CsvPreviewDialog, { CsvPreviewDialogProps } from './CsvPreviewDialog'

vi.mock('@/components/file/upload/BasicFileHandleUpload', () => ({
  BasicFileHandleUpload: vi.fn(),
}))
vi.mock('@/synapse-queries/table/useGetCsvPreview', () => ({
  useGetCsvPreview: vi.fn(),
}))

const MOCK_FILE_HANDLE_ID = 'mock-file-handle-id'
const MOCK_SUGGESTED_COLUMNS = [
  { name: 'age', columnType: 'STRING' },
  { name: 'name', columnType: 'STRING' },
]
const MOCK_CSV_DESCRIPTOR = {
  separator: ',',
  quoteCharacter: '"',
  escapeCharacter: '\\',
  lineEnd: '\n',
  isFirstLineHeader: true,
}

vi.mocked(BasicFileHandleUpload).mockImplementation(
  ({ onFileUploadComplete }: any) => (
    <button onClick={() => onFileUploadComplete(MOCK_FILE_HANDLE_ID)}>
      Upload
    </button>
  ),
)

vi.mocked(useGetCsvPreview).mockReturnValue({
  data: { suggestedColumns: MOCK_SUGGESTED_COLUMNS },
  isLoading: false,
  error: null,
} as any)

describe('CsvPreviewDialog', () => {
  function renderComponent(props: CsvPreviewDialogProps) {
    return {
      user: userEvent.setup(),
      ...render(<CsvPreviewDialog {...props} />, {
        wrapper: createWrapper(MOCK_CONTEXT_VALUE),
      }),
    }
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  async function simulateFileUpload(user: ReturnType<typeof userEvent.setup>) {
    await user.click(await screen.findByRole('button', { name: 'Upload' }))
    // Wait for COLUMN_PREVIEW step
    await screen.findByRole('button', { name: 'Confirm' })
  }

  it('delegates to onConfirm with the uploaded file handle, suggested columns, and csv descriptor', async () => {
    const onConfirm = vi.fn()
    const { user } = renderComponent({
      open: true,
      onClose: vi.fn(),
      onConfirm,
    })

    await simulateFileUpload(user)
    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    expect(onConfirm).toHaveBeenCalledWith(
      MOCK_FILE_HANDLE_ID,
      MOCK_SUGGESTED_COLUMNS,
      MOCK_CSV_DESCRIPTOR,
    )
  })
})
