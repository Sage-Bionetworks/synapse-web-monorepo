import {
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import {
  useGetCurationTask,
  useGetCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import {
  CurationTask,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router'
import EditCurationTaskPage from './EditCurationTaskPage'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useGetCurationTask: vi.fn(),
  useCreateCurationTask: vi.fn(() => ({
    mutateAsync: vi.fn(),
    isPending: false,
  })),
  useUpdateCurationTask: vi.fn(() => ({
    mutateAsync: vi.fn(),
    isPending: false,
  })),
  useDeleteCurationTask: vi.fn(() => ({ mutate: vi.fn(), isPending: false })),
  useGetCurationTaskStatus: vi.fn(),
  useUpdateCurationTaskStatus: vi.fn(() => ({
    mutateAsync: vi.fn(),
    isPending: false,
  })),
}))

vi.mock('@/synapse-queries/entity/useEntity', () => ({
  useGetEntityPermissions: vi.fn(() => ({ data: undefined })),
}))

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: () => <div data-testid="mock-user-search-box" />,
}))

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({ label, value }: { label: string; value: string }) => (
    <input aria-label={label} value={value} readOnly />
  ),
}))

const mockUseGetCurationTask = vi.mocked(useGetCurationTask)
const mockUseGetCurationTaskStatus = vi.mocked(useGetCurationTaskStatus)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

const editTask: CurationTask = {
  taskId: MOCK_CURATION_TASK_ID,
  projectId: 'syn123',
  dataType: 'Existing Task',
  assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  taskProperties: {
    concreteType:
      SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties,
    inputTaskId: 1,
    destinationTaskId: 2,
  },
}

const editCurateTask: CurationTask = {
  taskId: MOCK_CURATION_TASK_ID,
  projectId: 'syn123',
  dataType: 'Existing Curate Task',
  assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  taskProperties: {
    concreteType:
      FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties,
    uploadFolderId: 'syn1',
    fileViewId: 'syn2',
  },
}

beforeEach(() => {
  vi.clearAllMocks()
  mockUseGetCurationTaskStatus.mockReturnValue({
    data: undefined,
    isFetching: false,
  } as any)
  mockUseGetEntityPermissions.mockReturnValue({ data: undefined } as any)
})

function renderPage(taskId: number = MOCK_CURATION_TASK_ID) {
  return render(
    <MemoryRouter initialEntries={[`/edit/${taskId}`]}>
      <Routes>
        <Route path="edit/:taskId" element={<EditCurationTaskPage />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('EditCurationTaskPage', () => {
  it('shows a loading spinner while the task is being fetched', () => {
    mockUseGetCurationTask.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any)
    renderPage()

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders the compute form prefilled once a Compute Data task loads', () => {
    mockUseGetCurationTask.mockReturnValue({
      data: editTask,
      isLoading: false,
      error: null,
    } as any)
    renderPage()

    expect(
      screen.getByRole('heading', { name: /edit task/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')
    expect(
      screen.getByRole('combobox', { name: /compute task type/i }),
    ).toBeInTheDocument()
  })

  it('shows a "Back to All Tasks" button that navigates back to the task list', async () => {
    mockUseGetCurationTask.mockReturnValue({
      data: editTask,
      isLoading: false,
      error: null,
    } as any)
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={[`/edit/${MOCK_CURATION_TASK_ID}`]}>
        <Routes>
          <Route index element={<div>Task List Page</div>} />
          <Route path="edit/:taskId" element={<EditCurationTaskPage />} />
        </Routes>
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(await screen.findByText(/task list page/i)).toBeInTheDocument()
  })

  it('renders the curate form prefilled once a Curate Data task loads', () => {
    mockUseGetCurationTask.mockReturnValue({
      data: editCurateTask,
      isLoading: false,
      error: null,
    } as any)
    renderPage()

    expect(
      screen.getByRole('heading', { name: /edit task/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/task name/i)).toHaveValue(
      'Existing Curate Task',
    )
    expect(
      screen.getByRole('combobox', { name: /curate task type/i }),
    ).toBeInTheDocument()
  })

  it('shows an error banner if the task fails to load', () => {
    mockUseGetCurationTask.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error('Not found'),
    } as any)
    renderPage()

    expect(
      screen.queryByRole('heading', { name: /edit task/i }),
    ).not.toBeInTheDocument()
  })

  it('resets form state when navigating from one task to another', async () => {
    const secondTask: CurationTask = {
      ...editTask,
      taskId: MOCK_CURATION_TASK_ID + 1,
      dataType: 'Second Task',
    }
    mockUseGetCurationTask.mockImplementation(
      (taskId: number) =>
        ({
          data: taskId === secondTask.taskId ? secondTask : editTask,
          isLoading: false,
          error: null,
        }) as any,
    )

    function GoToSecondTask() {
      const navigate = useNavigate()
      return (
        <button onClick={() => void navigate(`/edit/${secondTask.taskId}`)}>
          Go to second task
        </button>
      )
    }

    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={[`/edit/${MOCK_CURATION_TASK_ID}`]}>
        <GoToSecondTask />
        <Routes>
          <Route path="edit/:taskId" element={<EditCurationTaskPage />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')

    await user.click(screen.getByRole('button', { name: /go to second task/i }))

    expect(screen.getByLabelText(/task name/i)).toHaveValue('Second Task')
  })
})
