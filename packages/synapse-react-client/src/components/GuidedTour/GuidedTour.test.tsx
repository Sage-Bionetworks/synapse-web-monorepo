import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { GuidedTourConfig, tourSelector } from './TourTypes'
import { TourEndResult } from './TourTypes'
import { useGuidedTour } from './useGuidedTour'

const multiPageTour: GuidedTourConfig = {
  id: 'test-tour',
  version: 1,
  steps: [
    {
      target: tourSelector('alpha'),
      title: 'Alpha title',
      content: 'Alpha content',
    },
    {
      target: tourSelector('beta'),
      title: 'Beta title',
      content: 'Beta content',
      pathname: '/explore',
    },
  ],
}

function TourHarness(props: {
  tour: GuidedTourConfig
  onTourEnd?: (result: TourEndResult) => void
}) {
  const [pathname, setPathname] = useState('/')
  const { startTour, tourNode } = useGuidedTour({
    tour: props.tour,
    currentPathname: pathname,
    onNavigate: setPathname,
    onTourEnd: props.onTourEnd,
  })
  return (
    <div>
      <button onClick={startTour}>Start tour</button>
      <div data-tour="alpha">Alpha section</div>
      {pathname === '/explore' && <div data-tour="beta">Beta section</div>}
      {tourNode}
    </div>
  )
}

function renderHarness(onTourEnd?: (result: TourEndResult) => void) {
  return render(<TourHarness tour={multiPageTour} onTourEnd={onTourEnd} />, {
    wrapper: createWrapper(),
  })
}

describe('useGuidedTour', () => {
  beforeAll(() => {
    window.scrollTo = vi.fn()
    Element.prototype.scrollTo = vi.fn()
  })

  it('shows the first step with title, content, and progress on start', async () => {
    renderHarness()

    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }))

    expect(await screen.findByText('Alpha title')).toBeInTheDocument()
    expect(screen.getByText('Alpha content')).toBeInTheDocument()
    expect(screen.getByText('Step 1 of 2')).toBeInTheDocument()
  })

  it('navigates to the next step’s route and waits for its target', async () => {
    renderHarness()
    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }))
    await screen.findByText('Alpha title')

    await userEvent.click(screen.getByRole('button', { name: /next/i }))

    expect(await screen.findByText('Beta title')).toBeInTheDocument()
    expect(screen.getByText('Beta section')).toBeInTheDocument()
    expect(screen.getByText('Step 2 of 2')).toBeInTheDocument()
  })

  it('reports "completed" when the user finishes the last step', async () => {
    const onTourEnd = vi.fn()
    renderHarness(onTourEnd)
    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }))
    await screen.findByText('Alpha title')
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    await screen.findByText('Beta title')

    await userEvent.click(screen.getByRole('button', { name: /finish/i }))

    await waitFor(() => expect(onTourEnd).toHaveBeenCalledWith('completed'))
  })

  it('reports "dismissed" when the user skips the tour', async () => {
    const onTourEnd = vi.fn()
    renderHarness(onTourEnd)
    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }))
    await screen.findByText('Alpha title')

    await userEvent.click(screen.getByRole('button', { name: /skip tour/i }))

    await waitFor(() => expect(onTourEnd).toHaveBeenCalledWith('dismissed'))
  })

  it('reports "dismissed" when the user closes the tour', async () => {
    const onTourEnd = vi.fn()
    renderHarness(onTourEnd)
    await userEvent.click(screen.getByRole('button', { name: 'Start tour' }))
    await screen.findByText('Alpha title')

    await userEvent.click(screen.getByRole('button', { name: /close tour/i }))

    await waitFor(() => expect(onTourEnd).toHaveBeenCalledWith('dismissed'))
  })
})
