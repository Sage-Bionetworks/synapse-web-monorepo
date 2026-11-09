import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  CLOSE_GRID_AGENT_SIDEBAR_LABEL,
  GRID_AGENT_SIDEBAR_TITLE,
  GridAgentSidebar,
} from './GridAgentSidebar'

function renderSidebar(open = true) {
  const onClose = vi.fn()
  const renderElement = (isOpen: boolean) => (
    <GridAgentSidebar open={isOpen} onClose={onClose}>
      <label>
        Draft
        <input />
      </label>
    </GridAgentSidebar>
  )
  const result = render(renderElement(open))
  return {
    onClose,
    setOpen: (isOpen: boolean) => result.rerender(renderElement(isOpen)),
  }
}

function getSidebar() {
  return screen.getByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
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
    const { onClose } = renderSidebar()

    await userEvent.click(
      screen.getByRole('button', { name: CLOSE_GRID_AGENT_SIDEBAR_LABEL }),
    )

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('sizes its panel to the part of the sidebar that is on screen', () => {
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(700)
    renderSidebar()
    const sidebar = getSidebar()
    // The page has scrolled 100px into the sidebar, which is taller than the viewport
    vi.spyOn(sidebar, 'getBoundingClientRect').mockReturnValue(
      new DOMRect(0, -100, 400, 2000),
    )

    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    const panel = sidebar.firstElementChild as HTMLElement
    expect(panel).toHaveStyle({ height: '700px' })
  })
})
