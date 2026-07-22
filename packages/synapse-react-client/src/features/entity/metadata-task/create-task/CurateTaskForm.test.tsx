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
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CurateTaskForm from './CurateTaskForm'

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

const FILE_BASED_TYPE =
  FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
const RECORD_BASED_TYPE =
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties

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

describe('CurateTaskForm', () => {
  describe('create mode', () => {
    it('defaults the type selector to File-Based Data', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(
        screen.getByRole('combobox', { name: /curate task type/i }),
      ).toHaveTextContent(/file-based data/i)
    })

    it('shows File-Based fields by default, and switches to Records-Based fields when the type is changed', async () => {
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" />)

      expect(screen.getByLabelText(/upload folder id/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/record set id/i)).not.toBeInTheDocument()

      await user.click(
        screen.getByRole('combobox', { name: /curate task type/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /records-based data/i }),
      )

      expect(
        screen.queryByLabelText(/upload folder id/i),
      ).not.toBeInTheDocument()
      expect(screen.getByLabelText(/record set id/i)).toBeInTheDocument()
    })

    it('shows the project selector only when no projectId is supplied', () => {
      render(<CurateTaskForm />)
      expect(screen.getByLabelText(/^project$/i)).toBeInTheDocument()
    })

    it('does not show the project selector when a projectId is supplied', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('shows a "Back to All Tasks" button when onExit is provided, and calls it when clicked', async () => {
      const onExit = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onExit={onExit} />)

      await user.click(
        screen.getByRole('button', { name: /back to all tasks/i }),
      )

      expect(onExit).toHaveBeenCalled()
    })

    it('does not show a "Back to All Tasks" button when onExit is not provided', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(
        screen.queryByRole('button', { name: /back to all tasks/i }),
      ).not.toBeInTheDocument()
    })

    it('disables Create until all required fields (including type-specific fields) are filled', async () => {
      render(<CurateTaskForm projectId="syn123" />)

      const createButton = screen.getByRole('button', { name: /create/i })
      expect(createButton).toBeDisabled()

      await fillRequiredCommonFields()
      // Common fields alone are not enough -- File-Based fields are also required.
      expect(createButton).toBeDisabled()

      const user = userEvent.setup()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')

      expect(createButton).toBeEnabled()
    })

    it('creates the task with the built payload and calls onCreated', async () => {
      mockCreateMutateAsync.mockResolvedValue({
        taskId: MOCK_CURATION_TASK_ID,
      } as CurationTask)
      const onCreated = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onCreated={onCreated} />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      expect(mockCreateMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'syn123',
          dataType: 'My Task',
          instructions: 'Do it',
          assigneePrincipalId: '999',
          taskProperties: {
            concreteType: FILE_BASED_TYPE,
            uploadFolderId: 'syn1',
            fileViewId: 'syn2',
            suggestedAuthorizationMode: undefined,
            collaboratorPrincipalIds: undefined,
          },
        }),
      )
      expect(onCreated).toHaveBeenCalledWith(
        expect.objectContaining({ taskId: MOCK_CURATION_TASK_ID }),
      )
    })

    it('sets suggestedAuthorizationMode from the selected Authorization Mode', async () => {
      mockCreateMutateAsync.mockResolvedValue({
        taskId: MOCK_CURATION_TASK_ID,
      } as CurationTask)
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')
      await user.click(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: /share with assignees only/i,
        }),
      )
      await user.click(screen.getByRole('button', { name: /create/i }))

      expect(mockCreateMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({
          taskProperties: expect.objectContaining({
            suggestedAuthorizationMode: 'SESSION_OWNER',
          }),
        }),
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
        concreteType: RECORD_BASED_TYPE,
        recordSetId: 'syn999',
        suggestedAuthorizationMode: 'SESSION_OWNER',
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
      render(<CurateTaskForm task={editTask} />)

      expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')
      expect(screen.getByLabelText(/^instructions/i)).toHaveValue(
        'Existing instructions',
      )
      expect(screen.getByLabelText(/record set id/i)).toHaveValue('syn999')
      expect(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      ).toHaveTextContent(/share with assignees only/i)
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('disables the type selector', () => {
      render(<CurateTaskForm task={editTask} />)
      expect(
        screen.getByRole('combobox', { name: /curate task type/i }),
      ).toHaveAttribute('aria-disabled', 'true')
    })

    it('shows a Delete button when the user has permission, and deletes on confirmation', async () => {
      const onDeleted = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} onDeleted={onDeleted} />)

      await user.click(screen.getByRole('button', { name: /^delete$/i }))
      const deleteButtons = screen.getAllByRole('button', {
        name: /^delete$/i,
      })
      await user.click(deleteButtons[deleteButtons.length - 1])

      expect(mockDeleteMutate).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
      expect(onDeleted).toHaveBeenCalled()
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
      render(<CurateTaskForm task={editTask} onSaved={onSaved} />)

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      expect(mockUpdateMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({ taskId: MOCK_CURATION_TASK_ID }),
      )
      expect(onSaved).toHaveBeenCalledWith(editTask)
    })

    it('clears the due date on the status when the user removes an existing due date', async () => {
      mockUseGetCurationTaskStatus.mockReturnValue({
        data: {
          taskId: editTask.taskId,
          state: 'NOT_STARTED',
          dueDate: '2030-01-01',
          etag: 'status-etag',
        },
        isFetching: false,
      } as any)
      mockUpdateMutateAsync.mockResolvedValue({ ...editTask, etag: 'etag-2' })
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} onSaved={vi.fn()} />)

      const dueDateInput = screen.getByLabelText(/task due date/i)
      expect(dueDateInput).toHaveValue('2030-01-01')
      await user.clear(dueDateInput)

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      expect(mockUpdateStatusMutateAsync).toHaveBeenCalledWith(
        expect.objectContaining({ dueDate: undefined }),
      )
    })

    it('shows a warning when the Authorization Mode is changed', async () => {
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} />)

      expect(
        screen.queryByText(/changing the authorization mode/i),
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /work independently/i }),
      )

      expect(
        screen.getByText(/changing the authorization mode/i),
      ).toBeInTheDocument()
    })
  })
})
