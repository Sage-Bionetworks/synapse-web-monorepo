import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { useResizeObserver } from '@react-hookz/web'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  CLOSE_GRID_AGENT_SIDEBAR_LABEL,
  GRID_AGENT_SIDEBAR_TITLE,
  GridAgentSidebar,
} from './GridAgentSidebar'
import {
  clampSidebarWidth,
  GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
  GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
  GRID_AGENT_SIDEBAR_MIN_WIDTH,
} from './useGridAgentSidebarResize'

// jsdom has no layout, so tests report the docking layout's width through the observer callback
vi.mock(import('@react-hookz/web'), async importOriginal => ({
  ...(await importOriginal()),
  useResizeObserver: vi.fn(),
}))

const resizeObserverCallbacks = new Map<
  Element,
  (entry: ResizeObserverEntry) => void
>()

const POINTER_ID = 1

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

function getResizeHandle() {
  return screen.getByRole('separator', {
    name: `Resize ${GRID_AGENT_SIDEBAR_TITLE}`,
  })
}

function getStoredWidth() {
  const stored = localStorage.getItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY)
  return stored === null ? null : (JSON.parse(stored) as number)
}

function storeWidth(width: number) {
  localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, String(width))
}

/** Reports the width of the layout that the sidebar docks in */
function setLayoutWidth(layoutWidth: number) {
  const layout = getSidebar().parentElement!
  act(() => {
    resizeObserverCallbacks.get(layout)?.({
      contentRect: { width: layoutWidth },
    } as ResizeObserverEntry)
  })
}

function pressHandle(clientX: number, button = 0) {
  fireEvent.pointerDown(getResizeHandle(), {
    button,
    clientX,
    pointerId: POINTER_ID,
  })
}

function movePointer(clientX: number) {
  fireEvent.pointerMove(getResizeHandle(), { clientX, pointerId: POINTER_ID })
}

/** The browser releases pointer capture when the pointer is released or cancelled */
function releasePointer(event: 'pointerUp' | 'pointerCancel' = 'pointerUp') {
  fireEvent[event](getResizeHandle(), { pointerId: POINTER_ID })
  fireEvent.lostPointerCapture(getResizeHandle(), { pointerId: POINTER_ID })
}

describe('GridAgentSidebar', () => {
  beforeAll(() => {
    // jsdom does not implement pointer capture
    Element.prototype.setPointerCapture = vi.fn()
  })

  beforeEach(() => {
    localStorage.clear()
    resizeObserverCallbacks.clear()
    vi.mocked(useResizeObserver).mockImplementation((target, callback) => {
      if (target instanceof Element) {
        resizeObserverCallbacks.set(target, callback)
      }
    })
  })

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

    const panel = sidebar.lastElementChild as HTMLElement
    expect(panel).toHaveStyle({ height: '700px' })
  })

  describe('resizing', () => {
    it('uses the default width when no width is stored', () => {
      renderSidebar()

      expect(getSidebar()).toHaveStyle({
        width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
      })
    })

    it('restores the stored width', () => {
      storeWidth(520)
      renderSidebar()

      expect(getSidebar()).toHaveStyle({ width: '520px' })
    })

    it.each(['', '0', '100', '"wide"', '{}', 'null', 'not json'])(
      'uses the default width when the stored width is "%s"',
      stored => {
        localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, stored)
        renderSidebar()

        expect(getSidebar()).toHaveStyle({
          width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
        })
      },
    )

    it('shows a stored width wider than the layout allows at the maximum, and keeps it stored', () => {
      storeWidth(5000)
      renderSidebar()

      setLayoutWidth(1200)

      expect(getSidebar()).toHaveStyle({ width: '600px' })
      expect(getResizeHandle()).toHaveAttribute('aria-valuemax', '600')
      expect(getStoredWidth()).toBe(5000)
    })

    it('widens when the left edge is dragged left, and persists the width on release', () => {
      renderSidebar()

      pressHandle(1000)
      movePointer(900)

      expect(getSidebar()).toHaveStyle({ width: '500px' })
      expect(getStoredWidth()).toBeNull()

      releasePointer()

      expect(getStoredWidth()).toBe(500)
      expect(getSidebar()).toHaveStyle({ width: '500px' })
    })

    it('ends the drag and persists the width when the pointer is cancelled', () => {
      renderSidebar()

      pressHandle(1000)
      movePointer(950)
      releasePointer('pointerCancel')
      movePointer(800)

      expect(getStoredWidth()).toBe(450)
      expect(getSidebar()).toHaveStyle({ width: '450px' })
    })

    it('does not resize when dragged with a button other than the primary one', () => {
      renderSidebar()

      pressHandle(1000, 2)
      movePointer(900)
      releasePointer()

      expect(getStoredWidth()).toBeNull()
      expect(getSidebar()).toHaveStyle({
        width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
      })
    })

    it('does not shrink below the minimum width when dragged right', () => {
      renderSidebar()

      pressHandle(1000)
      movePointer(1500)
      releasePointer()

      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
      expect(getSidebar()).toHaveStyle({
        width: `${GRID_AGENT_SIDEBAR_MIN_WIDTH}px`,
      })
    })

    it('does not widen past half of the layout when dragged left', () => {
      renderSidebar()
      setLayoutWidth(1200)

      pressHandle(1000)
      movePointer(0)
      releasePointer()

      expect(getStoredWidth()).toBe(600)
      expect(getSidebar()).toHaveStyle({ width: '600px' })
    })

    it('keeps a stored width that the layout clamps when the handle is clicked without moving', () => {
      storeWidth(800)
      renderSidebar()
      setLayoutWidth(1200)

      pressHandle(1000)
      releasePointer()

      expect(getStoredWidth()).toBe(800)
      expect(getSidebar()).toHaveStyle({ width: '600px' })
    })

    it('resizes with the arrow keys and persists the width', async () => {
      renderSidebar()
      getResizeHandle().focus()

      await userEvent.keyboard('{ArrowLeft}')

      const widened =
        GRID_AGENT_SIDEBAR_DEFAULT_WIDTH +
        GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP
      expect(getStoredWidth()).toBe(widened)
      expect(getResizeHandle()).toHaveAttribute(
        'aria-valuenow',
        String(widened),
      )

      await userEvent.keyboard('{ArrowRight}{ArrowRight}')

      expect(getStoredWidth()).toBe(
        GRID_AGENT_SIDEBAR_DEFAULT_WIDTH -
          GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
      )
    })

    it('does not shrink below the minimum width with the arrow keys', async () => {
      storeWidth(GRID_AGENT_SIDEBAR_MIN_WIDTH)
      renderSidebar()
      getResizeHandle().focus()

      await userEvent.keyboard('{ArrowRight}')

      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
      expect(getResizeHandle()).toHaveAttribute(
        'aria-valuenow',
        String(GRID_AGENT_SIDEBAR_MIN_WIDTH),
      )
    })

    it('keeps a stored width that the layout clamps when widened with the arrow keys at the maximum', async () => {
      storeWidth(800)
      renderSidebar()
      setLayoutWidth(1200)
      getResizeHandle().focus()

      await userEvent.keyboard('{ArrowLeft}')

      expect(getStoredWidth()).toBe(800)
      expect(getResizeHandle()).toHaveAttribute('aria-valuenow', '600')
    })
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
