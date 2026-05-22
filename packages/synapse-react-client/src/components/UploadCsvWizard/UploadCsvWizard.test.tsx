import { displayToast } from '@/components/ToastMessage'
import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { useCreateEntity } from '@/synapse-queries'
import { useCreateColumnModels } from '@/synapse-queries/table/useColumnModel'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnModel,
  CsvTableDescriptor,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UploadCsvWizard, {
  preProcessColumns,
  preProcessUploadToTableRequest,
} from './UploadCsvWizard'

const { formMockProps } = vi.hoisted(() => ({
  formMockProps: [] as Record<string, unknown>[],
}))

vi.mock('@/components/table/CsvPreview/CsvPreviewDialog', () => ({
  default: vi.fn(() => <div data-testid={'CsvPreviewDialog'}></div>),
}))

vi.mock(
  '@/components/TableColumnSchemaEditor/TableColumnSchemaForm',
  async () => {
    const React = await vi.importActual<typeof import('react')>('react')
    return {
      __esModule: true,
      default: React.forwardRef<unknown, Record<string, any>>(function MockForm(
        props,
        ref,
      ) {
        formMockProps.push(props)
        React.useImperativeHandle(ref, () => ({
          submit: () => props.onSubmit(props.initialData ?? []),
          getEditedColumnModels: () => props.initialData ?? [],
          validate: () => true,
        }))
        return <div data-testid={'TableColumnSchemaForm'}></div>
      }),
    }
  },
)

vi.mock('@/synapse-queries', async () => {
  const actual = await vi.importActual<object>('@/synapse-queries')
  return { ...actual, useCreateEntity: vi.fn() }
})
vi.mock('@/synapse-queries/table/useColumnModel', () => ({
  useCreateColumnModels: vi.fn(),
}))
vi.mock('@/synapse-queries/table/useTableUpdateTransaction', () => ({
  useTableUpdateTransaction: vi.fn(),
}))
vi.mock('@/components/ToastMessage', () => ({ displayToast: vi.fn() }))

const mockCsvPreviewDialog = vi.mocked(CsvPreviewDialog)
const mockUseCreateColumnModels = vi.mocked(useCreateColumnModels)
const mockUseCreateEntity = vi.mocked(useCreateEntity)
const mockUseTableUpdateTransaction = vi.mocked(useTableUpdateTransaction)
const mockDisplayToast = vi.mocked(displayToast)

const fileHandleId = 'fh-1'
const uploadedFileName = 'my-data.csv'
const csvDescriptor: CsvTableDescriptor = {
  separator: ',',
  quoteCharacter: '"',
  escapeCharacter: '\\',
  lineEnd: '\n',
  isFirstLineHeader: true,
}
const suggestedColumns: ColumnModel[] = [
  { name: 'a', columnType: 'STRING' },
  { name: 'b', columnType: 'INTEGER' },
]

// The wizard's props are a discriminated union of create-mode vs append-mode.
// Accept a loose shape here, then cast at the render boundary — tests
// intentionally exercise both modes (and at least one validation case where
// neither id is provided would not type-check at the public boundary).
type RenderOverrides = {
  open?: boolean
  parentId?: string
  tableId?: string
  onClose?: () => void
  onComplete?: (entityId: string) => void
}

function renderWizard(overrides: RenderOverrides = {}) {
  const onClose = vi.fn()
  const onComplete = vi.fn()
  const props = {
    open: true,
    parentId: 'syn-parent',
    onClose,
    onComplete,
    ...overrides,
  } as React.ComponentProps<typeof UploadCsvWizard>
  const result = render(<UploadCsvWizard {...props} />, {
    wrapper: createWrapper(),
  })
  return { onClose, onComplete, ...result }
}

