import {
  useCreateCurationTask,
  useGetCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import CreateCurationTaskFlow from './CreateCurationTaskFlow'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useCreateCurationTask: vi.fn(),
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
  default: ({ onChange }: { onChange: (id: string | null) => void }) => (
    <button data-testid="user-search-box" onClick={() => onChange('999')}>
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
const mockUseGetCurationTaskStatus = vi.mocked(useGetCurationTaskStatus)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)
const mockCreateMutateAsync = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
  mockUseCreateCurationTask.mockReturnValue({
    mutateAsync: mockCreateMutateAsync,
    isPending: false,
    error: null,
  } as any)
  mockUseGetCurationTaskStatus.mockReturnValue({
    data: undefined,
    isFetching: false,
  } as any)
  mockUseGetEntityPermissions.mockReturnValue({ data: undefined } as any)
})

function renderFlow(onExit = vi.fn()) {
  render(
    <MemoryRouter initialEntries={['/']}>
      <CreateCurationTaskFlow projectId="syn123" onExit={onExit} />
    </MemoryRouter>,
  )
  return { onExit }
}

describe('CreateCurationTaskFlow', () => {
  it('walks through category picker -> compute form -> confirmation, creating the task on the step-2-to-step-3 transition', async () => {
    mockCreateMutateAsync.mockResolvedValue({ taskId: 42 } as CurationTask)
    const user = userEvent.setup()
    const { onExit } = renderFlow()

    // Step 1: category picker
    await user.click(screen.getByRole('button', { name: /compute data/i }))

    // Step 2: compute form
    await user.type(await screen.findByLabelText(/task name/i), 'My Task')
    await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
    await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
    await user.click(screen.getByTestId('user-search-box'))
    await user.type(screen.getByLabelText(/input task id/i), '1')
    await user.type(screen.getByLabelText(/destination task id/i), '2')
    await user.click(screen.getByRole('button', { name: /create/i }))

    expect(mockCreateMutateAsync).toHaveBeenCalled()

    // Step 3: confirmation
    expect(await screen.findByText(/task id: 42/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))
    expect(onExit).toHaveBeenCalled()
  })

  it('returns to the category picker when Back is clicked from the compute form', async () => {
    const user = userEvent.setup()
    renderFlow()

    await user.click(screen.getByRole('button', { name: /compute data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /^back$/i }))

    expect(
      await screen.findByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
  })

  it("returns to the category picker when Back is clicked from the compute form, even when nested under a host router's create/* route", async () => {
    // Reproduces the real app's mounting structure (see MetadataTasksPageRouter): the flow is
    // rendered inside a host router's `create/*` route, sibling to the task list at the router's
    // index. A naive relative `navigate('..')` from the compute form overshoots past the flow's own
    // category picker and lands on the host's task list instead.
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/create']}>
        <Routes>
          <Route index element={<div>Task List Page</div>} />
          <Route
            path="create/*"
            element={
              <CreateCurationTaskFlow projectId="syn123" onExit={vi.fn()} />
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: /compute data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /^back$/i }))

    expect(
      await screen.findByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/task list page/i)).not.toBeInTheDocument()
  })

  it('shows a "Back to All Tasks" button on the category picker that calls onExit', async () => {
    const user = userEvent.setup()
    const { onExit } = renderFlow()

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(onExit).toHaveBeenCalled()
  })

  it('shows a "Back to All Tasks" button on the compute form that calls onExit', async () => {
    const user = userEvent.setup()
    const { onExit } = renderFlow()

    await user.click(screen.getByRole('button', { name: /compute data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(onExit).toHaveBeenCalled()
  })

  it('shows a "Back to All Tasks" button on the curate form that calls onExit', async () => {
    const user = userEvent.setup()
    const { onExit } = renderFlow()

    await user.click(screen.getByRole('button', { name: /curate data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(onExit).toHaveBeenCalled()
  })

  it('walks through category picker -> curate form -> confirmation, creating the task on the step-2-to-step-3 transition', async () => {
    mockCreateMutateAsync.mockResolvedValue({ taskId: 43 } as CurationTask)
    const user = userEvent.setup()
    renderFlow()

    // Step 1: category picker
    await user.click(screen.getByRole('button', { name: /curate data/i }))

    // Step 2: curate form
    await user.type(await screen.findByLabelText(/task name/i), 'My Task')
    await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
    await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
    await user.click(screen.getByTestId('user-search-box'))
    await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
    await user.type(screen.getByLabelText(/file view id/i), 'syn2')
    await user.click(screen.getByRole('button', { name: /create/i }))

    expect(mockCreateMutateAsync).toHaveBeenCalled()

    // Step 3: confirmation
    expect(await screen.findByText(/task id: 43/i)).toBeInTheDocument()
  })
})
