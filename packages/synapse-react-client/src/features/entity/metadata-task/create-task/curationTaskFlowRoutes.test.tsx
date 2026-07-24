import {
  useCreateCurationTask,
  useGetCurationTaskStatus,
} from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router'
import { getCurationTaskFlowRoutes } from './curationTaskFlowRoutes'

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

/**
 * Builds a host router that reproduces the real mounting structure used by
 * `MetadataTasksPageRouter`: an index route (the task list) as a sibling of a `create` route whose
 * children are the create-task-flow routes.
 */
function renderHostRouter(initialPath = '/create') {
  const routes: RouteObject[] = [
    {
      path: '/',
      children: [
        { index: true, element: <div>Task List Page</div> },
        {
          path: 'create',
          children: getCurationTaskFlowRoutes({
            projectId: 'syn123',
            exitPath: '/',
          }),
        },
      ],
    },
  ]
  const router = createMemoryRouter(routes, { initialEntries: [initialPath] })
  render(<RouterProvider router={router} />)
  return { router }
}

describe('getCurationTaskFlowRoutes', () => {
  it('walks through category picker -> compute form -> confirmation, landing on a real confirmation URL', async () => {
    mockCreateMutateAsync.mockResolvedValue({ taskId: 6852 } as CurationTask)
    const user = userEvent.setup()
    const { router } = renderHostRouter()

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

    // Step 3: confirmation -- this is the exact scenario that used to 404 (see
    // https://github.com/Sage-Bionetworks/synapseWeb -- relative `navigate` from a route nested
    // under a data-router `create/*` splat resolved to the wrong URL).
    expect(await screen.findByText(/task id: 6852/i)).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/create/confirmation/6852')

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))
    expect(await screen.findByText(/task list page/i)).toBeInTheDocument()
  })

  it('walks through category picker -> curate form -> confirmation, landing on a real confirmation URL', async () => {
    mockCreateMutateAsync.mockResolvedValue({ taskId: 43 } as CurationTask)
    const user = userEvent.setup()
    const { router } = renderHostRouter()

    await user.click(screen.getByRole('button', { name: /curate data/i }))

    await user.type(await screen.findByLabelText(/task name/i), 'My Task')
    await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
    await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
    await user.click(screen.getByTestId('user-search-box'))
    await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
    await user.type(screen.getByLabelText(/file view id/i), 'syn2')
    await user.click(screen.getByRole('button', { name: /create/i }))

    expect(mockCreateMutateAsync).toHaveBeenCalled()
    expect(await screen.findByText(/task id: 43/i)).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/create/confirmation/43')
  })

  it('returns to the category picker when Back is clicked from the compute form', async () => {
    const user = userEvent.setup()
    renderHostRouter()

    await user.click(screen.getByRole('button', { name: /compute data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /^back$/i }))

    expect(
      await screen.findByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
    expect(screen.queryByText(/task list page/i)).not.toBeInTheDocument()
  })

  it('shows a "Back to All Tasks" button on the category picker that exits to the host route', async () => {
    const user = userEvent.setup()
    renderHostRouter()

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(await screen.findByText(/task list page/i)).toBeInTheDocument()
  })

  it('shows a "Back to All Tasks" button on the compute form that exits to the host route', async () => {
    const user = userEvent.setup()
    renderHostRouter()

    await user.click(screen.getByRole('button', { name: /compute data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(await screen.findByText(/task list page/i)).toBeInTheDocument()
  })

  it('shows a "Back to All Tasks" button on the curate form that exits to the host route', async () => {
    const user = userEvent.setup()
    renderHostRouter()

    await user.click(screen.getByRole('button', { name: /curate data/i }))
    await screen.findByLabelText(/task name/i)

    await user.click(screen.getByRole('button', { name: /back to all tasks/i }))

    expect(await screen.findByText(/task list page/i)).toBeInTheDocument()
  })

  it('shows the confirmation screen directly when the URL is loaded fresh', async () => {
    renderHostRouter('/create/confirmation/6852')

    expect(await screen.findByText(/task id: 6852/i)).toBeInTheDocument()
  })

  it('redirects back to the category picker for an invalid taskId', async () => {
    renderHostRouter('/create/confirmation/not-a-number')

    expect(
      await screen.findByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
  })
})
