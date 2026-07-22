import {
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import {
  useCreateCurationTask,
  useDeleteCurationTask,
  useGetCurationTaskStatus,
  useUpdateCurationTask,
  useUpdateCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import {
  CurationTask,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ComputeTaskForm from './ComputeTaskForm'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useCreateCurationTask: vi.fn(),
  useUpdateCurationTask: vi.fn(),
  useDeleteCurationTask: vi.fn(),
  useGetCurationTaskStatus: vi.fn(),
  useUpdateCurationTaskStatus: vi.fn(),
}))

vi.mock('@/synapse-queries/entity/useEntity', () => ({
  useGetEntityPermissions: vi.fn(),
}))

vi.mock('@/utils/index', async origImport => ({
  ...(await origImport<typeof import('@/utils/index')>()),
  useSynapseContext: vi.fn(() => ({
    synapseClient: {
      curationTaskServicesClient: {
        getRepoV1CurationTaskTaskIdStatus: vi.fn(),
      },
    },
  })),
}))

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: ({
    value,
    onChange,
  }: {
    value: string | null
    onChange: (id: string | null) => void
  }) => (
    <button
      data-testid="user-search-box"
      data-value={value ?? ''}
      onClick={() => onChange('999')}
    >
      Select User
    </button>
  ),
}))

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: string
    onChange: (value: string) => void
  }) => (
    <input
      aria-label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  ),
}))

const mockUseCreateCurationTask = vi.mocked(useCreateCurationTask)
const mockUseUpdateCurationTask = vi.mocked(useUpdateCurationTask)
const mockUseDeleteCurationTask = vi.mocked(useDeleteCurationTask)
const mockUseGetCurationTaskStatus = vi.mocked(useGetCurationTaskStatus)
const mockUseUpdateCurationTaskStatus = vi.mocked(useUpdateCurationTaskStatus)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

const SAMPLE_SHEET_TYPE =
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties
const RECORD_SET_TYPE =
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties

const mockCreateMutateAsync = vi.fn()
const mockUpdateMutateAsync = vi.fn()
const mockUpdateStatusMutateAsync = vi.fn()
const mockDeleteMutate = vi.fn()

function fillRequiredCommonFields() {
  const user = userEvent.setup()
  return (async () => {
    await user.type(screen.getByLabelText(/task name/i), 'My Task')
    await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
    await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
    await user.click(screen.getByTestId('user-search-box'))
    return user
  })()
}

beforeEach(() => {
  vi.clearAllMocks()

  mockUseCreateCurationTask.mockReturnValue({
    mutateAsync: mockCreateMutateAsync,
    isPending: false,
    error: null,
  } as any)
  mockUseUpdateCurationTask.mockReturnValue({
    mutateAsync: mockUpdateMutateAsync,
    isPending: false,
    error: null,
  } as any)
  mockUseUpdateCurationTaskStatus.mockReturnValue({
    mutateAsync: mockUpdateStatusMutateAsync,
    isPending: false,
    error: null,
  } as any)
  mockUseDeleteCurationTask.mockImplementation(
    options =>
      ({
        mutate: (taskId: number) => {
          mockDeleteMutate(taskId)
          options?.onSuccess?.(undefined, taskId, {})
        },
        isPending: false,
      }) as any,
  )
  mockUseGetCurationTaskStatus.mockReturnValue({
    data: undefined,
    isFetching: false,
  } as any)
  mockUseGetEntityPermissions.mockReturnValue({
    data: { canDelete: true, canEdit: true },
  } as any)
})

