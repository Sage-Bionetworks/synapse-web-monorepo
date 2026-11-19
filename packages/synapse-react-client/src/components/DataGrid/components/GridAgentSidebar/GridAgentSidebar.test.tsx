import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { ReactNode } from 'react'
import {
  CLOSE_GRID_AGENT_SIDEBAR_LABEL,
  GRID_AGENT_SIDEBAR_TITLE,
  GridAgentSidebar,
  OPEN_GRID_AGENT_SIDEBAR_LABEL,
} from './GridAgentSidebar'
import { GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP } from './GridAgentSidebarResizeHandle'
import { getStoredWidth, storeWidth } from './gridAgentSidebarWidth.test-utils'
import {
  GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
  GRID_AGENT_SIDEBAR_MIN_WIDTH,
} from './useGridAgentSidebarResize'

// user-event's mouse, the first pointer it creates
const MOUSE_POINTER_ID = 1

const CHAT_ERROR = 'The chat failed to render'

// jsdom does not implement pointer capture, so the tests track which element captured each pointer
const capturedPointers = new Map<number, Element>()

/** Renders the sidebar docked in a layout `layoutWidth` px wide (0, unmeasured, by default) */
function renderSidebar({ layoutWidth = 0 }: { layoutWidth?: number } = {}) {
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
  const layout = document.body.appendChild(document.createElement('div'))
  vi.spyOn(layout, 'getBoundingClientRect').mockReturnValue(
    new DOMRect(0, 0, layoutWidth, 900),
  )
  const result = render(renderElement(true), { container: layout })
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

function getResizeHandle() {
  return screen.getByRole('separator', { name: GRID_AGENT_SIDEBAR_TITLE })
}

/** Collects the resize handle's events of `type`, to check whether their default was prevented */
function recordHandleEvents(type: 'pointerdown' | 'keydown') {
  const events: Event[] = []
  getResizeHandle().addEventListener(type, event => events.push(event))
  return events
}

type MouseButton = 'MouseLeft' | 'MouseRight'

async function pressHandle(
  user: UserEvent,
  clientX: number,
  button: MouseButton = 'MouseLeft',
) {
  await user.pointer({
    keys: `[${button}>]`,
    target: getResizeHandle(),
    coords: { clientX },
  })
}

async function movePointer(user: UserEvent, clientX: number) {
  await user.pointer({ target: getResizeHandle(), coords: { clientX } })
}

/** Like a browser, ends pointer capture after a release or a cancel, if the handle captured the pointer */
function endPointerCapture() {
  const handle = getResizeHandle()
  if (capturedPointers.get(MOUSE_POINTER_ID) === handle) {
    capturedPointers.delete(MOUSE_POINTER_ID)
    // user-event cannot end pointer capture
    fireEvent.lostPointerCapture(handle, { pointerId: MOUSE_POINTER_ID })
  }
}

async function releasePointer(
  user: UserEvent,
  button: MouseButton = 'MouseLeft',
) {
  await user.pointer({ keys: `[/${button}]`, target: getResizeHandle() })
  endPointerCapture()
}

describe('GridAgentSidebar', () => {
  beforeAll(() => {
    // jsdom does not implement pointer capture, so this stub gives the spy a method to replace
    Element.prototype.setPointerCapture = () => {}
  })

  afterAll(() => {
    delete (Element.prototype as Partial<Element>).setPointerCapture
  })

  beforeEach(() => {
    localStorage.clear()
    capturedPointers.clear()
    vi.spyOn(Element.prototype, 'setPointerCapture').mockImplementation(
      function (this: Element, pointerId: number) {
        capturedPointers.set(pointerId, this)
      },
    )
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

  it('sizes its panel when reopened, ignoring the empty size it measures while closed', () => {
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(700)
    const { setOpen } = renderSidebar()
    const sidebar = getSidebar()
    let rectWhileShown = new DOMRect(0, -100, 400, 600)
    vi.spyOn(sidebar, 'getBoundingClientRect').mockImplementation(() =>
      // Like a browser, a hidden sidebar measures as empty
      sidebar.hidden ? new DOMRect() : rectWhileShown,
    )
    scrollPage()

    setOpen(false)
    // The page scrolls back to the top while the sidebar is closed
    rectWhileShown = new DOMRect(0, 0, 400, 600)
    scrollPage()
    setOpen(true)

    expect(getPanel()).toHaveStyle({ height: '600px' })
  })

  it('shows an error in place of content that throws, and can still be closed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    function FailingChat(): ReactNode {
      throw new Error(CHAT_ERROR)
    }

    render(
      <GridAgentSidebar open={true} onOpen={vi.fn()} onClose={onClose}>
        <FailingChat />
      </GridAgentSidebar>,
    )

    expect(within(getSidebar()).getByText(CHAT_ERROR)).toBeInTheDocument()
    await user.click(
      screen.getByRole('button', { name: CLOSE_GRID_AGENT_SIDEBAR_LABEL }),
    )
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  describe('resizing', () => {
    it('has a resize handle, named by the title, that controls the sidebar', () => {
      renderSidebar()
      const handle = getResizeHandle()

      expect(handle).toHaveAttribute('aria-controls', getSidebar().id)
      expect(handle).toHaveAttribute(
        'aria-valuenow',
        String(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH),
      )
      expect(handle).toHaveAttribute(
        'aria-valuemin',
        String(GRID_AGENT_SIDEBAR_MIN_WIDTH),
      )
      expect(handle).not.toHaveAttribute('aria-valuemax')
      expect(getSidebar()).toHaveStyle({
        width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
      })
    })

    it('limits its width to half of the layout it docks in before the ResizeObserver first reports', () => {
      storeWidth(5000)

      renderSidebar({ layoutWidth: 1200 })

      expect(getResizeHandle()).toHaveAttribute('aria-valuemax', '600')
      expect(getSidebar()).toHaveStyle({ width: '600px' })
    })

    it('resizes while its left edge is dragged, until pointer capture ends', async () => {
      const user = userEvent.setup()
      renderSidebar()

      await pressHandle(user, 1000)
      await movePointer(user, 900)

      expect(getSidebar()).toHaveStyle({ width: '500px' })

      await releasePointer(user)
      await movePointer(user, 800)

      expect(getStoredWidth()).toBe(500)
      expect(getSidebar()).toHaveStyle({ width: '500px' })
    })

    it('ends the drag when the browser cancels the pointer, which sends no pointerup', async () => {
      const user = userEvent.setup()
      renderSidebar()
      await pressHandle(user, 1000)
      await movePointer(user, 900)

      // user-event cannot cancel a pointer
      fireEvent.pointerCancel(getResizeHandle(), {
        pointerId: MOUSE_POINTER_ID,
      })
      endPointerCapture()
      await movePointer(user, 800)

      expect(getStoredWidth()).toBe(500)
      expect(getSidebar()).toHaveStyle({ width: '500px' })
    })

    it('prevents the default action of a primary press, which the grid would treat as a click outside it', async () => {
      const user = userEvent.setup()
      renderSidebar()
      const pointerDowns = recordHandleEvents('pointerdown')

      await pressHandle(user, 1000)

      expect(pointerDowns).toHaveLength(1)
      expect(pointerDowns[0].defaultPrevented).toBe(true)
    })

    it('ignores a press with a button other than the primary one', async () => {
      const user = userEvent.setup()
      renderSidebar()
      const pointerDowns = recordHandleEvents('pointerdown')

      await pressHandle(user, 1000, 'MouseRight')
      await movePointer(user, 900)
      await releasePointer(user, 'MouseRight')

      expect(pointerDowns[0].defaultPrevented).toBe(false)
      expect(capturedPointers.size).toBe(0)
      expect(getSidebar()).toHaveStyle({
        width: `${GRID_AGENT_SIDEBAR_DEFAULT_WIDTH}px`,
      })
    })

    it('resizes with the arrow keys instead of scrolling', async () => {
      const user = userEvent.setup()
      renderSidebar()
      await user.tab()
      expect(getResizeHandle()).toHaveFocus()
      const keyDowns = recordHandleEvents('keydown')
      const widened =
        GRID_AGENT_SIDEBAR_DEFAULT_WIDTH +
        GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP

      await user.keyboard('{ArrowLeft}')

      expect(getResizeHandle()).toHaveAttribute(
        'aria-valuenow',
        String(widened),
      )
      expect(getStoredWidth()).toBe(widened)
      expect(keyDowns[0].defaultPrevented).toBe(true)

      await user.keyboard('{ArrowRight}')

      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH)
    })

    it.each([
      { description: 'a key other than the arrows', keys: '{a}' },
      {
        description: "Alt+ArrowLeft, the browser's Back",
        keys: '{Alt>}{ArrowLeft}{/Alt}',
      },
      {
        description: 'Control+ArrowLeft',
        keys: '{Control>}{ArrowLeft}{/Control}',
      },
      { description: 'Meta+ArrowLeft', keys: '{Meta>}{ArrowLeft}{/Meta}' },
    ])('ignores $description', async ({ keys }) => {
      const user = userEvent.setup()
      renderSidebar()
      await user.tab()
      const keyDowns = recordHandleEvents('keydown')

      await user.keyboard(keys)

      expect(getResizeHandle()).toHaveAttribute(
        'aria-valuenow',
        String(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH),
      )
      expect(getStoredWidth()).toBeNull()
      expect(keyDowns.some(event => event.defaultPrevented)).toBe(false)
    })
  })
})
