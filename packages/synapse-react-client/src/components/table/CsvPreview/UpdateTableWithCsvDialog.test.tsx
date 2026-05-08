import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { getTableTransactionHandlers } from '@/mocks/msw/handlers/tableQueryHandlers'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BasicFileHandleUpload } from '@/components/file/upload/BasicFileHandleUpload'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UpdateTableWithCsvDialog, {
  UpdateTableWithCsvDialogProps,
} from './UpdateTableWithCsvDialog'

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

vi.spyOn(SynapseClient, 'createColumnModels')
vi.spyOn(SynapseClient, 'createEntity')

const createColumnModelsSpy = vi.mocked(SynapseClient.createColumnModels)
const createEntitySpy = vi.mocked(SynapseClient.createEntity)

describe('UpdateTableWithCsvDialog', () => {
  function renderComponent(props: UpdateTableWithCsvDialogProps) {
    return {
      user: userEvent.setup(),
      ...render(<UpdateTableWithCsvDialog {...props} />, {
        wrapper: createWrapper(MOCK_CONTEXT_VALUE),
      }),
    }
  }

  beforeAll(() => server.listen())

  beforeEach(() => {
    server.use(
      ...getTableTransactionHandlers({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionResponse',
        results: [],
      }),
    )
  })

  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })

  afterAll(() => server.close())

  async function simulateFileUpload(user: ReturnType<typeof userEvent.setup>) {
    await user.click(await screen.findByRole('button', { name: 'Upload' }))
    // Wait for COLUMN_PREVIEW step
    await screen.findByRole('button', { name: 'Confirm' })
  }

  it('skips column/entity creation and uploads CSV rows directly', async () => {
    const onSuccess = vi.fn()
    const { user } = renderComponent({
      open: true,
      onClose: vi.fn(),
      tableId: 'syn123',
      onSuccess,
    })

    await simulateFileUpload(user)
    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    await waitFor(() => {
      expect(createColumnModelsSpy).not.toHaveBeenCalled()
      expect(createEntitySpy).not.toHaveBeenCalled()
      expect(onSuccess).toHaveBeenCalled()
    })
  })
})