describe('ComputeTaskForm', () => {
  describe('create mode', () => {
    it('defaults the type selector to Sample Sheet Generation', () => {
      render(<ComputeTaskForm projectId="syn123" />)
      expect(
        screen.getByRole('combobox', { name: /compute task type/i }),
      ).toHaveTextContent(/sample sheet generation/i)
    })

    it('shows Sample Sheet fields by default, and switches to Record Set fields when the type is changed', async () => {
      const user = userEvent.setup()
      render(<ComputeTaskForm projectId="syn123" />)

      expect(screen.getByLabelText(/input task id/i)).toBeInTheDocument()
      expect(
        screen.queryByLabelText(/agent instructions/i),
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole('combobox', { name: /compute task type/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /record set generation/i }),
      )

      expect(screen.queryByLabelText(/input task id/i)).not.toBeInTheDocument()
      expect(screen.getByLabelText(/agent instructions/i)).toBeInTheDocument()
    })

    it('shows the project selector only when no projectId is supplied', () => {
      render(<ComputeTaskForm />)
      expect(screen.getByLabelText(/^project$/i)).toBeInTheDocument()
    })

    it('does not show the project selector when a projectId is supplied', () => {
      render(<ComputeTaskForm projectId="syn123" />)
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('shows a "Back to All Tasks" button when onExit is provided, and calls it when clicked', async () => {
      const onExit = vi.fn()
      const user = userEvent.setup()
      render(<ComputeTaskForm projectId="syn123" onExit={onExit} />)

      await user.click(
        screen.getByRole('button', { name: /back to all tasks/i }),
      )

      expect(onExit).toHaveBeenCalled()
    })

    it('does not show a "Back to All Tasks" button when onExit is not provided', () => {
      render(<ComputeTaskForm projectId="syn123" />)
      expect(
        screen.queryByRole('button', { name: /back to all tasks/i }),
      ).not.toBeInTheDocument()
    })

    it('disables Create until all required fields (including type-specific fields) are filled', async () => {
      const user = userEvent.setup()
      render(<ComputeTaskForm projectId="syn123" />)

      const createButton = screen.getByRole('button', { name: /create/i })
      expect(createButton).toBeDisabled()

      await fillRequiredCommonFields()
      // Common fields alone are not enough -- Sample Sheet fields are also required.
      expect(createButton).toBeDisabled()

      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')

      expect(createButton).toBeEnabled()
    })

    it('keeps Create disabled when a task ID field is not a positive integer', async () => {
      const user = userEvent.setup()
      render(<ComputeTaskForm projectId="syn123" />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), 'abc')
      await user.type(screen.getByLabelText(/destination task id/i), '2')

      expect(screen.getByRole('button', { name: /create/i })).toBeDisabled()
    })

    it('creates the task with the built payload and calls onCreated', async () => {
      mockCreateMutateAsync.mockResolvedValue({
        taskId: MOCK_CURATION_TASK_ID,
      } as CurationTask)
      const onCreated = vi.fn()
      const user = userEvent.setup()
      render(<ComputeTaskForm projectId="syn123" onCreated={onCreated} />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      expect(mockCreateMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'syn123',
          dataType: 'My Task',
          instructions: 'Do it',
          assigneePrincipalId: '999',
          taskProperties: {
            concreteType: SAMPLE_SHEET_TYPE,
            inputTaskId: 1,
            destinationTaskId: 2,
          },
        }),
      )
      expect(onCreated).toHaveBeenCalledWith(
        expect.objectContaining({ taskId: MOCK_CURATION_TASK_ID }),
      )
    })
  })

  describe('edit mode', () => {
    const editTask: CurationTask = {
      taskId: MOCK_CURATION_TASK_ID,
      etag: 'etag-1',
      projectId: 'syn123',
      dataType: 'Existing Task',
      instructions: 'Existing instructions',
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      taskProperties: {
        concreteType: RECORD_SET_TYPE,
        folderId: 'syn999',
        instructions: 'Do the agent thing',
        destinationTaskId: 5,
      },
    }

    it('prefills fields from the existing task and hides the project selector', () => {
      mockUseGetCurationTaskStatus.mockReturnValue({
        data: {
          taskId: editTask.taskId,
          state: 'NOT_STARTED',
          dueDate: '2030-01-01',
        },
        isFetching: false,
      } as any)
      render(<ComputeTaskForm task={editTask} />)

      expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')
      expect(screen.getByLabelText(/^instructions/i)).toHaveValue(
        'Existing instructions',
      )
      expect(screen.getByLabelText(/agent instructions/i)).toHaveValue(
        'Do the agent thing',
      )
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('disables the type selector', () => {
      render(<ComputeTaskForm task={editTask} />)
      expect(
        screen.getByRole('combobox', { name: /compute task type/i }),
      ).toHaveAttribute('aria-disabled', 'true')
    })

    it('shows a Delete button when the user has permission, and deletes on confirmation', async () => {
      const onDeleted = vi.fn()
      const user = userEvent.setup()
      render(<ComputeTaskForm task={editTask} onDeleted={onDeleted} />)

      await user.click(screen.getByRole('button', { name: /^delete$/i }))
      // Confirm within the confirmation dialog (the second "Delete" button).
      const deleteButtons = screen.getAllByRole('button', {
        name: /^delete$/i,
      })
      await user.click(deleteButtons[deleteButtons.length - 1])

      expect(mockDeleteMutate).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
      expect(onDeleted).toHaveBeenCalled()
    })

    it('does not show a Delete button when the user lacks permission', () => {
      mockUseGetEntityPermissions.mockReturnValue({
        data: { canDelete: false, canEdit: true },
      } as any)
      render(<ComputeTaskForm task={editTask} onDeleted={vi.fn()} />)

      expect(
        screen.queryByRole('button', { name: /^delete$/i }),
      ).not.toBeInTheDocument()
    })

    it('saves the task via updateTask and calls onSaved', async () => {
      mockUseGetCurationTaskStatus.mockReturnValue({
        data: {
          taskId: editTask.taskId,
          state: 'NOT_STARTED',
          dueDate: '2030-01-01',
        },
        isFetching: false,
      } as any)
      mockUpdateMutateAsync.mockResolvedValue(editTask)
      const onSaved = vi.fn()
      const user = userEvent.setup()
      render(<ComputeTaskForm task={editTask} onSaved={onSaved} />)

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      expect(mockUpdateMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({ taskId: MOCK_CURATION_TASK_ID }),
      )
      expect(onSaved).toHaveBeenCalledWith(editTask)
    })

    it('omits the type section and shows a warning for a task with an unrecognized category', () => {
      render(
        <ComputeTaskForm
          task={{
            ...editTask,
            taskProperties: undefined,
          }}
        />,
      )

      expect(
        screen.queryByRole('combobox', { name: /compute task type/i }),
      ).not.toBeInTheDocument()
      expect(screen.getByText(/unrecognized task type/i)).toBeInTheDocument()
    })
  })
})
