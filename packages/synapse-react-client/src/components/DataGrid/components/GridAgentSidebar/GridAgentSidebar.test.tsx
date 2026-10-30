import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  clampSidebarWidth,
  GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
  GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
  GRID_AGENT_SIDEBAR_MIN_WIDTH,
  GRID_AGENT_SIDEBAR_TITLE,
  GridAgentSidebar,
} from './GridAgentSidebar'

function renderSidebar(open = true) {
  const onClose = vi.fn()
  const result = render(
    <GridAgentSidebar open={open} onClose={onClose}>
      <p>Chat content</p>
    </GridAgentSidebar>,
  )
  return { onClose, ...result }
}

function getSidebar() {
  return screen.getByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function getResizeHandle() {
  return screen.getByRole('separator', {
    name: `Resize ${GRID_AGENT_SIDEBAR_TITLE}`,
  })
}

function getStoredWidth() {
  const stored = localStorage.getItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY)
  return stored === null ? null : (JSON.parse(stored) as number)
}

describe('GridAgentSidebar', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the titled sidebar with its content', () => {
    renderSidebar()

    expect(getSidebar()).toHaveTextContent('Chat content')
    expect(
      screen.getByRole('heading', { name: GRID_AGENT_SIDEBAR_TITLE }),
    ).toBeInTheDocument()
  })

  it('renders nothing when closed', () => {
    renderSidebar(false)

    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
  })

  it('calls onClose from the close button', async () => {
    const { onClose } = renderSidebar()

    await userEvent.click(
      screen.getByRole('button', { name: `Close ${GRID_AGENT_SIDEBAR_TITLE}` }),
    )

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('uses the default width when no width is stored', () => {
    renderSidebar()

    expect(getSidebar()).toHaveStyle({
      width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
    })
  })

  it('restores the stored width', () => {
    localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, '520')
    renderSidebar()

    expect(getSidebar()).toHaveStyle({ width: '520px' })
  })

  it('widens when the left edge is dragged left, and persists the width on release', () => {
    renderSidebar()
    const handle = getResizeHandle()

    fireEvent.pointerDown(handle, { button: 0, clientX: 1000 })
    fireEvent.pointerMove(window, { clientX: 900 })

    expect(getSidebar()).toHaveStyle({ width: '500px' })

    fireEvent.pointerUp(window, { clientX: 900 })

    expect(getStoredWidth()).toBe(500)
    expect(getSidebar()).toHaveStyle({ width: '500px' })
  })

  it('does not shrink below the minimum width when dragged right', () => {
    renderSidebar()

    fireEvent.pointerDown(getResizeHandle(), { button: 0, clientX: 1000 })
    fireEvent.pointerMove(window, { clientX: 1500 })
    fireEvent.pointerUp(window, { clientX: 1500 })

    expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
    expect(getSidebar()).toHaveStyle({
      width: `${GRID_AGENT_SIDEBAR_MIN_WIDTH}px`,
    })
  })

  it('resizes with the arrow keys and persists the width', async () => {
    renderSidebar()
    getResizeHandle().focus()

    await userEvent.keyboard('{ArrowLeft}')

    const widened =
      GRID_AGENT_SIDEBAR_DEFAULT_WIDTH + GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP
    expect(getStoredWidth()).toBe(widened)
    expect(getResizeHandle()).toHaveAttribute('aria-valuenow', String(widened))

    await userEvent.keyboard('{ArrowRight}{ArrowRight}')

    expect(getStoredWidth()).toBe(
      GRID_AGENT_SIDEBAR_DEFAULT_WIDTH -
        GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
    )
  })
})

describe('clampSidebarWidth', () => {
  it.each([
    { width: 500, layoutWidth: 1200, expected: 500 },
    { width: 900, layoutWidth: 1200, expected: 600 },
    { width: 100, layoutWidth: 1200, expected: GRID_AGENT_SIDEBAR_MIN_WIDTH },
    // When half of the layout is narrower than the minimum, the minimum wins
    { width: 500, layoutWidth: 600, expected: GRID_AGENT_SIDEBAR_MIN_WIDTH },
    // An unmeasured layout has no maximum
    { width: 2000, layoutWidth: 0, expected: 2000 },
  ])(
    'clamps $width to $expected in a $layoutWidth px layout',
    ({ width, layoutWidth, expected }) => {
      expect(clampSidebarWidth(width, layoutWidth)).toBe(expected)
    },
  )
})
