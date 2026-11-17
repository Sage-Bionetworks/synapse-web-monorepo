import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  CLOSE_GRID_AGENT_SIDEBAR_LABEL,
  GRID_AGENT_SIDEBAR_TITLE,
  GridAgentSidebar,
  OPEN_GRID_AGENT_SIDEBAR_LABEL,
} from './GridAgentSidebar'

function renderSidebar(open = true) {
  const onOpen = vi.fn()
  const onClose = vi.fn()
  const renderElement = (isOpen: boolean) => (
    <GridAgentSidebar open={isOpen} onOpen={onOpen} onClose={onClose}>
      <label>
        Draft
        <input />
      </label>
    </GridAgentSidebar>
  )
  const result = render(renderElement(open))
  return {
    onOpen,
    onClose,
    setOpen: (isOpen: boolean) => result.rerender(renderElement(isOpen)),
  }
}

function getSidebar() {
  return screen.getByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function getPanel() {
  return getSidebar().lastElementChild as HTMLElement
}

function scrollPage() {
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('GridAgentSidebar', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the titled sidebar with its content', () => {
    renderSidebar()

    expect(
      screen.getByRole('heading', { name: GRID_AGENT_SIDEBAR_TITLE }),
    ).toBeInTheDocument()
    expect(getSidebar()).toContainElement(
      screen.getByRole('textbox', { name: 'Draft' }),
    )
  })

  it('hides when closed and keeps its content mounted until reopened', async () => {
    const user = userEvent.setup()
    const { setOpen } = renderSidebar()
    await user.type(screen.getByRole('textbox', { name: 'Draft' }), 'unsent')

    setOpen(false)

    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'Draft', hidden: true }),
    ).toHaveValue('unsent')

    setOpen(true)

    expect(screen.getByRole('textbox', { name: 'Draft' })).toHaveValue('unsent')
  })

  it('calls onClose from the close button', async () => {
    const user = userEvent.setup()
    const { onClose } = renderSidebar()

    await user.click(
      screen.getByRole('button', { name: CLOSE_GRID_AGENT_SIDEBAR_LABEL }),
    )

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('shows a button that calls onOpen only while closed', async () => {
    const user = userEvent.setup()
    const { onOpen, setOpen } = renderSidebar()
    expect(
      screen.queryByRole('button', { name: OPEN_GRID_AGENT_SIDEBAR_LABEL }),
    ).not.toBeInTheDocument()

    setOpen(false)
    await user.click(
      screen.getByRole('button', { name: OPEN_GRID_AGENT_SIDEBAR_LABEL }),
    )

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('sizes its panel to the part of the sidebar that is on screen', () => {
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(700)
    renderSidebar()
    // The page has scrolled 100px into the sidebar, which ends 200px above the bottom of the viewport
    vi.spyOn(getSidebar(), 'getBoundingClientRect').mockReturnValue(
      new DOMRect(0, -100, 400, 600),
    )

    scrollPage()

    expect(getPanel()).toHaveStyle({ height: '500px' })
  })

  it('reopens at the height it had before it was closed', () => {
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(700)
    const { setOpen } = renderSidebar()
    const sidebar = getSidebar()
    vi.spyOn(sidebar, 'getBoundingClientRect').mockImplementation(() =>
      // Like a browser, a hidden sidebar measures as empty
      sidebar.hidden ? new DOMRect() : new DOMRect(0, -100, 400, 600),
    )
    scrollPage()

    setOpen(false)
    scrollPage()
    setOpen(true)

    expect(getPanel()).toHaveStyle({ height: '500px' })
  })
})
