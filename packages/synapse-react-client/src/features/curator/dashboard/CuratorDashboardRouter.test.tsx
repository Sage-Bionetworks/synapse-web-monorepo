import {
  mockWindowScrollTo,
  simulateWindowScroll,
} from '@/testutils/ScrollTestUtils'
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

function renderRouter() {
  const scrollTo = mockWindowScrollTo()
  simulateWindowScroll(0)

  render(<CuratorDashboardRouter useMemoryRouter routerBaseName="/" />)

  return { scrollTo, user: userEvent.setup() }
}

describe('CuratorDashboardRouter', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('scrolls to the top of the page when navigating to the task editor', async () => {
    const { scrollTo, user } = renderRouter()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('button', { name: 'Task settings' }))

    expect(
      await screen.findByRole('button', { name: 'Back to All Tasks' }),
    ).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('restores the dashboard scroll position when leaving the task editor', async () => {
    const { scrollTo, user } = renderRouter()
    simulateWindowScroll(1500)

    await user.click(screen.getByRole('button', { name: 'Task settings' }))
    simulateWindowScroll(0)
    scrollTo.mockClear()

    await user.click(
      await screen.findByRole('button', { name: 'Back to All Tasks' }),
    )

    expect(
      await screen.findByRole('button', { name: 'Task settings' }),
    ).toBeInTheDocument()
    expect(scrollTo).toHaveBeenCalledWith(0, 1500)
  })
})
