import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MetadataTasksPage from './MetadataTasksPage'

import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import useGetEntityBundleDirect from '@/synapse-queries/entity/useEntityBundle'
import { useGetEntityBundle, useGetFeatureFlag } from '@/synapse-queries/index'

const MOCK_PROJECT_ID = 'syn1'

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

// CurationTaskCardLayout imports useGetEntityBundle directly from this path
vi.mock('@/synapse-queries/entity/useEntityBundle', () => ({
  default: vi.fn(),
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
const mockUseGetEntityBundleDirect = vi.mocked(useGetEntityBundleDirect)
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

  // canEdit drives the task settings button in CurationTaskCardLayout
  mockUseGetEntityBundle.mockReturnValue({
    data: { permissions: { canEdit: true } },
    isLoading: false,
  } as any)
  mockUseGetEntityBundleDirect.mockReturnValue({
    data: { permissions: { canEdit: true } },
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
  it('renders a card for each task in the list', async () => {
    renderComponent()

    expect(await screen.findByText('Test Data Type')).toBeInTheDocument()
  })

  it('navigates to the edit page when the task settings button is clicked', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(
      await screen.findByRole('button', { name: /task settings/i }),
    )

    expect(
      await screen.findByRole('heading', { name: /edit task/i }),
    ).toBeInTheDocument()
  })

  it('navigates to the create-task flow when "New Task" is clicked', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(await screen.findByRole('button', { name: /new task/i }))

    await screen.findByText('Select Category for New Task')
    expect(
      screen.getByRole('button', { name: /compute data/i }),
    ).toBeInTheDocument()
  })

  it('does not show the "New Task" button when the feature flag is off', async () => {
    mockUseGetFeatureFlag.mockReturnValue(false)
    renderComponent()

    expect(await screen.findByText('Test Data Type')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /new task/i }),
    ).not.toBeInTheDocument()
  })

  it('does not show the "New Task" button when the user cannot add child entities', async () => {
    mockUseGetEntityPermissions.mockReturnValue({
      data: { canAddChild: false },
    } as any)
    renderComponent()

    expect(await screen.findByText('Test Data Type')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /new task/i }),
    ).not.toBeInTheDocument()
  })

  it('passes assignedToMe: true to the task query when the filter switch is toggled on', async () => {
    const user = userEvent.setup()
    renderComponent()

    await screen.findByText('Test Data Type')
    await user.click(
      screen.getByRole('switch', { name: /view only tasks assigned to me/i }),
    )

    expect(mockUseGetCurationTasksInfinite).toHaveBeenLastCalledWith(
      expect.objectContaining({ assignedToMe: true }),
    )
  })

  it('shows "No Results" when the task list is empty', async () => {
    mockUseGetCurationTasksInfinite.mockReturnValue({
      data: { pages: [{ bundlePage: [] }] },
      hasNextPage: false,
      fetchNextPage: vi.fn(),
      isFetchingNextPage: false,
      isLoading: false,
    } as any)

    renderComponent()

    expect(await screen.findByText('No Results')).toBeInTheDocument()
  })
})
