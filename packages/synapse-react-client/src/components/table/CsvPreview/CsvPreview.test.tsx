import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import CsvPreview, { CsvPreviewProps } from './CsvPreview'

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

function renderComponent(props: Partial<CsvPreviewProps> = {}) {
  return render(
    <CsvPreview
      fileHandleId={MOCK_FILE_HANDLE_ID}
      csvTableDescriptor={MOCK_CSV_DESCRIPTOR}
      {...props}
    />,
    { wrapper: createWrapper(MOCK_CONTEXT_VALUE) },
  )
}

describe('CsvPreview', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('shows the CSV-suggested column type when the column is not already known', () => {
    vi.mocked(useGetCsvPreview).mockReturnValue({
      data: { suggestedColumns: [{ name: 'newColumn', columnType: 'DOUBLE' }] },
      isLoading: false,
      error: null,
    } as any)

    renderComponent()

    expect(screen.getByText(/\(DOUBLE\)/)).toBeVisible()
  })

  it('overrides the CSV-suggested type with existingColumnSchema when the column is already a known string, and forwards the corrected type via onCsvPreviewDataChange', () => {
    const onCsvPreviewDataChange = vi.fn()
    vi.mocked(useGetCsvPreview).mockReturnValue({
      data: {
        suggestedColumns: [{ name: 'entityId', columnType: 'ENTITYID' }],
      },
      isLoading: false,
      error: null,
    } as any)

    renderComponent({
      existingColumnSchema: {
        entityId: {
          type: { type: 'string', isArray: false },
          isRequired: false,
          enumeratedValues: null,
        },
      },
      onCsvPreviewDataChange,
    })

    expect(screen.getByText(/\(STRING\)/)).toBeVisible()
    expect(screen.queryByText(/\(ENTITYID\)/)).not.toBeInTheDocument()
    expect(onCsvPreviewDataChange).toHaveBeenCalledWith(
      expect.objectContaining({
        suggestedColumns: [{ name: 'entityId', columnType: 'STRING' }],
      }),
    )
  })

  it('overrides the CSV-suggested type using existingColumnNames when the column already exists but is not in existingColumnSchema (e.g. a RecordSet system column)', () => {
    const onCsvPreviewDataChange = vi.fn()
    vi.mocked(useGetCsvPreview).mockReturnValue({
      data: {
        suggestedColumns: [{ name: 'entityId', columnType: 'ENTITYID' }],
      },
      isLoading: false,
      error: null,
    } as any)

    renderComponent({
      existingColumnNames: ['id', 'entityId', 'path'],
      onCsvPreviewDataChange,
    })

    expect(screen.getByText(/\(STRING\)/)).toBeVisible()
    expect(screen.queryByText(/\(ENTITYID\)/)).not.toBeInTheDocument()
    expect(onCsvPreviewDataChange).toHaveBeenCalledWith(
      expect.objectContaining({
        suggestedColumns: [{ name: 'entityId', columnType: 'STRING' }],
      }),
    )
  })

  it('leaves the CSV-suggested type alone for a brand-new column absent from both existingColumnSchema and existingColumnNames', () => {
    vi.mocked(useGetCsvPreview).mockReturnValue({
      data: {
        suggestedColumns: [{ name: 'newColumn', columnType: 'ENTITYID' }],
      },
      isLoading: false,
      error: null,
    } as any)

    renderComponent({ existingColumnNames: ['id', 'path'] })

    expect(screen.getByText(/\(ENTITYID\)/)).toBeVisible()
  })
})
