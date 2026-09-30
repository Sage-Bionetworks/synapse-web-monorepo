import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import CuratorDashboardRouter from './CuratorDashboardRouter'

vi.mock('./CuratorDashboard', () => {
  // Stands in for the settings button on a task card, which navigates to the editor route.
  function MockCuratorDashboardContent() {
    const navigate = useNavigate()
    return (
      <button onClick={() => void navigate('edit/123')}>Task settings</button>
    )
  }
  return { default: MockCuratorDashboardContent }
})

vi.mock(
  '@/features/entity/metadata-task/create-task/EditCurationTaskPage',
  () => ({
    default: () => <div>Edit Task</div>,
  }),
)

describe('CuratorDashboardRouter', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top of the page when navigating to the task editor', async () => {
    const user = userEvent.setup()
    // `window.scrollTo` is stubbed globally in the test setup, so clear any calls recorded by an
    // earlier test before rendering.
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    scrollTo.mockClear()

    render(<CuratorDashboardRouter useMemoryRouter routerBaseName="/" />)

    await user.click(screen.getByRole('button', { name: 'Task settings' }))

    expect(await screen.findByText('Edit Task')).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
