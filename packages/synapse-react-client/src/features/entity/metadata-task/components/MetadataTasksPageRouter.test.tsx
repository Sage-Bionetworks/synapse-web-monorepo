import {
  mockWindowScrollTo,
  simulateWindowScroll,
} from '@/testutils/ScrollTestUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import MetadataTasksPageRouter from './MetadataTasksPageRouter'

vi.mock('./MetadataTasksPage', () => {
  // Stands in for the task table's row actions, which navigate to the editor and creation routes.
  function MockMetadataTasksPageInternal() {
    const navigate = useNavigate()
    return (
      <>
        <button onClick={() => void navigate('edit/123')}>Edit task</button>
        <button onClick={() => void navigate('create')}>Create task</button>
      </>
    )
  }
  return { MetadataTasksPageInternal: MockMetadataTasksPageInternal }
})

vi.mock(
  '@/features/entity/metadata-task/create-task/EditCurationTaskPage',
  () => {
    // Stands in for the editor's "Back to All Tasks" button, which exits to the parent route.
    function MockEditCurationTaskPage() {
      const navigate = useNavigate()
      return (
        <button onClick={() => void navigate('..')}>Back to All Tasks</button>
      )
    }
    return { default: MockEditCurationTaskPage }
  },
)

vi.mock(
  '@/features/entity/metadata-task/create-task/curationTaskFlowRoutes',
  () => ({
    getCurationTaskFlowRoutes: () => [
      { index: true, element: <div>Create Task</div> },
    ],
  }),
)

function renderRouter() {
  const scrollTo = mockWindowScrollTo()
  simulateWindowScroll(0)

  render(
    <MetadataTasksPageRouter
      projectId="syn123"
      routerBaseName="/"
      useMemoryRouter
    />,
  )

  return { scrollTo, user: userEvent.setup() }
}

describe('MetadataTasksPageRouter', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top of the page when navigating to the task editor', async () => {
    const { scrollTo, user } = renderRouter()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('button', { name: 'Edit task' }))

    expect(
      await screen.findByRole('button', { name: 'Back to All Tasks' }),
    ).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls to the top of the page when navigating to the task creation flow', async () => {
    const { scrollTo, user } = renderRouter()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('button', { name: 'Create task' }))

    expect(await screen.findByText('Create Task')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('restores the task list scroll position when leaving the task editor', async () => {
    const { scrollTo, user } = renderRouter()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('button', { name: 'Edit task' }))
    simulateWindowScroll(0)
    scrollTo.mockClear()

    await user.click(
      await screen.findByRole('button', { name: 'Back to All Tasks' }),
    )

    expect(
      await screen.findByRole('button', { name: 'Edit task' }),
    ).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 1500)
  })

  it('does not scroll when the page is first rendered', () => {
    const { scrollTo } = renderRouter()

    expect(scrollTo).not.toHaveBeenCalled()
  })
})
