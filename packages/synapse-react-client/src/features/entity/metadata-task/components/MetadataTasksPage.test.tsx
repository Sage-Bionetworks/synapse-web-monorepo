import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MetadataTasksPage from './MetadataTasksPage'

import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { useGetEntityBundle, useGetFeatureFlag } from '@/synapse-queries/index'

const MOCK_PROJECT_ID = 'syn1'

// Keep the real table hook + components, but stub the data-fetching hooks so the
// test is deterministic and offline.
vi.mock(
  '@/synapse-queries/curation/task/useCurationTask',
  async origImport => ({
    ...(await origImport<
      typeof import('@/synapse-queries/curation/task/useCurationTask')
    >()),
    useGetCurationTasksInfinite: vi.fn(),
    useGetCurationTask: vi.fn(),
    useGetCurationTaskStatus: vi.fn(() => ({
      data: undefined,
      isFetching: false,
    })),
    useCreateCurationTask: vi.fn(() => ({
      mutateAsync: vi.fn(),
      isPending: false,
    })),
    useUpdateCurationTask: vi.fn(() => ({
      mutateAsync: vi.fn(),
      isPending: false,
    })),
    useUpdateCurationTaskStatus: vi.fn(() => ({
      mutateAsync: vi.fn(),
      isPending: false,
    })),
    useDeleteCurationTask: vi.fn(() => ({ mutate: vi.fn(), isPending: false })),
  }),
)

vi.mock('@/synapse-queries/index', async origImport => ({
  ...(await origImport<typeof import('@/synapse-queries/index')>()),
  useGetEntityBundle: vi.fn(),
  useGetFeatureFlag: vi.fn(),
}))

vi.mock('@/synapse-queries/entity/useEntity', async origImport => ({
  ...(await origImport<typeof import('@/synapse-queries/entity/useEntity')>()),
  useGetEntityPermissions: vi.fn(),
}))

// The "Open Curator" button hook makes its own permission requests; stub it.
vi.mock('../hooks/useOpenCuratorButton', () => ({
  default: vi.fn(() => ({
    hasPermission: true,
    isLoading: false,
    isPending: false,
    onClick: vi.fn(),
  })),
}))

// The create/edit forms render a UserSearchBox (assignee) that fetches over the
// network. It is irrelevant to this test, so stub it.
vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: () => <div data-testid="mock-user-search-box" />,
}))

const mockTaskBundle = createMockTaskBundle({
  projectId: MOCK_PROJECT_ID,
  dataType: 'Test Data Type',
  instructions: 'Test instructions',
})

const mockUseGetCurationTasksInfinite = vi.mocked(useGetCurationTasksInfinite)
const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)
const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

beforeEach(async () => {
  vi.clearAllMocks()

  const { useGetCurationTask } =
    await import('@/synapse-queries/curation/task/useCurationTask')
  vi.mocked(useGetCurationTask).mockReturnValue({
    data: mockTaskBundle.task,
    isLoading: false,
    error: null,
  } as any)

  mockUseGetCurationTasksInfinite.mockReturnValue({
    data: {
      pages: [{ bundlePage: [mockTaskBundle] }],
    },
    hasNextPage: false,
    fetchNextPage: vi.fn(),
    isFetchingNextPage: false,
    isLoading: false,
  } as any)

  // canEdit drives the per-row "Edit" button (via useMetadataTaskTable)
  mockUseGetEntityBundle.mockReturnValue({
    data: { permissions: { canEdit: true } },
    isLoading: false,
  } as any)

  mockUseGetEntityPermissions.mockReturnValue({
    data: { canEdit: true, canDelete: false, canAddChild: true },
  } as any)

  mockUseGetFeatureFlag.mockReturnValue(true)
})

function renderComponent() {
  return render(
    <MetadataTasksPage
      projectId={MOCK_PROJECT_ID}
      useMemoryRouter
      routerBaseName="/"
    />,
    { wrapper: createWrapper() },
  )
}

describe('MetadataTasksPage', () => {
  // Regression test for SWC-7835: clicking "Edit" set the global editing state,
  // which re-rendered the page. With non-memoized table columns, every row cell
  // remounted (flexRender treats the inline cell fn as a component type),
  // discarding the just-set navigation state and requiring a second click to
  // navigate. This test fails if column identity becomes unstable again.
  it('navigates to the edit page on the first click of the row Edit button', async () => {
    const user = userEvent.setup()
    renderComponent()

    const editButton = await screen.findByRole('button', { name: /^edit$/i })
    await user.click(editButton)

    const heading = await screen.findByRole('heading', { name: /edit task/i })
    expect(heading).toBeInTheDocument()
  })

  it('navigates to the create-task flow when "New Task" is clicked', async () => {
    const user = userEvent.setup()
    renderComponent()

    const newTaskButton = await screen.findByRole('button', {
      name: /new task/i,
    })
    await user.click(newTaskButton)

    const heading = await screen.findByRole('heading', {
      name: /create new task/i,
    })
    expect(heading).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
  })

  it('does not show the "New Task" button when the feature flag is off', async () => {
    mockUseGetFeatureFlag.mockReturnValue(false)
    renderComponent()

    expect(
      await screen.findByRole('button', { name: /^edit$/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /new task/i }),
    ).not.toBeInTheDocument()
  })
})
