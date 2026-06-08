import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  useCreateCurationTask,
  useDeleteCurationTask,
  useUpdateCurationTask,
} from '@/synapse-queries/curation/task/useCurationTask'
import {
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_ID,
  MOCK_CURATION_TASK_FILE_VIEW_ID,
} from '@/mocks/curation/mockCurationTask'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { EntityIdTextFieldProps } from '@/components/EntityFinder/EntityIdTextField'
import CreateOrUpdateCurationTaskDialog from './CreateOrUpdateCurationTaskDialog'
import {
  AUTH_MODE_SOURCE_BENEFACTOR_TITLE,
  DELETE_CURATION_TASK_DIALOG_TITLE,
  FILE_BASED_TASK_TITLE,
  RECORD_BASED_TASK_TITLE,
} from '../utils/constants'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useCreateCurationTask: vi.fn(),
  useUpdateCurationTask: vi.fn(),
  useDeleteCurationTask: vi.fn(),
}))

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: ({
    onChange,
    defaultValue,
  }: {
    onChange: (principalId: string | null) => void
    defaultValue?: string
  }) => (
    <button
      data-testid="user-search-box"
      data-default-value={defaultValue}
      onClick={() => onChange('newAssignee999')}
    >
      Select User
    </button>
  ),
}))

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({ label, value, onChange, disabled }: EntityIdTextFieldProps) => (
    <input
      aria-label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled ?? false}
    />
  ),
}))

const mockUseCreateCurationTask = vi.mocked(useCreateCurationTask)
const mockUseUpdateCurationTask = vi.mocked(useUpdateCurationTask)
const mockUseDeleteCurationTask = vi.mocked(useDeleteCurationTask)

const mockCreateMutate = vi.fn()
const mockUpdateMutate = vi.fn()
const mockDeleteMutate = vi.fn()
// Capture the options passed to useDeleteCurationTask so tests can invoke onSuccess
let lastDeleteOptions: Parameters<typeof useDeleteCurationTask>[0] | undefined

const defaultProps = {
  open: true,
  onCancel: vi.fn(),
  onSuccess: vi.fn(),
  projectId: 'syn123',
}

function renderCreateDialog(props = {}) {
  return render(
    <CreateOrUpdateCurationTaskDialog {...defaultProps} {...props} />,
  )
}

function renderEditDialog(task: CurationTask, props = {}) {
  return render(
    <CreateOrUpdateCurationTaskDialog
      {...defaultProps}
      task={task}
      {...props}
    />,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  lastDeleteOptions = undefined
  mockCreateMutate.mockResolvedValue({})
  mockUpdateMutate.mockResolvedValue({})
  mockDeleteMutate.mockResolvedValue(undefined)
  mockUseCreateCurationTask.mockReturnValue({
    mutate: mockCreateMutate,
    isPending: false,
    error: null,
  } as any)
  mockUseUpdateCurationTask.mockReturnValue({
    mutate: mockUpdateMutate,
    isPending: false,
    error: null,
  } as any)
  mockUseDeleteCurationTask.mockImplementation(options => {
    lastDeleteOptions = options
    return {
      mutate: mockDeleteMutate,
      isPending: false,
      error: null,
    } as any
  })
})