describe('UploadCsvWizard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    formMockProps.length = 0
    mockUseCreateColumnModels.mockReturnValue({
      mutateAsync: vi.fn(),
    } as any)
    mockUseCreateEntity.mockReturnValue({
      mutateAsync: vi.fn(),
    } as any)
    mockUseTableUpdateTransaction.mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isPending: false,
      error: null,
      reset: vi.fn(),
    } as any)
  })

  describe('append mode (tableId provided)', () => {
    it('runs an upload-to-table transaction directly on preview confirm', async () => {
      const mutate = vi.fn()
      // Mock the append-mode hook (first instance returned by useTableUpdateTransaction)
      mockUseTableUpdateTransaction.mockReturnValue({
        mutate,
        mutateAsync: vi.fn(),
        isPending: false,
        error: null,
        reset: vi.fn(),
      } as any)

      renderWizard({ tableId: 'syn-table', parentId: undefined })
      await screen.findByTestId('CsvPreviewDialog')

      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })

      expect(mutate).toHaveBeenCalledTimes(1)
      expect(mutate).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: 'syn-table',
        changes: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
            uploadFileHandleId: fileHandleId,
            tableId: 'syn-table',
            linesToSkip: 1,
            csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: false },
          },
        ],
      })
    })

    it('passes through pending and error state to CsvPreviewDialog', async () => {
      mockUseTableUpdateTransaction.mockReturnValue({
        mutate: vi.fn(),
        mutateAsync: vi.fn(),
        isPending: true,
        error: { message: 'kaboom' },
        reset: vi.fn(),
      } as any)
      renderWizard({ tableId: 'syn-table' })
      await screen.findByTestId('CsvPreviewDialog')

      expect(mockCsvPreviewDialog).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          open: true,
          confirmIsPending: true,
          errorMessage: 'kaboom',
        }),
      )
    })

    it('fires onComplete with the tableId and toasts on successful append', async () => {
      let capturedOnSuccess: (() => void) | undefined
      mockUseTableUpdateTransaction.mockImplementation((opts: any) => {
        capturedOnSuccess = opts?.onSuccess
        return {
          mutate: vi.fn(),
          mutateAsync: vi.fn(),
          isPending: false,
          error: null,
          reset: vi.fn(),
        } as any
      })

      const { onComplete } = renderWizard({ tableId: 'syn-table' })
      await screen.findByTestId('CsvPreviewDialog')

      act(() => capturedOnSuccess?.())

      expect(onComplete).toHaveBeenCalledWith('syn-table')
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'CSV applied to table.',
        'success',
      )
    })
  })

  describe('create mode (parentId provided)', () => {
    it('transitions to the finalize dialog after preview confirm', async () => {
      renderWizard()
      await screen.findByTestId('CsvPreviewDialog')

      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })

      await screen.findByTestId('TableColumnSchemaForm')
      expect(screen.getByLabelText(/Table Name/)).toBeInTheDocument()
      expect(formMockProps[formMockProps.length - 1]).toEqual(
        expect.objectContaining({ initialData: suggestedColumns }),
      )
    })

    it('defaults the table name to the uploaded file name', async () => {
      renderWizard()
      await screen.findByTestId('CsvPreviewDialog')
      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })
      await screen.findByTestId('TableColumnSchemaForm')

      expect(screen.getByLabelText(/Table Name/)).toHaveValue(uploadedFileName)
      expect(screen.getByRole('button', { name: 'Create' })).toBeEnabled()
    })

    it('disables Create when the table name is empty', async () => {
      const user = userEvent.setup()
      renderWizard()
      await screen.findByTestId('CsvPreviewDialog')
      act(() => {
        // No file name provided — table name input should start empty
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          '',
        )
      })
      await screen.findByTestId('TableColumnSchemaForm')

      const createButton = screen.getByRole('button', { name: 'Create' })
      expect(createButton).toBeDisabled()

      await user.type(screen.getByLabelText(/Table Name/), 'My Table')
      expect(createButton).toBeEnabled()
    })

    it('creates columns, the table entity, and runs the upload transaction on submit', async () => {
      const createColumns = vi.fn().mockResolvedValue([
        { id: 'col-1', name: 'a', columnType: 'STRING' },
        { id: 'col-2', name: 'b', columnType: 'INTEGER' },
      ])
      const createEntity = vi.fn().mockResolvedValue({ id: 'syn-new-table' })
      const runTransaction = vi.fn().mockResolvedValue({})

      mockUseCreateColumnModels.mockReturnValue({
        mutateAsync: createColumns,
      } as any)
      mockUseCreateEntity.mockReturnValue({ mutateAsync: createEntity } as any)
      mockUseTableUpdateTransaction.mockReturnValue({
        mutate: vi.fn(),
        mutateAsync: runTransaction,
        isPending: false,
        error: null,
        reset: vi.fn(),
      } as any)

      const user = userEvent.setup()
      const { onComplete } = renderWizard()

      await screen.findByTestId('CsvPreviewDialog')
      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })
      await screen.findByTestId('TableColumnSchemaForm')

      await user.clear(screen.getByLabelText(/Table Name/))
      await user.type(screen.getByLabelText(/Table Name/), 'My Table')
      await user.click(screen.getByRole('button', { name: 'Create' }))

      await vi.waitFor(() => {
        expect(onComplete).toHaveBeenCalledWith('syn-new-table')
      })

      expect(createColumns).toHaveBeenCalledWith(suggestedColumns)
      expect(createEntity).toHaveBeenCalledWith({
        concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
        name: 'My Table',
        parentId: 'syn-parent',
      })
      expect(runTransaction).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: 'syn-new-table',
        changes: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest',
            entityId: 'syn-new-table',
            changes: [
              { oldColumnId: undefined, newColumnId: 'col-1' },
              { oldColumnId: undefined, newColumnId: 'col-2' },
            ],
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
            uploadFileHandleId: fileHandleId,
            tableId: 'syn-new-table',
            linesToSkip: 1,
            csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: false },
          },
        ],
      })
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Table "My Table" created.',
        'success',
      )
    })

    it('surfaces an error and does not fire onComplete when the create flow fails', async () => {
      mockUseCreateColumnModels.mockReturnValue({
        mutateAsync: vi.fn().mockRejectedValue(new Error('boom')),
      } as any)

      const user = userEvent.setup()
      const { onComplete } = renderWizard()

      await screen.findByTestId('CsvPreviewDialog')
      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })
      await screen.findByTestId('TableColumnSchemaForm')

      await user.clear(screen.getByLabelText(/Table Name/))
      await user.type(screen.getByLabelText(/Table Name/), 'My Table')
      await user.click(screen.getByRole('button', { name: 'Create' }))

      await screen.findByText('boom')
      expect(onComplete).not.toHaveBeenCalled()
    })

    it('does not re-create the table entity when retrying after a transaction failure', async () => {
      const createColumns = vi
        .fn()
        .mockResolvedValue([{ id: 'col-1', name: 'a', columnType: 'STRING' }])
      const createEntity = vi.fn().mockResolvedValue({ id: 'syn-new-table' })
      // First runTransaction call fails; second succeeds.
      const runTransaction = vi
        .fn()
        .mockRejectedValueOnce(new Error('transaction failed'))
        .mockResolvedValueOnce({})

      mockUseCreateColumnModels.mockReturnValue({
        mutateAsync: createColumns,
      } as any)
      mockUseCreateEntity.mockReturnValue({ mutateAsync: createEntity } as any)
      mockUseTableUpdateTransaction.mockReturnValue({
        mutate: vi.fn(),
        mutateAsync: runTransaction,
        isPending: false,
        error: null,
        reset: vi.fn(),
      } as any)

      const user = userEvent.setup()
      const { onComplete } = renderWizard()

      await screen.findByTestId('CsvPreviewDialog')
      act(() => {
        mockCsvPreviewDialog.mock.lastCall![0].onConfirm(
          fileHandleId,
          suggestedColumns,
          csvDescriptor,
          uploadedFileName,
        )
      })
      await screen.findByTestId('TableColumnSchemaForm')

      // First attempt — transaction fails after the entity has been created
      await user.click(screen.getByRole('button', { name: 'Create' }))
      await screen.findByText('transaction failed')

      expect(createColumns).toHaveBeenCalledTimes(1)
      expect(createEntity).toHaveBeenCalledTimes(1)
      expect(runTransaction).toHaveBeenCalledTimes(1)

      // Table name input should be locked and tell the user the table exists
      expect(screen.getByLabelText(/Table Name/)).toBeDisabled()
      expect(
        screen.getByText(/table has been created.*re-apply the CSV/i),
      ).toBeInTheDocument()

      // Retry — only runTransaction should fire again
      await user.click(screen.getByRole('button', { name: 'Create' }))

      await vi.waitFor(() => {
        expect(onComplete).toHaveBeenCalledWith('syn-new-table')
      })
      expect(createColumns).toHaveBeenCalledTimes(1)
      expect(createEntity).toHaveBeenCalledTimes(1)
      expect(runTransaction).toHaveBeenCalledTimes(2)
    })
  })

  describe('preProcessColumns', () => {
    it('fills missing names with col1, col2, ...', () => {
      const result = preProcessColumns([
        { columnType: 'STRING' },
        { name: 'kept', columnType: 'STRING' },
        { columnType: 'INTEGER' },
      ] as any)
      expect(result.map(c => c.name)).toEqual(['col1', 'kept', 'col3'])
    })

    it('returns input unchanged when all names are present', () => {
      const input = [
        { name: 'a', columnType: 'STRING' },
        { name: 'b', columnType: 'INTEGER' },
      ] as any
      expect(preProcessColumns(input)).toEqual(input)
    })
  })

  describe('preProcessUploadToTableRequest', () => {
    it('increments linesToSkip and clears isFirstLineHeader when the CSV has a header', () => {
      const result = preProcessUploadToTableRequest({
        concreteType:
          'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        uploadFileHandleId: fileHandleId,
        csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: true },
      })
      expect(result.linesToSkip).toBe(1)
      expect(result.csvTableDescriptor?.isFirstLineHeader).toBe(false)
    })

    it('adds 1 to an existing linesToSkip value', () => {
      const result = preProcessUploadToTableRequest({
        concreteType:
          'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        uploadFileHandleId: fileHandleId,
        linesToSkip: 4,
        csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: true },
      })
      expect(result.linesToSkip).toBe(5)
    })

    it('leaves linesToSkip alone when there is no header row', () => {
      const result = preProcessUploadToTableRequest({
        concreteType:
          'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        uploadFileHandleId: fileHandleId,
        linesToSkip: 2,
        csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: false },
      })
      expect(result.linesToSkip).toBe(2)
      expect(result.csvTableDescriptor?.isFirstLineHeader).toBe(false)
    })

    it('does not mutate the input', () => {
      const input = {
        concreteType:
          'org.sagebionetworks.repo.model.table.UploadToTableRequest' as const,
        uploadFileHandleId: fileHandleId,
        csvTableDescriptor: { ...csvDescriptor, isFirstLineHeader: true },
      }
      preProcessUploadToTableRequest(input)
      expect(input.csvTableDescriptor.isFirstLineHeader).toBe(true)
      expect((input as { linesToSkip?: number }).linesToSkip).toBeUndefined()
    })
  })
})
