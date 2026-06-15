import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CsvPreviewWithOptions, {
  CsvPreviewWithOptionsProps,
} from './CsvPreviewWithOptions'

vi.mock('@/synapse-queries/table/useGetCsvPreview', () => ({
  useGetCsvPreview: vi.fn(),
}))

const MOCK_FILE_HANDLE_ID = 'mock-file-handle-id'
const MOCK_CSV_DESCRIPTOR = {
  separator: ',',
  quoteCharacter: '"',
  escapeCharacter: '\\',
  lineEnd: '\n',
  isFirstLineHeader: true,
}

vi.mocked(useGetCsvPreview).mockReturnValue({
  data: { suggestedColumns: [] },
  isLoading: false,
  error: null,
} as any)

describe('CsvPreviewWithOptions', () => {
  function renderComponent(props: CsvPreviewWithOptionsProps) {
    return {
      user: userEvent.setup(),
      ...render(<CsvPreviewWithOptions {...props} />, {
        wrapper: createWrapper(MOCK_CONTEXT_VALUE),
      }),
    }
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('does not query for a CSV preview when fileHandleId is null', () => {
    renderComponent({
      fileHandleId: null,
      csvTableDescriptor: MOCK_CSV_DESCRIPTOR,
      onCsvTableDescriptorChange: vi.fn(),
      onCsvPreviewDataChange: vi.fn(),
      onIsLoadingChange: vi.fn(),
    })
    expect(useGetCsvPreview).not.toHaveBeenCalled()
  })

  it('queries for a CSV preview when fileHandleId is provided', () => {
    renderComponent({
      fileHandleId: MOCK_FILE_HANDLE_ID,
      csvTableDescriptor: MOCK_CSV_DESCRIPTOR,
      onCsvTableDescriptorChange: vi.fn(),
      onCsvPreviewDataChange: vi.fn(),
      onIsLoadingChange: vi.fn(),
    })
    expect(useGetCsvPreview).toHaveBeenCalledWith(
      expect.objectContaining({
        uploadFileHandleId: MOCK_FILE_HANDLE_ID,
        csvTableDescriptor: MOCK_CSV_DESCRIPTOR,
      }),
    )
  })

  it('calls onCsvTableDescriptorChange with the form data when "Refresh Preview" is clicked', async () => {
    const onCsvTableDescriptorChange = vi.fn()
    const { user } = renderComponent({
      fileHandleId: MOCK_FILE_HANDLE_ID,
      csvTableDescriptor: MOCK_CSV_DESCRIPTOR,
      onCsvTableDescriptorChange,
      onCsvPreviewDataChange: vi.fn(),
      onIsLoadingChange: vi.fn(),
    })

    await user.click(screen.getByRole('button', { name: /show options/i }))
    await user.click(screen.getByRole('button', { name: /refresh preview/i }))

    expect(onCsvTableDescriptorChange).toHaveBeenCalledTimes(1)
    expect(onCsvTableDescriptorChange).toHaveBeenCalledWith(
      expect.objectContaining({
        separator: MOCK_CSV_DESCRIPTOR.separator,
        quoteCharacter: MOCK_CSV_DESCRIPTOR.quoteCharacter,
      }),
    )
  })
})
