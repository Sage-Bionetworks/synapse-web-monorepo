import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EDIT_CURATION_TASK_DIALOG_TITLE } from '../utils/constants'
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
    useCreateCurationTask: vi.fn(() => ({ mutate: vi.fn(), isPending: false })),
    useUpdateCurationTask: vi.fn(() => ({ mutate: vi.fn(), isPending: false })),
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

// The edit dialog renders a UserSearchBox (assignee) that fetches over the
// network. It is irrelevant to this test, so stub it.
vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: () => <div data-testid="mock-user-search-box" />,
}))

const mockUseGetCurationTasksInfinite = vi.mocked(useGetCurationTasksInfinite)
const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)
const mockUseGetFeatureFlag = vi.mocked(useGetFeatureFlag)
const mockUseGetEntityPermissions = vi.mocked(useGetEntityPermissions)

beforeEach(() => {
  vi.clearAllMocks()

  mockUseGetCurationTasksInfinite.mockReturnValue({
    data: {
      pages: [
        {
          bundlePage: [createMockTaskBundle({ projectId: MOCK_PROJECT_ID })],
        },
      ],
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
    data: { canEdit: true, canDelete: false },
  } as any)

  mockUseGetFeatureFlag.mockReturnValue(false)
})

function renderComponent() {
  return render(<MetadataTasksPage projectId={MOCK_PROJECT_ID} />, {
    wrapper: createWrapper(),
  })
}

describe('MetadataTasksPage', () => {
  // Regression test for SWC-7835: clicking "Edit" set the global editing state,
  // which re-rendered the page. With non-memoized table columns, every row cell
  // remounted (flexRender treats the inline cell fn as a component type),
  // discarding the just-set `isDialogOpen` and requiring a second click to open
  // the dialog. This test fails if column identity becomes unstable again.
  it('opens the edit dialog on the first click of the row Edit button', async () => {
    const user = userEvent.setup()
    renderComponent()

    // The edit dialog should not be open initially.
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const editButton = await screen.findByRole('button', { name: /edit/i })
    await user.click(editButton)

    // A single click must open the dialog.
    const dialog = await screen.findByRole('dialog')
    expect(
      within(dialog).getByText(EDIT_CURATION_TASK_DIALOG_TITLE),
    ).toBeInTheDocument()
  })
})
