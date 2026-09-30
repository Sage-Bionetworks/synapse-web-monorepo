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
  () => ({
    default: () => <div>Edit Task</div>,
  }),
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
  const user = userEvent.setup()
  // `window.scrollTo` is stubbed globally in the test setup, so clear any calls recorded by an
  // earlier test before rendering.
  const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  scrollTo.mockClear()

  render(
    <MetadataTasksPageRouter
      projectId="syn123"
      routerBaseName="/"
      useMemoryRouter
    />,
  )

  return { scrollTo, user }
}

describe('MetadataTasksPageRouter', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top of the page when navigating to the task editor', async () => {
    const { scrollTo, user } = renderRouter()

    await user.click(screen.getByRole('button', { name: 'Edit task' }))

    expect(await screen.findByText('Edit Task')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls to the top of the page when navigating to the task creation flow', async () => {
    const { scrollTo, user } = renderRouter()

    await user.click(screen.getByRole('button', { name: 'Create task' }))

    expect(await screen.findByText('Create Task')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('does not scroll when the page is first rendered', () => {
    const { scrollTo } = renderRouter()

    expect(scrollTo).not.toHaveBeenCalled()
  })
})