describe('CreateOrUpdateCurationTaskDialog', () => {
  describe('Create mode', () => {
    it('renders step 1 type selection on open', () => {
      renderCreateDialog()
      expect(screen.getByText('Create Curation Task')).toBeInTheDocument()
      expect(screen.getByText(FILE_BASED_TASK_TITLE)).toBeInTheDocument()
      expect(screen.getByText(RECORD_BASED_TASK_TITLE)).toBeInTheDocument()
    })

    it('clicking File-Based Data advances to step 2', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      // Step 2 shows only type-specific fields
      expect(screen.getByLabelText(/Upload Folder ID/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/File View ID/i)).toBeInTheDocument()
      // Task Name (and others) are in step 3
      expect(screen.queryByLabelText(/Task Name/i)).not.toBeInTheDocument()
    })

    it('clicking Records-Based Data advances to step 2', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(RECORD_BASED_TASK_TITLE))
      expect(screen.getByLabelText(/Record Set ID/i)).toBeInTheDocument()
      expect(
        screen.queryByLabelText(/Upload Folder ID/i),
      ).not.toBeInTheDocument()
    })

    it('clicking Back from step 2 returns to step 1', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByText(FILE_BASED_TASK_TITLE)).toBeInTheDocument()
    })

    it('clicking Next advances from step 2 to step 3', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      // Step 3 shows common fields
      expect(screen.getByLabelText(/Task Name/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    })

    it('clicking Back from step 3 returns to step 2 in create mode', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      await userEvent.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByLabelText(/Upload Folder ID/i)).toBeInTheDocument()
    })

    it('Save calls createTask with file-based payload', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))

      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')

      // Advance to step 3 (common fields)
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      await userEvent.type(screen.getByLabelText(/Task Name/i), 'Proteomics')

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(mockCreateMutate).toHaveBeenCalledWith(
          expect.objectContaining({
            projectId: 'syn123',
            dataType: 'Proteomics',
            taskProperties: {
              concreteType:
                'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
              uploadFolderId: 'syn10',
              fileViewId: 'syn20',
            },
          }),
        )
      })
    })

    it('Save calls createTask with record-based payload', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(RECORD_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Record Set ID/i), 'syn30')

      // Advance to step 3 (common fields)
      await userEvent.click(screen.getByRole('button', { name: /next/i }))

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(mockCreateMutate).toHaveBeenCalledWith(
          expect.objectContaining({
            taskProperties: {
              concreteType:
                'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
              recordSetId: 'syn30',
            },
          }),
        )
      })
    })

    it('shows API error alert when create fails', async () => {
      mockUseCreateCurationTask.mockReturnValue({
        mutate: mockCreateMutate,
        isPending: false,
        error: { reason: 'Something went wrong' },
      } as any)
      renderCreateDialog()
      // Navigate through step 2 to step 3 where errors are rendered
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      // Error is rendered in step 3
      expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    })

    it('does not render the Delete button', () => {
      renderCreateDialog({ onDeleteSuccess: vi.fn() })
      expect(
        screen.queryByRole('button', { name: /^delete$/i }),
      ).not.toBeInTheDocument()
    })
  })

  describe('Edit mode', () => {
    const fileBasedTask: CurationTask = {
      taskId: MOCK_CURATION_TASK_ID,
      projectId: 'syn123',
      dataType: 'Genomics',
      instructions: 'Fill all fields.',
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
        uploadFolderId: 'syn100',
        fileViewId: MOCK_CURATION_TASK_FILE_VIEW_ID,
        suggestedAuthorizationMode: 'SESSION_OWNER',
      },
    }

    it('shows edit title and pre-fills common fields', () => {
      renderEditDialog(fileBasedTask)
      expect(screen.getByText('Edit Curation Task')).toBeInTheDocument()

      const dataTypeInput =
        screen.getByLabelText<HTMLInputElement>(/Task Name/i)
      expect(dataTypeInput.value).toBe('Genomics')

      const instructionsInput =
        screen.getByLabelText<HTMLInputElement>(/Instructions/i)
      expect(instructionsInput.value).toBe('Fill all fields.')
    })

    it('does not render TaskProperties fields in edit mode', () => {
      renderEditDialog(fileBasedTask)
      // Edit mode starts at step 3 (COMMON_MUTABLE_FIELDS);
      // type-specific fields are in step 2 and are not shown
      expect(
        screen.queryByLabelText(/Upload Folder ID/i),
      ).not.toBeInTheDocument()
      expect(screen.queryByLabelText(/File View ID/i)).not.toBeInTheDocument()
    })

    it('does not render Back button in edit mode', () => {
      renderEditDialog(fileBasedTask)
      expect(
        screen.queryByRole('button', { name: /back/i }),
      ).not.toBeInTheDocument()
    })

    it('shows warning when suggestedAuthorizationMode is changed', async () => {
      renderEditDialog(fileBasedTask)

      // Initially no warning
      expect(
        screen.queryByText(/Changing the Authorization Mode/i),
      ).not.toBeInTheDocument()

      // Change to SOURCE_BENEFACTOR
      await userEvent.click(
        screen.getByLabelText(AUTH_MODE_SOURCE_BENEFACTOR_TITLE),
      )

      await waitFor(() => {
        expect(
          screen.getByText(/Changing the Authorization Mode/i),
        ).toBeInTheDocument()
      })
    })

    it('does not show warning when suggestedAuthorizationMode is unchanged', () => {
      renderEditDialog(fileBasedTask)
      // Select the same value (SESSION_OWNER is already selected)
      expect(
        screen.queryByText(/Changing the Authorization Mode/i),
      ).not.toBeInTheDocument()
    })

    it('Save calls updateTask with updated fields', async () => {
      renderEditDialog(fileBasedTask)

      const dataTypeInput = screen.getByLabelText(/Task Name/i)
      await userEvent.clear(dataTypeInput)
      await userEvent.type(dataTypeInput, 'Proteomics')

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(mockUpdateMutate).toHaveBeenCalledWith(
          expect.objectContaining({
            taskId: MOCK_CURATION_TASK_ID,
            dataType: 'Proteomics',
          }),
        )
      })
    })

    it('shows API error alert when update fails', () => {
      mockUseUpdateCurationTask.mockReturnValue({
        mutate: mockUpdateMutate,
        isPending: false,
        error: { reason: 'Update failed' },
      } as any)
      renderEditDialog(fileBasedTask)
      expect(screen.getByText('Update failed')).toBeInTheDocument()
    })

    it('does not render record-based task properties fields in edit mode', () => {
      const recordTask: CurationTask = {
        taskId: 200,
        projectId: 'syn123',
        taskProperties: {
          concreteType:
            'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
          recordSetId: 'syn999',
        },
      }
      renderEditDialog(recordTask)
      // Edit mode starts at step 3 (COMMON_MUTABLE_FIELDS);
      // type-specific fields are in step 2 and are not shown
      expect(screen.queryByLabelText(/Record Set ID/i)).not.toBeInTheDocument()
    })

    describe('Delete', () => {
      it('does not render the Delete button when onDeleteSuccess is not provided', () => {
        renderEditDialog(fileBasedTask)
        expect(
          screen.queryByRole('button', { name: /^delete$/i }),
        ).not.toBeInTheDocument()
      })

      it('renders the Delete button when onDeleteSuccess is provided', () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        expect(
          screen.getByRole('button', { name: /^delete$/i }),
        ).toBeInTheDocument()
      })

      it('opens the confirmation dialog when Delete is clicked', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        await userEvent.click(screen.getByRole('button', { name: /^delete$/i }))
        expect(
          screen.getByText(DELETE_CURATION_TASK_DIALOG_TITLE),
        ).toBeInTheDocument()
        expect(
          screen.getByText(
            /any grid sessions associated with this task will also be deleted/i,
          ),
        ).toBeInTheDocument()
      })

      it('calls deleteCurationTask with the task ID when confirmed', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        await userEvent.click(screen.getByRole('button', { name: /^delete$/i }))
        // Confirm in the nested ConfirmationDialog
        const confirmButtons = screen.getAllByRole('button', {
          name: /^delete$/i,
        })
        await userEvent.click(confirmButtons[confirmButtons.length - 1])
        await waitFor(() => {
          expect(mockDeleteMutate).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
        })
      })

      it('does not call deleteCurationTask when the confirmation is cancelled', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        await userEvent.click(screen.getByRole('button', { name: /^delete$/i }))
        await userEvent.click(screen.getByRole('button', { name: /cancel/i }))
        expect(mockDeleteMutate).not.toHaveBeenCalled()
      })

      it('calls onDeleteSuccess when the delete mutation succeeds', () => {
        const onDeleteSuccess = vi.fn()
        renderEditDialog(fileBasedTask, { onDeleteSuccess })

        // Simulate the mutation succeeding
        lastDeleteOptions?.onSuccess?.(undefined, MOCK_CURATION_TASK_ID, {})

        expect(onDeleteSuccess).toHaveBeenCalledTimes(1)
      })
    })
  })
})
